import axios from "axios"
import { BoxYear, Boxmonth, Boxdate } from "../Date/Dateseting"

export const BoxOfficeList = async () => {

  const BoxOfficeURL = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=62d97be913349468dca58e5ad2fb86ea&targetDt=${BoxYear}${Boxmonth}${Boxdate}`
  const reponse = await axios.get(BoxOfficeURL)
  return reponse.data.boxOfficeResult
}

const REST_API_KEY = `7699edf46f6cd8691ad147c5e3c03c70`

export const videoSearch = async () => {
  const query = '예고편'

  const url = `https://dapi.kakao.com/v2/search/vclip?query=${query}&page=1`
  const config = {headers:`Authorization: KakaoAK ${REST_API_KEY}`}
  const reponse = await axios.get(url, config)

  // const reponse = await axios.get(result)
  return reponse.data
}


// const Kakao = axios.create({
//   baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
//   headers: {
//     Authorization: `KakaoAK ${REST_API_KEY}`,
//     query: '?sort=accuracy&size=10&query=예고편',
//   },
// })

// // search book api
// export const videoSearch = (params) => {
//   return Kakao.get('/v2/search/vclip', { params })
// }
