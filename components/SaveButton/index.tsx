import { useBoardStore } from '../../store/board'
import { boardToImage } from '../../utils/image'

const downloadURL = (url: string, name: string) => {
  var link = document.createElement('a')
  link.download = name
  link.href = url
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const SaveButton = () => {
  const board = useBoardStore((state) => state.board)

  const saveBoard = () => {
    const image = boardToImage(board)
    downloadURL(image, 'Checks')
  }

  return (
    <button
      onClick={saveBoard}
      className="rounded-full bg-white py-1 px-3 cursor-pointer text-sm text-grey w-max hover:bg-black hover:text-white"
    >
      Save
    </button>
  )
}

export default SaveButton
