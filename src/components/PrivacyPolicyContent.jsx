import { Container } from "./StyledComponents";
import styled from "styled-components";

const Content = styled.div`
  padding: 20px 20px;
  min-height: 500px;
  max-width: 1000px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const PrivacyPolicyContent = () => {
  return (
    <Container>
      <Content>
        
      </Content>
    </Container>
  );
};

export default PrivacyPolicyContent;
