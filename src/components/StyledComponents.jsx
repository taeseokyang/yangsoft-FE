import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px auto;
`;

export const Content = styled.div`
  margin: 0px auto;
  padding: 10px 20px;
  max-width: 1000px;
`;

export const BlockBox = styled.div`
  display: flex;
  flex-direction: row;
  
  gap: 20px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    }

`;
export const Block1 = styled.div`
  /* background: #f3f3f3; */
  flex-basis: calc((100% - 30px) / 3);
`;
export const Block2 = styled.div`
/* background: #f3f3f3; */
  flex-basis: calc((100%) / 3 * 2);
`;
export const Block3 = styled.div`
  flex: 1;
`;

export const ImageBox = styled.div`
  width: 100%;
  /* height: 180px; */
  background: #eeeeee;
  border-radius: 7px;
  overflow: hidden;
  /* margin-bottom: 5px; */
`;

export const Image = styled.img`
  width: 100%;
`;

export const Copy = styled.div`
  width: 100%;
  font-size: 10px;
  color: #959595;
  text-align: right;
`;

export const BigImageBox = styled.div`
  width: 100%;
  /* height: 450px; */
  /* background: #eeeeee; */
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  &:hover{
    & > div{
        display: block;
    }
  }
  & > div{
    display: none;
    width: 100%;
    padding: 1000px 10px 10px 10px;
    background-color: #00000030;
    color: #ffffff;
    position: absolute;
    bottom: 0px;
    left: 0px;
    
  }
`;

export const Section = styled.div`
display: inline-block;
  font-size: 12px;
  font-weight: 600;
  margin-left: 5px;
  &:hover{
    text-decoration: underline;
  }
`;
export const Dot = styled.div`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #000000;
`;


export const SectionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-bottom: 5px; */
  margin-bottom: 3px;
  
`;

export const Date = styled.div`
display: inline-block;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const Title1 = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  &:hover{
    text-decoration: underline;
  }
`;

export const SubTitle1 = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #767676;
  margin-bottom: 5px;
`;

export const Reporter1 = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
  &:hover{
    text-decoration: underline;
  }
`;

export const PageContainer = styled.div`
  margin: 0px auto;
`;

export const ThinPageContainer = styled.div`
  margin: 0px auto;
  max-width: 600px;
  padding: 0px 20px;
`;

export const BoxContainer = styled.div`
    margin: 0px auto;
    max-width: 1000px;
    padding: 0px 20px;
`;