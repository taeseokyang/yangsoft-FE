import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`

`;
const Dummy = styled.div`
  height: 30px;
`;
const Layout = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #e8e8e8;
`;
const Content = styled.div`
    margin: 0px auto;
    padding: 0px 20px;
    max-width: 1000px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
`;

const TopHeader = () => {
  return (
    <Container>
      <Layout>
        <Content>
        </Content>
      </Layout>
      <Dummy></Dummy>
    </Container>
   
  );
};

export default TopHeader;
