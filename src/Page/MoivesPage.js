import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import Movie from "../Detail/Movie"
import axios from "axios"
import { CgSearchLoading } from "react-icons/cg"
import { useInView } from "react-intersection-observer"
import { useLocation, Link } from "react-router-dom"
import { Desktop, Tablet, Mobile } from "../Mediaquery"

export default function MoivesPage() {
  const location = useLocation()
  const word = location?.state?.code

  const [ThemoviesLists, setThemoviesLists] = useState([])
  const [page, setPage] = useState(1)

  const [ref, inView] = useInView()

  const MoviesList = () => {
    axios
      .get(`https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&curPage=${page}&itemPerPage=100&openStartDt=${word && word ? '' : '2023'}&movieNm=${word && word ? word : ''}`)
      .then((res) => {
        const next = res?.data?.movieListResult?.movieList
        setThemoviesLists([...ThemoviesLists, ...next])
        setPage((page) => page + 1)
      })
      .catch((err) => {console.log(err)})
  }

  const Reset = () => {
    axios
    .get(`https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&curPage=${page}&itemPerPage=100&openStartDt=2023`)
    .then((res) => {
      const next = res?.data?.movieListResult?.movieList
      setThemoviesLists([...ThemoviesLists, ...next])
      setPage((page) => page + 1)
    })
    .catch((err) => {console.log(err)})
  }

  useEffect(() => {
    if (inView) {
      MoviesList()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  const newlist = []

  // eslint-disable-next-line array-callback-return
  ThemoviesLists && ThemoviesLists?.map((product, _$) => {
    const genreAlt = product?.genreAlt
    if(!genreAlt.includes('성인물(에로)') && !genreAlt.includes('멜로/로맨스')) {
      newlist?.push(product)
    }
  })

  return (
    <>
      <Desktop>
        <>
          <Container>
            { 
              word 
              ?
              <>
                <PrevBox>
                  <Link to='/movies'>
                    <PrevMent onClick={() => {
                        Reset()
                      }}>전체 목록 확인하기</PrevMent>
                  </Link>
                </PrevBox>
                <Searchment>'{word}'의 검색 결과</Searchment>
              </>
              :
              <Title>the movies</Title>
            }
            <MoiveList>
              {
                newlist && newlist.map((product, index) => {
                  return (
                    <Movie key={`${product.movieCd}_${index}`} movieNm={product.movieNm} movieNmEn={product.movieNmEn} movieCd={product.movieCd} />
                  )
                })
              }
            </MoiveList>
            <NextCon ref={ref}><CgSearchLoading size={24} /><Lastment>And more...</Lastment></NextCon>
          </Container>
        </>
      </Desktop>
      <Tablet>
        <>
          <Container>
            { 
              word 
              ?
              <>
                <PrevBox>
                  <Link to='/movies'>
                    <PrevMent onClick={() => {
                        Reset()
                      }}>전체 목록 확인하기</PrevMent>
                  </Link>
                </PrevBox>
                <Searchment>'{word}'의 검색 결과</Searchment>
              </>
              :
              <Title>the movies</Title>
            }
            <MoiveListTablet>
              {newlist && newlist.map((product, index) => {
                return (
                  <Movie key={`${product.movieCd}_${index}`} movieNm={product.movieNm} movieCd={product.movieCd} />
                )
              })}
            </MoiveListTablet>
            <NextCon ref={ref}><CgSearchLoading size={24} /><Lastment>And more...</Lastment></NextCon>
          </Container>
        </>
      </Tablet>
      <Mobile>
        <>
          <Container>
            { 
              word 
              ?
              <>
                <PrevBox>
                  <Link to='/movies'>
                    <PrevMent onClick={() => {
                        Reset()
                      }}>전체 목록 확인하기</PrevMent>
                  </Link>
                </PrevBox>
                <Searchment>'{word}'의 검색 결과</Searchment>
              </>
              :
              <Title>the movies</Title>
            }
            <MoiveListMobile>
              {newlist && newlist.map((product, index) => {
                return (
                  <Movie key={`${product.movieCd}_${index}`} movieNm={product.movieNm} movieCd={product.movieCd} />
                )
              })}
            </MoiveListMobile>
            <NextCon ref={ref}><CgSearchLoading size={24} /><Lastment>And more...</Lastment></NextCon>
          </Container>
        </>
      </Mobile>
    </>
  )
}

const Container = styled.section`
  max-width: 1300px;
  margin: 130px auto;
`
const Searchment =  styled.h3`
  margin: 28px auto;
  padding: 6px;
  text-align: center;
  font-size: 24px;
`
const Title =  styled.h2`
  margin: 34px 24px 24px 24px;
  padding-bottom: 46px;
  text-align: center;
`
const MoiveList =  styled.div`
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
`

const MoiveListTablet =  styled.div`
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`

const MoiveListMobile =  styled.div`
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`

const PrevBox = styled.div`
  display: flex;
  justify-content: flex-end;
`

const PrevMent = styled.span`
  margin-right: 52px;
  color: #6a6a6a;
  cursor: pointer;
`

const NextCon =  styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  margin: 50px auto;
  padding: 14px;
  border: 0;
  border-radius: 12px;
  background-color: #f3e015;

  cursor: pointer;
`
const Lastment = styled.h2`
  text-align: center;
  margin: 0;
`