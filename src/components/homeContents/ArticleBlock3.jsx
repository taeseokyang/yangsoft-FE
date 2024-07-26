import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Content, Block3, BlockBox, BigImageBox,Image, Section, Title1, SubTitle1, Reporter1, BigImageInfoBox } from "../StyledComponents";

const ArticleBlock3 = () => {
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
          <Block3>
            <BigImageBox>
              <Image src="/images/pt.png"></Image>
              <div>
                <Section>{Article.section}</Section>
                <Title1>{Article.title}</Title1>
                <SubTitle1>{Article.subtitle}</SubTitle1>
                <Reporter1>By {Article.reporter}</Reporter1>
              </div>
            </BigImageBox>
          </Block3>
        </BlockBox>
      </Content>
    </Container>
  );
};

export default ArticleBlock3;