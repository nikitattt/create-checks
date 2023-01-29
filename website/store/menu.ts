import { create } from 'zustand'
import { persist } from 'zustand/middleware'

enum Directory {
  create,
  discover
}

interface MenuState {
  checkColor: string
  directory: Directory
  darkMode: boolean
  customColor: string
  showColorPanel: boolean
  showBoardSizePanel: boolean
  setCustomColor: (color: string) => void
  switchDarkMode: () => void
  setDirectory: (directory: Directory) => void
  setShowColorPanel: (value: boolean) => void
  setShowBoardSizePanel: (value: boolean) => void
  setCheckColor: (color: string) => void
}

const useMenuStore = create<MenuState>()(
  persist(
    (set, get) => ({
      checkColor: '#000000',
      directory: Directory.create,
      darkMode: false,
      customColor: '',
      showColorPanel: false,
      showBoardSizePanel: false,
      setCustomColor: (color: string) => set({ customColor: color }),
      switchDarkMode: () => set({ darkMode: !get().darkMode }),
      setDirectory: (directory: Directory) => set({ directory: directory }),
      setShowColorPanel: (value: boolean) => set({ showColorPanel: value }),
      setShowBoardSizePanel: (value: boolean) =>
        set({ showBoardSizePanel: value }),
      setCheckColor: (color: string) => set({ checkColor: color })
    }),
    {
      name: 'menu-storage',
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) =>
              !['darkMode', 'showColorPanel', 'showBoardSizePanel'].includes(
                key
              )
          )
        )
    }
  )
)

export { useMenuStore, Directory }
