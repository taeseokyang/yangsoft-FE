import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Content, Block1,Block2, BlockBox, ImageBox, Image, Section, Title1, SubTitle1, Reporter1, Copy, SectionBox, Dot } from "../StyledComponents";
import VerticalLine from "./VerticalLine";
import HorizontalLine from "./HorizontalLine";

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

const ArticleBlock2 = () => {
  const Articles = [
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
      img: "/images/test2.png",
      copy: "Provided By NYC"
    },
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable ItemsReacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
      img: "/images/test3.png",
      copy: "Provided By NYC"
    },
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
      img: "/images/test5.png",
      copy: "Provided By NYC"
    }
  ];
  return (
    <Container>
    <Content>
      <Section>{Articles[0].section}</Section>
      <BlockBox>
      {Articles.map((article, index) => (
              <Block1>
            
              <Title1>{article.title}</Title1>
              <SubTitle1>{article.subtitle}</SubTitle1>
              <ImageBox><Image src={article.img}></Image></ImageBox>
              <Copy>{article.copy}</Copy>
          </Block1>
             
        ))}
  
      </BlockBox>
    </Content>
  </Container>
  );
};

export default ArticleBlock2;