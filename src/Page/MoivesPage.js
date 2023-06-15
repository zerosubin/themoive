import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Movie from "../Detail/Movie"
import { MoviesList } from "../Service/ProductAPI"

export default function MoivesPage() {
  const [ThemoviesLists, setThemoviesLists] = useState({})

  useEffect(() => {
    (async () => {
      const Movies = await MoviesList()
      setThemoviesLists(Movies)
    })()
  }, [])

  // console.log(ThemoviesLists.movieList.genreAlt)

  const newlist = []

  // eslint-disable-next-line array-callback-return
  ThemoviesLists.movieList && ThemoviesLists.movieList.map((product, _$) => {
    const genreAlt = product.genreAlt
    if(!genreAlt.includes('성인물(에로)')) {
      newlist.push(product)
    }
  })
  // console.log(newlist)

  return (
    <Container>
      <Title>the movies</Title>
      <MoiveList>
        {
          newlist && newlist.map((product, index) => {
            return (
              <Movie key={index} movieNm={product.movieNm} movieCd={product.movieCd} />
            )
          })
        }
      </MoiveList>
    </Container>
  )
}

const Container = styled.section`
  width: 1300px;
  margin: 130px auto;
`

const Title =  styled.h2`
  margin: 34px 0 46px 24px;
  text-align: center;
`

const MoiveList =  styled.div`
  width: 100%;
  heidth: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 50px;
`