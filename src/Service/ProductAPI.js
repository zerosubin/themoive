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

  return reponse.data
}

// export const MoviesList = async () => {

//   const MoviesListURL = 'https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=f5eef3421c602c6cb7ea224104795888&itemPerPage=100&openStartDt=2023'
//   const reponse = await axios.get(MoviesListURL)
//   return reponse.data.movieListResult
// }