import clsx from 'clsx'
import { useBoardStore } from '../../store/board'

const BackButton = () => {
  const history = useBoardStore((state) => state.history)
  const backOneCheck = useBoardStore((state) => state.backOneCheck)

  const back = () => {
    if (history.length > 1) {
      backOneCheck()
    }
  }

  return (
    <button
      onClick={back}
      className={clsx(
        'rounded-full bg-white p-1.5 cursor-pointer text-sm w-max group',
        'hover:bg-black transition-all duration-300',
        'dark:bg-black-canvas dark:hover:bg-white'
      )}
    >
      <div
        className={clsx(
          'fill-grey group-hover:fill-white group-disabled:fill-grey transition-all duration-300',
          'dark:fill-grey dark:group-hover:fill-black'
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </button>
  )
}

export default BackButton
