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
const MainArticleImg = styled.div`
    height: 350px;
    flex: 3;
    
    background: #eeeeee;
    @media screen and (max-width: 600px) {
      flex: none;
      width: 100%;
    }
    
`;

const TextBox = styled.div`

flex: 2;
`;
const Main = () => {
  return (
    <Container>
          <Content>
        <MainArticleImg></MainArticleImg>
        <TextBox>
            <SectionTitle>Cover Story</SectionTitle>
            <ArticleTitle>Retreat of South Korea's Environmental Policy</ArticleTitle>
            <ArticleSubTitle>Reacting to the Extension of the Regulation Transition Period for Disposable Items</ArticleSubTitle>
            <Reporter>By Tae-seok Yang</Reporter>
        </TextBox>
    </Content>

    </Container>

  );
};

export default Main;
