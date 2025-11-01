import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'
import ProductCard from './ProductCard'
import { useCartStore } from '../store/useCartStore'

export default function ProductList(){
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const add = useCartStore(state => state.add)

  useEffect(()=>{
    fetchProducts()
      .then(data => setProducts(data))
      .catch(e => setError(e.message))
      .finally(()=> setLoading(false))
  },[])

  if(loading) return <div>Cargando productos, por favor aguarde.</div>
  if(error) return <div className="text-red-600">Error: {error}</div>

  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p =>(
        <ProductCard key={p.id} product={p} onAdd={add}/>
      ))}
    </div>
  )
}