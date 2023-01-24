import clsx from 'clsx'
import { useGameStore } from '../../store/game'
import { useMenuStore } from '../../store/menu'
import Check from '../Check'

const CheckColorSelect = () => {
  const yourCheckColor = useGameStore((state) => state.yourCheckColor)

  const showColorPanel = useMenuStore((state) => state.showColorPanel)
  const setShowColorPanel = useMenuStore((state) => state.setShowColorPanel)

  return (
    <div className="flex flex-col gap-2 items-end">
      <button
        onClick={() => setShowColorPanel(!showColorPanel)}
        className={clsx(
          'rounded-full flex flex-row items-center p-1 gap-1 cursor-pointer text-sm group',
          'bg-white dark:bg-black-canvas text-grey'
        )}
      >
        {showColorPanel ? (
          <div className="ml-2">Close</div>
        ) : (
          <div>
            <div className="flex group-hover:hidden ml-2">Colors</div>
            <div className="ml-2 hidden group-hover:flex">
              {showColorPanel ? 'Close' : 'View All'}
            </div>
          </div>
        )}
        <div className="h-6 w-6">
          <Check color={yourCheckColor} />
        </div>
      </button>
    </div>
  )
}

export default CheckColorSelect
