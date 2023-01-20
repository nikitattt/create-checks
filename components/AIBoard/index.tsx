import { useEffect, useState } from 'react'
import Board from '../../scripts/board'
import Minimax from '../../scripts/minimax'
import { GameStatus, useGameStore } from '../../store/game'
import { addAlpha, getRandomCheckColor } from '../../utils/colors'
import Check from '../Check'
import anime from 'animejs'

const minimax = new Minimax('O', 'X')

const letters = [
  ['X', '', 'X', '', 'X', '', 'X', '', 'X'],
  ['X', 'X', 'X', '', 'X', '', '', 'X', ''],
  ['X', '', 'X', 'X', 'X', 'X', 'X', '', 'X'],
  ['X', 'X', 'X', '', 'X', '', 'X', 'X', 'X']
]

const getRandomLetter = () => {
  return letters[Math.floor(Math.random() * letters.length)]
}

const winIds = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3]
]

const getWinningIds = (board: Board) => {
  const rows = board.rows()
  const columns = board.columns()
  const diagonals = board.diagonals()
  const lines = rows.concat(columns, diagonals)

  const result = lines.filter((line) =>
    line.every((position) => position !== '' && position === line[0])
  )

  if (result.length === 0) {
    return []
  } else {
    return winIds[lines.findIndex((e) => e === result[0])]
  }
}

const AIBoard = () => {
  const yourCheckColor = useGameStore((state) => state.yourCheckColor)
  const opponentCheckColor = useGameStore((state) => state.opponentCheckColor)
  const setGameStatus = useGameStore((state) => state.setStatus)
  const setYourCheckColor = useGameStore((state) => state.setYourCheckColor)
  const setOpponentCheckColor = useGameStore(
    (state) => state.setOpponentCheckColor
  )

  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    if (!board.isGameOver() && board.currentMark() === 'O') {
      const aiMove = minimax.findBestMove(board)
      const possibleMoves = board.availablePositions()
      const randomMove =
        possibleMoves[Math.floor(Math.random() * possibleMoves.length)]

      if (Math.random() * 100 <= 85) {
        setBoard(board.makeMove(aiMove, 'O'))
      } else {
        setBoard(board.makeMove(randomMove, 'O'))
      }
    }
    if (board.isGameOver()) {
      setGameStatus(GameStatus.Ended)
      if (board.hasWinner()) {
        const winIds = getWinningIds(board)
        anime({
          targets: [
            `#cell-${winIds[0]}`,
            `#cell-${winIds[1]}`,
            `#cell-${winIds[2]}`
          ],
          direction: 'alternate',
          padding: ['1rem', '0.75rem'],
          duration: 300,
          easing: 'easeInOutQuad'
        })
      } else {
        anime({
          targets: '.cell',
          direction: 'alternate',
          padding: ['1rem', '0.75rem'],
          duration: 300,
          easing: 'easeInOutQuad'
        })
      }
    }
  }, [board])

  const getColor = (player: string) => {
    if (player === 'X') {
      return yourCheckColor
    } else {
      return opponentCheckColor
    }
  }

  const playerMove = (index: number) => {
    if (!board.isGameOver() && !board.isPositionTaken(index)) {
      setGameStatus(GameStatus.Playing)
      setBoard(board.makeMove(index, 'X'))
    }
  }
  const restart = () => {
    setGameStatus(GameStatus.NotStarted)
    setBoard(new Board())

    const colorOne = getRandomCheckColor()
    let colorTwo = getRandomCheckColor()
    while (colorOne === colorTwo) {
      colorTwo = getRandomCheckColor()
    }

    setYourCheckColor(colorOne)
    setOpponentCheckColor(colorTwo)
  }

  const Cell = (key: number) => (
    <button
      className="cell h-20 w-20 p-4 group"
      key={key}
      id={`cell-${key}`}
      onClick={() => playerMove(key)}
    >
      {board.markedBoardPositionValue(key) === '' ? (
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-150">
          <Check color={addAlpha(yourCheckColor, 0.15)} />
        </div>
      ) : (
        <Check color={getColor(board.markedBoardPositionValue(key))} />
      )}
    </button>
  )

  const statusMessage = (() => {
    if (board.hasWinner())
      return `${board.winningPlayer() === 'X' ? 'You' : 'AI'} won the game!`
    else if (board.isGameDraw()) return 'The game is a draw!'
    else if (board.availablePositionCount() < 9)
      return (
        <span className="text-grey">
          Your move might
          <br />
          be notable
        </span>
      )
  })()

  return (
    <div className="mt-36 flex flex-col items-center justify-around">
      <div className="bg-white p-4">
        <div className="grid grid-cols-3 divide-x-2 divide-y-2 divide-[#fafafa] border-2 border-[#fafafa]">
          {board.grid.map((val, index, arr) => Cell(index + 1))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <div className="text-3xl whitespace-pre-line">{statusMessage}</div>
        {board.availablePositionCount() === 9 ? (
          <div className="text-3xl text-grey">You Move First</div>
        ) : (
          <></>
        )}
        {board.isGameOver() && (
          <button
            className="mt-8 text-lg py-1 px-8 rounded-full bg-white hover:bg-black hover:text-white"
            onClick={() => restart()}
          >
            Restart
          </button>
        )}
      </div>
    </div>
  )
}

export default AIBoard
