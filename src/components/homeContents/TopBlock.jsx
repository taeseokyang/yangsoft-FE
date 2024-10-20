import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Content, Block1, Block2, BlockBox } from "../StyledComponents";
import VerticalLine from "./VerticalLine";

const Text1 = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: 10px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
    }
`;
const Text2 = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #3E5977;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    }
`;
const Text3 = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  &:hover{
    text-decoration: underline;
  }
`;

const BigImageBox = styled.div`
  width: 100%;
  height: 400px;
  background: #eeeeee;
  background: #eeeeee;
  position: relative;
  border-radius: 17px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    margin-top: 0px;
    }
`;

const BigImage = styled.div`
  
`;

const BigImageTextBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  /* background: #dddddd; */
  background: linear-gradient(to top, #808080, transparent);
`;


const TopBlock = () => {
  const Picks = [
    "Shining College Life with English, a New Beginning",
    "How People Conform to an Unjust Society",
    "Are You a Carrot?",
    "How People Conform to an Unjust Society"
  ];

  return (
    <Container>
      <Content>
        <BlockBox>
          <Block2>
            <BigImageBox>
              <BigImage>

              </BigImage>
              <BigImageTextBox>

              </BigImageTextBox>
            </BigImageBox>
          </Block2>
          <VerticalLine></VerticalLine>
          <Block1>
            <Text2>Editor's Picks</Text2>
            {Picks.map((pick, index) => (
              <Link to={"/article/"+ 1}key={index}>
                <Text3>{pick}</Text3>
              </Link>
            ))}
          </Block1>
        </BlockBox>
      </Content>
    </Container>
  );
};

export default TopBlock;
