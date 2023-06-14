import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { BoxYear, Boxmonth, Boxdate } from "../Date/Dateseting"
import { BoxOfficeList, videoSearch } from "../Service/ProductAPI"
import Lank from "../BoxList/Lank"

//import { authService } from "../Firebase"

export default function MainPage() {
  const [BoxOffice, setBoxOffice] = useState({})
  const [video, setVideo] = useState({})

  useEffect(() => {
    (async () => {
      const BoxOffice = await BoxOfficeList()
      setBoxOffice(BoxOffice)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const video = await videoSearch()
      setVideo(video)
    })()
  }, [])

  // console.log(video)

  const codeList = []

  // eslint-disable-next-line array-callback-return
  video.documents && video.documents.map((product, _$) => {
    const TodayurlList = product.url
    const code = TodayurlList.substr(31)
    codeList.push(code)
    }
  )

  // video.documents && video.documents.forEach(element => {
  //   const TodayurlList = element.url
  //   const code = TodayurlList.substr(31)
  //   codeList.push(code)
  //   return (
  //     <div key={element}>
  //     </div>
  //   )
  // })




  const randomNum = Math.floor(Math.random() * 10)

  const TodayMoiveCode = codeList[randomNum]
  const LinkScr = `https://www.youtube-nocookie.com/embed/${TodayMoiveCode}`


  return (
    <Container>
      <BoxOfficeCon>
        <Box>
          <Title>일간 박스오피스</Title>
          <Day>{`${BoxYear}-${Boxmonth}-${Boxdate}`}</Day>
          <List>
            {/* {
              Array.from({ length: 10 }).map((_, index) => {
                return (
                  <Lank key={index}><MoiveTitle>영화제목</MoiveTitle></Lank>
                )
              })
            } */}
            {
              BoxOffice.dailyBoxOfficeList && BoxOffice.dailyBoxOfficeList.map((product, index) => {
                return (
                  <>
                      <Lank key={`${product.rnum}_${index}`} rank={product.rank} 
                      movieNm={product.movieNm} movieCd={product.movieCd} />
                  </>                  
                )
              })
            }
          </List>
        </Box>
      </BoxOfficeCon>
      <TodayYoutubeCon>
        <YoutuuBox>
          <Title>오늘의 예고편</Title>
          <YouCon>
            <>
              <Iframe width="660" height="400" 
                src={LinkScr}
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                >
              </Iframe>
            </>
          </YouCon>
        </YoutuuBox>
      </TodayYoutubeCon>
    </Container>

  )
}

const Container = styled.section`
  display: grid;
  grid-template-columns: 1.2fr 1.8fr;

  width: 1300px;
  margin: 80px auto;
`
const BoxOfficeCon = styled.div`

`

const Box = styled.div`
  margin: 80px 40px;
  padding: 36px;
  border: 0;
  background-color: #f3e015;
  border-radius: 12px;
`

const Title = styled.h2`
  text-align: center;
  margin: 6px;
`

const Day = styled.p`
  margin-bottom: 32px;
  text-align: center;
`

const List = styled.ul`
  padding: 0;
`
// const Lank =  styled.li`
//   display: flex;
//   align-items: baseline;

//   gap: 12px;
//   margin: 16px 8px;
// `
// const NumCon =  styled.div`
//   width: 24px;
//   height: 24px;
//   padding-top: 6px;

//   border-radius: 8px;
//   background-color: #1483ff;
//   color: #fff;

//   text-align: center;
// `

// const MoiveTitle = styled.span`
// `

const TodayYoutubeCon = styled.div`

`

const YoutuuBox =  styled.div`
  margin: 80px 40px;
  padding: 36px;
`

const YouCon =  styled.div`
  width: 100%;
  heigth: 100%;
`

const Iframe =  styled.iframe`
  margin: 26px auto;
`