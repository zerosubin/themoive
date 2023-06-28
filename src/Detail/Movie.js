import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { styled } from 'styled-components'


export default function Movie(props) {
  const [MoviesPoster, setMoviesPoster] = useState("")

  const MoviesPosters = async () => {
    const moviename = props.movieNm

    const MoviesListURL = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=3842RN287KYH50333158&title=${moviename}`
    const reponse = await axios?.get(MoviesListURL)
    return reponse?.data?.Data[0]?.Result[0]?.posters
  }

  useEffect(() => {
    (async () => {
      const urls = await MoviesPosters()
      setMoviesPoster(urls)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const lastURL = MoviesPoster?.substr(0, 60)
  
  return (
    <>
      <Link to={`/movies/${props.movieCd}`}  style={{ textDecoration: "none"}} state={{ code : props }}>
        <MovieCon>
          <MovieImg src={lastURL && lastURL ? lastURL : 'https://placehold.co/174x249?text=No Image'} />
          <MovieTitle>
            {props.movieNm}
          </MovieTitle>
        </MovieCon>
      </Link>
    </>
  )
}

const MovieCon =  styled.div`
  max-width: 186px;
  min-width: 186px;
  height: 280px;
  padding: 20px;
  margin: 22px 12px;

  border: 1px solid #eaeaea;
  background-color: #fff;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.3s ease-in-out;
  }
  z-index: 2;
`

const MovieImg = styled.img`
  max-width: 174.4px;
  min-width: 174.4px;
  max-height: 249.73px;
  min-height: 249.73px;
`

const MovieTitle = styled.h4`
  color: #000;
  text-align: center;
  font-size: 18px;
  margin: 12px;

  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
   
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`