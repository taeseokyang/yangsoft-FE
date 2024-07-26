import { Link } from "react-router-dom";
import styled from "styled-components";
import TopBlock from "./TopBlock";
import ArticleBlock1 from "./ArticleBlock1";
import ArticleBlock2 from "./ArticleBlock2";
import ArticleBlock3 from "./ArticleBlock3";
import { Container } from "../StyledComponents";

const Contents = () => {
  return (
    <Container>
        <TopBlock></TopBlock>
        <ArticleBlock1></ArticleBlock1>
        <ArticleBlock2></ArticleBlock2>
        <ArticleBlock3></ArticleBlock3>
        <ArticleBlock2></ArticleBlock2>
        <ArticleBlock1></ArticleBlock1>
        <ArticleBlock1></ArticleBlock1>
        <ArticleBlock2></ArticleBlock2>
    </Container>
  );
};

export default Contents;
