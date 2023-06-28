import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from "react-router-dom"

export default function CritiqueList(props) {
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