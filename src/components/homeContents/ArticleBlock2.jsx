import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Content, Block1, BlockBox, ImageBox, Image, Section, Title1, SubTitle1, Reporter1 } from "../StyledComponents";

const ArticleBlock2 = () => {
  const Articles = [
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
      img: "/images/test2.png"
    },
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable ItemsReacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
      img: "/images/test3.png"
    },
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
      img: "/images/test5.png"
    }
  ];
  return (
    <Container>
      <Content>
        <BlockBox>
          {Articles.map((article, index) => (
            <Block1>
              <Section>{article.section}</Section>
              <Title1>{article.title}</Title1>
              <SubTitle1>{article.subtitle}</SubTitle1>
              <Reporter1>By {article.reporter}</Reporter1>
            </Block1>
          ))}
        </BlockBox>
        <BlockBox>
          {Articles.map((article, index) => (
            <Block1>
              <ImageBox><Image src={article.img}></Image></ImageBox>
            </Block1>
          ))}
        </BlockBox>
      </Content>
    </Container>
  );
};

export default ArticleBlock2;