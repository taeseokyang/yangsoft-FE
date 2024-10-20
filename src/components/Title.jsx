import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./StyledComponents";
import NavBar from "./NavBar";

export const Content = styled.div`
  margin: 0px auto;
  padding: 50px 20px;
  max-width: 1000px;
  text-align: center;
  @media screen and (max-width: 600px) {
    padding: 20px 20px;
    }
`;

export const TitleImg = styled.img`
  height: 120px;
  @media screen and (max-width: 600px) {
      height: 50px;
    }
`;

const Title = () => {
  return (
    <Container>
      <Content>
        <Link to={"/"}>
          <TitleImg src="/images/gachonherald.svg"></TitleImg>
        </Link>
      </Content>
    </Container>
  );
};

export default Title;
