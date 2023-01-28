import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
import Check from '../Check'
import NumPassesMinted from '../NumPassedMinted'

const MintCountdown = dynamic(() => import('../MintCountdown'), {
  ssr: false,
  loading: () => <>Loading...</>
})

const MintOfTheDay = ({ data }: { data: any[] }) => {
  const [expanded, setExpanded] = useState(Math.random() < 0.35)

  const displayPiece = data[Math.floor(Math.random() * data.length)]

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
        <div className="mt-4 flex flex-col md:flex-row justify-start items-start md:items-center w-full">
          <a
            className="cursor-pointer"
            href={displayPiece.link}
            target="_blank"
          >
            <div className="w-full md:w-[19rem]">
              <img
                className="rounded-lg shadow-grey-light"
                src={displayPiece.image}
                alt=""
              />
            </div>
          </a>
          <div className="pl-0 mt-4 md:pl-4 md:mt-0 font-medium text-xl flex flex-col justify-start text-start">
            <div className="text-4xl max-w-xs">{displayPiece.name}</div>
            <div className="text-base">{`by @${displayPiece.author.twitter}`}</div>
            <div className="mt-0 text-grey text-lg">
              {displayPiece.cost === '0' ? 'Free' : `${displayPiece.cost} Ξ`}
            </div>
            <div className="h-4" />
            <MintCountdown endTime={displayPiece.endTime} />
            <NumPassesMinted address={displayPiece.contractAddress} />
            <a
              href={displayPiece.link}
              target="_blank"
              className={clsx(
                'mt-4 rounded-full w-max py-1 px-6',
                'border-2 border-black text-black hover:bg-black hover:text-white'
              )}
            >
              {/* {data.platform} */}
              Mint
            </a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default MintOfTheDay
