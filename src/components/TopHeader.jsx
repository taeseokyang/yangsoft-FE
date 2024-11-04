import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";

const Container = styled.div``;

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
  span{
    a{
      color: #bcbcbc;
    }
  }
`;

const ItemBtn = styled.span`
  margin-left: 10px;
  color: #bcbcbc;
  cursor: pointer;
  a {
    color: #bcbcbc;
  }
`;

const TopHeader = () => {
  const [cookie, setCookie, removeCookie] = useCookies(); 
  const navigate = useNavigate(); 
  const handleLogout = () => {
    removeCookie('accessToken', { path: "/" }); 
    removeCookie('userId', { path: "/" }); 
    removeCookie('id', { path: "/" }); 
    removeCookie('nickname', { path: "/" }); 
    removeCookie('roles', { path: "/" }); 

    navigate("/");
  };

  return (  
    <Container>
      <Layout>
        <Content>
          <Item>Published At 2024-12-20</Item>
          
          <Item>
            <span>{cookie.nickname != null ? cookie.roles == 'REPORTER'  ? <Link to={"/reporter/manage"}>{cookie.nickname} </Link> : cookie.nickname : null}</span>
            <ItemBtn>
              {cookie.nickname != null ? 
                <span onClick={handleLogout}>Logout</span> : 
                <Link to={"/Login"}>Login</Link>
              }
            </ItemBtn>
          </Item>
        </Content>
      </Layout>
      <Dummy></Dummy>
    </Container>
  );
};

export default TopHeader;
