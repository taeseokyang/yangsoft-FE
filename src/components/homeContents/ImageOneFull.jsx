import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, ArticleItem, Block1, Block2, BlockBox, ImageBox, Section, Title1, SubTitle1, Reporter1, Image, Copy, SectionBox, BackgroundImage, Overlay } from "../StyledComponents";
import React from "react";
import axios from "axios";

const ImageOneFull = ({ sectionId, sectionName, article }) => {
  // if (!article) return null; 
  return (
    <Container>
      <ArticleItem>
        <Link to={"/section/" + sectionId + "?page=1"}>
          <SectionBox>
            <Section>{sectionName}</Section>
          </SectionBox>
        </Link>
        <BlockBox>
          <Block2>
            <Link to={"/article/" + article.articleId}>
              <Title1>{article.title}</Title1>
            </Link>
            <SubTitle1>{article.subtitle}</SubTitle1>
          </Block2>
          <Block1>
            <Link to={"/article/" + article.articleId}>
              <ImageBox>
                <BackgroundImage src={process.env.REACT_APP_BACK_URL + "/image?path=" + article.mainImage} />
                <Overlay />
                <Image src={process.env.REACT_APP_BACK_URL + "/image?path=" + article.mainImage} />
              </ImageBox>
            </Link>
            {/* <Copy>Provided by NYT</Copy> */}
          </Block1>
        </BlockBox>
      </ArticleItem>
    </Container>
  );
};

export default ImageOneFull;
