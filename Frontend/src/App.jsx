import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import UserLogin from './components/UserLogin'
import UserView from './components/UserView'
import PrivateRoutes from './components/PrivateRoutes'
import AdminLogin from './components/AdminLogin'
import AdminView from './components/AdminView'
import AddData from './components/AddData'
import EditData from './components/EditData'

function App() {
 

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/userlogin' element={<UserLogin/>}></Route>
    <Route path='/adminlogin' element={<AdminLogin/>}></Route>
    <Route element={<PrivateRoutes/>}>
    <Route path='/userview' element={<UserView/>}></Route>
    <Route path='/adminview' element={<AdminView/>}></Route>
    <Route path='/adddata' element={<AddData/>}></Route>
    <Route path='/adminview/editdata' element={<EditData/>}></Route>
    </Route>
    </Routes>
    </>
  )
}

export default App
