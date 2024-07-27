import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Content, Block1, BlockBox, ImageBox, Image, Section, Title1, SubTitle1, Reporter1, Copy } from "../StyledComponents";
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
        <PC>
          <BlockBox>
            {Articles.map((article, index) => (
              <Block1>
                <Link to={"/section/" + article.section}>
                  <Section>{article.section}</Section>
                </Link>
                <Link to={"/article/" + 1}>
                  <Title1>{article.title}</Title1>
                </Link>
                <SubTitle1>{article.subtitle}</SubTitle1>
                <Link to={"/reporter/" + 1}>
                  <Reporter1>By {article.reporter}</Reporter1>
                </Link>
              </Block1>
            ))}
          </BlockBox>
          <BlockBox>
            {Articles.map((article, index) => (
              <Block1>
                <Link to={"/article/" + 1}>
                  <ImageBox><Image src={article.img}></Image></ImageBox>
                </Link>

                <Copy>{article.copy}</Copy>
              </Block1>
            ))}
          </BlockBox>
        </PC>
        <Mobile>
          <BlockBox>
            {Articles.map((article, index) => (
              <Block1>
                <Section>{article.section}</Section>
                <Title1>{article.title}</Title1>
                <SubTitle1>{article.subtitle}</SubTitle1>
                <Reporter1>By {article.reporter}</Reporter1>
                <ImageBox><Image src={article.img}></Image></ImageBox>
                <Copy>{article.copy}</Copy>
              </Block1>
            ))}
          </BlockBox>
        </Mobile>
      </Content>
    </Container>
  );
};

export default ArticleBlock2;