import { Link, useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { Container, Content, Block1, Block2, BlockBox, ImageBox, Image, Title1, SubTitle1, Reporter1, Copy, Date, BackgroundImage, Overlay } from "./StyledComponents";
import HorizontalLine from "./homeContents/HorizontalLine2";
import { useState, useEffect } from 'react';
import axios from "axios";

const ReporterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const ReporterImg = styled.div`
  width: 70px;
  height: 70px;
  border: 2px solid #eeeeee;
  border-radius: 100px;
`;

const ReporterTextBox = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
`;

const ReporterName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const ReporterIntro = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #bcbcbc;
`;

const Box = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: #3E5977;
  padding-bottom: 10px;
  border-bottom: 2px solid #eeeeee;
  margin-bottom: 30px;
`;
const Edit = styled.button`
  font-size: 14px;
  font-weight: 700;
  color: #828282;
  padding: 0;
  border: none;
  background: none;
  /* padding-bottom: 10px; */
  /* border-bottom: 2px solid #eeeeee; */
  /* margin-bottom: 30px; */
`;



const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
`;

const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ModalButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
const ModalButton = styled.button`
  margin-top: 10px;
  border: none;
  background: #eeeeee;
  padding: 10px 0px;
  border-radius: 5px;
  color: #828282;
  font-size: 14px;
  font-weight: 700;
  flex:1;
`;

const InputField = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 5px;
  /* border: 1px solid #ccc; */
  border: none;
  outline: none;
  background: #f5f5f5;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`;

const Info = styled.div`
    display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 10px;
`;

const InfoName = styled.div`
font-weight: 700;
margin-right: 10px;
`;

const Pages = styled.div`
  margin-top: 50px;
  width: 100%;
  /* height: 50px; */
  /* background: #eeeeee; */
  display: flex;
  justify-content: center; /* 가운데 정렬 */
  align-items: center;
  gap:15px;
`;

const PageNumber = styled.div`
  font-weight: ${({ isOn }) => (isOn ? '700' : '500')};
  
  color: ${({ isOn }) => (isOn ? '#3E5977' : '#bcbcbc')};
  display: flex;
  justify-content: center; /* 숫자 중앙 정렬 */
  align-items: center; 
  cursor: pointer;
`;


const ManageProfile = () => {
  const navigate = useNavigate(); 
  const [cookie] = useCookies(); 
  const [page, setPage] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [reporter, setReporter] = useState({});
  const [articles, setArticles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editFields, setEditFields] = useState({ nickname: '', intro: '', email: '', major: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACK_URL + "/articles/list/reporter/"+cookie.id+"?pageNumber="+page, {
        });
        setArticles(response.data.data.articles);
        setPageNumbers(Array.from({ length: response.data.data.pageCount }, (_, index) => index + 1));

        const response2 = await axios.get(process.env.REACT_APP_BACK_URL + "/account/"+cookie.id, {
        });
        setReporter(response2.data.data);
        setEditFields(response2.data.data);
        console.log(response2.data.data);
      } catch (error) {
        navigate("/");
        console.error("오류 발생:", error);
      }
    };
    fetchData();
  }, [page]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.patch(`${process.env.REACT_APP_BACK_URL}/account/reporter/profile`, editFields, {
        headers: {
          Authorization: `Bearer ${cookie.accessToken}`, // 쿠키에서 토큰 가져오기
        },
      });
      setReporter(editFields);
      setIsEditing(false);
    } catch (error) {
      navigate("/");
      console.error("수정 오류:", error);
    }
  };

  const handlePageClick = (number) => {
    setPage(number - 1); // 페이지 번호는 1부터 시작하므로 0으로 변환
  };

  return (
    <Container>
      <Content>
        <ReporterBox>
          <ReporterImg />
          <ReporterTextBox>
            <ReporterName>{reporter.nickname}</ReporterName>
            <ReporterIntro>{reporter.intro}</ReporterIntro>
          </ReporterTextBox>
        </ReporterBox>

        <Box>
          <Title>About</Title>
          <Info><InfoName>Position</InfoName> {reporter.position}</Info>
          <Info><InfoName>Major</InfoName> {reporter.major}</Info>
          <Info><InfoName>Email</InfoName> {reporter.email}</Info>
          <Edit onClick={handleEditClick}>Edit</Edit>
        </Box>

        <Box>
            <Title>Latest</Title>
            
            {articles.map((article) => (
          <div key={article.articleId}>
          <BlockBox>
            <Block2>
              <Date>{article.publishedAt.slice(0,10)}</Date>
              <Link to={"/article/" + article.articleId}>
                <Title1>{article.title}</Title1>
              </Link>
              <SubTitle1>{article.subtitle}</SubTitle1>
              <Link to={"/reporter/" + article.reporterId}>
                <Reporter1>By {article.reporterName}</Reporter1>
              </Link>
            </Block2>
              {
                article.mainImage !== "" ?
                <Block1>
                <Link to={"/article/" + article.articleId}>
                <ImageBox>
                  <BackgroundImage src={process.env.REACT_APP_BACK_URL + "/image?path=" + article.mainImage} />
                  <Overlay />
                  <Image src={process.env.REACT_APP_BACK_URL + "/image?path=" + article.mainImage}></Image>
                </ImageBox>
                </Link>
                <Copy>Provided by NYT</Copy>
                </Block1>
                : 
                null
              }
          </BlockBox>
          <HorizontalLine></HorizontalLine>
          </div>
        ))}

        <Pages>
          {pageNumbers.map((number) => (
            <PageNumber 
              key={number} 
              isOn={page + 1 === number} 
              onClick={() => handlePageClick(number)} // 페이지 번호 클릭 핸들러
            >
              {number}
            </PageNumber>
          ))}
        </Pages>
        </Box>

        {/* 모달 구현 */}
        {isEditing && (
          <Modal>
            <ModalContent>
              <ModalTitle>Edit Profile</ModalTitle>
              <InputField 
                type="text" 
                placeholder="Nickname" 
                value={editFields.nickname} 
                onChange={(e) => setEditFields({ ...editFields, nickname: e.target.value })} 
              />
              <InputField 
                type="text" 
                placeholder="Intro" 
                value={editFields.intro} 
                onChange={(e) => setEditFields({ ...editFields, intro: e.target.value })} 
              />
              <InputField 
                type="text" 
                placeholder="Email" 
                value={editFields.email} 
                onChange={(e) => setEditFields({ ...editFields, email: e.target.value })} 
              />
              <InputField 
                type="text" 
                placeholder="Major" 
                value={editFields.major} 
                onChange={(e) => setEditFields({ ...editFields, major: e.target.value })} 
              />
              <ModalButtonBox>
              
              <ModalButton onClick={() => setIsEditing(false)}>Cancel</ModalButton>
              <ModalButton onClick={handleSave}>Save</ModalButton>
              </ModalButtonBox>
            </ModalContent>
              
             
          </Modal>
        )}
      </Content>
    </Container>
  );
};

export default ManageProfile;
