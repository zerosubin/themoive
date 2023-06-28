import React, { useState, useRef } from 'react'
import { styled } from 'styled-components'
import { GiPopcorn } from "react-icons/gi"
import { FaList } from "react-icons/fa"
import { FaUserAstronaut } from "react-icons/fa"
import { Link } from "react-router-dom"

import { signOut } from 'firebase/auth'
import { authService } from "../Firebase"

import { Desktop, Tablet, Mobile } from "../Mediaquery"


export default function PageHeader() {
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)
  const [Popup, setPopup] = useState(false)

  const user = authService.currentUser
  console.log(user)

  const Logoutbtn = async () => {
    try {
      await signOut(authService)
      localStorage.removeItem("user")
      alert('로그아웃 하셨습니다')
      window.location.assign("/")
    } catch (err) {
      alert(err.message)
    }
  }

  const naaame = localStorage.getItem("user")
  
  const SearchBtnClick = () => {
    inputRef.current.value = ""
    window.location.replace('/movies')
  }

  const ClickLogo = () => {
    if(Popup === false){
      setPopup(true)
      }else{
      setPopup(false)
      }
  }

  return (
    <HeaderDIV>
      <Container>
        <Desktop>
        <>
            <TitleCon>
              <GiPopcorn size="32"/>
              <Link to="/" style={{ textDecoration: "none"}}>
                <Title>The moive</Title>
              </Link>
              <UL>
                <Link to="/critique" style={{ textDecoration: "none"}}>
                  <Li>
                    <Ment>방구석 평론회</Ment>
                  </Li>
                </Link>
                <Link to="/movies" style={{ textDecoration: "none"}}>
                  <Li>
                    <Ment onClick={() => {
                      window.location.replace('/movies')
                    }}>the moives</Ment>
                  </Li>
                </Link>
              </UL>
            </TitleCon>
            <InputCon>
              <Input type="text" placeholder='영화 제목을 검색하세요!'
                  onChange={(e) => {
                    setSearch(e.target.value)
                    console.log(search)
                  }}
                  ref={inputRef}
              />
              <Link to={'/movies'} state={{ code : search }}>
                <SearchBtn onClick={SearchBtnClick}
                  disabled={search.length === 0}>검색
                </SearchBtn>
              </Link>
              {
                (naaame !== null)
                ? 
                <>
                  <Logouthover>
                    <FaUserAstronaut size="32"/>
                    <Logout onClick={(element) => {
                      element.preventDefault()
                      Logoutbtn()
                    }}
                    >로그아웃</Logout>
                  </Logouthover>
                </>
                : 
                <Link to="/login">
                  <LoginBtn>로그인</LoginBtn>
                </Link>
              }
            </InputCon>
          </>
        </Desktop>
        <Tablet>
        <>
            <TitleCon>
              <FaList size="32" onClick={ClickLogo} style={{  cursor: 'pointer'}}/>
              {/* <GiPopcorn size="32" onClick={ClickLogo} style={{  cursor: 'pointer'}} /> */}
              <Link to="/" style={{ textDecoration: "none"}}>
                <Title>The moive</Title>
              </Link>
            </TitleCon>
            <InputCon>
              <Input type="text" placeholder='영화 제목 검색!'
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }} 
                  ref={inputRef}
              />
              <Link to={'/movies'} state={{ code : search }}>
                <SearchBtn onClick={SearchBtnClick}
                  disabled={search.length === 0}>검색
                </SearchBtn>
              </Link>
              {
                (naaame !== null)
                ? 
                <>
                  <Logouthover>
                    <FaUserAstronaut size="32"/>
                    <Logout onClick={(element) => {
                      element.preventDefault()
                      Logoutbtn()
                    }}
                    >로그아웃</Logout>
                  </Logouthover>
                </>
                : 
                <Link to="/login">
                  <LoginBtn>로그인</LoginBtn>
                </Link>
              }
            </InputCon>
          </>
        </Tablet>
        <Mobile>
        <>
            <TitleCon>
              <FaList size="32" onClick={ClickLogo} style={{  cursor: 'pointer'}}/>
              <Link to="/" style={{ textDecoration: "none"}}>
                <Title>The moive</Title>
              </Link>
            </TitleCon>
            <InputCon>
              {
                (naaame !== null)
                ? 
                <>
                  <Logouthover>
                    <FaUserAstronaut size="32"/>
                    <Logout onClick={(element) => {
                      element.preventDefault()
                      Logoutbtn()
                    }}
                    >로그아웃</Logout>
                  </Logouthover>
                </>
                : 
                <Link to="/login">
                  <LoginBtn>로그인</LoginBtn>
                </Link>
              }
            </InputCon>
          </>
        </Mobile>
      </Container>
        {
          Popup
          ?
          <PopupCon>
              <Input type="text" placeholder='영화 제목 검색!'
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                  ref={inputRef}
              />
              <Link to={'/movies'} state={{ code : search }}>
                <SearchBtnPopup onClick={() => {
                  SearchBtnClick()
                  ClickLogo()
                }}
                  disabled={search.length === 0}>검색
                </SearchBtnPopup>
              </Link>
              <UL>
                <Link to="/critique" style={{ textDecoration: "none"}}>
                  <Li onClick={ClickLogo}>
                    <Ment>방구석 평론회</Ment>
                  </Li>
                </Link>
                <Link to="/movies" style={{ textDecoration: "none"}}>
                  <Li onClick={ClickLogo}>
                    <Ment onClick={() => {
                      window.location.replace('/movies')
                    }}>the moives</Ment>
                  </Li>
                </Link>
              </UL>
          </PopupCon> 
          :
          null
        }
    </HeaderDIV>
  )
}

