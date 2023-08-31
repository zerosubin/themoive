import React, { useState ,useEffect } from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { fireStore } from "../Firebase"
import { getDocs,deleteDoc, doc, collection, query } from "firebase/firestore"

import { useRecoilState } from "recoil"
import { list } from "../recoil/ListitemAtom"

export default function MovielikePage() {
  const naaame = sessionStorage.getItem("user")
  const [likelist, setLikelist] = useRecoilState(list)

  // 좋아요 목록
  const [allLikeList, setAllLikelist] = useState([])

  useEffect (() => {
    async function select() {
      const board = collection(fireStore, "Movies")
      const result = await getDocs(query(board))
      const boards = result.docs.map((doc) => doc.data())
      setAllLikelist(boards)
    }
    select()

    const movielist = []
    // eslint-disable-next-line array-callback-return
    allLikeList && allLikeList.map((product, _) => {
      if(product.name === naaame) {
        movielist.push(product)
      }
    })
    setLikelist(movielist)
  }, [allLikeList, naaame, setLikelist])

  // 좋아요 삭제
  const moviedelete = (title) => {
    likelist && likelist.map(async (product, index) => {
      if(product.movieNm === title) {
        deleteDoc(doc(fireStore, "Movies", `${product.id}`))
      }
    })
    setLikelist(likelist)
  }


  return (
    <Container>
      <Title>나의 좋아요 목록</Title>
      {
        likelist.length > 0
        ?
        <Smtent>좋아하는 영화들이 당신을 기다리고 있어요! 얼른 시청해보세요!</Smtent>
        :
        <Smtent>좋아하는 영화가 있나요? 영화 상세 페이지에서 등록해보세요!</Smtent>
      }
      <ListBox>
        {
          likelist && likelist.map((product, index) => {
            const url = product.image
            return (
              <>
                <Box key={index}>
                  <Link to={`/movies/${product.movieCd}`}  style={{ textDecoration: "none", color: 'black', width: '100%'}} state={{ code : product }}>
                    <Box>
                      <ImgBox>
                        <Img src={url ? url : 'https://placehold.co/213x337?text=No Image'} />
                      </ImgBox>
                      <Bigtitle>{product.movieNm}</Bigtitle>
                    </Box>
                  </Link>
                  <Delete onClick={() => {
                    moviedelete(product.movieNm)}}>x</Delete>
                </Box>
              </>
            )
          })
        }
      </ListBox>
    </Container>
  )
}

const Container = styled.section`
  margin: 150px auto;
  width: 70%;
`
const Title = styled.h2`
  width: 100%;
  margin: auto;
  padding: 24px;

  border-bottom: 1px dashed #cfcfcf;
`

const Smtent = styled.p`
  width: 100%;
  margin: 22px;
`

const ListBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Box = styled.div`
  display: flex;
  margin: 12px;
`

const Bigtitle = styled.h2`
  padding: 28px;
  width: 100%;
`

const ImgBox = styled.div`
  min-height: 337px;
  min-width: 213px;
`

const Img = styled.img`
  height: 100%;
  width: 100%;
`

const Delete = styled.p`
  width: 20%;
  text-align: right;
  font-size: 29px;
  color: red;
  cursor: pointer;
`