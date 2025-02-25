import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container} from "./StyledComponents";



const Content = styled.div`
  padding: 20px 20px;
  min-height: 500px;
  max-width: 1000px;
  margin: 0px auto;
  display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 500px;

`;
const BigImage = styled.img`
  position: absolute;
  right: 0;
  top: 100px;
  max-width: 400px;
`;
const BigText = styled.div`
  position: absolute;
  /* right: 0; */
  top: 100px;
  font-size: 50px;
  font-weight: 100;
  
  & span{
    color: #6093FF;
    font-weight: 700;
  }
`;

const Items = styled.div`
  display: flex;
  gap: 10px;
  /* width: 200px; */
  /* height: 100px; */
`;

const Item = styled.div`
  width: 200px;
  height: 100px;
  border: 1px solid #eeeeee;
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 30px;
`;

const ItemImage = styled.img`
  width: 100%;
`;


const HomeContent = () => {
  return (
    <Container>
      <Content>
   
        <Box> 
          <BigText>
          <span>양소프트,</span><br/>
          그리다, 이루다.
          </BigText>
          <BigImage src="/images/mainImage.png"></BigImage>
        </Box>
        <Items> 

          {/* <Item>
            <ItemImage src="/images/thegachonherald.png"></ItemImage>
          </Item>
          <Item>
            <ItemImage src="/images/pagether.png"></ItemImage>
          </Item>
          <Item>
            <ItemImage src="/images/onheart.png"></ItemImage>
          </Item> */}
        </Items>
      </Content>
    </Container>
  );
};

export default HomeContent;
