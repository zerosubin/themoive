import React, { useState } from 'react'
import { styled } from 'styled-components'
import { FcGoogle } from "react-icons/fc"
import { Link } from 'react-router-dom'

import { authService, fireStore } from "../Firebase"
import { addDoc, collection } from "firebase/firestore"
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth"

export default function Loginpage() {
  const [loginEmail, setloginEmail] = useState("")
  const [loginPassword, setloginPassword] = useState("")

  const login = async () => {
    try {
      // eslint-disable-next-line no-unused-vars
      const user = await signInWithEmailAndPassword(
        authService,
        loginEmail,
        loginPassword
      )
      localStorage.setItem("user", loginEmail)
      window.location.replace("/")
      alert('로그인에 성공하셨습니다!')
    } catch(error){
      switch (error.code) {
        case "auth/wrong-password":
          return alert("이메일 혹은 비밀번호가 일치하지 않습니다.")
        case "auth/user-not-found":
          return alert("해당 이메일이 없습니다. 회원가입을 해주세요.")
        default:
          return alert("로그인에 실패 하였습니다.")
      }
    }
  }

  const provider = new GoogleAuthProvider() 

  const Googlelogin = async () => {
    signInWithPopup(authService, provider)
      .then(async (data) => {
        localStorage.setItem("user", data.user.email)
        window.location.assign("/")
        return alert('구글 소셜 로그인에 성공하셨습니다!')
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found" || "auth/wrong-password":
            return alert("이메일 혹은 비밀번호가 일치하지 않습니다.")
          case "auth/user-not-found":
            return alert("해당하는 이메일이 없습니다. 회원가입을 진행해주세요.")
          default:
            return alert("로그인에 실패 하였습니다.")
        }
      })
  }

  const GoogleSingup = () => {
    signInWithPopup(authService, provider)
    .then(async (data) => { 
      // eslint-disable-next-line no-unused-vars
      const docRef = await addDoc(collection(fireStore, "Users"), {
        name : data.user.displayName,
        email : data.user.email,
      })
      localStorage.setItem("user", data.user.email)
      window.location.assign("/")
      return alert('구글 소셜 회원가입에 성공하셨습니다!')
    })
    .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found" || "auth/wrong-password":
            return alert("이메일 혹은 비밀번호가 일치하지 않습니다.")
          case "auth/user-not-found":
            return alert("해당하는 이메일이 없습니다. 회원가입을 진행해주세요.")
          default:
            return alert("로그인에 실패 하였습니다.")
        }
      })

  }

  return (
    <>
    <Container>
      <Login>로그인</Login>
      <IDinput type='text' placeholder='이메일'
        onChange={(e) => {
          setloginEmail(e.target.value)
        }}
      />
      <PWinput type='password' placeholder='비밀번호'
        onChange={(e) => {
          setloginPassword(e.target.value)
        }}
      />
      <Link to="/">
        <LoginBtn onClick={(element) => {
          element.preventDefault()
          login()
          }}>로그인</LoginBtn>
      </Link>
      <FcGoogle size="34" onClick={Googlelogin}></FcGoogle>
      <Link to="/signup" style={{ textDecoration: "none"}}>
        <SingupBtn>회원가입</SingupBtn>
      </Link>
      <GoogleSingupBtn onClick={GoogleSingup}>구글 계정으로 회원가입</GoogleSingupBtn>
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
const SingupBtn = styled.p`
  margin: 16px 0 8px 0;
  color: #000;
  cursor: pointer;
`
const GoogleSingupBtn = styled.span`
  color: #000;
  cursor: pointer;
`