import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`

`;
const Dummy = styled.div`
  height: 100px;
`;
const Layout = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100px;
    border-top: 1px solid #e8e8e8;

`;
const Content = styled.div`
  padding: 10px 20px;
  max-width: 1200px;
  margin: 0px auto;
  display: flex;
    align-items: center; 
    flex-direction: row;
    gap: 20px;
`;
const Item = styled.div`
  font-size: 13px;
  color: #5c5c5c;
`;

const Footer = () => {
  return (
    <Container>
      <Layout>
          <Content>
            <Item>ⓒ 2024 The Gachon Herald</Item>
            <Item>Contact Us</Item>
            <Item>About Us</Item>
          </Content>
      </Layout>
      <Dummy></Dummy>
    </Container>
   
  );
};

export default Footer;
