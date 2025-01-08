import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home'

const RootNav: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default RootNav
