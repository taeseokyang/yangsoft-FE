import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Content, Block1, Block2, BlockBox } from "../StyledComponents";

const Text1 = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
    }
`;
const Text2 = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    }
`;
const Text3 = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
  &:hover{
    text-decoration: underline;
  }
`;

const Ad = styled.div`
  height: 150px;
  background: #eeeeee;
  border-radius: 7px;
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
            <Text1>Last published on<br />July 25, 2024</Text1>
            <Text2>Now is {formatTime(currentTime)}</Text2>
            <Ad></Ad>
          </Block2>
          <Block1>
            <Text2>Editor's Picks</Text2>
            {Picks.map((pick, index) => (
              <Link to="/" key={index}>
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
