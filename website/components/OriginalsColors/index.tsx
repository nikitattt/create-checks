import clsx from 'clsx'
import { saEvent } from '../../scripts/events'
import { useBoardStore } from '../../store/board'
import { useMenuStore } from '../../store/menu'
import { ColorMode, originalsColors } from '../../utils/colors'
import { boardToImage } from '../../utils/image'
import Check from '../Check'
import styles from './OriginalsColors.module.css'

const OriginalsColors = () => {
  const board = useBoardStore((state) => state.board)
  const rows = useBoardStore((state) => state.rows)
  const columns = useBoardStore((state) => state.columns)
  const darkMode = useMenuStore((state) => state.darkMode)

  return (
    <div
      className={clsx(
        'px-8 sm:mx-auto mt-4 grid gap-y-4 w-full sm:w-[620px]',
        styles.grid
      )}
    >
      {originalsColors.map((color, i) => {
        return (
          <button
            onClick={() => {
              navigator.clipboard.writeText(color)
            }}
            type="button"
          >
            <div className="flex flex-col gap-1 items-center">
              <div className="w-10 h-10">
                <Check color={color} />
              </div>
              <p className="text-xs text-grey">{color}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default OriginalsColors
