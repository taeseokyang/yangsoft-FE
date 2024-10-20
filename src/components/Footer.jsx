import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container} from "./StyledComponents";


const Dummy = styled.div`
  height: 100px;
`;
const Layout = styled.div`
    margin-top: 100px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100px;
    background: #f1f1f1;

`;
const Content = styled.div`
  padding: 20px 20px;
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
