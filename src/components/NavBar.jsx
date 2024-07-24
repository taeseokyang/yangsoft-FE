import { Link } from "react-router-dom";
import styled from "styled-components";
import { BoxContainer } from "./StyledComponents";

const Content = styled.div`
    border-top: 1px solid #0D1C51;
    border-bottom: 2px solid #0D1C51;
    height: 40px;
    display: flex;
    align-items: center; 
    flex-direction: row;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 600px) {
      height: 40px;
    }
    /* font-family: "Playfair Display", serif; */
`;

const SectionBar = styled.div`
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center; 
    flex-direction: row;
    gap: 20px;
    /* width: 80%; */
    overflow-x: auto;

    ::-webkit-scrollbar {
    display: none;
    }
    scrollbar-width: none;
    padding-right: 70px;
`;
const SectionTitle = styled.div`
    position: relative;
    color: #0D1C51;
    font-weight: 400;
    font-size: 17px;
    line-height: 40px;
    white-space: nowrap;
`;
const UnderBar = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ffffff;
`;
const Section = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    align-items: center; 

    &:hover ${UnderBar} {
        background-color: #0D1C51;
    }
`;
const GradationBar = styled.div`
    position: absolute;
    right: 30px;
    width: 50px;
    height: 100%;
    /* background: #eeeeee; */
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff);
`;

const Search = styled.div`
    width: 30px;   
    height: 100%;
    padding-left: 10px;
    background: #ffffff;
    position: absolute;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center; 
`;

const SearchIcon = styled.img`
    width: 20px;
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
      <BoxContainer>
        <Content>
        <SectionBar>
            {sections.map((section, index) => (

                <Section>
                    <Link to={"/section/"+section}>
                    <SectionTitle>{section}</SectionTitle>
                    
                    <UnderBar></UnderBar>
                    </Link>
                </Section>
            
            ))}
            
        </SectionBar>
        <GradationBar></GradationBar>
        <Search>
            <SearchIcon src="/images/search.svg"></SearchIcon>
        </Search>

        </Content>
      </BoxContainer>
    );
  };

export default NavBar;