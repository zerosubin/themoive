
import React from 'react'
import { Route, Routes } from "react-router-dom"
import MainPage from "./Page/MainPage.js"
import Loginpage from "./Page/Loginpage.js"
import Signuppage from "./Page/Signuppage.js"
import CritiquePage from './Page/CritiquePage.js'
import MoivesPage from './Page/MoivesPage.js'
import MovieDetailPage from './Page/MovieDetailPage.js'
import ActorPage from './Page/ActorPage.js'
import WritingPage from './Page/WritingPage.js'
import Postspage from './Page/Postspage.js'
import EditPage from './Page/EditPage.js'

export default function PageNavigator() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} ></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/signup" element={<Signuppage />}></Route>
        <Route path="/critique" element={<CritiquePage />}></Route>
        <Route path="/critique/*" element={<Postspage />}></Route>
        <Route path="/writing" element={<WritingPage />}></Route>
        <Route path="/eidt" element={<EditPage />}></Route>
        <Route path="/movies" element={<MoivesPage />}></Route>
        <Route path="/movies/*" element={<MovieDetailPage />}></Route>
        <Route path="/*" element={<ActorPage />}></Route>
      </Routes>
    </>
  )
}
