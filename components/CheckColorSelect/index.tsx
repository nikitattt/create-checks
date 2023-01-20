import { useState } from 'react'
import { useGameStore } from '../../store/game'
import { ChecksColors, getRandomCheckColor } from '../../utils/colors'
import Check from '../Check'

const CustomColor = () => {
  const yourCheckColor = useGameStore((state) => state.yourCheckColor)
  const setYourCheckColor = useGameStore((state) => state.setYourCheckColor)

  return (
    <div className="flex flex-row gap-1 items-center">
      <div className="w-4 h-4 bg-red rounded-full border-grey-light" />
      <div className="w-18 bg-white-light rounded-full text-grey px-3 py-0.5 text-sm">
        {'#fafafa'}
      </div>
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
        className="rounded-full flex flex-row items-center bg-white p-1 gap-1 cursor-pointer text-sm group"
      >
        {expanded ? (
          <div className="ml-2 text-grey">Close</div>
        ) : (
          <div>
            <div className="flex group-hover:hidden ml-2 text-grey">Checks</div>
            <div className="ml-2 hidden group-hover:flex text-grey">
              {expanded ? 'Close' : 'View All'}
            </div>
          </div>
        )}
        <div className="h-6 w-6">
          <Check color={yourCheckColor} />
        </div>
      </button>
      {expanded && (
        <div className="bg-white rounded-2xl p-2">
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
            {/* <CustomColor /> */}
            <button
              onClick={newColors}
              className="px-3 py-0.5 text-sm text-grey bg-white-light rounded-full hover:bg-black hover:text-white transition-all duration-300"
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
