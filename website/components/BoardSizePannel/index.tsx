import clsx from 'clsx'
import { saEvent } from '../../scripts/events'
import { useBoardStore } from '../../store/board'

const PredefinedSize = ({
  columns,
  rows
}: {
  columns: number
  rows: number
}) => {
  const setRows = useBoardStore((state) => state.setRows)
  const setColumns = useBoardStore((state) => state.setColumns)

  const saveBoard = () => {
    setRows(rows)
    setColumns(columns)
    saEvent('set_board_size', { size: `${rows}r x ${columns}c` })
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
  return (
    <div
      className={clsx(
        'bg-white dark:bg-black-canvas rounded-2xl p-2 shadow-lg sm:shadow-none',
        'shadow-lg sm:shadow-none'
      )}
    >
      <p className="text-grey text-sm">Select Board Size</p>
      <p className="mt-0.5 flex lg:hidden w-56 leading-5">
        Larger boards are currently only available on desktop
      </p>
      <div className="mt-1 hidden lg:flex flex-col">
        <p className="mt-0.5 text-xs">Vertical</p>
        <div className="flex flex-row gap-1">
          <PredefinedSize rows={10} columns={8} />
          <PredefinedSize rows={12} columns={10} />
          <PredefinedSize rows={14} columns={10} />
        </div>
        <div className="mt-1 flex flex-row gap-1">
          <PredefinedSize rows={16} columns={12} />
          <PredefinedSize rows={20} columns={16} />
        </div>
        <p className="mt-0.5 text-xs">Horizontal</p>
        <div className="flex flex-row gap-1">
          <PredefinedSize rows={8} columns={12} />
          <PredefinedSize rows={10} columns={16} />
          <PredefinedSize rows={16} columns={20} />
        </div>
        <p className="mt-0.5 text-xs">Square</p>
        <div className="flex flex-row gap-1">
          <PredefinedSize rows={10} columns={10} />
          <PredefinedSize rows={12} columns={12} />
          <PredefinedSize rows={14} columns={14} />
        </div>
        <div className="mt-1 flex flex-row gap-1">
          <PredefinedSize rows={16} columns={16} />
          <PredefinedSize rows={20} columns={20} />
        </div>
      </div>
    </div>
  )
}

export default BoardSizePanel
