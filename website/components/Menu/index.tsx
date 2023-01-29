import { useMenuStore } from '../../store/menu'
import BackButton from '../BackButton'
import CheckColorSelect from '../CheckColorSelect'
import ColorPanel from '../ColorPanel'
import ClearButton from '../ClearButton'
import DarkModeSwitch from '../DarkModeSwitch'
import SaveButton from '../SaveButton'
import MintButton from '../MintButton'
import BoardSizeSelect from '../BoardSizeSelect'

const Menu = () => {
  const showColorPanel = useMenuStore((state) => state.showColorPanel)

  return (
    <div className="flex flex-col absolute right-2 sm:right-6 top-[4.5rem] sm:top-1/2 gap-2 items-end -mt-0 sm:-mt-20">
      <div className="flex flex-row gap-2 items-center">
        <DarkModeSwitch />
        <BoardSizeSelect />
        <CheckColorSelect />
      </div>
      {showColorPanel && <ColorPanel />}
      <div className="flex flex-row gap-2">
        <BackButton />
        <ClearButton />
      </div>
      <div className="flex flex-row gap-2">
        <MintButton />
        <SaveButton />
      </div>
    </div>
  )
}

export default Menu
