import { useGameStore } from '../../store/game'
import { getRandomCheckColor } from '../../utils/colors'
import Check from '../Check'

const CheckColorSelect = () => {
  const yourCheckColor = useGameStore((state) => state.yourCheckColor)
  const setYourCheckColor = useGameStore((state) => state.setYourCheckColor)

  const newColors = () => {
    let colorOne = getRandomCheckColor()

    while (colorOne === yourCheckColor) {
      colorOne = getRandomCheckColor()
    }

    setYourCheckColor(colorOne)
  }

  return (
    <div
      onClick={newColors}
      className="rounded-full flex flex-row items-center bg-white p-1 gap-1 cursor-pointer text-sm group"
    >
      <div className="flex group-hover:hidden ml-2 text-grey">Check</div>
      <div className="ml-2 hidden group-hover:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={'#7D7D7D'}
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="h-6 w-6">
        <Check color={yourCheckColor} />
      </div>
    </div>
  )
}

export default CheckColorSelect
