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
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    /* border-bottom: 1px solid #e8e8e8; */
`;
const Login = styled.div`
    margin-left: auto;
`;
const Languages = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const Language = styled.div`
  color: ${(props) => (props.isOn ? "#000000" : "#909090")};

`;

const TodayDate = styled.div`
    font-weight: 200;
    display: none;
    @media screen and (max-width: 600px) {
      display: inline-block;
    }
    
`;

const TopHeader = () => {
  return (
    <Container>
      <Layout>
        <Content>
           <TodayDate>Tuesday, May 7, 2024</TodayDate>
          {/* <Languages>
            <Language isOn={1==1}>ENG</Language>
            <Language isOn={1==2}>KOR</Language>
          </Languages> */}
          <Login>Login</Login>
        </Content>
      </Layout>
      <Dummy></Dummy>
    </Container>
   
  );
};

export default TopHeader;
