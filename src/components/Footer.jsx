import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrap = styled.footer`
  border-top: 1px solid #EEEEEE;
  background: #FAFAFA;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
`;

const Info = styled.span`
  font-size: 11.5px;
  font-weight: 300;
  color: #AAAAAA;
`;

const Right = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const FooterLink = styled(Link)`
  font-size: 11.5px;
  font-weight: 300;
  color: #AAAAAA;
  transition: color 0.15s;

  &:hover {
    color: #111111;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <Inner>
        <Left>
          <InfoRow>
            <Info>Yangsoft</Info>
            <Info>CEO · Taeseok Yang</Info>
            <Info>+82 10-5239-5132</Info>
          </InfoRow>
          <InfoRow>
            <Info>Business Reg. · 674-64-00706</Info>
          </InfoRow>
        </Left>
        <Right>
          <FooterLink to="/terms-of-service">Terms</FooterLink>
          <FooterLink to="/privacy-policy">Privacy</FooterLink>
        </Right>
      </Inner>
    </FooterWrap>
  );
};

export default Footer;
