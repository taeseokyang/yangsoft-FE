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
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 30px;
`;

const InfoName = styled.div`
font-weight: 700;
margin-right: 10px;
margin-bottom: 5px;
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

const TextBox = styled.div`
  width: 100%;
  background: #f5f5f5;
  border-radius: 17px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #828282;
  /* padding: 0px 150px; */
  max-width: 800px;
  margin: 0px auto;
  padding: 70px 20px;
  text-align: center;
  line-height: 200%;
  /* background: #eeeeee; */
`;


const AboutUsContent = () => {
  const [reporters, setReporters] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_BACK_URL + "/account/reporters", {
        });
        setReporters(response.data.data.reporters);
        // console.log(response.data.data);

      } catch (error) {
        console.error("오류 발생:", error);
      }
    };
    fetchData();
  }, []);

  // 페이지 번호 클릭 핸들러
  const handlePageClick = (number) => {
    setPage(number - 1); // 페이지 번호는 1부터 시작하므로 0으로 변환
  };

  return (
    <Container>
      <Content>
        <Box>
            <Title>The Gachon Herald</Title>
            <TextBox>
              <Text>
              The Gachon Herald is an English-language newspaper based at Gachon University, dedicated to delivering insightful news, engaging features, and diverse opinions. Founded by journalism students, it serves as a platform for promoting communication within the university community. <br></br><br></br>The Herald covers a range of topics, including campus events and global issues, while encouraging student voices and fostering critical thinking. With both print and digital editions, The Gachon Herald aims to keep readers informed and engaged in the stories that matter.
              </Text>
            
            </TextBox>
        </Box>
        <Box>
            <Title>Our Reporters</Title>
            {reporters.map((reporter, index) => (
            <Info><InfoName>{reporter.position}</InfoName>
             <Link to={"/reporter/" + reporter.reporterId} key={index}>
             {reporter.nickname}
             </Link>
            </Info>
              
               

          ))}
        </Box>

        
      </Content>
    </Container>
  );
};

export default AboutUsContent;