import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import ArticleHeader from "../../components/ArticleHeader";
import { PageContainer } from "../../components/StyledComponents";
import Footer from "../../components/Footer";
import Title from "../../components/Title";
import Nav from "../../components/Nav";
import TopHeader from "../../components/TopHeader";
import Profile from "../../components/Profile";
import ManageProfile from "../../components/ManageProfile";


const ReportersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageContainer>
      <TopHeader></TopHeader>
        <Title></Title>
        <Nav></Nav>

        <ManageProfile></ManageProfile>
        <Footer></Footer>
    </PageContainer>
  );
};

export default ReportersPage;
