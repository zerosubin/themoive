
import React from 'react'
import { Route, Routes } from "react-router-dom"
import MainPage from "./Page/MainPage.js"
import Loginpage from "./Page/Loginpage.js"
import Signuppage from "./Page/Signuppage.js"
import RoomPage from './Page/RoomPage.js'
import MoivesPage from './Page/MoivesPage.js'

export default function PageNavigator() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} ></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/signup" element={<Signuppage />}></Route>
        <Route path="/critique" element={<RoomPage />}></Route>
        <Route path="/movies" element={<MoivesPage />}></Route>
      </Routes>
    </>
  )
}
