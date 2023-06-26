import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { fireStore } from "../Firebase"
import { updateDoc, deleteDoc, doc, getDocs, collection, query } from "firebase/firestore"

export default function Postspage() {
  const navigate = useNavigate()
  const location = useLocation()
  const titlement = location.state.ment.title
  const textment = location.state.ment.text
  const id = location.state.ment.id
  const username = location.state.ment.name
  const newview = location.state.views

  const naaame = localStorage.getItem("user")

  const updateRef = doc(fireStore, "List", `${id}`)
  updateDoc(updateRef, {
    view: newview
  })

  const Deletebtnclick = () => {
    deleteDoc(doc(fireStore, "List", `${id}`))
    alert('삭제 되었습니다')
    navigate(`/critique`)
  }

  const [usernameList, setUsernameList] = useState([])

  useEffect (() => {
    async function select() {
      const board = collection(fireStore, "Users")
      const result = await getDocs(query(board))
      const boards = result.docs.map((doc) => doc.data())
      setUsernameList(boards)
    }
    select()
  }, [])

  const writer = []

  // eslint-disable-next-line array-callback-return
  usernameList && usernameList.map((product, _) => {
    if(product.email === naaame) {
      // setWriter(product.name)
      writer.push(product.name)
    }
  })

  // console.log(writer[0])
  // console.log(username)

  return (
    <Container>
      <CON>
        <Link to='/critique' style={{ textDecoration: "none"}}>
          <MainTitle>목록으로 돌아가기</MainTitle>
        </Link>
      </CON>
      <CON>
        <Title>{titlement}</Title>
        <Viewnum>조회수<Smallment>{newview}</Smallment><br />작성자<Smallment>{username}</Smallment></Viewnum>
      </CON>
      <Text dangerouslySetInnerHTML={{ __html : textment  }} />
      {
        (writer[0] === username)
        ?
        <UserbtnCon>
          <Link to='/eidt' style={{ textDecoration: "none"}} state={{ editor : location }}>
            <Editorbtn>수정하기</Editorbtn>
          </Link>
          <Deletebtn onClick={(e) => {
            e.preventDefault()
            Deletebtnclick()
          }}>삭제하기</Deletebtn>
        </UserbtnCon>
        :
        ''
      }
    </Container>
  )
}

const Container = styled.section`
  margin: 150px auto;
`
const MainTitle = styled.button`
  padding: 24px;

  border-radius: 12px;
  border: 0;
  background-color: transparent;
  color: #cfcfcf;
  cursor: pointer;
`
const CON = styled.div`
  width: 70%;
  margin: auto;
  padding: 16px;

  border-bottom: 1px dashed #cfcfcf;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled.h3`
`
const Viewnum = styled.span`
  padding: 4px;
`
const Smallment = styled.span`
  font-family: var(--font-nanumfont-s);
  padding: 8px;
`
const Text = styled.p`
  width: 70%;
  margin: auto;
  padding: 32px;
  font-family: var(--font-nanumfont-s);
`
const UserbtnCon = styled.div`
  width: 70%;
  margin: auto;
  padding: 24px;
  text-align: right;
`
const Editorbtn = styled.button`
  padding: 16px;
  margin: 8px;
  border-radius: 12px;
  border: 0;
  background-color: #cfcfcf;
  cursor: pointer;
`

const Deletebtn = styled.button`
  padding: 16px;
  margin: 8px;
  border-radius: 12px;
  border: 0;
  background-color: #cfcfcf;
  cursor: pointer;
`