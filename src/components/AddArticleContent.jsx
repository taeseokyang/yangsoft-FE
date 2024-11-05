import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ImagePreviewBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
`;

const ImageName = styled.div`
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3E5977;
  color: white;
  border: none;
  cursor: pointer;
`;

const DropzoneArea = styled.div`
  width: 100%;
  padding: 20px;
  border: 2px dashed #3E5977;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

const AddArticleContent = () => {
  const [images, setImages] = useState([]); // 업로드된 이미지 목록

  // 이미지 업로드 핸들러
  const handleImageUpload = (file) => {
    const formData = new FormData();
    formData.append("pic", file);

    // 이미지 업로드 API 호출
    axios.post(process.env.REACT_APP_BACK_URL + "/image", formData)
      .then((response) => {
        // 업로드된 이미지 이름 추가
        setImages((prev) => [...prev, response.data.data.imageName]); // 예: {imageName: 'uploaded-image.jpg'}
      })
      .catch(error => console.error("이미지 업로드 실패", error));
  };

  // react-dropzone 설정
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        handleImageUpload(file);
      });
    },
    accept: 'image/*', // 이미지 파일만 업로드 가능
  });

  return (
    <Container>
      <h2>이미지 업로드</h2>

      {/* 드래그 앤 드롭 영역 */}
      <DropzoneArea {...getRootProps()}>
        <input {...getInputProps()} />
        <p>이미지를 여기로 드래그하거나 클릭해서 선택하세요.</p>
      </DropzoneArea>

      {/* 업로드된 이미지 미리보기 */}
      <ImagePreviewBox>
        {images.map((image, index) => (
          <div key={index}>
            <ImagePreview
              src={process.env.REACT_APP_BACK_URL + "/image?path=" + image} // 업로드된 이미지 URL
              alt={`Uploaded ${image}`}
            />
            <ImageName>{image}</ImageName>
          </div>
        ))}
      </ImagePreviewBox>

      {/* 이미지 저장 버튼 */}
      {/* <Button onClick={() => console.log("이미지 저장 완료!")}>저장하기</Button> */}
    </Container>
  );
};

export default AddArticleContent;
