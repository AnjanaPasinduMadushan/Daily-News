import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Contacts from './components/contacts'
import Home from './components/Home'
import Postcomponent from './components/posts'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='contacts' element={<Contacts/>} />
        <Route path='article/:id' element={<Postcomponent/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App