import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
const Allroutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Header/>}></Route>
        </Routes>
    </>
  )
}

export default Allroutes