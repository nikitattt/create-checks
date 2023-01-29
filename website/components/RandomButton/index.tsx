import clsx from 'clsx'
import { saEvent } from '../../scripts/events'
import { useBoardStore } from '../../store/board'
import { useMenuStore } from '../../store/menu'
import { ColorMode } from '../../utils/colors'
import { boardToImage } from '../../utils/image'

const RandomButton = () => {
  const board = useBoardStore((state) => state.board)
  const darkMode = useMenuStore((state) => state.darkMode)
  const addCheck = useBoardStore((state) => state.addCheck)
  const resetBoard = useBoardStore((state) => state.resetBoard)

  const saveBoard = () => {
    console.log('\n- - running algo - -\n')
    resetBoard()
    const upperBound = 0
    const lowerBound = 9
    // Returns a random integer from 0 to 9:

    let y = Math.floor(Math.random() * 10)
    let p = 8 * y

    for (let i = 0; i < 8; i++) {
      let up = Math.random() < 0.5
      if (y === lowerBound) up = true
      else if (y === upperBound) up = false
      // console.log(up)

      let move = Math.floor(Math.random() * (up ? y : lowerBound - y))
      if (move === 0) move = 1

      p = 8 * y + i

      console.log(`- top - i: ${i}, y: ${y}, p: ${p}, move: ${move}, up: ${up}`)

      addCheck(p, up ? '#01ef03' : '#f3322c')
      // console.log(`y: ${y}, p: ${p}, move: ${move}, up: ${up}`)

      console.log('- start move')
      for (let j = 0; j < move; j++) {
        if (up) {
          y -= 1
        } else {
          y += 1
        }

        p = 8 * y + i
        addCheck(p, up ? '#01ef03' : '#f3322c')
        console.log(
          `i: ${i}, j: ${j}, y: ${y}, p: ${p}, move: ${move}, up: ${up}`
        )
      }
      console.log('- end move')
      console.log('')
    }
    // downloadURL(image, 'Checks')
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
