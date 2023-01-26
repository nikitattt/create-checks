import clsx from 'clsx'
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
      <button
        className={clsx(
          'p-1 transition-all duration-300 rounded-full',
          'bg-white-light hover:bg-black fill-grey hover:fill-white',
          'dark:bg-black dark:hover:bg-white dark:hover:fill-black'
        )}
        onClick={setColor}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
            clipRule="evenodd"
          />
        </svg>
      </button>
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
        {ChecksColors.map((c, i) => {
          return (
            <button
              key={`color-${i}`}
              className="h-6 w-6 hover:scale-110 transition-all duration-300"
              onClick={() => setColor(c)}
            >
              <Check color={c} />
            </button>
          )
        })}
      </div>
      <div className="mt-2 flex flex-row gap-1 justify-end">
        <CustomColor />
        <button
          onClick={newRandomColor}
          className={clsx(
            'px-3 py-0.5 text-sm rounded-full transition-all duration-300',
            'bg-white border-2 border-white-light text-grey w-max hover:bg-black hover:text-white',
            'dark:bg-black dark:text-grey dark:border-none dark:hover:bg-white dark:hover:text-black'
          )}
        >
          Random
        </button>
      </div>
    </div>
  )
}

export default ColorPanel
