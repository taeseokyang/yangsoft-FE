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
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  color : #6093FF;
  & span{
    font-weight: 300;
  }
`;

const NavBox = styled.div`
  display: flex;
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
  padding: 7px 17px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
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
        </Box>
        <Box>
          <a href="mailto:ts.yang.0123@gmail.com?subject=상담 요청&body=상담 요청 내용:">
            <GoToConsole>
              상담 요청
            </GoToConsole>
          </a>
        </Box>
      </Content>
    </Container>
  );
};

export default Header;
