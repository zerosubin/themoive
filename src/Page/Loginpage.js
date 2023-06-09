import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export default function Loginpage() {
  return (
    <>
    <Container>
      <Login>로그인</Login>
      <IDinput type='text' placeholder='아이디' required/>
      <PWinput type='password' placeholder='비밀번호' required/>
      <LoginBtn>로그인</LoginBtn>
      <GoogleBtn>구글</GoogleBtn>
      <Link to="/signup" style={{ textDecoration: "none"}}>
        <SingupBtn>회원가입</SingupBtn>
      </Link>
    </Container>
    </>
  )
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  
  margin: 150px auto;
`

const Login = styled.p`
  font-size: 22px;
`

const IDinput = styled.input`
  padding: 10px;
  margin: 2px;
  border-radius: 12px;
  border: 0;

  background-color: #dadada;

  outline: none;
`
const PWinput = styled.input`
  padding: 10px;
  margin: 2px;
  border-radius: 12px;
  border: 0;

  background-color: #dadada;

  outline: none;
`
const LoginBtn = styled.button`
  padding: 12px 24px;
  margin: 12px 0 6px 0;

  border-radius: 12px;
  border: 0;

  background-color: #007542;
  color: #fff;

  cursor: pointer;
`

const GoogleBtn = styled.button`
  padding: 12px 24px;

  border-radius: 12px;
  border: 0;

  background-color: #007542;
  color: #fff;

  cursor: pointer;
`
const SingupBtn = styled.p`
  margin: 12px;
  color: #000;
`