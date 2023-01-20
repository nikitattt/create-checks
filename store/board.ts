import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const columns = 8
const rows = 10

interface BoardState {
  board: Array<string>
  history: Array<number>
  addCheck: (position: number, color: string) => void
  setBoard: (board: Array<string>) => void
  resetBoard: () => void
  backOneCheck: () => void
}

const useBoardStore = create<BoardState>()(
  persist(
    (set, get) => ({
      board: new Array(columns * rows).fill(''),
      history: [],
      addCheck: (position: number, color: string) => {
        const newBoard = [...get().board]
        newBoard[position] = color
        const newHistory = [...get().history, position]

        set({ board: newBoard, history: newHistory })
      },
      setBoard: (board: Array<string>) => set({ board: board }),
      resetBoard: () => set({ board: new Array(columns * rows).fill('') }),
      backOneCheck: () => {
        const history = get().history

        if (history.length > 1) {
          const indexToRemove = history.pop()
          if (indexToRemove) {
            const newBoard = [...get().board]
            newBoard[indexToRemove] = ''

            const newHistory = [...history]

            set({ board: newBoard, history: newHistory })
          }
        }
      }
    }),
    {
      name: 'board-storage'
    }
  )
)

export { useBoardStore }
