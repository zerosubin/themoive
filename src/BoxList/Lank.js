import React from 'react'
import { Link } from "react-router-dom"
import { styled } from 'styled-components'

export default function Lank(props) {
  return (
    <>
      <Link to={`/movies/${props.movieCd}`} style={{ textDecoration: "none"}}>
        <Con>
          <NumCon>{`${props.rank}`}</NumCon>
          <MoiveTitle>{props.movieNm}</MoiveTitle>
        </Con>
      </Link>
    </>
  )
}

const Con =  styled.li`
  display: flex;
  align-items: baseline;

  gap: 22px;
  margin: 12px 2px;
`

const NumCon =  styled.div`
  width: 24px;
  height: 24px;
  padding-top: 6px;

  border-radius: 8px;
  background-color: #1483ff;
  color: #fff;

  text-align: center;
`

const MoiveTitle = styled.span`
  color: #000;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease-in-out;
  }
`