import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./StyledComponents";

const Content = styled.div` 
    margin: 0px auto;
  padding: 0px 20px;
  max-width: 1000px;
    display: flex;
    align-items: center; 
    flex-direction: row;
    position: relative;
    overflow: hidden;
    background: #eeeeee;
    @media screen and (max-width: 600px) {
      /* height: 40px; */
    }
    margin-bottom: 10px;
`;

const SectionBar = styled.div`
    height: 100%;
    width: 100%;
    color: #ffffff;
    /* background: #f8f8f8;
    padding: 5px 5px;
    border-radius: 7px; */
    padding-bottom: 10px;
    @media screen and (max-width: 600px) {
        padding-bottom: 5px;
    }
    border-bottom: 1.5px solid #000000;

    display: flex;
    align-items: center; 
    gap: 10px;
    @media screen and (max-width: 600px) {
        gap: 5px;
    }
    /* width: 80%; */
    overflow-x: auto;

    ::-webkit-scrollbar {
    display: none;
    }
    scrollbar-width: none;
    /* padding-right: 70px; */
`;
const SectionTitle = styled.div`
    position: relative;
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    /* line-height: 40px; */
    white-space: nowrap;
`;
const UnderBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 7px;
    background: #ffffff;
`;
const Section = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    align-items: center; 
    border-radius: 7px;
    padding: 5px 10px;
    @media screen and (max-width: 600px) {
        padding: 5px 5px;
    }
    &:hover{
        background: #f0f0f0;
    }
`;
const GradationBar = styled.div`
    position: absolute;
    right: 0px;
    width: 50px;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);
`;

const NavBar = () => {
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
                {/* <GradationBar></GradationBar> */}
            </Content>
        </Container>
    );
};

export default NavBar;