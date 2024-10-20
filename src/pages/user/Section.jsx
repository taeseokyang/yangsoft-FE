import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { PageContainer } from "../../components/StyledComponents";
import Title from "../../components/Title";
import Nav from "../../components/Nav";
import TopHeader from "../../components/TopHeader";
import Footer from "../../components/Footer";
import ArticleList from "../../components/ArticleList";


const Section = () => {
  return (
    <PageContainer>
      <TopHeader></TopHeader>
        <Title></Title>
        <Nav></Nav>
        <ArticleList></ArticleList>
        <Footer></Footer>
    </PageContainer>
  );
};

export default Section;
