import { Link } from "react-router-dom";
import styled from "styled-components";
import TopBlock from "./TopBlock";
import ArticleBlock1 from "./ArticleBlock1";
import ArticleBlock2 from "./ArticleBlock2";
import ArticleBlock3 from "./ArticleBlock3";
import ArticleBlock4 from "./ArticleBlock4";
import ArticleBlock5 from "./ArticleBlock5";
import ArticleBlock6 from "./ArticleBlock6";
import HorizontalLine from "./HorizontalLine";
import { Container } from "../StyledComponents";

const Contents = () => {
  return (
    <Container>
        <TopBlock></TopBlock>
        <HorizontalLine></HorizontalLine>
        <ArticleBlock1></ArticleBlock1>
        <HorizontalLine></HorizontalLine>
        <ArticleBlock2></ArticleBlock2>
        <HorizontalLine></HorizontalLine>
        <ArticleBlock4></ArticleBlock4>
        <HorizontalLine></HorizontalLine>
        <ArticleBlock5></ArticleBlock5>
        <HorizontalLine></HorizontalLine>
        <ArticleBlock6></ArticleBlock6>
        {/* <HorizontalLine></HorizontalLine>
        <ArticleBlock3></ArticleBlock3>
        <HorizontalLine></HorizontalLine>
        <ArticleBlock2></ArticleBlock2>
        <HorizontalLine></HorizontalLine>
        <ArticleBlock1></ArticleBlock1>
        <HorizontalLine></HorizontalLine>
        <ArticleBlock1></ArticleBlock1>
        <HorizontalLine></HorizontalLine>
        <ArticleBlock2></ArticleBlock2> */}
    </Container>
  );
};

export default Contents;
