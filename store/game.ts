import { create } from 'zustand'

enum GameType {
  AI = 'AI',
  FRIEND = 'Friend'
}

enum GameStatus {
  Playing,
  NotStarted,
  Ended
}

interface GameState {
  type: GameType
  status: GameStatus
  yourCheckColor: string
  opponentCheckColor: string
  setType: (type: GameType) => void
  setStatus: (status: GameStatus) => void
  setYourCheckColor: (color: string) => void
  setOpponentCheckColor: (color: string) => void
}

const useGameStore = create<GameState>()((set, get) => ({
  type: GameType.AI,
  status: GameStatus.NotStarted,
  yourCheckColor: '#000000',
  opponentCheckColor: '#60b1f4',
  setType: (type: GameType) => set({ type: type }),
  setStatus: (status: GameStatus) => set({ status: status }),
  setYourCheckColor: (color: string) => set({ yourCheckColor: color }),
  setOpponentCheckColor: (color: string) => set({ opponentCheckColor: color })
}))

export { useGameStore, GameType, GameStatus }
