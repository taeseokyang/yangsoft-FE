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
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    }
`;
const Text3 = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 10px;
  &:hover{
    text-decoration: underline;
  }
`;

const Ad = styled.img`
  width: 100%;
  margin-top: 50px;
  /* height: 150px; */
  background: #eeeeee;
  /* position: absolute;
  bottom: 0px; */
  border-radius: 7px;
  @media screen and (max-width: 600px) {
    margin-top: 0px;
    }
`;

const Dot = styled.div`
  display: inline-block;
  width: 7px;
  height: 7px;
  background: #000000;
`;

const Section = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-left: 5px;
`;

const SectionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* margin-bottom: 5px; */
  margin-bottom: 3px;
  
`;

const TopBlock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    return `${date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })}, at ${date.toLocaleTimeString("en-US", { hour12: false })}`;
  };

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
            <Text1>Last published on July 25, 2024</Text1>
            <Text2>Now is {formatTime(currentTime)}</Text2>
            <Ad src="/images/aaa.svg"></Ad>
          </Block2>
          <VerticalLine></VerticalLine>
          <Block1>
            <Text2>Editor's Picks</Text2>
            {Picks.map((pick, index) => (
              <Link to={"/article/"+ 1}key={index}>
                <SectionBox>
                <Dot></Dot><Section>Cover Story</Section>
                </SectionBox>

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
