import React from 'react'
import { styled } from 'styled-components'
import { Link } from "react-router-dom"

export default function Actor(props) {

  console.log(props)
  return (
    <Link to={`/${props.peopleNm}`} style={{ textDecoration: "none"}} state={{ code : props }}>
      <Actorname>
        {props.peopleNm} ({props.cast ? props.cast : '...'})
      </Actorname>
    </Link>

  )
}

const Actorname = styled.span`
  margin: 6px;
  font-family: var(--font-nanumfont-s);
  color: #000;
`