import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { PageContainer } from "../../components/StyledComponents";
import HomeContent from "../../components/HomeContent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
const Home = () => {
  return (
    <PageContainer>
        <Header></Header>
        <HomeContent></HomeContent>
        <Footer></Footer>
    </PageContainer>
  );
};

export default Home;
