import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Content, Block1, Block2, BlockBox, ImageBox, Image, Section, Title1, SubTitle1, Reporter1, Copy, Date } from "./StyledComponents";

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
              <Date>July 5, 2024</Date>
              <Link to={"/article/" + 1}>
                <Title1>{article.title}</Title1>
              </Link>
              <SubTitle1>{article.subtitle}</SubTitle1>
              <Link to={"/reporter/" + 1}>
                <Reporter1>By {article.reporter}</Reporter1>
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
      ))}

    </Container>
  );
};

export default ArticleList;