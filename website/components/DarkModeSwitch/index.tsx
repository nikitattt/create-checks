import clsx from 'clsx'
import { useMenuStore } from '../../store/menu'

const DarkModeSwitch = () => {
  const darkMode = useMenuStore((state) => state.darkMode)
  const switchDarkMode = useMenuStore((state) => state.switchDarkMode)

  const switchMode = () => {
    switchDarkMode()
  }

  return (
    <button
      onClick={switchMode}
      className={clsx(
        'rounded-full bg-white p-1.5 cursor-pointer text-sm w-max h-max group',
        'hover:bg-black transition-all duration-300',
        'dark:bg-black-canvas dark:hover:bg-white',
        'shadow-md sm:shadow-none'
      )}
    >
      <div
        className={clsx(
          'fill-grey group-hover:fill-white transition-all duration-300',
          'dark:fill-grey dark:group-hover:fill-black'
        )}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-4 h-4"
          >
            <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </button>
  )
}

export default DarkModeSwitch
