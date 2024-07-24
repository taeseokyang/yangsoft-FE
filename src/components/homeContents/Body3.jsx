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
const Subtitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #9e9e9e;
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
  padding: 10px 0px;
`;

const BigArticleImg = styled.img`
  /* height: 300px; */
  width: 100%;
  background: #eeeeee;
`;


const TextBox = styled.div`

`;

const ArticleImg = styled.img`
  height: 150px;
  width: 300px;
  background: #eeeeee;
  border: 1px solid #eeeeee;
`;


const Body3 = () => {
  return (
    <Container>
      <Content>
        <Part1>
          <SectionTitle>Feature</SectionTitle>
          <Articles>
            <ImgArticle>
            <ArticleImg src="/images/test5.png">

            </ArticleImg>
            <TextBox>
              <Title>Seoul's Spring - The Intersection of History and Desire in 1979</Title>
              <Subtitle>What is the truth of Seoul's Spring amidst the confrontation of power and beliefs?</Subtitle>
              <Reporter>By Su-hyeon Kim</Reporter>
              </TextBox>
            </ImgArticle>
            <ImgArticle>
            <ArticleImg src="/images/test6.png">

            </ArticleImg>
            <TextBox>
            <Title>Continued Deficit Prompts Carrot Market to Adopt a New Name</Title>
              <Subtitle>Transformation into a Local Community, 'Carrot'</Subtitle>
              <Reporter>By Tae-seok Yang</Reporter>
              </TextBox>
            </ImgArticle>



          </Articles>
        </Part1>

        <Part2>
          <SectionTitle>Photo Essay</SectionTitle>
          <Articles>
            <BigImgArticle>
            <BigArticleImg src="/images/test4.png"></BigArticleImg>
              <TextBox>
              <Title>Flowers that bloom once a year</Title>
              <Subtitle>May the new semester bloom like beautiful cherry blossoms</Subtitle>
              <Reporter>By Min-jeong Ju</Reporter>
              </TextBox>
            
            </BigImgArticle>
          </Articles>
        </Part2>
      </Content>
    </Container>
  );
};

export default Body3;