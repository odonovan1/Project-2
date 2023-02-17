import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import PostInterface from './pages/PostInterface'
import Home from './pages/Home'
import PostInfo from './pages/PostInfo'
import About from './pages/About'

const App = () => {



  return (
    <div>
      <Header />
      <main className='main'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="posts" element={<PostInterface />} />
          <Route path='posts/:id' element={<PostInfo />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>


    </div>
  )
}

export default App

