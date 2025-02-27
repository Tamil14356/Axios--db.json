import React from 'react'
import Home from './Project9AxiosCard/Components/Home'
import Create from './Project9AxiosCard/Create'
import Edit from './Project9AxiosCard/Edit'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Update from './Update'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App