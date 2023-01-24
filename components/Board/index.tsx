import clsx from 'clsx'
import { useBoardStore } from '../../store/board'
import { useMenuStore } from '../../store/menu'
import { addAlpha } from '../../utils/colors'
import Check from '../Check'

const Board = () => {
  const board = useBoardStore((state) => state.board)
  const checkColor = useMenuStore((state) => state.checkColor)
  const addCheck = useBoardStore((state) => state.addCheck)

  const saveCheckPosition = (index: number) => {
    addCheck(index, checkColor)
  }

  const Cell = (key: number) => (
    <button
      className="h-10 w-10 p-1.5 group"
      key={key}
      id={`cell-${key}`}
      onClick={() => saveCheckPosition(key)}
    >
      {board[key] === '' ? (
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-150">
          <Check color={addAlpha(checkColor, 0.15)} />
        </div>
      ) : (
        <Check color={board[key]} />
      )}
    </button>
  )

  return (
    <>
      <div className="mt-32 flex flex-col items-center justify-around">
        <div className="bg-white dark:bg-black-canvas p-4">
          <div
            className={clsx(
              'grid grid-cols-8 divide-x divide-y border',
              'divide-border-light dark:divide-border-dark border-border-light dark:border-border-dark'
            )}
          >
            {board.map((val, index, arr) => Cell(index))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="text-3xl">Create Art</div>
          {/* <div className="mt-6 text-lg">Play with a friend</div> */}
        </div>
      </div>
    </>
  )
}

export default Board