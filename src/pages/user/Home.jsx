import styled from "styled-components";
import HomeContent from "../../components/HomeContent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

const Home = () => {
  return (
    <Page>
      <Header />
      <Main>
        <HomeContent />
      </Main>
      <Footer />
    </Page>
  );
};

export default Home;
