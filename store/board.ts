import { create } from 'zustand'

const columns = 8
const rows = 10

interface BoardState {
  board: Array<string>
  setBoard: (board: Array<string>) => void
  resetBoard: () => void
}

const useBoardStore = create<BoardState>()((set, get) => ({
  board: new Array(columns * rows).fill(''),
  setBoard: (board: Array<string>) => set({ board: board }),
  resetBoard: () => set({ board: new Array(columns * rows).fill('') })
}))

export { useBoardStore }
