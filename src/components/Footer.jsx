import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container} from "./StyledComponents";


const Layout = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height:200px;
    background: #f1f1f1;

`;
const Content = styled.div`
  padding: 20px 20px;
  max-width: 1000px;
  margin: 0px auto;
  display: flex;
    gap: 10px;
    flex-direction: column;
`;


const ItemLine = styled.div`
  display: flex;
  gap: 10px;
  
`;
const Item = styled.div`
  display: inline-block;
  font-size: 13px;
  color: #949494;
  white-space: nowrap;
`;


const ClickItem = styled.div`
  font-size: 13px;
  color: #5c5c5c;
  white-space: nowrap;
  &:hover{
      border-bottom: 1px solid #5c5c5c;
    }
`;

const Footer = () => {
  return (
    <Container>
      <Layout>
          <Content>
            <ItemLine>
              <Item>상호명 : 양소프트</Item>
            <Item>대표자 : 양태석</Item>
            </ItemLine>
            <ItemLine>
            <Item>연락처 : 010-5239-5132</Item>
            </ItemLine>
            <ItemLine>
            <Item>사업자등록번호 : 674-64-00706 </Item>
            </ItemLine>
          </Content>
      </Layout>
    </Container>
  );
};

export default Footer;
