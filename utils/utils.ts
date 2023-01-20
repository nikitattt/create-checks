import { stringify } from 'querystring'
import { Player } from '../scripts/types'
import { GameType } from '../store/game'

export const playerName = (player: Player, gameType: GameType): string => {
  if (player === Player.You) {
    return 'You'
  } else {
    if (gameType === GameType.AI) {
      return 'AI'
    } else {
      return 'Friend'
    }
  }
}
