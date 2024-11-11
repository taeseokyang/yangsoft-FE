import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, ArticleItem, Block1, Block2, BlockBox, ImageBox, Image, Section, Title1, SubTitle1, Reporter1, Copy, SectionBox, Dot, BackgroundImage, Overlay } from "../StyledComponents";
import VerticalLine from "./VerticalLine";
import HorizontalLine2 from "./HorizontalLine2";

import React, { useState, useEffect } from "react";
import axios from "axios";

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

const ImageOne = ({ sectionId, sectionName, imageArticles, articles }) => {
  return (
    <Container>
      <ArticleItem>
        <Link to={"/section/" + sectionId + "?page=1"}>
          <Section>{sectionName}</Section>
        </Link>
        <BlockBox>
          <Block1>

          <Link to={"/article/" + imageArticles[0].articleId}>
            <Title1>{imageArticles[0].title}</Title1>
            <SubTitle1>{imageArticles[0].subtitle}</SubTitle1>
            <ImageBox>

              <BackgroundImage src={"https://api.thegachonherald.com/image?path=" + imageArticles[0].mainImage} />
              <Overlay />
              <Image src={"https://api.thegachonherald.com/image?path=" + imageArticles[0].mainImage}></Image>

            </ImageBox>
            {/* <Copy>{imageArticles[0].copy}</Copy> */}
            </Link>
          </Block1>
          <VerticalLine></VerticalLine>
          <Block2>

            {articles.slice(0, 3).map((article, index) => (
              <Link to={"/article/" + article.articleId} key={index}>
                <Title1>{article.title}</Title1>
                <SubTitle1>{article.subtitle}</SubTitle1>
                <HorizontalLine2></HorizontalLine2>
              </Link>

            ))}

          </Block2>
        </BlockBox>
      </ArticleItem>
    </Container>
  );
};

export default ImageOne;