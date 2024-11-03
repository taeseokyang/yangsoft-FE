import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, ArticleItem, Block1, Block2, BlockBox, ImageBox, Image, Section, Title1, SubTitle1, Reporter1, Copy, SectionBox, Dot, BackgroundImage, Overlay } from "../StyledComponents";
import VerticalLine from "./VerticalLine";
import HorizontalLine2 from "./HorizontalLine2";

const Mobile = styled.div` 
    display: none;
    @media screen and (max-width: 600px) {
      display: block;
    }
`;

const PC = styled.div` 
    display: block;
    @media screen and (max-width: 600px) {
      display: none;
    }
`;

const ImageNo = ({ sectionId, sectionName, articles }) => {

  return (
    <Container>
      <ArticleItem>
        <Link to={"/section/" + sectionId + "?page=1"}>
          <Section>{sectionName}</Section>
        </Link>
        <BlockBox>
          <Block2>
            {articles.map((article, index) => (
              <Link to={"/article/" + article.articleId} key={index}>
                <Title1>{article.title}</Title1>
                <SubTitle1>{article.subtitle}</SubTitle1>
              </Link>

            ))}
          </Block2>
        </BlockBox>
      </ArticleItem>
    </Container>
  );
};

export default ImageNo;