import BackButton from '../BackButton'
import CheckColorSelect from '../CheckColorSelect'
import ClearButton from '../ClearButton'
import DarkModeSwitch from '../DarkModeSwitch'
import SaveButton from '../SaveButton'

const Menu = () => {
  return (
    <div className="flex flex-col absolute right-2 sm:right-6 top-[4.5rem] sm:top-1/2 gap-2 items-end -mt-0 sm:-mt-10">
      <div className="flex flex-row-reverse gap-2">
        <CheckColorSelect />
        <DarkModeSwitch />
      </div>
      <div className="flex flex-row-reverse gap-2">
        <ClearButton />
        <BackButton />
      </div>
      <SaveButton />
    </div>
  )
}

export default Menu
