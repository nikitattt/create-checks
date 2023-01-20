import { Player } from '../../scripts/types'
import { GameStatus, GameType, useGameStore } from '../../store/game'
import { getRandomCheckColor } from '../../utils/colors'
import { playerName } from '../../utils/utils'
import Check from '../Check'

const CheckColorSelect = ({ player }: { player: Player }) => {
  const gameType = useGameStore((state) => state.type)
  const gameStatus = useGameStore((state) => state.status)
  const yourCheckColor = useGameStore((state) => state.yourCheckColor)
  const opponentCheckColor = useGameStore((state) => state.opponentCheckColor)
  const setYourCheckColor = useGameStore((state) => state.setYourCheckColor)
  const setOpponentCheckColor = useGameStore(
    (state) => state.setOpponentCheckColor
  )

  const color = player === Player.You ? yourCheckColor : opponentCheckColor

  const newColors = () => {
    if (gameStatus === GameStatus.NotStarted) {
      const colorOne = getRandomCheckColor()
      let colorTwo = getRandomCheckColor()
      while (colorOne === colorTwo) {
        colorTwo = getRandomCheckColor()
      }

      setYourCheckColor(colorOne)
      if (gameType === GameType.AI) {
        setOpponentCheckColor(colorTwo)
      }
    } else {
      // TODO: show explanation message
    }
  }

  return (
    <div
      onClick={newColors}
      className="rounded-full flex flex-row items-center bg-white p-1 gap-1 cursor-pointer text-sm group"
    >
      <div className="flex group-hover:hidden ml-2 text-grey">
        {playerName(player, gameType)}
      </div>
      <div className="ml-2 hidden group-hover:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={gameStatus === GameStatus.NotStarted ? '#7D7D7D' : '#FF1F3D'}
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="h-6 w-6">
        <Check color={color} />
      </div>
    </div>
  )
}

const FriendAISwitch = () => {
  const gameType = useGameStore((state) => state.type)
  const setGameType = useGameStore((state) => state.setType)

  const switchType = (type: GameType) => {
    if (gameType !== type) {
      setGameType(type)
    }
  }

  const selectedStyle = 'bg-black text-white rounded-full px-4 py-[2px]'
  const secondaryStyle =
    'px-3 text-grey rounded-full hover:bg-background py-[2px]'

  const button = (type: GameType) => {
    return (
      <div
        onClick={() => switchType(type)}
        className={gameType === type ? selectedStyle : secondaryStyle}
      >
        {type}
      </div>
    )
  }

  return (
    <div className="rounded-full flex flex-row items-center bg-white p-1 cursor-pointer text-sm gap-px">
      {button(GameType.AI)}
      {button(GameType.FRIEND)}
    </div>
  )
}

const NavBar = () => {
  return (
    <div className="rounded-full m-4 px-1 sm:px-6 pb-px h-12 flex align-center">
      <div className="w-full flex flex-row items-center justify-center">
        <div className="flex-1 flex">
          <div className="h-8 w-8">
            <Check color="#60b1f4" />
          </div>
        </div>
        <div className="flex flex-row gap-6">
          {/* <CheckColorSelect player={Player.You} />
          <FriendAISwitch />
          <CheckColorSelect player={Player.Opponent} /> */}
        </div>
        <div className="flex-1">
          {/* <div className="w-max ml-auto px-4 py-1 rounded-full bg-white">
            connect
          </div> */}
          <a href="https://twitter.com/iamng_eth" target="_blank">
            <div className="w-max ml-auto rounded-full bg-white dark:bg-black-canvas dark:fill-white">
              <div className="h-8 w-8 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width=""
                  height=""
                >
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
