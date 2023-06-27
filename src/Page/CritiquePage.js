/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Link, useNavigate } from "react-router-dom"
import CritiqueList from '../Detail/CritiqueList'

import { fireStore } from "../Firebase"
import { getDocs, collection, orderBy, query, limit, startAfter, endBefore } from "firebase/firestore"
import { async } from '@firebase/util'


export default function CritiquePage() {
  const navigate = useNavigate()
  const [List, setList] = useState([])
  const [username, setUsername] = useState([])
  const [pagenum, setpagenum] = useState() 
  const [nextpagenum, setNextpagenum] = useState() 
  
  const naaame = localStorage.getItem("user")

  useEffect (() => {
    async function select() {
      const board = collection(fireStore, "List")
      const result = await getDocs(query(board, orderBy("timestamp", "desc"), limit(3)))
      const boards = result.docs.map((doc) => doc.data())
      const id = result.docs.map((doc) => doc.id)
      const IDboards = {
        datalist: boards,
        idnumber: id,
      }

      setList(IDboards)
      setUsername(boards)
      setNextpagenum(result)
      console.log(result.docs)
      setpagenum(result)
    }
    select()
  }, [])

  const selectname = () => {
    navigate('/writing')
  }

  const prevpage = async () => {
    // const lastVisible = pagenum.docs[pagenum.docs.length - 1]
    // console.log(pagenum.docs)

    const nextboard = collection(fireStore, "List")
    const nextresult = await getDocs(query(nextboard, orderBy("timestamp", "desc"), limit(3)))
    
    const nextboards = pagenum.docs.map((doc) => doc.data())
    const nextid = pagenum.docs.map((doc) => doc.id)
    const IDboards = {
      datalist: nextboards,
      idnumber: nextid,
    }
    setList(IDboards)
    setUsername(nextboards)
    setNextpagenum(nextresult)
  }

  const nextpage = async () => {
    const lastVisible = nextpagenum.docs[nextpagenum.docs.length - 1]

    const nextboard = collection(fireStore, "List")
    const nextresult = await getDocs(query(nextboard, orderBy("timestamp", "desc"), startAfter(lastVisible), limit(3)))
    
    const nextboards = nextresult.docs.map((doc) => doc.data())
    const nextid = nextresult.docs.map((doc) => doc.id)
    const IDboards = {
      datalist: nextboards,
      idnumber: nextid,
    }
    setList(IDboards)
    setUsername(nextboards)
    setNextpagenum(nextresult)
    console.log(nextresult.docs)
  }


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
        <button onClick={prevpage}>처음으로</button>
        {
          (nextpagenum?.docs?.length < 3)
          ?
          ''
          :
          <button onClick={nextpage}>{`>`}</button>
        }
        {/* <button onClick={nextpage}>다음</button> */}
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