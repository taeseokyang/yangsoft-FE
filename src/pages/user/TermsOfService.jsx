import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { PageContainer } from "../../components/StyledComponents";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TermsOfServiceContent from "../../components/TermsOfServiceContent";
const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <PageContainer>
        <Header></Header>
        <TermsOfServiceContent></TermsOfServiceContent>
        <Footer></Footer>
    </PageContainer>
  );
};

export default TermsOfService;
