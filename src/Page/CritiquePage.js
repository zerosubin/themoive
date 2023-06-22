import React from 'react'
import { styled } from 'styled-components'

export default function CritiquePage() {
  return (
    <Container>
        <Title>방구석 평론회</Title>
        <Table>
          <Tr>
            <Tdtitle>글 제목</Tdtitle>
            <Tdnumber>조회수</Tdnumber>
          </Tr>
          <Tr>
            <Tdment>제목이에용</Tdment>
            <Tdcount>1344</Tdcount>
          </Tr>
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
const Tdment = styled.td`
  padding: 16px;
  text-align: left;
`
const Tdcount = styled.td`
  padding: 16px;
`