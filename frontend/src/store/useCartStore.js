import create from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(persist((set, get) => ({
  items: [],
  add: (product) => {
    const items = [...get().items]
    const idx = items.findIndex(i => i.id === product.id)
    if(idx >= 0) items[idx].qty += 1
    else items.push({...product, qty: 1})
    set({ items })
  },
  remove: (id) => set({ items: get().items.filter(i => i.id !== id) }),
  inc: (id) => set({ items: get().items.map(i => i.id===id?{...i,qty:i.qty+1}:i) }),
  dec: (id) => set({ items: get().items.map(i => i.id===id?{...i,qty:Math.max(1,i.qty-1)}:i) }),
  clear: () => set({ items: [] }),
  total: () => get().items.reduce((s,i)=> s + i.price * i.qty, 0),
  count: () => get().items.reduce((s,i)=> s + i.qty, 0)
}), { name: 'tp-cart' }))