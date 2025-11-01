import React from 'react'
import { useCartStore } from '../store/useCartStore'
import { postOrder } from '../services/api'

export default function Cart(){
  const items = useCartStore(state => state.items)
  const inc = useCartStore(state => state.inc)
  const dec = useCartStore(state => state.dec)
  const remove = useCartStore(state => state.remove)
  const clear = useCartStore(state => state.clear)
  const total = useCartStore(state => state.total())
  const count = useCartStore(state => state.count())
  const setState = useCartStore.setState

  React.useEffect(()=>{
    if(!useCartStore.getState()._toggleDrawer){
      setState({_drawerOpen:false, _toggleDrawer: (v) => setState({_drawerOpen: v})})
    }
  }, [])

  const open = useCartStore(state => state._drawerOpen)

  async function handleCheckout(){
    const customer = {name: 'Cliente Demo', email: 'demo@example.com', phone: '0000'}
    const order = {items, total: total, customer, createdAt: new Date().toISOString()}
    try{
      await postOrder(order)
      alert('Compra realizada con éxito!')
      clear()
      setState({_drawerOpen:false})
    }catch(e){
      alert('Error al procesar la orden: ' + e.message)
    }
  }

  return(
    <div aria-hidden={!open} className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl transform transition-transform ${open? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-4 flex items-center justify-between border-b">
        <h3 className="text-lg font-semibold">Carrito ({count})</h3>
        <button onClick={() => setState({_drawerOpen:false})} className="px-2">Cerrar</button>
      </div>
      <div className="p-4 overflow-y-auto" style={{height:'calc(100% - 160px)'}}>
        {items.length===0 ? <div className="text-gray-600">Carrito vacío</div> : (
          items.map(i => (
            <div key={i.id} className="flex items-center justify-between gap-4 py-3 border-b">
              <div className="flex-1">
                <div className="font-medium">{i.name}</div>
                <div className="text-sm text-gray-500">${i.price} x {i.qty}</div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={() => dec(i.id)} className="px-2">-</button>
                  <span>{i.qty}</span>
                  <button onClick={() => inc(i.id)} className="px-2">+</button>
                </div>
                <div>${i.price * i.qty}</div>
                <button onClick={() => remove(i.id)} className="text-sm text-red-600">Eliminar</button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600">Total</div>
          <div className="font-semibold">${total}</div>
        </div>
        <div className="flex gap-2">
          <button onClick={handleCheckout} className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded">Realizar compra</button>
          <button onClick={() => clear()} className="px-4 py-2 border rounded">Vaciar carrito</button>
        </div>
      </div>
    </div>
  )
}