import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./StyledComponents";
import NavBar from "./NavBar";

export const Content = styled.div`
  margin: 0px auto;
  padding: 40px 20px;
  max-width: 1000px;
  display: flex;
  align-items: center; 
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  @media screen and (max-width: 600px) {
    padding: 20px 20px;
    display: block;
    text-align: center;
    }
`;

export const TitleImg = styled.img`
  height: 60px;
  @media screen and (max-width: 600px) {
      height: 30px;
    }
`;

export const Left = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  flex:1;
  @media screen and (max-width: 600px) {
      display: none;
    }
`;
export const Right = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 400;
  text-align: right;
  flex:1;
  @media screen and (max-width: 600px) {
    display: none;
    }
`;


const Title = () => {
  return (
    <Container>
      <Content>
        <Left>Since 1984</Left>
        <Link to={"/"}>
          <TitleImg src="/images/tgh.svg"></TitleImg>
        </Link>
        <Right>No.161</Right>
      </Content>
    </Container>
  );
};

export default Title;
