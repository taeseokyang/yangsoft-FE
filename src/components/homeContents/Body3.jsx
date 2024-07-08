import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArticleTitle, ArticleSubTitle, SectionTitle, Reporter, BoxContainer } from "../StyledComponents";

const Container = styled.div`
background: #ffffff;

`;

const Content = styled.div`
  padding: 0px 20px;
  display: flex;
  max-width: 1200px;
  margin: 0px auto;

  display: flex;
    flex-direction: row;
    @media screen and (max-width: 600px) {
      flex-direction: column;
  }
    gap: 10px;

    > :not(:last-child) {
    border-right: 1px solid #eeeeee;
    @media screen and (max-width: 600px) {
      border-right: none;
  }
    padding-right: 10px;
  }
`;

const Articles = styled.div`
font-family: "Playfair Display", serif;
  > :not(:last-child) {
    border-bottom: 1px solid #eeeeee;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;

const Article = styled.div`
padding: 10px 0px;
`;


const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const Part1 = styled.div`
  flex: 3;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Part2 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ImgArticle = styled.div`
  /* padding-bottom: 10px; */
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 10px 0px;
`;


const BigImgArticle = styled.div`
  /* padding-bottom: 10px; */
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
  padding: 10px 0px;
`;

const BigArticleImg = styled.div`
  height: 300px;
  width: 100%;
  background: #eeeeee;
`;


const TextBox = styled.div`

`;

const ArticleImg = styled.div`
  height: 150px;
  width: 300px;
  background: #eeeeee;
`;


const Body3 = () => {
  return (
    <Container>
      <Content>
        <Part1>
          <SectionTitle>IN GCU</SectionTitle>
          <Articles>
            <ImgArticle>
            <ArticleImg>

            </ArticleImg>
            <TextBox>
              <Title>Shining College Life with English, a New Beginning</Title>
              <Reporter>By Tae-seok Yang</Reporter>
              </TextBox>
            </ImgArticle>

            <Article>
              <Title>Shining College Life with English, a New Beginning</Title>
              <Reporter>By Tae-seok Yang</Reporter>
            </Article>

            <Article>
              <Title>Shining College Life with English, a New Beginning</Title>
              <Reporter>By Tae-seok Yang</Reporter>
            </Article>

          </Articles>
        </Part1>

        <Part2>
          <SectionTitle>IN GCU</SectionTitle>
          <Articles>
            <BigImgArticle>
            <BigArticleImg></BigArticleImg>
              <TextBox>
              <Title>Shining College Life with English, a New Beginning</Title>
              <Reporter>By Tae-seok Yang</Reporter>
              </TextBox>
            
            </BigImgArticle>
          </Articles>
        </Part2>
      </Content>
    </Container>
  );
};

export default Body3;