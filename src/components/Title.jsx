import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./StyledComponents";
import NavBar from "./NavBar";

export const Content = styled.div`
  margin: 0px auto;
  padding: 30px 20px;
  max-width: 1000px;
  text-align: center;
`;

export const TitleImg = styled.img`
  height: 60px;
  @media screen and (max-width: 600px) {
      height: 30px;
    }
`;


const Title = () => {
  return (
    <Container>
      <Content>
        <Link to={"/"}>
          <TitleImg src="/images/tgh.svg"></TitleImg>
        </Link>
      </Content>
    </Container>
  );
};

export default Title;
