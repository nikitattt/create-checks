import clsx from 'clsx'
import { useState } from 'react'
import { saEvent } from '../../scripts/events'
import { useBoardStore } from '../../store/board'
import { useMenuStore } from '../../store/menu'
import { ColorMode } from '../../utils/colors'
import { boardToImage } from '../../utils/image'

const PredefinedSize = ({
  columns,
  rows
}: {
  columns: number
  rows: number
}) => {
  // const board = useBoardStore((state) => state.board)
  const setRows = useBoardStore((state) => state.setRows)
  const setColumns = useBoardStore((state) => state.setColumns)
  // const darkMode = useMenuStore((state) => state.darkMode)

  const saveBoard = () => {
    setRows(rows)
    setColumns(columns)
    // saEvent('save_image', { mode: darkMode ? 'dark' : 'light' })
  }

  return (
    <button
      onClick={saveBoard}
      className={clsx(
        'px-3 py-0.5 text-sm rounded-full transition-all duration-300',
        'bg-white border-2 border-white-light text-grey w-max hover:bg-black hover:text-white',
        'dark:bg-black dark:text-grey dark:border-none dark:hover:bg-white dark:hover:text-black'
      )}
    >
      {rows + ' x ' + columns}
    </button>
  )
}

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
    <div
      className={clsx(
        'bg-white dark:bg-black-canvas rounded-2xl p-2 shadow-lg sm:shadow-none',
        'shadow-lg sm:shadow-none'
      )}
    >
      <p className="text-grey text-sm">Select Board Size</p>
      <div className="mt-1 flex flex-row gap-1">
        <PredefinedSize rows={10} columns={8} />
        <PredefinedSize rows={12} columns={10} />
        <PredefinedSize rows={16} columns={16} />
      </div>
      <div className="mt-1 flex flex-row gap-1">
        <PredefinedSize rows={20} columns={20} />
      </div>
    </div>
    // <button
    //   onClick={saveBoard}
    //   className={clsx(
    //     'rounded-full py-1 px-3 cursor-pointer text-sm transition-all duration-300',
    //     'bg-white text-grey w-max hover:bg-black hover:text-white',
    //     'dark:bg-black-canvas dark:text-grey dark:hover:bg-white dark:hover:text-black',
    //     'shadow-lg sm:shadow-none'
    //   )}
    // >
    //   Select Board Size
    // </button>
  )
}

export default BoardSizePanel
