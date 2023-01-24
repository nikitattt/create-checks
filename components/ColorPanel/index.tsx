import clsx from 'clsx'
import { useEffect } from 'react'
import { useMenuStore } from '../../store/menu'
import { ChecksColors, getRandomCheckColor } from '../../utils/colors'
import Check from '../Check'

function isColor(color: string) {
  return CSS.supports('color', color)
}

const CustomColor = () => {
  const customColor = useMenuStore((state) => state.customColor)
  const setCustomColor = useMenuStore((state) => state.setCustomColor)
  const setCheckColor = useMenuStore((state) => state.setCheckColor)

  const setColor = () => {
    if (customColor.length >= 3 && isColor(customColor)) {
      setCheckColor(customColor)
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

const ColorPanel = () => {
  const checkColor = useMenuStore((state) => state.checkColor)
  const setCheckColor = useMenuStore((state) => state.setCheckColor)

  const newRandomColor = () => {
    let colorOne = getRandomCheckColor()

    while (colorOne === checkColor) {
      colorOne = getRandomCheckColor()
    }

    setCheckColor(colorOne)
  }

  const setColor = (color: string) => {
    setCheckColor(color)
  }

  return (
    <div className="bg-white dark:bg-black-canvas rounded-2xl p-2 shadow-lg sm:shadow-none">
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
          onClick={newRandomColor}
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
  )
}

export default ColorPanel
