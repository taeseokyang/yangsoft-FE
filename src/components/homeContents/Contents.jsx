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

const LineBox = styled.div`
padding: 0px 20px;
`;


const Contents = () => {
  return (
    <Container>
      <Main></Main>
      <LineBox><Line></Line></LineBox>
      <Body3></Body3>
      <OverflowBar></OverflowBar>
      <Body1></Body1>
      <LineBox><Line></Line></LineBox>
      <Body1></Body1>
      <OverflowBar></OverflowBar>
      <Body2></Body2>
      <LineBox><Line></Line></LineBox>
      <Body2></Body2>
    </Container>
  );
};

export default Contents;
