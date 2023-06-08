
import React from 'react'
import { Route, Routes } from "react-router-dom"
import MainPage from "./Page/MainPage.js"
import Loginpage from "./Page/Loginpage.js"

export default function PageNavigator() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} ></Route>
        <Route path="/login" element={<Loginpage />}></Route>
      </Routes>
    </>
  )
}
