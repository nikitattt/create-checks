import clsx from 'clsx'
import { useBoardStore } from '../../store/board'

const ClearButton = () => {
  const resetBoard = useBoardStore((state) => state.resetBoard)

  const clearBoard = () => {
    resetBoard()
  }

  return (
    <button
      onClick={clearBoard}
      className={clsx(
        'rounded-full py-1 px-3 cursor-pointer text-sm transition-all duration-300',
        'bg-white text-grey w-max hover:bg-black hover:text-white',
        'dark:bg-black-canvas dark:text-grey dark:hover:bg-white dark:hover:text-black'
      )}
    >
      Clear
    </button>
  )
}

export default ClearButton
