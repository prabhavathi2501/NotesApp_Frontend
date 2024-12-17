import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from "../pages/Login"
import Singup from "../pages/Singup"
import CreateNotes from "../components/CreateNotes"
import EditNotes from "../components/EditNotes";
import Notes from "../components/Notes"
import Home from '../components/Home'

function AppRoutes() {
  return<>
  <Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/singup" element={<Singup/>}/>
  <Route path="/create" element={<><Home/><CreateNotes/></>}/>
  <Route path="/editnotes/:id" element={<><Home/><EditNotes/></>}/>
  <Route path="/notes" element={<><Home/><Notes/></>}/>
  </Routes>
 </>
 
}

export default AppRoutes