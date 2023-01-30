import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Contacts from './components/contacts'
import Home from './components/Home'
import Postcomponent from './components/posts'
import Header from './components/header'
import MainLayouts from './layouts/mainLayouts'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <MainLayouts>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='contacts' element={<Contacts/>} />
          <Route path='article/:id' element={<Postcomponent/>} />
        </Routes>
      </MainLayouts>
    </BrowserRouter>
  )
}

export default App