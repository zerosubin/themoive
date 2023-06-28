import React, { useEffect, useState, useRef } from 'react'
import { styled } from 'styled-components'
import { Link, useLocation, useNavigate } from "react-router-dom"
import { fireStore } from "../Firebase"
import { updateDoc, deleteDoc, doc, getDocs, orderBy, addDoc, collection, query } from "firebase/firestore"
import { BsTrashFill } from 'react-icons/bs'

export default function Postspage() {
  const inputRef = useRef(null)
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
      writer.push(product.name)
    }
  })

  const [comment, setComent] = useState('')
  const [commentList, setComentList] = useState([])

  const ThiscommentList = []  // 현재 글의 댓글들(댓글 id 포함)

  const ComentClick = async () => {
    inputRef.current.value = ""
    const docRef = await addDoc(collection(fireStore, "Comments"), {
      id : `${id}`,
      commentuser : writer[0], //현재 로그인한 사용자
      comment : comment,
      timestamp: new Date(),
    })
    console.log(docRef)
    window.location.reload()
  }

  useEffect (() => {
    async function select() {
      const board = collection(fireStore, "Comments")
      const result = await getDocs(query(board, orderBy("timestamp", "asc")))
      const boards = result.docs.map((doc) => doc.data())
      const ids = result.docs.map((doc) => doc.id)
      const editdeletelist = {
        commentid : ids,
        datas : boards,
      }
      setComentList(editdeletelist)
    }
    select()
  }, [])

  // eslint-disable-next-line array-callback-return
  commentList.datas && commentList.datas.map((product, index) => {
    if(product.id === `${id}`) {
      const commentobj = {
        commenttext: product.comment,
        commentuser: product.commentuser,
        commentid: commentList.commentid[index],
      }
      ThiscommentList.push(commentobj)
    }
  })

  const DeleteCommentbtnclick = (props) => {
    deleteDoc(doc(fireStore, "Comments", `${props.commentid}`))
    alert('삭제 되었습니다')
    window.location.reload()
  }

  const [eidtcomment, seteditComment] = useState('')
  const [eidtcommentid, seteditCommentID] = useState('')
  const [editstate, seteditstate] = useState(false)

  const EidtCommentClick = (props) => {
    seteditCommentID(props.commentid)
    console.log(props.commentid)
  }

  const Editfinishbtn = (props) => {
    const updateRef = doc(fireStore, "Comments", `${props.commentid}`)
    updateDoc(updateRef, {
      comment: eidtcomment,
    })
    seteditstate(false)
    alert('수정 되었습니다')
    window.location.reload()
    console.log(props.commentid)
  }

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
      <CommentCON>
        {
          (ThiscommentList.length !== 0)
          ?
          <>
          {
            ThiscommentList && ThiscommentList.map((product, index) => {
              return (
                <SmallCon key={`${index}_${product.commenttext}`}>
                  <div>
                    <CommentUser>{product.commentuser}</CommentUser>
                    {
                      (product.commentid === eidtcommentid) && (editstate === true)
                      ?
                      <div style={{display : 'flex', alignitems: 'center', justifycontent: 'space-between'}}>
                        <CommenteditInput type='text'
                        onChange={(e) => {
                          seteditComment(e.target.value)
                          console.log(e.target.value)
                        }} 
                        onKeyDown={(e) => (e.key === 'Enter' ? Editfinishbtn(product) : null)} />
                        <CommenteidtfinishBtn onClick={() => {
                          Editfinishbtn(product)}}>작성</CommenteidtfinishBtn>
                      </div>
                      :
                      <CommentText>{product.commenttext}</CommentText>
                    }
                  </div>
                  {
                    (writer[0] === product.commentuser)
                    ?
                    <EditbtnsCon>
                      <EditCommentbtn onClick={(e) => {
                        e.preventDefault()
                        seteditstate(true)
                        EidtCommentClick(product)
                      }}>수정하기</EditCommentbtn>
                      <DeleteCommentbtn>
                        <BsTrashFill size={24} 
                          onClick={(e) => {
                            e.preventDefault()
                            DeleteCommentbtnclick(product)
                            //console.log(product.commentid)
                          }}
                        />
                      </DeleteCommentbtn>
                    </EditbtnsCon>
                    :
                    ''
                  }
                </SmallCon>
              )
            })
          }
          </>
          :
          <p style={{ color : '#cfcfcf'}}>댓글을 달아보세요!</p>
        }
        {/* <ComentUser>닉네임</ComentUser>
        <ComentText>댓글내용</ComentText> */}
      </CommentCON>
      <InputCon>
        <CommentInput type='text' placeholder='댓글을 입력하세요'
          onChange={(e) => {
            setComent(e.target.value)
          }} 
          onKeyDown={(e) => (e.key === 'Enter' ? ComentClick() : null)}
          ref={inputRef} />
        {
          (naaame !== null)
          ?
          <CommentInputBtn onClick={ComentClick}
          disabled={comment.length === 0}>작성</CommentInputBtn>
          :
          <CommentInputBtn onClick={() => {
            alert('로그인을 해주세요')
          }}>작성</CommentInputBtn>
        }
      </InputCon>
    </Container>
  )
}

const Container = styled.section`
  margin: 130px auto;
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
const CommentCON = styled.div`
  width: 70%;
  margin: auto;
  padding: 16px;

  border-top: 1px dashed #cfcfcf;
`

const CommentUser = styled.p`
`
const CommentText = styled.span`
  padding: 12px;
  font-family: var(--font-nanumfont-s);
`
const InputCon = styled.div`
  width: 70%;
  margin: 15px auto;
  padding: 18px;
  border: 1px dashed #cfcfcf;

  display: flex;
  justify-content: space-evenly;
`
const CommentInput = styled.input`
  width: 80%;
  padding: 8px;
  border: 0;
  border-bottom: 1px solid #000;
  background-color: #fff;
  color: #000;
  outline: none;
  font-family: var(--font-nanumfont-s);
`

const CommenteditInput = styled.input`
  width: 60%;
  padding: 8px;
  border: 0;
  border-bottom: 1px solid #000;
  background-color: #fff;
  color: #000;
  outline: none;
  font-family: var(--font-nanumfont-s);
`

const CommentInputBtn = styled.button`
  padding: 8px;
  margin: 2px;
  border-radius: 6px;
  border: 0;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`
const SmallCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const EditbtnsCon = styled.div`
  display: flex;
  align-items: center;
`
const EditCommentbtn = styled.button`
  margin: 8px;
  padding: 6px;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
`
const DeleteCommentbtn = styled.button`
  border: 0;
  background-color:transparent;
  cursor: pointer;
`
const CommenteidtfinishBtn = styled.button`
  padding: 12px;
  margin: 6px;
  border-radius: 6px;
  border: 0;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`