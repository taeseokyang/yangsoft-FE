import { Link } from "react-router-dom";
import styled from "styled-components";
import Main from "./Main";
import Line from "./Line";
import OverflowBar from "./OverflowBar";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Body3 from "./Body3";



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
      <Line></Line>
      <Body1></Body1>
      <OverflowBar></OverflowBar>
      <Body3></Body3>
      <Line></Line>
      <Body2></Body2>
      <OverflowBar></OverflowBar>
      <Body1></Body1>
      <Line></Line>
      <Body2></Body2>
      <Line></Line>
      <Body1></Body1>
    </Container>
  );
};

export default Contents;
