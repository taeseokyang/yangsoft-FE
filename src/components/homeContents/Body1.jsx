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
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 600px) {
      flex-direction: column;
  }
    gap: 20px;

`;

const Article = styled.div`
  padding-bottom: 10px;
`;

const BigArticle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex: 2;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      flex: 1;
  }
  border-right: 1px solid #eeeeee;
`;
const BigImg = styled.div`
    width: 100%;
    height: 250px;
    background: #eeeeee;
`;
const BigTextBox = styled.div`
`;
const BigTitle = styled.div`
  font-size: 22px;
`;
const Title = styled.div`
  font-size: 20px;
`;
const BigSubTitle = styled.div`
  font-size: 17px;
`;
const OtherArticle = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & :not(:last-child) {
    border-bottom: 1px solid #eeeeee;
    /* padding-right: 10px; Add padding to create space between border and content */
  }
`;

const Body1 = () => {
  return (
    <Container>
        <Content>
        <SectionTitle>In GCU</SectionTitle>
        <Articles>
        <BigArticle>
          <BigImg>

          </BigImg>
          <BigTextBox>
            <BigTitle>Shining College Life with English, a New Beginning</BigTitle>
            <BigSubTitle>Shining College Life with English, a New Beginning</BigSubTitle>
          </BigTextBox>
        </BigArticle>
        <OtherArticle>
          <Article>
          <Title>Shining College Life with English, a New Beginning</Title>
          </Article>
         
          <Article>
          <Title>Shining College Life with English, a New Beginning</Title>
          </Article>
         
          <Article>
          <Title>Shining College Life with English, a New Beginning</Title>
          </Article>
         
        </OtherArticle>
      </Articles>
        </Content>
    </Container>
  );
};

export default Body1;