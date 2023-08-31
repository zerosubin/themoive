import React, { useState } from 'react'
import { styled } from 'styled-components'

import { authService, fireStore } from "../Firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore"

export default function Signuppage() {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userPasswordCheck, setUserPasswordCheck] = useState("")



  const User = async () => {   
    if(userPassword !== userPasswordCheck) {
      return alert('비밀번호를 다시 확인해주세요')
    } else {
      try {
        // eslint-disable-next-line no-unused-vars
        const user = await createUserWithEmailAndPassword(
            authService,
            userEmail,
            userPassword
        )
        // eslint-disable-next-line no-unused-vars
        const docRef = await addDoc(collection(fireStore, "Users"), {
          name : userName,
          email : userEmail,
        })
        window.location.assign("/login")
        return alert('회원가입에 성공하셨습니다. 로그인을 진행해주세요!')
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found" || "auth/wrong-password":
            return alert("이메일 혹은 비밀번호가 일치하지 않습니다.")
          case "auth/email-already-in-use":
            return alert("다른 사용자가 이미 사용 중인 이메일입니다. 다른 이메일을 입력해주세요.")
          case "auth/weak-password":
            return alert("비밀번호는 6글자 이상이어야 합니다.")
          case "auth/network-request-failed":
            return alert("네트워크 연결에 실패 하였습니다.")
          case "auth/invalid-email":
            return alert("잘못된 이메일 형식입니다.")
          case "auth/internal-error":
            return alert("잘못된 요청입니다.")
          default:
            return alert("로그인에 실패 하였습니다.")
        }
      }
    }
  }

  return (
    <>
      <Container>
        <Signup>회원가입</Signup>
        <Nameinput type='text' placeholder='닉네임' required
          onChange={(e) => {
            setUserName(e.target.value)
          }}
        />
        <Con>
          <IDinput type='text' placeholder='이메일' required 
            onChange={(e) => {
              setUserEmail(e.target.value)
            }}
          />
        </Con>
        <PWinput type='password' placeholder='비밀번호 (6자리 이상)' required
          onChange={(e) => {
            setUserPassword(e.target.value)
          }}
        />
        <PWcheckinput type='password' placeholder='비밀번호 확인' required
          onChange={(e) => {
            setUserPasswordCheck(e.target.value)
          }}
        />
        <SignupBtn 
          onClick={(element) => {
            element.preventDefault()
            User()
          }}>회원가입</SignupBtn>
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
  margin: 2px 14px 2px 14px;
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