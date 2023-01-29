import clsx from 'clsx'
import { useState } from 'react'
import { saEvent } from '../../scripts/events'
import { useBoardStore } from '../../store/board'
import { useMenuStore } from '../../store/menu'
import { ColorMode } from '../../utils/colors'
import { boardToImage } from '../../utils/image'

const BoardSizePanel = () => {
  // const board = useBoardStore((state) => state.board)
  // const darkMode = useMenuStore((state) => state.darkMode)

  const [boardXSize, setBoardXSize] = useState(8)
  const [boardYSize, setBoardYSize] = useState(10)
  const [expanded, setExpanded] = useState(false)

  const saveBoard = () => {
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
      Select Board Size
    </button>
  )
}

export default BoardSizePanel
