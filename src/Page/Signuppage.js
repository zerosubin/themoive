import React from 'react'
import { styled } from 'styled-components'
// import { Link } from 'react-router-dom'

export default function Signuppage() {
  return (
    <>
    <Container>
      <Signup>회원가입</Signup>
      <Nameinput type='text' placeholder='닉네임' required/>
      <Con>
        <IDinput type='text' placeholder='아이디' required/>
        <CheckBtn>중복검사</CheckBtn>
      </Con>
      <PWinput type='password' placeholder='비밀번호' required/>
      <PWcheckinput type='password' placeholder='비밀번호 확인' required/>
      <SignupBtn>회원가입</SignupBtn>
    </Container>
    </>
  )
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  
  margin: 150px auto;
`

const Signup = styled.p`
  font-size: 22px;
`
const Con = styled.div`
  display: flex;
`
const IDinput = styled.input`
  padding: 10px;
  margin: 2px 14px 2px 84px;
  border-radius: 12px;
  border: 0;

  background-color: #dadada;

  outline: none;
`

const Nameinput = styled.input`
  padding: 10px;
  margin: 2px;
  border-radius: 12px;
  border: 0;

  background-color: #dadada;

  outline: none;
`

const CheckBtn =  styled.button`
  padding: 0 10px;
  border-radius: 12px;
  border: 0;

  background-color: #519cff;
  color: #fff;

  cursor: pointer;
`

const PWinput = styled.input`
  padding: 10px;
  margin: 2px;
  border-radius: 12px;
  border: 0;

  background-color: #dadada;

  outline: none;
`
const PWcheckinput = styled.input`
  padding: 10px;
  margin: 2px;
  border-radius: 12px;
  border: 0;

  background-color: #dadada;

  outline: none;
`

const SignupBtn = styled.button`
  padding: 12px 24px;
  margin: 12px 0 6px 0;

  border-radius: 12px;
  border: 0;

  background-color: #007542;
  color: #fff;

  cursor: pointer;
`