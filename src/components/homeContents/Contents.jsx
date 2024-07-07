import { Link } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import OverflowBar from "./OverflowBar";
import Body1 from "./Body1";



const Container = styled.div`
padding: 20px 0px;
display: flex;
flex-direction: column;
gap: 20px;

`;

const Contents = () => {
  return (
    <Container>
      <Main></Main>
      <Body1></Body1>
      <OverflowBar></OverflowBar>
      <Body1></Body1>
      <Body1></Body1>
      <OverflowBar></OverflowBar>
      <Body1></Body1>
    </Container>
  );
};

export default Contents;
