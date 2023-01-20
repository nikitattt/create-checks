import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface MenuState {
  darkMode: boolean
  customColor: string
  setCustomColor: (color: string) => void
  switchDarkMode: () => void
}

const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      darkMode: false,
      customColor: '',
      setCustomColor: (color: string) => {
        set({ customColor: color })
      },
      switchDarkMode: () => {
        set({ darkMode: !get().darkMode })
      }
    }),
    {
      name: 'menu-storage'
    }
  )
)

export { useMenuStore }
