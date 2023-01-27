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

const MintOfTheDay = () => {
  const [expanded, setExpanded] = useState(Math.random() < 0.35)

  const data = {
    name: 'FOMO',
    url: 'https://create.zora.co/collections/0xe32922ce092e1d0677b90b4f271c51a711767e9f',
    image:
      'https://bafkreidkha3uwxofd3v2zz6paicu7oplld7s6q4kwpudr7dfckpkirrvxy.ipfs.nftstorage.link/',
    address: '0xe32922ce092e1d0677b90b4f271c51a711767e9f',
    cost: '0.005',
    platform: 'Zora',
    endTime: '2023-01-27T20:00:00.000Z',
    author: {
      twitter: 'iamng_eth'
    }
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
        <div className="mt-4 flex flex-col md:flex-row justify-start items-start md:items-center w-full">
          <a className="cursor-pointer" href={data.url} target="_blank">
            <div className="w-full md:w-[19rem]">
              <img
                className="rounded-lg shadow-grey-light"
                src={data.image}
                alt=""
              />
            </div>
          </a>
          <div className="pl-0 mt-4 md:pl-4 md:mt-0 font-medium text-xl flex flex-col justify-start text-start">
            <div className="text-4xl max-w-xs">{data.name}</div>
            <div className="text-base">{`by @${data.author.twitter}`}</div>
            <div className="mt-0 text-grey text-lg">{`${data.cost} Ξ`}</div>
            <div className="h-4" />
            <MintCountdown endTime={data.endTime} />
            <NumPassesMinted address={data.address} />
            <a
              href={data.url}
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
