import { GameType, useGameStore } from '../../store/game'
import AIBoard from '../AIBoard'
import FriendBoard from '../FriendBoard'

const GameBoard = () => {
  const gameType = useGameStore((state) => state.type)

  // if (gameType === GameType.AI) {
  //   return <AIBoard />
  // } else if (gameType === GameType.FRIEND) {
  return <FriendBoard />
  // }

  return <></>
}

export default GameBoard
