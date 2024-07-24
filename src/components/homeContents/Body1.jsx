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
  flex-direction: column;
`;

const Articles = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 600px) {
      flex-direction: column;
  }
    gap: 20px;
    font-family: "Playfair Display", serif;

`;

const Article = styled.div`
  padding-bottom: 10px;
`;

const BigArticle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding-right: 10px;
    flex: 2;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      flex: 1;
  }
  border-right: 1px solid #eeeeee;
  @media screen and (max-width: 600px) {
      border-right: none;
  }
`;

const BigTextBox = styled.div`
`;
const BigTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const BigSubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color:#9e9e9e;
`;

const OtherArticle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > :not(:last-child) {
    border-bottom: 1px solid #eeeeee;
    /* padding-right: 10px; Add padding to create space between border and content */
  }
`;

const BigImg = styled.img`
    width: 100%;
`;
const ImgBox = styled.div`
    width: 100%;
`;
const Source = styled.div`
  font-size: 12px;
  color: #aaaaaa;
  margin-top: 5px;
  text-align: right;

`;

const Body1 = () => {
  return (
    <Container>
        <Content>
        <SectionTitle>IN GCU</SectionTitle>
        <Articles>
        <BigArticle>
            <ImgBox>
            <BigImg src="/images/test2.png"></BigImg>
            <Source>Provided by yang</Source>
            </ImgBox>
   
          <BigTextBox>
            <BigTitle>Gachon University Establishes the First AI College in South Korea</BigTitle>
            <BigSubTitle>Advancing Convergence Education in Humanities and AI to Foster T-shaped Talents</BigSubTitle>
            <Reporter>By Su-hyun Kim</Reporter>
          </BigTextBox>
        </BigArticle>
        <OtherArticle>
          <Article>
            <Title>Shining College Life with English, a New Beginning</Title>
            <BigSubTitle>Exploring Language Learning and Cultural Exchange Opportunities at Gachon University: A Guide for Students</BigSubTitle>
            <Reporter>By Min-jeong Ju</Reporter>
          </Article>
         
          <Article>
          <Title>Increasing Early and Regular Admission Applications of Gachon University in 2024.</Title>
          <BigSubTitle>Gachon University focuses on the High-Tech Industry.</BigSubTitle>
          <Reporter>By Si-on Kim</Reporter>
          </Article>
         
         
        </OtherArticle>
      </Articles>
        </Content>
    </Container>
  );
};

export default Body1;