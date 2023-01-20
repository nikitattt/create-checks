import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MenuState {
  customColor: string
  setCustomColor: (color: string) => void
}

const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      customColor: '',
      setCustomColor: (color: string) => {
        set({ customColor: color })
      }
    }),
    {
      name: 'menu-storage'
    }
  )
)

export { useMenuStore }
