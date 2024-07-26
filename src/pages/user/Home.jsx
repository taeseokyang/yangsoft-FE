import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { PageContainer } from "../../components/StyledComponents";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Contents from "../../components/homeContents/Contents";
import TopHeader from "../../components/TopHeader";
const Home = () => {
  return (
    <PageContainer>
        <TopHeader></TopHeader>
        <Title></Title>
        <NavBar></NavBar>
        <Contents></Contents>
        <Footer></Footer>
    </PageContainer>
  );
};

export default Home;
