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
  background: #ffffff;
  height: 180px;
  flex: 1;
`;
const OverflowBar = () => {
  return (
    <Container>
        <Content>
          <TextBox>
            <SectionTitle color="w">Gachonian</SectionTitle>
            <ArticleTitle color="w">We are Students and Entrepreneurs; Stories of Cocone School Entrepreneurs</ArticleTitle>
            <Reporter color="w">By Tae-seok Yang</Reporter>
          </TextBox>
          <ImgBox />
        </Content>
    </Container>
  );
};

export default OverflowBar;
