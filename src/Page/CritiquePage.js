/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Link, useNavigate } from "react-router-dom"
import CritiqueList from '../Detail/CritiqueList'

import { fireStore } from "../Firebase"
import { getDocs, collection, orderBy, query } from "firebase/firestore"


export default function CritiquePage() {
  const navigate = useNavigate()
  const [List, setList] = useState([])
  const [username, setUsername] = useState([])
  
  const naaame = localStorage.getItem("user")

  useEffect (() => {
    async function select() {
      const board = collection(fireStore, "List")
      const result = await getDocs(query(board, orderBy("timestamp", "desc")))
      const boards = result.docs.map((doc) => doc.data())
      const id = result.docs.map((doc) => doc.id)
      const IDboards = {
        datalist: boards,
        idnumber: id,
      }
      setList(IDboards)
      setUsername(boards)
    }
    select()
  }, [])

  const selectname = () => {
    navigate('/writing')
  }

  // console.log(naaame)

  return (
    <Container>
        <Title>방구석 평론회</Title>
        {
          (naaame !== null)
          ?
          <Writingbtn onClick={(e) => {
            e.preventDefault()
            selectname()
          }}>글 쓰기</Writingbtn>
          :
          <Writingbtn onClick={() => {
            alert('로그인을 해주세요')}}
          >글 쓰기</Writingbtn>
        }
        <Table>
          <thead>
            <Tr>
              <Tdtitle>글 제목</Tdtitle>
              <Tdnumber>조회수</Tdnumber>
            </Tr>
          </thead>
          <tbody>
              {
                List.datalist && List.datalist.map((product, index) => {
                  return (
                      <CritiqueList key={index} title={product.title}
                        view={product.view} text={product.text} name={product.name} id={List.idnumber[index]} />
                  )
                })
              }
          </tbody>
        </Table>
    </Container>
  )
}

const Container = styled.section`
  margin: 150px auto;
  text-align: center; 
`

const Title = styled.h2`
  width: 80%;
  margin: auto;
  padding: 24px;

  border-bottom: 1px dashed #cfcfcf;
`

const Writingbtn = styled.button`
  margin: 8px;
  padding: 12px;
  position: absolute;
  right: 174px;
  top: 165px;
  border-radius: 12px;
  border: 0;
  background-color: #1483ff;
  color: #fff;
  cursor: pointer;
`
const Table = styled.table`
  width: 80%;
  height: 1cm;
  margin: 24px auto;
`

const Tr = styled.tr`
`
const Tdtitle = styled.td`
  width: 70%;
  border-bottom: 1px solid black;
  padding: 12px;
`
const Tdnumber = styled.td`
  width: 30%;
  border-bottom: 1px solid black;
  padding: 12px;
`
// const Tdment = styled.td`
//   padding: 16px;
// `
// const Tdcount = styled.td`
//   padding: 16px;
// `