import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'

import { fireStore } from "../Firebase"
import { addDoc, getDocs, collection, query } from "firebase/firestore"

import { Link } from "react-router-dom"

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


export default function WritingPage() {
  const modules = {
    toolbar: {
        container: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
          [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
          ['image', 'video'],
          ['clean']  
        ],
    }
  }

  const [username, setUsername] = useState([])

  useEffect (() => {
    async function select() {
      const board = collection(fireStore, "Users")
      const result = await getDocs(query(board))
      const boards = result.docs.map((doc) => doc.data())
      setUsername(boards)
    }
    select()
  }, [])

  const naaame = localStorage.getItem("user")
  const writer = []

  // eslint-disable-next-line array-callback-return
  username && username.map((product, _) => {
    if(product.email === naaame) {
      console.log(product.name)
      writer.push(product.name)
    }
  })

  console.log(writer)

  const [title, setTitle] = useState("")
  const [text, setText] = useState("")

  const Uploadclick = async () => {
    // eslint-disable-next-line no-unused-vars
    const docRef = await addDoc(collection(fireStore, "List"), {
      title : title,
      text : text,
      view: 0,
      timestamp: new Date(),
      name: writer[0],
    })
    alert('작성이 완료되었습니다!')
  }

  return (
    <Container>
      <DescCon>
        <Titleinput type='text' placeholder='제목을 작성하세요' 
          onChange={(e) => {
            setTitle(e.target.value)
          }} 
        />
        <ReactQuill 
          onChange={setText}
          modules={modules}
          style={{ height: '250px'}}
        />
        <Link to='/critique'>
          <Finishbtn onClick={Uploadclick}>작성하기</Finishbtn>
        </Link>
      </DescCon>
    </Container>
  )
}

const Container = styled.section`
  margin: 150px auto;
  text-align: center; 
`
const Titleinput = styled.input`
  width: 90%;

  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px soild black;

  padding: 12px;
  margin: 24px auto;

  outline: none;
`

const DescCon = styled.div`
  margin: auto 10%;
  position: relative;
`

const Finishbtn = styled.button`
  margin-top: 100px;
  padding: 12px;

  
  border-radius: 12px;
  border: 0;
  background-color: #1483ff;
  color: #fff;
  cursor: pointer;
`