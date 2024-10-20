import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
  margin-bottom: 10px;
`;
const Layout = styled.div`
background: #3E5977;
    left: 0;
    width: 100%;
`;
const Content = styled.div`
    margin: 0px auto;
    padding: 0px 20px;
    max-width: 1200px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
`;

const SectionBar = styled.div`
    height: 100%;
    width: 100%;
    padding: 15px 0px;

    display: flex;
    align-items: center; 
    gap: 20px;
    @media screen and (max-width: 600px) {
      padding: 5px 0px;
        gap: 5px;
    }
    /* width: 80%; */
    overflow-x: auto;

    ::-webkit-scrollbar {
    display: none;
    }
    scrollbar-width: none;
`;
const SectionTitle = styled.div`
    position: relative;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    white-space: nowrap;
`;
const Section = styled.div`
    height: 100%;
    /* position: relative; */
    /* display: flex; */
    /* align-items: center;  */
    /* border-radius: 7px; */
    border-top: 1px solid #3E5977;
    border-bottom: 1px solid #3E5977;
    @media screen and (max-width: 600px) {
        padding: 5px 5px;
    }
    &:hover{
      border-bottom: 1px solid #ffffff;
        /* background: #f0f0f0; */
    }
`;

const TopHeader = () => {

  const sections = [
    "Cover Story",
    "Feature",
    "World Wide",
    "Brief",
    "Gachonian",
    "Campus Talk",
    "Book",
    "Drama",
    "Movie",
    "Experience",
    "Editorial"
];

  return (
    <Container>
      <Layout>
        <Content>
        <SectionBar>
                    {sections.map((section, index) => (
                        <Section>
                            <Link to={"/section/" + section}>
                                <SectionTitle>{section}</SectionTitle>
                                {/* <UnderBar></UnderBar> */}
                            </Link>
                        </Section>
                    ))}
                </SectionBar>
        </Content>
      </Layout>
    </Container>
   
  );
};

export default TopHeader;
