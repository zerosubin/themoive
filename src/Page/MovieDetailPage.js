import React, { useState, useEffect } from 'react'
import axios from "axios"
import { styled } from 'styled-components'
import { useLocation } from "react-router-dom"
import Actor from '../Detail/Actor'
import { Desktop, Tablet, Mobile } from "../Mediaquery"

export default function MovieDetailPage() {
  const [MoviesPoster, setMoviesPoster] = useState("")
  const [CODE, setCODE] = useState("")

  const location = useLocation()
  const MovieCode = location.state.code.movieCd
  const MovieName= location.state.code.movieNm

  console.log(location)

  const MoviesPosters = async () => {
    const MoviesListURL = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=3842RN287KYH50333158&title=${MovieName}`
    const reponse = await axios.get(MoviesListURL)
    return reponse.data.Data[0].Result[0].posters
  }

  useEffect(() => {
    (async () => {
      const urls = await MoviesPosters()
      setMoviesPoster(urls)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const lastURL = MoviesPoster.substr(0, 60)
  
  const MovieDetail = async () => {
    const MovieDetailURL = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=62d97be913349468dca58e5ad2fb86ea&movieCd=${MovieCode}`
    const reponse = await axios.get(MovieDetailURL)
    return reponse.data.movieInfoResult.movieInfo
  }

  useEffect(() => {
    (async () => {
      const urls = await MovieDetail()
      setCODE(urls)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let MovieopenDt = CODE.openDt + "";
  const MovieshowTm = CODE.showTm 

  const year = MovieopenDt.substr(0, 4)
  const month = MovieopenDt.substr(4, 2)
  const day = MovieopenDt.substr(6, 2)

  return (
    <>
      <Desktop>
        <Container>
          <ImgCon>
            <Imgdiv>
              <Img src={lastURL && lastURL ? lastURL : 'https://placehold.co/174x249?text=No Image'}/>
            </Imgdiv>
          </ImgCon>
          <MovieDosc>
            <Name>{MovieName}</Name>

            <Title>개봉일</Title>
            <Opendate>
              <Namespan>
                {year}.{month}.{day}
              </Namespan>
            </Opendate>

            <Title>장르</Title>
            <Genres>
                {
                  CODE.genres && CODE.genres.map((product, index) => {
                    return (
                      <Namespan key={index}>
                        {product.genreNm}
                      </Namespan>
                    )
                  })
                } 
            </Genres>

            <Title>상영시간</Title>
            <ShowTm>
              <Namespan>{MovieshowTm}분</Namespan>
            </ShowTm>

            <Title>감독</Title>
            <Director>
                {
                  CODE.directors && CODE.directors.map((product, index) => {
                    return (
                      <Namespan key={index}>
                        {product.peopleNm}
                      </Namespan>
                    )
                  })
                } 
            </Director>

            <Title>출연진</Title>
            <Actors>
              {
                CODE.actors
                ?
                CODE.actors && CODE.actors.map((product, index) => {
                  return (
                    <Actor key={index} peopleNm={product.peopleNm} 
                    cast={product.cast} MovieName={MovieName} />
                  )
                })
                :
                <Namespan>출연진 정보 없음</Namespan>
              } 
            </Actors>
          </MovieDosc>
        </Container>
      </Desktop>
      <Tablet>
        <ContainerTablet>
          <ImgCon>
            <ImgdivTablet>
              <Img src={lastURL && lastURL ? lastURL : 'https://placehold.co/174x249?text=No Image'}/>
            </ImgdivTablet>
          </ImgCon>
          <MovieDosc>
            <Name>{MovieName}</Name>

            <Title>개봉일</Title>
            <Opendate>
              <Namespan>
                {year}.{month}.{day}
              </Namespan>
            </Opendate>

            <Title>장르</Title>
            <Genres>
                {
                  CODE.genres && CODE.genres.map((product, index) => {
                    return (
                      <Namespan key={index}>
                        {product.genreNm}
                      </Namespan>
                    )
                  })
                } 
            </Genres>

            <Title>상영시간</Title>
            <ShowTm>
              <Namespan>{MovieshowTm}분</Namespan>
            </ShowTm>

            <Title>감독</Title>
            <Director>
                {
                  CODE.directors && CODE.directors.map((product, index) => {
                    return (
                      <Namespan key={index}>
                        {product.peopleNm}
                      </Namespan>
                    )
                  })
                } 
            </Director>

            <Title>출연진</Title>
            <Actors>
              {
                CODE.actors
                ?
                CODE.actors && CODE.actors.map((product, index) => {
                  return (
                    <Actor key={index} peopleNm={product.peopleNm} 
                    cast={product.cast} MovieName={MovieName} />
                  )
                })
                :
                <Namespan>출연진 정보 없음</Namespan>
              } 
            </Actors>
          </MovieDosc>
        </ContainerTablet>
      </Tablet>
      <Mobile>
        <ContainerMobile>
          <ImgCon>
            <ImgdivMobile>
              <Img src={lastURL && lastURL ? lastURL : 'https://placehold.co/174x249?text=No Image'}/>
            </ImgdivMobile>
          </ImgCon>
          <MovieDosc>
            <Name>{MovieName}</Name>

            <Title>개봉일</Title>
            <Opendate>
              <Namespan>
                {year}.{month}.{day}
              </Namespan>
            </Opendate>

            <Title>장르</Title>
            <Genres>
                {
                  CODE.genres && CODE.genres.map((product, index) => {
                    return (
                      <Namespan key={index}>
                        {product.genreNm}
                      </Namespan>
                    )
                  })
                } 
            </Genres>

            <Title>상영시간</Title>
            <ShowTm>
              <Namespan>{MovieshowTm}분</Namespan>
            </ShowTm>

            <Title>감독</Title>
            <Director>
                {
                  CODE.directors && CODE.directors.map((product, index) => {
                    return (
                      <Namespan key={index}>
                        {product.peopleNm}
                      </Namespan>
                    )
                  })
                } 
            </Director>

            <Title>출연진</Title>
            <Actors>
              {
                CODE.actors
                ?
                CODE.actors && CODE.actors.map((product, index) => {
                  return (
                    <Actor key={index} peopleNm={product.peopleNm} 
                    cast={product.cast} MovieName={MovieName} />
                  )
                })
                :
                <Namespan>출연진 정보 없음</Namespan>
              } 
            </Actors>
          </MovieDosc>
        </ContainerMobile>
      </Mobile>
    </>

  )
}

const Container = styled.section`
  width: 1200px;
  margin: 130px auto;

  display: grid;
  grid-template-columns: 0.5fr 1fr;

  border-radius: 24px;
`
const ContainerTablet = styled.section`
  margin: 130px auto;

  display: grid;
  grid-template-columns: 0.4fr 0.8fr;

  border-radius: 24px;
`
const ContainerMobile = styled.section`
  margin: 130px auto;

  display: grid;
  justify-items: center;
  grid-template-rows: 0.1fr 0.2fr;

  border-radius: 24px;
`

const Imgdiv = styled.div`
`
const ImgCon = styled.div`
  padding: 28px;
`

const ImgdivTablet = styled.div`
  min-width: 250px;
`
const ImgdivMobile = styled.div`
  max-width: 280px;
`

const Img = styled.img`
  heigth: 100%;
  width: 100%;
  object-fit: cover;
`

const MovieDosc = styled.div`
  padding: 28px;
`
const Name =  styled.h1`
  font-size: 28px;
`

const Title =  styled.h3`
  margin: 6px 0;
`
const Opendate =  styled.div`
  margin: 0;
  padding: 6px;
`
const Genres =  styled.div`
  padding: 6px;
`
const ShowTm =  styled.div`
  margin: 0;
  padding: 6px;
`
const Director =  styled.div`
  padding: 6px;
`
const Actors =  styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 6px;
`
const Namespan =  styled.span`
  margin: 6px;
  font-family: var(--font-nanumfont-s);
`