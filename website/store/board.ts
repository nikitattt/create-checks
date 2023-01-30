import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BoardState {
  rows: number
  columns: number
  board: Array<string>
  history: Array<number>
  addCheck: (position: number, color: string) => void
  setBoard: (board: Array<string>) => void
  setRows: (rows: number) => void
  setColumns: (columns: number) => void
  resetBoard: () => void
  backOneCheck: () => void
}

const useBoardStore = create<BoardState>()(
  persist(
    (set, get) => ({
      rows: 10,
      columns: 8,
      board: new Array(10 * 8).fill(''),
      history: [],
      addCheck: (position: number, color: string) => {
        const newBoard = [...get().board]
        newBoard[position] = color
        const newHistory = [...get().history, position]

        set({ board: newBoard, history: newHistory })
      },
      setBoard: (board: Array<string>) => set({ board: board }),
      resetBoard: () => {
        const cols = get().columns
        const rows = get().rows

        set({ board: new Array(cols * rows).fill('') })
      },
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
      },
      setRows: (rows: number) => {
        const columns = get().columns

        set({ rows: rows, board: new Array(rows * columns).fill('') })
      },
      setColumns: (columns: number) => {
        const rows = get().rows

        set({ columns: columns, board: new Array(rows * columns).fill('') })
      }
    }),
    {
      name: 'board-storage'
    }
  )
)

export { useBoardStore }
