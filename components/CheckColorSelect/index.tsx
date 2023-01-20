import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useGameStore } from '../../store/game'
import { useMenuStore } from '../../store/menu'
import { ChecksColors, getRandomCheckColor } from '../../utils/colors'
import Check from '../Check'

function isColor(color: string) {
  return CSS.supports('color', color)
}

const CustomColor = () => {
  const customColor = useMenuStore((state) => state.customColor)
  const setCustomColor = useMenuStore((state) => state.setCustomColor)
  const setYourCheckColor = useGameStore((state) => state.setYourCheckColor)

  const setColor = () => {
    if (customColor.length >= 3 && isColor(customColor)) {
      setYourCheckColor(customColor)
    }
  }

  useEffect(() => {
    setColor()
  }, [customColor])

  return (
    <div className="flex flex-row gap-1 items-center">
      <button
        className="w-4 h-4 hover:scale-125 transition-all duration-300 rounded-full border border-grey-light dark:border-border-dark"
        style={{ background: customColor }}
        onClick={setColor}
      />
      <input
        type="text"
        value={customColor}
        placeholder="#000000"
        onChange={(e) => {
          setCustomColor(e.target.value)
        }}
        className={clsx(
          'w-24 bg-white-light dark:bg-black rounded-full px-3 py-0.5 text-sm',
          'caret-grey dark:caret-grey-dark text-black dark:text-white focus:outline-none focus:border-none focus:ring-none',
          'placeholder:text-grey-dark'
        )}
      />
    </div>
  )
}

const CheckColorSelect = () => {
  const yourCheckColor = useGameStore((state) => state.yourCheckColor)
  const setYourCheckColor = useGameStore((state) => state.setYourCheckColor)

  const [expanded, setExpanded] = useState(false)

  const newColors = () => {
    let colorOne = getRandomCheckColor()

    while (colorOne === yourCheckColor) {
      colorOne = getRandomCheckColor()
    }

    setYourCheckColor(colorOne)
  }

  const setColor = (color: string) => {
    setYourCheckColor(color)
  }

  return (
    <div className="flex flex-col gap-2 items-end">
      <button
        onClick={() => setExpanded(!expanded)}
        className={clsx(
          'rounded-full flex flex-row items-center p-1 gap-1 cursor-pointer text-sm group',
          'bg-white dark:bg-black-canvas text-grey'
        )}
      >
        {expanded ? (
          <div className="ml-2">Close</div>
        ) : (
          <div>
            <div className="flex group-hover:hidden ml-2">Colors</div>
            <div className="ml-2 hidden group-hover:flex">
              {expanded ? 'Close' : 'View All'}
            </div>
          </div>
        )}
        <div className="h-6 w-6">
          <Check color={yourCheckColor} />
        </div>
      </button>
      {expanded && (
        <div className="bg-white dark:bg-black-canvas rounded-2xl p-2">
          <div className="grid grid-cols-8 gap-1">
            {ChecksColors.map((c) => {
              return (
                <button className="h-6 w-6" onClick={() => setColor(c)}>
                  <Check color={c} />
                </button>
              )
            })}
          </div>
          <div className="mt-2 flex flex-row gap-2 justify-end">
            <CustomColor />
            <button
              onClick={newColors}
              className={clsx(
                'px-3 py-0.5 text-sm rounded-full transition-all duration-300',
                'bg-white text-grey w-max hover:bg-black hover:text-white',
                'dark:bg-black dark:text-grey dark:hover:bg-white dark:hover:text-black'
              )}
            >
              Random
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckColorSelect
