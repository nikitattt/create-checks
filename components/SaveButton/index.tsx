import clsx from 'clsx'
import { saEvent } from '../../scripts/events'
import { useBoardStore } from '../../store/board'
import { useMenuStore } from '../../store/menu'
import { ColorMode } from '../../utils/colors'
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
  const darkMode = useMenuStore((state) => state.darkMode)

  const saveBoard = () => {
    const image = boardToImage(
      board,
      darkMode ? ColorMode.dark : ColorMode.light
    )
    downloadURL(image, 'Checks')
    saEvent('save_image', { mode: darkMode ? 'dark' : 'light' })
  }

  return (
    <button
      onClick={saveBoard}
      className={clsx(
        'rounded-full py-1 px-3 cursor-pointer text-sm transition-all duration-300',
        'bg-white text-grey w-max hover:bg-black hover:text-white',
        'dark:bg-black-canvas dark:text-grey dark:hover:bg-white dark:hover:text-black',
        'shadow-lg sm:shadow-none'
      )}
    >
      Save
    </button>
  )
}

export default SaveButton
