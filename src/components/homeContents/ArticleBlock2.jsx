import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, ArticleItem, Block1,Block2, BlockBox, ImageBox, Image, Section, Title1, SubTitle1, Reporter1, Copy, SectionBox, Dot } from "../StyledComponents";
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
    <ArticleItem>
      <Section>{Articles[0].section}</Section>
      <BlockBox>
      <Block1>
            
              <Title1>{Articles[0].title}</Title1>
              <SubTitle1>{Articles[0].subtitle}</SubTitle1>
              <ImageBox><Image src={Articles[0].img}></Image></ImageBox>
              <Copy>{Articles[0].copy}</Copy>
      </Block1>
      <VerticalLine></VerticalLine>
      <Block2>
          
              {Articles.slice().map((article, index) => (
              <Link to={"/article/"+ 1}key={index}>
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

export default ArticleBlock2;