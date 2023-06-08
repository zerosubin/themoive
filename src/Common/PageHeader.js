import React from 'react'
import { styled } from 'styled-components'
import { GiPopcorn } from "react-icons/gi"
import { Link } from "react-router-dom"

export default function PageHeader() {
  return (
    <HeaderDIV>
      <Container>
        <TitleCon>
          <GiPopcorn size="32"/>
          <Link to="/" style={{ textDecoration: "none"}}>
            <Title>The moive</Title>
          </Link>
          <UL>
            <Li>
              <Ment>방구석 평론회</Ment>
            </Li>
            <Li>
              <Ment>the moives</Ment>
            </Li>
          </UL>
        </TitleCon>
        <InputCon>
          <Input type="text" placeholder='영화 제목을 검색하세요!' />
          <Link to="/login">
            <LoginBtn>로그인</LoginBtn>
          </Link>
        </InputCon>
      </Container>
    </HeaderDIV>
  )
}

const HeaderDIV = styled.div`
  width: 100%;
  border-bottom: 1px groove black;
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
`

const Ment = styled.span`
  cursor: pointer;
`

const InputCon = styled.div`
`

const Input = styled.input`
  padding: 12px;
  border-radius: 12px;
  border: 0;
  outline: none;
  background-color: #cfcfcf;
  font-family: var(--font-nanumfont);
`

const LoginBtn = styled.button`
  margin: 8px;
  padding: 14px;
  border-radius: 12px;
  border: 0;
  background-color: #007542;
  color: #fff;

  font-family: var(--font-nanumfont);
  cursor: pointer;
`