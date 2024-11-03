import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Content, Block1, Block2, BlockBox, ImageBox, Image, Section, Title1, SubTitle1, Reporter1, Copy, Date, BackgroundImage, Overlay  } from "./StyledComponents";
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
const ReporterIntro= styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #bcbcbc;
`;

const Box= styled.div`

  margin-bottom: 50px;
  
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



const Title= styled.div`
    font-size: 23px;
  font-weight: 700;
  color: #3E5977;
  padding-bottom: 10px;
  border-bottom: 2px solid #eeeeee;
  margin-bottom: 30px;
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




const ContactUsContent = () => {
  const { reporterId } = useParams();
  const [reporter, setReporter] = useState({});
  const [page, setPage] = useState(0);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACK_URL + "/articles/list/reporter/"+reporterId+"?pageNumber="+page, {
        });
        setArticles(response.data.data.articles);
        setPageNumbers(Array.from({ length: response.data.data.pageCount }, (_, index) => index + 1));

        const response2 = await axios.get(process.env.REACT_APP_BACK_URL + "/account/"+reporterId, {
        });
        setReporter(response2.data.data);
        console.log(response2.data.data);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };
    fetchData();
  }, [reporterId, page]);

  // 페이지 번호 클릭 핸들러
  const handlePageClick = (number) => {
    setPage(number - 1); // 페이지 번호는 1부터 시작하므로 0으로 변환
  };

  return (
    <Container>
      <Content>
        <Box>
            <Title>Info</Title>
            <Info><InfoName>Location</InfoName>가천대학교 중앙도서관 411호</Info>
            <Info><InfoName>Number</InfoName>02-1234-1234</Info>
            <Info><InfoName>Phone</InfoName>010-5239-5132</Info>
            <Info><InfoName>Instagram</InfoName>@thegachonherald</Info>
        </Box>

        
      </Content>
    </Container>
  );
};

export default ContactUsContent;