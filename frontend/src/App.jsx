import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';



function App() {

  return (
    <>
    <div className='nav-router bg-indigo-300'>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Hero/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
