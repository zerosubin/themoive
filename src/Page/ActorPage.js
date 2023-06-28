import React, { useState, useEffect } from 'react'
import axios from "axios"
import { styled } from 'styled-components'
import { useLocation } from "react-router-dom"
import { Desktop, Tablet, Mobile } from "../Mediaquery"

export default function ActorPage() {
  const [actorname, setActorname] = useState("")
  const [image, setImage] = useState("")

  const location = useLocation()
  const Name = location.state.code.peopleNm
  const Moviename = location.state.code.MovieName

  const ActornameList = async () => {
    const Actornameurl = `http://kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=62d97be913349468dca58e5ad2fb86ea&peopleNm=${Name}&filmoNames=${Moviename}`
    const reponse = await axios.get(Actornameurl)
    return reponse.data.peopleListResult.peopleList[0]
  }

  useEffect(() => {
    (async () => {
      const urls = await ActornameList()
      setActorname(urls)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const REST_API_KEY = `7699edf46f6cd8691ad147c5e3c03c70`

  const imgSearch = async () => {
    const query = `${Name}`
  
    const url = `https://dapi.kakao.com/v2/search/image?query=${query}&page=1&size=1`
    const config = {headers:`Authorization: KakaoAK ${REST_API_KEY}`}
    const reponse = await axios.get(url, config)
  
    return reponse.data.documents[0]
  }

  useEffect(() => {
    (async () => {
      const urls = await imgSearch()
      setImage(urls)
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(image.image_url)
  const ImageURL = image.image_url
  console.log(ImageURL)

  const list = String(actorname.filmoNames)
  const lastlist = list.split('|')

  return (
    <>
      <Desktop>
        <Container>
          <ImgCon>
            <Img src={ImageURL && ImageURL ? ImageURL : 'https://placehold.co/174x249?text=No Image'} alt='이미지를 찾을 수 없습니다.' />
          </ImgCon>
          <DetailCon>
            <ActorName>{Name} ({actorname.peopleNmEn}) </ActorName>
            <Title>직업</Title>
            <Dosc>
              <Ment>{actorname.repRoleNm}</Ment>
            </Dosc>

            <Title>필모그래피</Title>
            <Dosc>
              {
                lastlist && lastlist.map((product, index) => {
                  return (
                    <Ment>{product},</Ment>
                  )
                })
              }
              <Ment>...</Ment>
            </Dosc>
          </DetailCon>
        </Container>
      </Desktop>
      <Tablet>
        <ContainerTablet>
          <ImgConTablet>
            <Img src={ImageURL && ImageURL ? ImageURL : 'https://placehold.co/174x249?text=No Image'} alt='이미지를 찾을 수 없습니다.' />
          </ImgConTablet>
          <DetailCon>
            <ActorName>{Name} ({actorname.peopleNmEn}) </ActorName>
            <Title>직업</Title>
            <Dosc>
              <Ment>{actorname.repRoleNm}</Ment>
            </Dosc>

            <Title>필모그래피</Title>
            <Dosc>
              {
                lastlist && lastlist.map((product, index) => {
                  return (
                    <Ment>{product},</Ment>
                  )
                })
              }
              <Ment>...</Ment>
            </Dosc>
          </DetailCon>
        </ContainerTablet>
      </Tablet>
      <Mobile>
        <ContainerMobile>
          <ImgConMobile>
            <Img src={ImageURL && ImageURL ? ImageURL : 'https://placehold.co/174x249?text=No Image'} alt='이미지를 찾을 수 없습니다.' />
          </ImgConMobile>
          <DetailCon>
            <ActorName>{Name} ({actorname.peopleNmEn}) </ActorName>
            <Title>직업</Title>
            <Dosc>
              <Ment>{actorname.repRoleNm}</Ment>
            </Dosc>

            <Title>필모그래피</Title>
            <Dosc>
              {
                lastlist && lastlist.map((product, index) => {
                  return (
                    <Ment>{product},</Ment>
                  )
                })
              }
              <Ment>...</Ment>
            </Dosc>
          </DetailCon>
        </ContainerMobile>
      </Mobile>
    </>
  )
}

const Container = styled.section`
  width: 1200px;
  margin: 150px auto;

  display: grid;
  grid-template-columns: 0.5fr 1fr;
`

const ContainerTablet = styled.section`
  margin: 150px auto;

  display: grid;
  grid-template-columns: 0.5fr 1fr;
  align-items: start;
`

const ContainerMobile = styled.section`
  margin: 150px auto;

  display: grid;
  grid-template-rows: 0.5fr 1fr;
  align-items: start;
  justify-items: center;
`

const ImgCon =  styled.div`
  padding: 18px;
  max-heigth: 300px;
`
const ImgConTablet = styled.div`
  padding: 18px;
  min-width: 300px;
`
const ImgConMobile = styled.div`
  padding: 18px;
  max-width: 300px;
`
const Img = styled.img`
  width: 100%;
  heigth: 100%;
  object-fit: cover;
`

const DetailCon = styled.div`
  padding: 18px;
` 

const ActorName = styled.h1`
  font-size: 24px;
`

const Title =  styled.h3`
  margin: 6px 0;
`
const Dosc =  styled.div`
  margin: 0;
  padding: 6px;
`
const Ment = styled.span`
  margin: 6px;
  line-height: 32px;
  font-family: var(--font-nanumfont-s);
`