import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Content, Block1, Block2, BlockBox, ImageBox, Section, Title1, SubTitle1, Reporter1 } from "./StyledComponents";

const ArticleList = () => {
  const Articles = [
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
    },
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
    },
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
    },
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
    },
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
    },
    {
      section: "Cover Story",
      title: "South Korea's Environmental Policy in Retreat",
      subtitle: "Reacting to the Extension of the Regulation Transition Period for Disposable Items",
      reporter: "Tae-seok Yan",
    }
  ];
  return (
    <Container>

      {Articles.map((article, index) => (
        <Content>
          <BlockBox>
            <Block2>
              {/* <Section>{article.section}</Section> */}
              <Title1>{article.title}</Title1>
              <SubTitle1>{article.subtitle}</SubTitle1>
              <Reporter1>By {article.reporter}</Reporter1>
            </Block2>
            <Block1>
              <ImageBox></ImageBox>
            </Block1>
          </BlockBox>
        </Content>
      ))}

    </Container>
  );
};

export default ArticleList;