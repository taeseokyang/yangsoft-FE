import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrap = styled.header`
  border-bottom: 1px solid #EEEEEE;
  background: #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 60px;
  display: flex;
  align-items: center;
`;

const LogoLink = styled(Link)`
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.22em;
  color: #111111;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <Inner>
        <LogoLink to="/">Yangsoft</LogoLink>
      </Inner>
    </HeaderWrap>
  );
};

export default Header;
