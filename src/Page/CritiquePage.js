/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useNavigate } from "react-router-dom"
import CritiqueList from '../Detail/CritiqueList'

import { fireStore } from "../Firebase"
import { getDocs, collection, orderBy, query, limit, startAfter } from "firebase/firestore"


export default function CritiquePage() {
  const navigate = useNavigate()

  const [List, setList] = useState([])
  const [pagenum, setpagenum] = useState() 
  const [nextpagenum, setNextpagenum] = useState() 
  
  const naaame = sessionStorage.getItem("user")

  useEffect (() => {
    async function select() {
      const board = collection(fireStore, "List")
      const result = await getDocs(query(board, orderBy("timestamp", "desc"), limit(5)))
      const boards = result.docs.map((doc) => doc.data())
      const id = result.docs.map((doc) => doc.id)
      const IDboards = {
        datalist: boards,
        idnumber: id,
      }

      setList(IDboards)
      setNextpagenum(result)
      setpagenum(result)
    }
    select()
  }, [])

  const selectname = () => {
    navigate('/writing')
  }

  const prevpage = async () => {
    const nextboard = collection(fireStore, "List")
    const nextresult = await getDocs(query(nextboard, orderBy("timestamp", "desc"), limit(5)))
    
    const nextboards = pagenum.docs.map((doc) => doc.data())
    const nextid = pagenum.docs.map((doc) => doc.id)
    const IDboards = {
      datalist: nextboards,
      idnumber: nextid,
    }
    setList(IDboards)
    setNextpagenum(nextresult)
  }

  const nextpage = async () => {
    const lastVisible = nextpagenum.docs[nextpagenum.docs.length - 1]

    const nextboard = collection(fireStore, "List")
    const nextresult = await getDocs(query(nextboard, orderBy("timestamp", "desc"), startAfter(lastVisible), limit(5)))
    
    const nextboards = nextresult.docs.map((doc) => doc.data())
    const nextid = nextresult.docs.map((doc) => doc.id)
    const IDboards = {
      datalist: nextboards,
      idnumber: nextid,
    }
    setList(IDboards)
    setNextpagenum(nextresult)
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
        <Gobackbtn onClick={prevpage}>처음으로</Gobackbtn>
        {
          (nextpagenum?.docs?.length < 5)
          ?
          ''
          :
          <Nextbtn onClick={nextpage}>{`>`}</Nextbtn>
        }
    </Container>
  )
}

const Container = styled.section`
  margin: 130px auto;
  text-align: center; 
`

const Title = styled.h2`
  width: 70%;
  margin: auto;
  padding: 24px;

  border-bottom: 1px dashed #cfcfcf;
`

const Writingbtn = styled.button`
  margin: 8px;
  padding: 12px;
  position: absolute;
  right: 16%;
  top: 20%;
  border-radius: 12px;
  border: 0;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`
const Table = styled.table`
  width: 70%;
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

const Gobackbtn = styled.button`
  padding: 8px;
  margin: 4px;
  border: 0;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #dcdcdc;
  }
`

const Nextbtn = styled.button`
  padding: 8px;
  margin: 4px;
  border: 0;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #dcdcdc;
  }
`