import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  border-bottom: 1px solid #e8e8e8;
`;

const TitleImg = styled.img`
  background: #ffffff;
  height: 30px;
`;

const OriginalContent = styled.div`
  position: absolute;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

const AlternateContent = styled.div`
  position: absolute;
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(10px)')};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const LeftTitle = styled.div`
  margin-left: 20px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ArticleTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;

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
        <OriginalContent show={showOriginalContent}>
          <Link to={"/"}>
            <TitleImg src="/images/title.png" alt="Title" />
          </Link>
        </OriginalContent>
        <AlternateContent show={showAlternateContent}>
          <LeftTitle>
            <Link to={"/"}>
              <TitleImg src="/images/title.png" alt="Title" />
            </Link>
          </LeftTitle>
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
