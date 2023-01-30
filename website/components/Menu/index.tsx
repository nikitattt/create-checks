import { useMenuStore } from '../../store/menu'
import BackButton from '../BackButton'
import ColorPanel from '../ColorPanel'
import ClearButton from '../ClearButton'
import DarkModeSwitch from '../DarkModeSwitch'
import SaveButton from '../SaveButton'
import MintButton from '../MintButton'
import RandomButton from '../RandomButton'
import BoardSizePanel from '../BoardSizePannel'
import dynamic from 'next/dynamic'

const BoardSizeSelect = dynamic(() => import('../BoardSizeSelect'), {
  ssr: false,
  loading: () => <>Loading...</>
})

const CheckColorSelect = dynamic(() => import('../CheckColorSelect'), {
  ssr: false,
  loading: () => <>Loading...</>
})

const Menu = () => {
  const showColorPanel = useMenuStore((state) => state.showColorPanel)
  const showBoardSizePanel = useMenuStore((state) => state.showBoardSizePanel)

  return (
    <div className="flex flex-col absolute right-2 sm:right-6 top-[4.5rem] sm:top-[35%] gap-2 items-end">
      <div className="flex flex-row gap-2 items-center">
        <DarkModeSwitch />
        <BoardSizeSelect />
        <CheckColorSelect />
      </div>
      {showBoardSizePanel && <BoardSizePanel />}
      {showColorPanel && <ColorPanel />}
      <div className="flex flex-row gap-2">
        <BackButton />
        <ClearButton />
      </div>
      <div className="flex flex-row gap-2">
        <MintButton />
        <SaveButton />
      </div>
      <RandomButton />
    </div>
  )
}

export default Menu
