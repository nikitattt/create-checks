import { useBoardStore } from '../../store/board'

const ClearButton = () => {
  const resetBoard = useBoardStore((state) => state.resetBoard)

  const clearBoard = () => {
    resetBoard()
  }

  return (
    <div
      onClick={clearBoard}
      className="rounded-full bg-white py-1 px-3 cursor-pointer text-sm text-grey w-max hover:bg-black hover:text-white"
    >
      Clear
    </div>
  )
}

export default ClearButton
