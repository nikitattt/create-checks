import clsx from 'clsx'
import Link from 'next/link'
import { saEvent } from '../../scripts/events'
import { useBoardStore } from '../../store/board'
import { useMenuStore } from '../../store/menu'
import { ColorMode } from '../../utils/colors'
import { boardToImage } from '../../utils/image'

const MintButton = () => {
  const board = useBoardStore((state) => state.board)
  const darkMode = useMenuStore((state) => state.darkMode)

  const mint = () => {
    // const image = boardToImage(
    //   board,
    //   darkMode ? ColorMode.dark : ColorMode.light
    // )
    // downloadURL(image, 'Checks')
    // saEvent('mint')
  }

  return (
    <Link
      href="/mint"
      onClick={mint}
      className={clsx(
        'rounded-full py-1 px-3 cursor-pointer text-sm transition-all duration-300',
        'bg-white text-grey w-max hover:bg-black hover:text-white',
        'dark:bg-black-canvas dark:text-grey dark:hover:bg-white dark:hover:text-black',
        'shadow-lg sm:shadow-none'
      )}
    >
      Mint
    </Link>
  )
}

export default MintButton
