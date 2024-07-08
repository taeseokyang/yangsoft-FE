import styled from "styled-components";

const Container = styled.div`
max-width: 1200px;
margin: 0px auto;
width: 100%;
/* padding: 0px 20px; */
`;
const Content = styled.div`
border-bottom: 1px solid #eeeeee;
margin: 0px 20px;
`;

const Line = () => {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
};

export default Line;