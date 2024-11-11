import axios from 'axios';
import styled from 'styled-components';
import { useDropzone } from 'react-dropzone';
import { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";

import { useParams, useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ImagePreviewBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;

const ImagePreviewContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ImagePreview = styled.img`
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid #eeeeee;
  border-radius: 15px;
  ${props => props.isMain && `
    border: 2px solid #3e5977; /* 메인 이미지 강조 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  `}
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: #bcbcbc;
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  cursor: pointer;
  display: ${props => (props.visible ? 'block' : 'none')};
  &:hover {
    background: #eeeeee;
  }
`;

const MainImageButton = styled.button`
  position: absolute;
  bottom: 5px;
  left: 5px;
  background: #3e5977;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
`;

const MainImageLabel = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 12px;
  padding: 2px 5px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3e5977;
  color: white;
  border: none;
  cursor: pointer;
`;

const DropzoneArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: #f5f5f5;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
  color: #828282;
`;

const InputField = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
  min-height: 200px;
`;

const Dropdown = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
`;

const AddImageButton = styled.div`
  width: 100px;
  height: 20px;
  cursor: pointer;
  background: #eeeeee;
`;

const UpdateArticleContent = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [sectionId, setSectionId] = useState(2);
  const [mainImage, setMainImage] = useState('');
  const [images, setImages] = useState([]);
  const [sections, setSections] = useState([]);
  const [cookie] = useCookies(); 
  const navigate = useNavigate(); 
  const { articleId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACK_URL + "/articles/" + articleId, {
        });
        setTitle(response.data.data.title);
        setSubtitle(response.data.data.subtitle);
        setSectionId(response.data.data.sectionId);
        setContent(response.data.data.content);
        console.log(response.data.data);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };
    fetchData();
  }, [articleId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACK_URL + "/sections/list");
        setSections(response.data.data.activeSections);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };
    fetchData();
  }, []);

  // 이미지 업로드 핸들러
  const handleImageUpload = (file) => {
    const formData = new FormData();
    formData.append('pic', file);

    // 이미지 업로드 API 호출
    axios
      .post(process.env.REACT_APP_BACK_URL + '/image', formData)
      .then((response) => {
        setImages((prev) => [...prev, response.data.data.imageName]);
        handleImageDrag(response.data.data.imageName);
      })
      .catch((error) => console.error('이미지 업로드 실패', error));
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

  // 이미지 이름을 커서 위치에 삽입하는 함수
  const handleImageDrag = (imageName) => {
    const textarea = document.getElementById('articleContent');
    const cursorPosition = textarea.selectionStart;

    const beforeText = content.substring(0, cursorPosition);
    const afterText = content.substring(cursorPosition);

    const imgTag = `<img src="${process.env.REACT_APP_BACK_URL}/image?path=${imageName}" />`;
    setContent(beforeText + imgTag + afterText);

    setTimeout(() => {
      textarea.selectionStart = cursorPosition + imgTag.length;
      textarea.selectionEnd = textarea.selectionStart;
      textarea.focus();
    }, 0);
  };

  // 이미지 삭제 핸들러
  const handleImageDelete = (imageName) => {
    setImages((prev) => prev.filter((image) => image !== imageName));
  };

  // 메인 이미지 설정 핸들러
  const handleSetMainImage = (imageName) => {
    setMainImage(imageName);
  };

  const handleSave = async () => {

    if (images.length != 0 && mainImage == "") {
      alert("메인 이미지를 선택하세요.");
      return; 
    }

    try {
      await axios.patch(`${process.env.REACT_APP_BACK_URL}/articles`, {
        articleId,
        title,
        subtitle,
        content,
        sectionId,
      }, {
        headers: {
          Authorization: `Bearer ${cookie.accessToken}`,
        },
      });
      alert("수정 완료");
      navigate("/article/"+articleId);
    } catch (error) {
      console.error("기사 저장 오류:", error);
    }
  };

  return (
    <Container>
      <h2>기사 작성</h2>

      <InputField
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <InputField
        type="text"
        placeholder="부제목"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
      />

      <Dropdown value={sectionId} onChange={(e) => setSectionId(e.target.value)}>
        {sections.map((section) => (
          <option key={section.sectionId} value={section.sectionId}>{section.name}</option>
        ))}
      </Dropdown>

      <DropzoneArea {...getRootProps()}>
        <TextArea
          id="articleContent"
          placeholder="기사 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </DropzoneArea>

      {/* 업로드된 이미지 미리보기 */}
      <ImagePreviewBox>
        {images.map((image, index) => (
          <ImagePreviewContainer key={index}>
            <ImagePreview
              src={process.env.REACT_APP_BACK_URL + '/image?path=' + image}
              alt={`Uploaded ${image}`}
              onClick={() => handleImageDrag(image)}
              isMain={mainImage === image}  // 메인 이미지 강조
            />
            {mainImage === image && (
              <MainImageLabel>메인 이미지</MainImageLabel> // 메인 이미지 레이블
            )}
            <DeleteButton
              visible={true}
              onClick={() => handleImageDelete(image)}
            >
              X
            </DeleteButton>
            <MainImageButton onClick={() => handleSetMainImage(image)}>
              메인 이미지로 설정
            </MainImageButton>
          </ImagePreviewContainer>
        ))}
      </ImagePreviewBox>

      {/* 기사 저장 버튼 */}
      <Button onClick={handleSave}>수정하기</Button>
    </Container>
  );
};

export default UpdateArticleContent;
