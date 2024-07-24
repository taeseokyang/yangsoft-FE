import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArticleTitle, ArticleSubTitle, SectionTitle, Reporter } from "../../components/StyledComponents";

const Container = styled.div`
background: #ffffff;
`;
const Content = styled.div`
padding: 0px 20px;
max-width: 1200px;
    display: flex;
    flex-direction: row;
    margin: 0px auto;
    gap: 20px;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
`;

const ImgBox = styled.div`
    /* height: 350px; */
    flex: 2;  
    /* background: #eeeeee; */
    @media screen and (max-width: 600px) {
      flex: none;
      width: 100%;

    }
    overflow: hidden;

`;
const Source = styled.div`
  font-size: 12px;
  color: #aaaaaa;
  text-align: right;
  z-index: 1;
  /* margin-top: -20px;
  margin-right: 5px; */

`;
const MainArticleImg = styled.img`
  width: 100%;
  border-radius: 0px;
  /* height: 100%; */
    
`;

const TextBox = styled.div`
flex: 3;
`;




const Main = () => {
  return (
    <Container>
          <Content>
          <TextBox>
            <SectionTitle>Cover Story</SectionTitle>
            <ArticleTitle>South Korea's Environmental Policy in Retreat</ArticleTitle>
            <ArticleSubTitle>Reacting to the Extension of the Regulation Transition Period for Disposable Items</ArticleSubTitle>
            <Reporter>By Tae-seok Yang</Reporter>
        </TextBox>
            <ImgBox>
            <MainArticleImg src="/images/test.jpg"></MainArticleImg>
            <Source>Photo by Yang</Source>
            </ImgBox>

       
    </Content>

    </Container>

  );
};

export default Main;
