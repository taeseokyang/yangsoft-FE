import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from 'react';
import axios from "axios";
import { PageContainer } from "../../components/StyledComponents";
import Footer from "../../components/Footer";
import TopHeader from "../../components/TopHeader";

const Content = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
  align-items: center;
  max-width: 1200px;
  margin: 0px auto;
  flex-direction: column;
  padding: 10px 20px;
`;

const InputBox = styled.input`
  width: 400px;
  padding: 17px 10px;
  box-sizing: border-box;
  border-radius: 12px;
  background: #f5f5f5;
  font-weight: 700;
  color: #000000;
  border: none;
  outline: none;
`;

const EmailLogin = styled.div`
  width: 400px;
  padding: 15px 0px;
  border-radius: 12px;
  background: #3E5977;
  text-align: center;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer; /* Pointer cursor for the button */
`;

const Or = styled.div`
  width: 400px;
  padding: 10px 0px;
  text-align: center;
  font-weight: 700;
`;

const KakaoLogin = styled.div`
  width: 400px;
  padding: 15px 0px;
  border-radius: 12px;
  background: #FEE502;
  text-align: center;
  font-weight: 700;
`;

const TitleImg = styled.img`
  display: block;
  height: 100px;
  margin: 80px 0px;
  @media screen and (max-width: 600px) {
    height: 50px;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(0);

  const checkEmail = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACK_URL}/account/email-check/${email}`);
      setLoginStatus(response.data.data.status);
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  const handleContinueClick = () => {
    checkEmail();
  };

  const handleSignUp = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACK_URL}/account/signup`, {
        email,
        name,
        password,
      });
      // Handle successful signup (e.g., redirect or show success message)
    } catch (error) {
      console.error("Sign up error:", error);
    }
  };

  useEffect(() => {
    if (email != 0) {
      setLoginStatus(0);
    }
  }, [email]);

  return (
    <PageContainer>
      <TopHeader />
      <Content>
        <Link to={"/"}>
          <TitleImg src="/images/gachonherald.svg" />
        </Link>
        <InputBox 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {loginStatus == 2 && (
          <>
            <InputBox 
              placeholder="Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <InputBox 
              placeholder="Password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <InputBox 
              placeholder="Password Confirm" 
              type="password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </>
        )}
        {loginStatus == 1 && (
          <InputBox 
            placeholder="Password" 
            type="password" 
          />
        )}
        <EmailLogin onClick={handleContinueClick}>
          {loginStatus == 2 ? "Sign Up" : "Continue"}
        </EmailLogin>
        <Or>or</Or> 
          <a href={"https://kauth.kakao.com/oauth/authorize?client_id=ddef038fa084012b787cdc2e0ac14a40&redirect_uri=https://baram.today/oauth/kakao&response_type=code"}>
            <KakaoLogin>Continue with Kakao Talk</KakaoLogin>
          </a>

      </Content>
      <Footer />
    </PageContainer>
  );
};

export default Login;
