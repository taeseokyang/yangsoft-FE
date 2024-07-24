import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArticleTitle, ArticleSubTitle, SectionTitle, Reporter } from "../../components/StyledComponents";

const Container = styled.div`
background: #0D1C51;
`;

const Content = styled.div`
  padding: 30px 20px;
  display: flex;
  max-width: 1200px;
  margin: 0px auto;
  flex-direction: row;
  justify-content: space-between; /* 추가 */
`;

const TextBox = styled.div`
  margin-right: 20px;
  flex: 2;
`;


const ImgBox = styled.div`
  /* height: 250px; */
  display: flex;
  flex-direction: row;
  align-items: center; 
  
  flex: 1;
  text-align: right;
`;
const Img = styled.img`
  /* height: 100%; */
  width: 100%;
`;

const OverflowBar = () => {
  return (
    <Container>
        <Content>
          <TextBox>
            <SectionTitle color="w">GACHONIAN</SectionTitle>
            <ArticleTitle color="w">Are You a Carrot?</ArticleTitle>
            <ArticleSubTitle color="w">The developer of Carrot Market search service, Cho Yongjin.</ArticleSubTitle>
            <Reporter color="w">By Tae-seok Yang</Reporter>
          </TextBox>
          <ImgBox><Img src="/images/test3.png"></Img></ImgBox>
        </Content>
    </Container>
  );
};

export default OverflowBar;
