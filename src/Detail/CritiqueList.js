import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Link, useNavigate } from "react-router-dom"
import { fireStore } from "../Firebase"
import { updateDoc, doc } from "firebase/firestore"

export default function CritiqueList(props) {
  
  // console.log(number)
  // console.log(props.id)

  const navigate = useNavigate()

  const updateview = () => {
    navigate(`/critique/${props.title}`, {
      state: {
        ment : props,
        views : props.view + 1,
      }
    })
  }

  return (
      <Tr>
        <Tdment onClick={(e) => {
          e.preventDefault()
          updateview()
        }}>
          {/* <Link to={`/critique/${props.title}`} style={{ textDecoration: "none", color: '#000'}}
          state={{ ment : props }}> */}
            {props.title}
        </Tdment>
        <Tdcount>{props.view}</Tdcount>
      </Tr>
  )
}
const Tr = styled.tr`
`
const Tdment = styled.td`
  padding: 16px;
  cursor: pointer;
  color: #000;
`
const Tdcount = styled.td`
  padding: 16px;
  color: #000;
`