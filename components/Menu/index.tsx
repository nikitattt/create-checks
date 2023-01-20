import CheckColorSelect from '../CheckColorSelect'
import ClearButton from '../ClearButton'

const Menu = () => {
  return (
    <div className="flex flex-col absolute right-2 top-1/2 gap-2 items-end">
      <CheckColorSelect />
      <ClearButton />
    </div>
  )
}

export default Menu
