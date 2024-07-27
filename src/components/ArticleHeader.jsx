import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { Section } from "./StyledComponents";

const Container = styled.div``;

const Dummy = styled.div`
  height: 50px;
`;

const Content = styled.div`
  position: fixed;
  width: 100%;
  background: #ffffff;
  top: 0;
  left: 0;
  margin: 0px auto;

  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
`;

const TitleImg = styled.img`
  background: #ffffff;
  height: 20px;
`;

const OriginalContent = styled.div`
  width: 100%;
  position: absolute;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

const AlternateContent = styled.div`
  width: 100%;
  position: absolute;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(10px)')};
`;

const LeftTitle = styled.div`
  margin-left: 20px;
  z-index: 1;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ArticleTitle = styled.div`
text-align: center;
font-size: 14px;
  font-weight: 600;
`;
const ArticleSection = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 800;
`;

const ArticleHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showAlternateContent, setShowAlternateContent] = useState(false);
  const [showOriginalContent, setShowOriginalContent] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 100);
  };

  useEffect(() => {
    let timer;
    if (scrolled) {
      setShowOriginalContent(false);
      timer = setTimeout(() => {
        setShowAlternateContent(true);
      }, 500); // 0.5s delay to match the transition duration
    } else {
      setShowAlternateContent(false);
      timer = setTimeout(() => {
        setShowOriginalContent(true);
      }, 500); // 0.5s delay to match the transition duration
    }
    return () => clearTimeout(timer);
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Content>
        <LeftTitle>
        <Link to={"/"}>
            <TitleImg src="/images/tgh.svg" alt="Title" />
            </Link>
        </LeftTitle>
        <OriginalContent show={showOriginalContent}>
          <ArticleSection>
            <Link to={"/"}>
              Cover Story
            </Link>
          </ArticleSection>
        </OriginalContent>
        <AlternateContent show={showAlternateContent}>
          <ArticleTitle>
            South Korea's Environmental Policy in Retreat
          </ArticleTitle>
        </AlternateContent>
      </Content>
      <Dummy></Dummy>
    </Container>
  );
};

export default ArticleHeader;
