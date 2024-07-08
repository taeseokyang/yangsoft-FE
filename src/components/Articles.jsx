import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Main from "./homeContents/Main";

const Container = styled.div`
background: #ffffff;
`;

const Content = styled.div`
  padding: 0px 20px;
  display: flex;
  max-width: 1200px;
  margin: 0px auto;
  flex-direction: column;
`;

const SectionTitle = styled.div`
  color: #0D1C51;
  font-size: 25px;
  font-weight: 700;
  margin-top: 20px;
`;

const Article = styled.div`
border-bottom: 1px solid #eeeeee;
padding: 20px 0px;

`;
const ArticleList = styled.div`
  /* max-width: 800px; */
  font-family: "Playfair Display", serif;

`;



const ArticleInfo = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  justify-content: space-between;
  position: relative;
`;

const TextBox = styled.div`
  color: #000000;
  font-size: 20px;
  margin-right: 10px;
`;
const ArticleImg = styled.img`
width: 400px;
height: 200px;
@media screen and (max-width: 600px) {
  width: 100%;
  }
background: #eeeeee;

`;
const ArticleTitle = styled.div`
  color: #000000;
  font-size: 25px;
`;
const ArticleSubTitle = styled.div`
  color: #adadad;
  font-size: 20px;
`;

const BottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 13px;
  /* font-family:  */
  
`;
const Reporter = styled.div`
  color: #000000;
  font-weight: 700;
`;
const CreatedAt = styled.div`
  color: #000000;
`;

const Articles = () => {
  const { section } = useParams();

  const articles = [
    {
      id: 1,
      title : "South Korea's Environmental Policy in Retreat",
      subTitle : "South Korea's Environmental Policy in Retreat",
      imgName : "img.png",
      reporter : "Tae-seok Yang",
      createdAt : "May 12, 2024"
    },
    {
      id: 1,
      title : "South Korea's Environmental Policy in Retreat",
      subTitle : "South Korea's Environmental Policy in Retreat",
      imgName : "img.png",
      reporter : "Tae-seok Yang",
      createdAt : "May 12, 2024"
    },
    {
      id: 1,
      title : "South Korea's Environmental Policy in Retreat",
      subTitle : "South Korea's Environmental Policy in Retreat",
      imgName : "img.png",
      reporter : "Tae-seok Yang",
      createdAt : "May 12, 2024"
    },
    {
      id: 1,
      title : "South Korea's Environmental Policy in Retreat",
      subTitle : "South Korea's Environmental Policy in Retreat",
      imgName : "img.png",
      reporter : "Tae-seok Yang",
      createdAt : "May 12, 2024"
    },
];
  return (
    <Container>
      <Content>
      <SectionTitle>{section}</SectionTitle>
      <ArticleList>
      {articles.map((article, index) => (
      <Article>
        <ArticleInfo>
        <TextBox>
            <Link to={"/article/"+article.id}>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleSubTitle>{article.subTitle}</ArticleSubTitle>
            </Link>
          </TextBox>
          
          <Link to={"/article/"+article.id}>
            <ArticleImg>

            </ArticleImg>
          </Link>
        </ArticleInfo>
          <BottomInfo>
              <Reporter>{article.reporter}</Reporter>
              <CreatedAt>{article.createdAt}</CreatedAt>
            </BottomInfo>

      </Article>

      ))}

      </ArticleList>

      </Content>
    
    </Container>
  );
};

export default Articles;
