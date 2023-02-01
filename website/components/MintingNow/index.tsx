import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { useEffect, useMemo, useRef, useState } from 'react'
import { saEvent } from '../../scripts/events'
import { shuffle } from '../../utils/arrays'
import NumPassesMinted from '../NumPassedMinted'

const MintCountdown = dynamic(() => import('../MintCountdown'), {
  ssr: false,
  loading: () => <>Loading...</>
})

enum ScrollButtonDirection {
  left,
  right
}

type ScrollButtonProps = {
  onClick: () => void
  direction: ScrollButtonDirection
  disabled?: boolean
}

const ScrollButton = ({
  onClick,
  direction,
  disabled = false
}: ScrollButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'rounded-full p-1',
        'transition ease-in-out duration-150',
        !disabled && 'bg-background fill-grey hover:bg-black hover:fill-white',
        disabled ? 'fill-grey-light' : 'fill-grey'
      )}
    >
      {direction == ScrollButtonDirection.left ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  )
}

const MintingNow = ({ data }: { data: any[] }) => {
  const expand = window.innerWidth > 1280 ? Math.random() < 0.9 : false
  const [expanded, setExpanded] = useState(expand)
  const [pieces, setPieces] = useState<any[] | undefined>(undefined)

  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefIndex = data.findIndex((e) => e.name === '0ART')
    const indexToDisplay =
      prefIndex === -1 || Math.random() > 0.45
        ? Math.floor(Math.random() * data.length)
        : prefIndex
    const shuffledPieces = [...data]
    shuffledPieces.splice(indexToDisplay, 1)
    shuffle(shuffledPieces)

    setPieces([data[indexToDisplay], ...shuffledPieces])
  }, [])

  if (!pieces) {
    return <></>
  }

  const displayPiece = pieces[0]

  const selectArtwork = (index: number) => {
    const noIndexArr = [...pieces]
    noIndexArr.splice(index, 1)

    setPieces([pieces[index], ...noIndexArr])
    saEvent('minting_now_select_artwork')
  }

  return (
    <div className="mt-6 flex flex-col items-center bg-white rounded-xl p-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex flex-row justify-between items-center text-grey-light w-full"
      >
        <div className="flex flex-row items-center text-3xl font-bold tracking-tighter">
          Minting Now
          <span className="ml-4 relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-60"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green/80"></span>
          </span>
        </div>
        <div className="flex flex-row items-center font-semibold">
          <p className="mr-2 text-xl">{expanded ? 'Close' : 'View'}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className={clsx('w-5 h-5', expanded ? 'rotate-180' : '')}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </button>
      {expanded ? (
        <div className="mt-4 flex flex-col xl:flex-row gap-4 xl:gap-1 justify-between items-start w-full">
          <div className="flex flex-col md:flex-row justify-start items-start md:items-center">
            <a
              className="cursor-pointer"
              href={displayPiece.link}
              target="_blank"
            >
              <img
                className="rounded-lg shadow-grey-light h-[19rem] w-auto"
                src={displayPiece.image}
                alt="Image with Check based artwork"
              />
            </a>
            <div className="pl-0 mt-4 md:pl-4 md:mt-0 font-medium text-xl flex flex-col justify-start text-start">
              <div className="text-4xl max-w-xs">{displayPiece.name}</div>
              <div className="text-base">{`by @${displayPiece.author.twitter}`}</div>
              <div className="mt-0 text-grey text-lg">
                {displayPiece.cost === 0 ? 'Free' : `${displayPiece.cost} Ξ`}
              </div>
              <div className="h-4" />
              <MintCountdown endTime={displayPiece.endTime} />
              <NumPassesMinted address={displayPiece.contractAddress} />
              <a
                onClick={() => {
                  saEvent('minting_now_open_mint_page')
                }}
                href={displayPiece.link}
                target="_blank"
                className={clsx(
                  'mt-4 rounded-full w-max py-1 px-6',
                  'border-2 border-black text-black hover:bg-black hover:text-white'
                )}
              >
                Mint
              </a>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row w-full xl:w-1/2">
            <div className="mt-0 xl:mt-2 mb-2 mr-2 flex flex-row-reverse xl:flex-col items-start justify-end xl:justify-start gap-2">
              <ScrollButton
                onClick={() => {
                  if (!!listRef.current) listRef.current.scrollLeft += 250
                }}
                direction={ScrollButtonDirection.right}
              />
              <ScrollButton
                onClick={() => {
                  if (!!listRef.current) listRef.current.scrollLeft -= 250
                }}
                direction={ScrollButtonDirection.left}
              />
            </div>
            <div
              ref={listRef}
              className="flex flex-row gap-4 overflow-scroll no-scrollbar rounded-lg"
            >
              {pieces.map(function (piece, place) {
                if (place === 0) return

                return (
                  <div
                    key={place}
                    className={clsx('text-white transition-all duration-300')}
                  >
                    <button
                      onClick={() => selectArtwork(place)}
                      className="relative group flex flex-col"
                    >
                      <img
                        className="rounded-lg h-[19rem] max-w-none"
                        src={piece.image}
                        alt="Image with Check based artwork"
                      />
                      <div
                        className={clsx(
                          'invisible group-hover:visible absolute w-full h-full rounded-xl',
                          ' bg-black/40'
                        )}
                      />
                      {piece.name && (
                        <div
                          className={clsx(
                            'absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pr-6',
                            'text-xl'
                          )}
                        >
                          {piece.name}
                        </div>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default MintingNow
