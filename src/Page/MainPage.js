import React from 'react'
// import { authService, fireStore } from "../Firebase"
import { authService } from "../Firebase"

export default function MainPage() {

  const user = authService.currentUser
  console.log(user)


  return (
    <>
      <div>MainPage</div>
    </>

  )
}

