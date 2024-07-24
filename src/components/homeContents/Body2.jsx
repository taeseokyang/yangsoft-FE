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
    /* padding-right: 10px; Add padding to create space between border and content */
  }
`;

const Articles = styled.div`
font-family: "Playfair Display", serif;
  > :not(:last-child) {
    border-bottom: 1px solid #eeeeee;
    /* padding-right: 10px; Add padding to create space between border and content */
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

const Part = styled.div`
  flex: 1;
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

const TextBox = styled.div`

`;

const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #9e9e9e;
`;

const ArticleImg = styled.img`
  height: 150px;
  /* width: 300px; */
  background: #eeeeee;
`;


const Body2 = () => {
  return (
    <Container>
      <Content>
        <Part>
          <SectionTitle>Movie</SectionTitle>
          <Articles>
            <ImgArticle>
            <ArticleImg src="/images/test7.png">

            </ArticleImg>
            <TextBox>
              <Title>The Tragic Life of Alan Turing</Title>
              <Subtitle>The Enigma Decryption Mission of the Nazis, 'The Imitation Game'</Subtitle>
              <Reporter>By Tae-seok Yang</Reporter>
              </TextBox>
            </ImgArticle>

            {/* <Article>
              <Title>Shining College Life with English, a New Beginning</Title>
              <Reporter>By Tae-seok Yang</Reporter>
            </Article>

            <Article>
              <Title>Shining College Life with English, a New Beginning</Title>
              <Reporter>By Tae-seok Yang</Reporter>
            </Article> */}

          </Articles>
        </Part>

        <Part>
          <SectionTitle>Book</SectionTitle>
          <Articles>
            <ImgArticle>
            <ArticleImg src="/images/test8.png">

            </ArticleImg>
              <TextBox>
              <Title>How People Conform to an Unjust Society</Title>
              <Subtitle>Kindred, by Octavia E. Butler.</Subtitle>
              <Reporter>By Tae-seok Yang</Reporter>
              </TextBox>
            
            </ImgArticle>

            <Article>
              <Title>Shining College Life with English, a New Beginning</Title>
              <Subtitle>Kindred, by Octavia E. Butler.</Subtitle>
              <Reporter>By Tae-seok Yang</Reporter>
            </Article>
          </Articles>
        </Part>
      </Content>
    </Container>
  );
};

export default Body2;