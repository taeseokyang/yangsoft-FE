import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from "axios";


const Container = styled.div`
  margin-bottom: 20px;
`;
const Layout = styled.div`
background: #3E5977;
    left: 0;
    width: 100%;
`;
const Content = styled.div`
    margin: 0px auto;
    padding: 0px 20px;
    max-width: 1200px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
`;

const SectionBar = styled.div`
padding: 15px 0px;
height: 100%;
    width: 100%;
    display: flex;
    /* width: 80%; */
    overflow-x: auto;

    ::-webkit-scrollbar {
    display: none;
    }
    scrollbar-width: none;
    @media screen and (max-width: 600px) {
      padding: 10px 0px;
      gap: 5px;
    }
    gap: 20px;
`;

const ActiveSetions = styled.div`
    display: flex;
    align-items: center; 
    gap: 20px;

    padding-right: 20px;
    border-right: 1px solid #ffffff;
`;

const InActiveSetions = styled.div`
    display: flex;
    align-items: center; 
    gap: 20px;

    position: relative;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    white-space: nowrap;
   
`;


const SectionTitle = styled.div`
    position: relative;
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    white-space: nowrap;
`;
const Section = styled.div`
    height: 100%;
    /* position: relative; */
    /* display: flex; */
    /* align-items: center;  */
    /* border-radius: 7px; */
    border-top: 1px solid #3E5977;
    border-bottom: 1px solid #3E5977;
    @media screen and (max-width: 600px) {
        /* padding: 5px 0px; */
    }
    &:hover{
      border-bottom: 1px solid #ffffff;
        /* background: #f0f0f0; */
    }
    a{
      color: #ffffff;
    }
`;

const Line = styled.span`
  height: 100%;
  width: 100px;
  background: #ffffff;

    @media screen and (max-width: 600px) {
        padding: 5px 5px;
    }
`;

const Nav = () => {


  return (
    <Container>
      hello
        
    </Container>
   
  );
};

export default Nav;
