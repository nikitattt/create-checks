import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const columns = 8
const rows = 10

interface BoardState {
  board: Array<string>
  setBoard: (board: Array<string>) => void
  resetBoard: () => void
}

const useBoardStore = create<BoardState>()(
  persist(
    (set, get) => ({
      board: new Array(columns * rows).fill(''),
      setBoard: (board: Array<string>) => set({ board: board }),
      resetBoard: () => set({ board: new Array(columns * rows).fill('') })
    }),
    {
      name: 'board-storage'
    }
  )
)

export { useBoardStore }
