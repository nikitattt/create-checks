import clsx from 'clsx'
import { saEvent } from '../../scripts/events'
import { useBoardStore } from '../../store/board'
import { useMenuStore } from '../../store/menu'
import { ColorMode } from '../../utils/colors'
import { boardToImage } from '../../utils/image'

const getGreen = () => {
  // const colors = ['#5b9f3e', '#01ef03', '#1CC500']
  const colors = ['#01ef03']
  return colors[Math.floor(Math.random() * colors.length)]
}

const getRed = () => {
  // const colors = ['#e73d53', '#ea3a2d', '#f3322c', '#FF1F3D']
  const colors = ['#FF1F3D']
  return colors[Math.floor(Math.random() * colors.length)]
}

const RandomButton = () => {
  const board = useBoardStore((state) => state.board)
  const rows = useBoardStore((state) => state.rows)
  const columns = useBoardStore((state) => state.columns)
  const darkMode = useMenuStore((state) => state.darkMode)
  // const addCheck = useBoardStore((state) => state.addCheck)
  const setBoard = useBoardStore((state) => state.setBoard)
  const resetBoard = useBoardStore((state) => state.resetBoard)

  const saveBoard = () => {
    console.log('\n- - running algo - -\n')
    // resetBoard()
    let chartBoard = new Array(columns * rows).fill('')
    console.log(chartBoard.length)
    const upperBound = 0
    const lowerBound = rows - 1 - 6
    const red = getRed()
    const green = getGreen()
    // Returns a random integer from 0 to 9:

    let moves: any[] = []

    // let y = Math.floor(Math.random() * rows)
    let y = Math.round(rows / 2)
    let p = columns * y

    for (let i = 0; i < columns; i++) {
      let up = Math.random() < 0.5
      if (y === lowerBound) up = true
      else if (y === upperBound) up = false
      // console.log(up)

      // const red = getRed()
      // const green = getGreen()

      let move
      if (Math.random() > 0.8) {
        // Can do big move
        move = Math.floor(Math.random() * (up ? y : lowerBound - y))
      } else {
        // Do smaller moves
        move = Math.floor(Math.random() * (up ? y / 3 : (lowerBound - y) / 3))
      }
      if (move === 0) move = 1

      moves.push({ move: move, up: up })

      /*
       * chart var 1
       */
      // p = columns * y + i
      /*
       * chart var 2
       */
      if (up) {
        p = columns * y + i - columns
      } else {
        p = columns * y + i + columns
      }

      // console.log(`- top - i: ${i}, y: ${y}, p: ${p}, move: ${move}, up: ${up}`)

      // chartBoard[p] = up ? green : red
      // console.log(`y: ${y}, p: ${p}, move: ${move}, up: ${up}`)

      // console.log('- start move')
      for (let j = 0; j < move; j++) {
        if (up) {
          y -= 1
        } else {
          y += 1
        }

        p = columns * y + i
        chartBoard[p] = up ? green : red
        // console.log(
        //   `i: ${i}, j: ${j}, y: ${y}, p: ${p}, move: ${move}, up: ${up}`
        // )
      }
      // console.log('- end move')
      // console.log('')
      // console.log(chartBoard.length)
    }
    console.log(moves)

    setBoard(chartBoard)
    // console.log(chartBoard.length)
    // console.log(chartBoard)

    // saEvent('save_image', { mode: darkMode ? 'dark' : 'light' })
  }

  return (
    <button
      onClick={saveBoard}
      className={clsx(
        'rounded-full py-1 px-3 cursor-pointer text-sm transition-all duration-300',
        'bg-white text-grey w-max hover:bg-black hover:text-white',
        'dark:bg-black-canvas dark:text-grey dark:hover:bg-white dark:hover:text-black',
        'shadow-lg sm:shadow-none'
      )}
    >
      Random Chart
    </button>
  )
}

export default RandomButton
