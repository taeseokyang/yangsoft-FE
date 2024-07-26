import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// import { BoxContainer } from "./StyledComponents";


const Container = styled.div`
/* background: #f7f7f7; */
`;

const Content = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;

  /* padding: 30px 20px; */
  display: flex;
  max-width: 1200px;
  margin: 0px auto;
  flex-direction: row;
  padding: 10px 20px;
`;




const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #b7b7b7;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
`;

const ArticleTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  /* text-overflow: ellipsis; */
`;

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AnimatedSectionTitle = styled(SectionTitle)`
  animation: ${slideUp} 0.8s ease-in-out;
`;

const AnimatedArticleTitle = styled(ArticleTitle)`
  animation: ${slideUp} 0.8s ease-in-out;
`;

const RecentArticleBar = () => {
  const Articles = [
    {
      section: "Cover Story",
      title: "Retreat of South Korea's Environmental Policy"
    },
    {
      section: "Feature",
      title: "hello"
    },
    {
      section: "World Wide",
      title: "Korea's Environmental Policy"
    }
  ];

  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArticleIndex(prevIndex => (prevIndex + 1) % Articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { section, title } = Articles[currentArticleIndex];

  return (
    <Container>
        <Content>
        {/* <Title>Latest</Title> */}
      <AnimatedSectionTitle key={section}>{section}</AnimatedSectionTitle>
      <AnimatedArticleTitle key={title}>{title}</AnimatedArticleTitle>
        </Content>

    </Container>
  );
};

export default RecentArticleBar;



