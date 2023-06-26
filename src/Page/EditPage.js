import React, { useState, useEffect }  from 'react'
import { styled } from 'styled-components'
import { useNavigate, useLocation } from "react-router-dom"

import { updateDoc, doc } from "firebase/firestore"
import { fireStore } from "../Firebase"

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function EditPage() {
  const navigate = useNavigate()

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

    const location = useLocation()
    console.log(location.state.editor.state.ment)
    const product = location.state.editor.state.ment
    console.log(product)

    const [eidtTitle, setTitle] = useState("")
    const [eidtText, setText] = useState("")
    const [postID, setpostID] = useState("")
    
    useEffect(() => {
      setTitle(product.title)
      setText(product.text)
      setpostID(product.id)
    }, [])

    const EidtClick = () => {
      const updateRef = doc(fireStore, "List", `${postID}`)
      updateDoc(updateRef, {
        title: eidtTitle,
        text: eidtText,
      })
      console.log(eidtText)
      alert('수정 완료!')
      navigate(`/critique`)
    }


    // const Uploadclick = async () => {
    //   const docRef = await addDoc(collection(fireStore, "List"), {
    //     title : title,
    //     text : text,
    //     view: 0,
    //     timestamp: new Date(),
    //     name: writer,
    //   })
    //   console.log(docRef)
    //   alert('작성이 완료되었습니다!')
    // }
    console.log(eidtTitle)

  return (
    <Container>
      {/* <TitleCon>
        <Titleinput type='text' placeholder='제목을 작성하세요' 
          onChange={setTitle} />
      </TitleCon> */}
      <DescCon>
        <Titleinput type='text' placeholder='제목을 작성하세요'
          value={eidtTitle}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <ReactQuill 
          onChange={setText}
          modules={modules}
          style={{ height: '250px'}}
          value={eidtText}
        />
        {/* 작성한 ㅓ 보여지는 거
        <div dangerouslySetInnerHTML={{ __html :  text  }} /> */}
        {/* <Link to='/critique' >
          <Finishbtn onClick={EidtClick}>수정 완료</Finishbtn>
        </Link> */}
        <Finishbtn onClick={(e) => {
          e.preventDefault()
          EidtClick()
        }}>수정 완료</Finishbtn>
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
  margin: auto 150px;
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