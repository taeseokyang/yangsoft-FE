import { Link } from "react-router-dom";
import styled from "styled-components";
import { BoxContainer } from "./StyledComponents";



const Content = styled.div`
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    @media screen and (max-width: 600px) {
      height: 90px;
    }
`;
const TitleImg = styled.img`
    width: 500px;
    @media screen and (max-width: 600px) {
      width: 230px;
    }
`;
const TodayDate = styled.div`
    text-align: center;
    width: 320px;
    margin-top: 5px;
    font-weight: 200;
    @media screen and (max-width: 600px) {
      display: none;
    }
    
`;
const TitleText = styled.div`
    font-size: 70px;
    font-weight: 900;
    font-family: "Playfair Display", serif;
    color: #0D1C51;
`;

const Title = () => {
  return (
    <BoxContainer>
      <Content>
      <Link to={"/"}><TitleImg src="/images/title.svg"></TitleImg></Link>
      {/* <Link to={"/"}><TitleText>The Gachon Herald</TitleText></Link> */}
      <TodayDate>Published on May 7, 2024</TodayDate>
    </Content>

    </BoxContainer>
  );
};

export default Title;
