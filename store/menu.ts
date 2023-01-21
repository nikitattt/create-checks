import { create } from 'zustand'
import { persist } from 'zustand/middleware'

enum Directory {
  create,
  discover
}

interface MenuState {
  directory: Directory
  darkMode: boolean
  customColor: string
  setCustomColor: (color: string) => void
  switchDarkMode: () => void
  setDirectory: (directory: Directory) => void
}

const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      directory: Directory.create,
      darkMode: false,
      customColor: '',
      setCustomColor: (color: string) => set({ customColor: color }),
      switchDarkMode: () => set({ darkMode: !get().darkMode }),
      setDirectory: (directory: Directory) => set({ directory: directory })
    }),
    {
      name: 'menu-storage'
    }
  )
)

export { useMenuStore, Directory }
