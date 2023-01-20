import BackButton from '../BackButton'
import CheckColorSelect from '../CheckColorSelect'
import ClearButton from '../ClearButton'
import SaveButton from '../SaveButton'

const Menu = () => {
  return (
    <div className="flex flex-col absolute right-2 sm:right-6 top-[4.5rem] sm:top-1/2 gap-2 items-end">
      <CheckColorSelect />
      <div className="flex flex-row-reverse gap-2">
        <ClearButton />
        <BackButton />
      </div>
      <SaveButton />
    </div>
  )
}

export default Menu
