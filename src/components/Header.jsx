import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./StyledComponents";


const Content = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  height: 70px;
  max-width: 1000px;
  
  /* text-align: center; */
  /* @media screen and (max-width: 600px) {
    padding: 20px 20px;
    } */

`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color : #6093FF;
  & span{
    font-weight: 300;
  }
  /* text-align: center; */
  /* @media screen and (max-width: 600px) {
    padding: 20px 20px;
    } */  
`;

const NavBox = styled.div`
    display: flex;
    /* gap: 10px; */
    margin-left: 30px;
    align-items: center;
`;

const Nav = styled.div`
  color: #828282;
  margin-top: 1px;
  white-space: nowrap;
  cursor: pointer;
    padding: 0px 10px;
  border-right: 1px solid #eeeeee;
  &:last-child {
    border-right: none;
  }
`;


const GoToConsole = styled.div`
  color: #ffffff;
  background: linear-gradient(to right, #6093FF, #93B6FF);
  border-radius: 100px;
  padding: 5px 17px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;

`;
const Box = styled.div`
   display: flex;
   align-items: center;

`;

const Header = () => {
  return (
    <Container>
      <Content>
        <Box>
        <Link to={"/"}>
          <Title>YANG<span>SOFT</span></Title>
        </Link>

        <NavBox>
          <Nav>웹 호스팅</Nav>
          <Nav>서비스</Nav>
        </NavBox>
        </Box>
        <Box>

        <GoToConsole>
          사용자 콘솔
        </GoToConsole>
        </Box>
      </Content>
    </Container>
  );
};

export default Header;
