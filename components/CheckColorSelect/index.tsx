import clsx from 'clsx'
import { useMenuStore } from '../../store/menu'
import Check from '../Check'

const CheckColorSelect = () => {
  const checkColor = useMenuStore((state) => state.checkColor)

  const showColorPanel = useMenuStore((state) => state.showColorPanel)
  const setShowColorPanel = useMenuStore((state) => state.setShowColorPanel)

  return (
    <button
      onClick={() => setShowColorPanel(!showColorPanel)}
      className={clsx(
        'rounded-full flex flex-row items-center p-1 gap-1 cursor-pointer text-sm group',
        'bg-white hover:bg-black text-grey hover:text-white transition-all duration-300',
        'dark:bg-black-canvas dark:hover:bg-white dark:hover:text-black',
        'shadow-lg sm:shadow-none'
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
        <Check color={checkColor} />
      </div>
    </button>
  )
}

export default CheckColorSelect
