import clsx from 'clsx'
import { useBoardStore } from '../../store/board'
import { useMenuStore } from '../../store/menu'

const BoardSizeSelect = () => {
  const rows = useBoardStore((state) => state.rows)
  const columns = useBoardStore((state) => state.columns)
  const showBoardSizePanel = useMenuStore((state) => state.showBoardSizePanel)
  const setShowBoardSizePanel = useMenuStore(
    (state) => state.setShowBoardSizePanel
  )

  const toggle = () => {
    setShowBoardSizePanel(!showBoardSizePanel)
  }

  return (
    <button
      onClick={toggle}
      className={clsx(
        'rounded-full py-1 px-3 cursor-pointer text-sm transition-all duration-300',
        'bg-white text-grey w-max hover:bg-black hover:text-white',
        'dark:bg-black-canvas dark:text-grey dark:hover:bg-white dark:hover:text-black',
        'shadow-lg sm:shadow-none'
      )}
    >
      {columns + ' x ' + rows}
    </button>
  )
}

export default BoardSizeSelect
