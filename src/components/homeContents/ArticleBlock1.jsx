import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Content, Block1, Block2, BlockBox, ImageBox, Section, Title1, SubTitle1, Reporter1, Image, Copy } from "../StyledComponents";

const ArticleBlock1 = () => {

  const Article = {
    section: "Cover Story",
    title: "South Korea's Environmental Policy in Retreat",
    subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
    reporter: "Tae-seok Yan",
  };
  return (
    <Container>
      <Content>
        <BlockBox>
          <Block2>
            <Link to={"/section/" + Article.section}>
              <Section>{Article.section}</Section>
            </Link>
            <Link to={"/article/" + 1}>
              <Title1>{Article.title}</Title1>
            </Link>
            <SubTitle1>{Article.subtitle}</SubTitle1>
            <Link to={"/reporter/" + 1}>
              <Reporter1>By {Article.reporter}</Reporter1>
            </Link>
          </Block2>
          <Block1>
            <Link to={"/article/" + 1}>
              <ImageBox><Image src="/images/test.jpg"></Image></ImageBox>
            </Link>
            <Copy>Provided by NYT</Copy>
          </Block1>
        </BlockBox>
      </Content>
    </Container>
  );
};

export default ArticleBlock1;