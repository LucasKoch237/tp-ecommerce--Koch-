import React from 'react'

export default function ProductCard({product, onAdd}){
  return(
    <div className="bg-white border rounded-md overflow-hidden shadow-sm">
      <img className="w-full h-44 object-cover" src={product.image} alt={product.name} />
      <div className="p-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.description.length>80?product.description.slice(0,77)+'...':product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <strong>${product.price}</strong>
          <button onClick={() => onAdd(product)} className="px-3 py-1 bg-indigo-600 text-white rounded">Agregar</button>
        </div>
      </div>
    </div>
  )
}