import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { BoxYear, Boxmonth, Boxdate } from "../Date/Dateseting"
import { BoxOfficeList, videoSearch } from "../Service/ProductAPI"
import Lank from "../Detail/Lank"
import { Desktop, Tablet, Mobile } from "../Mediaquery"

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

  const codeList = []

  // eslint-disable-next-line array-callback-return
  video.documents && video.documents.map((product, _$) => {
    const TodayurlList = product.url + "";
    const code = TodayurlList.substr(31)
    codeList.push(code)
    }
  )

  const randomNum = Math.floor(Math.random() * 10)

  const TodayMoiveCode = codeList[randomNum]
  const LinkScr = `https://www.youtube-nocookie.com/embed/${TodayMoiveCode}`


  return (
    <>
      <Desktop>
        <>
          <Container>
            <BoxOfficeCon>
              <Box>
                <Title>일간 박스오피스</Title>
                <Day>{`${BoxYear}-${Boxmonth}-${Boxdate}`}</Day>
                <List>
                  {BoxOffice?.dailyBoxOfficeList && BoxOffice?.dailyBoxOfficeList.map((product, index) => {
                    return (
                      <>
                        <Lank key={index} rank={product.rank}
                          movieNm={product.movieNm} movieCd={product.movieCd} />
                      </>
                    )
                  })}
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
        </>
      </Desktop>
      <Tablet>
        <>
          <ContainerTablet>
            <BoxOfficeCon>
              <Box>
                <Title>일간 박스오피스</Title>
                <Day>{`${BoxYear}-${Boxmonth}-${Boxdate}`}</Day>
                <List>
                  {BoxOffice?.dailyBoxOfficeList && BoxOffice?.dailyBoxOfficeList.map((product, index) => {
                    return (
                      <>
                        <Lank key={`${index}_${product.rnum}`} rank={product.rank}
                          movieNm={product.movieNm} movieNmEn={product.movieNmEn} movieCd={product.movieCd} />
                      </>
                    )
                  })}
                </List>
              </Box>
            </BoxOfficeCon>
            <TodayYoutubeCon>
              <YoutuuBox>
                <Title>오늘의 예고편</Title>
                <YouCon>
                  <>
                    <Iframe width="440" height="300"
                      src={LinkScr}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    >
                    </Iframe>
                  </>
                </YouCon>
              </YoutuuBox>
            </TodayYoutubeCon>
          </ContainerTablet>
        </>
      </Tablet>
      <Mobile>
        <>
          <ContainerTablet>
            <BoxOfficeCon>
              <Box>
                <Title>일간 박스오피스</Title>
                <Day>{`${BoxYear}-${Boxmonth}-${Boxdate}`}</Day>
                <List>
                  {BoxOffice?.dailyBoxOfficeList && BoxOffice?.dailyBoxOfficeList.map((product, index) => {
                    return (
                      <>
                        <Lank key={`${product.rnum}_${index}`} rank={product.rank}
                          movieNm={product.movieNm} movieCd={product.movieCd} />
                      </>
                    )
                  })}
                </List>
              </Box>
            </BoxOfficeCon>
            <TodayYoutubeCon>
              <YoutuuBox>
                <Title>오늘의 예고편</Title>
                <YouCon>
                  <>
                    <Iframe width="350" height="280"
                      src={LinkScr}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                    </Iframe>
                  </>
                </YouCon>
              </YoutuuBox>
            </TodayYoutubeCon>
          </ContainerTablet>
        </>
      </Mobile>
    </>
  )
}

const Container = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1.2fr 1.8fr;

  width: 1300px;
  margin: 80px auto;
`

const ContainerTablet = styled.section`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 1fr;


  margin: 80px auto;
`

const BoxOfficeCon = styled.div`
  width: 100%;
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

const TodayYoutubeCon = styled.div`
`

const YoutuuBox =  styled.div`
  margin: 80px 40px;
  padding: 36px;
  
  background-color: #eee;
  border-radius: 15px;
`

const YouCon =  styled.div`
  width: 100%;
  heigth: 100%;
`

const Iframe =  styled.iframe`
  margin: 26px auto;
`