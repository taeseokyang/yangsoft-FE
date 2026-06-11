import styled from "styled-components";
import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TermsOfServiceContent from "../../components/TermsOfServiceContent";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page>
      <Header />
      <Main>
        <TermsOfServiceContent />
      </Main>
      <Footer />
    </Page>
  );
};

export default TermsOfService;
