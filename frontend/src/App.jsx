import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './components/Cart'
import About from './pages/About'

function App(){
  return(
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 container py-6">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container text-center">© GiorgiaSport</div>
      </footer>
      <Cart/>
    </div>
  )
}
export default App