const HeaderDIV = styled.div`
  width: 100%;
  background-color: #f3e015;
  position: fixed;
  top: 0px;
  
  z-index: 1;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 66px;
`

const TitleCon = styled.div`
  display: flex;
  align-items: center;

  hieght: 35px;
`

const Title = styled.h1`
  padding: 0 8px;
  cursor: pointer;
  color: black;
`
const UL = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`

const Li = styled.li`
  padding: 0 18px;
  margin-top: 8px;
  &:hover {
    transform: scale(1.3);
    transition: transform 0.1s ease-in-out;
  }
`

const Ment = styled.span`
  cursor: pointer;
  color: #000;
`

const InputCon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Logout = styled.div`
  position: absolute;
  right: -36px;
  top: 38px;

  width: 80px;
  heigth: 50px;

  padding: 12px;

  background-color: #180ed0;
  color: #fff;
  border: 0;
  border-radius: 15px;

  text-align: center;
  visibility: hidden;
`
const Logouthover = styled.div`
  cursor: pointer;
  position: relative;

  &:hover {
    color: #180ed0;
  }
  &:hover ${Logout}{
    visibility: visible;
  }
`

const Input = styled.input`
  padding: 12px;
  border-radius: 12px;
  border: 0;
  outline: none;
  background-color: #cfcfcf;
`


const SearchBtn =  styled.button`
  margin: 2px;
  padding: 10px;
  border-radius: 12px;
  border: 0;
  background-color: #000;
  color: #fff;

  cursor: pointer;
`

const LoginBtn = styled.button`
  margin: 8px;
  padding: 14px;
  border-radius: 12px;
  border: 0;
  background-color: #1483ff;
  color: #fff;

  cursor: pointer;
`

const PopupCon = styled.div`
  border: 1px dashed black;
  background-color: #fff;
  border-radius: 12px;

  width: 300px;
  heigth: 300px;

  position: fixed;
  top: 60px;
  left: 56px;

  padding: 8px;

  display: flex;
  justify-content: center;
  flex-direction: column;
`

const SearchBtnPopup = styled.button`
  margin: 2px;
  padding: 10px;
  border-radius: 12px;
  border: 0;
  background-color: #000;
  color: #fff;

  position: fixed;
  top: 68px;
  left: 314px;

  cursor: pointer;
`