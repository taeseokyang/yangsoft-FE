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
    max-width: 1200px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
`;

const Item = styled.div`
    color: #bcbcbc;
`;

const TopHeader = () => {
  return (
    <Container>
      <Layout>
        <Content>
          <Item>Published At 2024-12-20</Item>
          <Link to={"Login"}>
          <Item>Login</Item>
            </Link>
        </Content>
      </Layout>
      <Dummy></Dummy>
    </Container>
   
  );
};

export default TopHeader;
