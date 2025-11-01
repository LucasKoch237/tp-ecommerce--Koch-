import React from 'react'
import { Link } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'

export default function Header(){
  const count = useCartStore(state => state.count())
  const toggle = useCartStore(state => state._toggleDrawer)
  return(
    <header className="bg-white shadow">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600">GiorgiaSport</Link>
          <nav className="hidden md:flex gap-4">
            <Link to="/">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/about">Nosotros</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => toggle(true)} className="px-3 py-2 bg-indigo-600 text-white rounded">Carrito ({count})</button>
        </div>
      </div>
    </header>
  )
}