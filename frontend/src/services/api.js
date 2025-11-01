const BASE = 'http://localhost:4000'

export async function fetchProducts(){
  const res = await fetch(`${BASE}/products`)
  if(!res.ok) throw new Error('Error al obtener productos')
  return res.json()
}

export async function postOrder(order){
  const res = await fetch(`${BASE}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  })
  if(!res.ok) throw new Error('Error al crear orden')
  return res.json()
}
