import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { PageContainer } from "../../components/StyledComponents";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import TopHeader from "../../components/TopHeader";
import Footer from "../../components/Footer";
import Articles from "../../components/Articles";


const Section = () => {
  return (
    <PageContainer>
        <TopHeader></TopHeader>
        <Title></Title>
        <NavBar></NavBar>

        <Articles></Articles>

        <Footer></Footer>
    </PageContainer>
  );
};

export default Section;
