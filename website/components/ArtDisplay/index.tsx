import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useDiscoverStore } from '../../store/discover'
import { shuffle, sortByDateSubmitted } from '../../utils/arrays'
import { mintingNow } from '../../utils/dates'
import Check from '../Check'
import styles from './ArtDisplay.module.css'

const MintingNow = dynamic(() => import('../MintingNow'), {
  ssr: false,
  loading: () => <>Loading...</>
})

const DetailsSwitch = () => {
  const detailsExpand = useDiscoverStore((state) => state.detailsExpand)
  const switchDetailsExpand = useDiscoverStore(
    (state) => state.switchDetailsExpand
  )

  const switchValue = () => {
    switchDetailsExpand()
  }

  return (
    <button
      onClick={switchValue}
      className="rounded-full flex flex-row items-center bg-white p-1 pl-2 gap-1 cursor-pointer text-sm group"
    >
      <div className="text-grey">Details</div>
      <div className="h-6 w-6">
        <Check color={detailsExpand ? '#000000' : '#7D7D7D'} />
      </div>
    </button>
  )
}

const LinkButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx(
        'rounded-full flex flex-row items-center py-1 px-4 cursor-pointer text-sm',
        'bg-white text-grey hover:bg-black hover:text-white',
        'dark:bg-grey-max dark:hover:bg-white dark:hover:text-black'
      )}
    >
      {text}
    </a>
  )
}

const SortButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx(
        'rounded-full flex flex-row items-center py-1 px-4 cursor-pointer text-sm',
        'bg-white text-grey hover:bg-black hover:text-white',
        'dark:bg-grey-max dark:hover:bg-white dark:hover:text-black'
      )}
    >
      {text}
    </a>
  )
}

const JPG = (data: any) => {
  const detailsExpand = useDiscoverStore((state) => state.detailsExpand)

  return (
    <a href={data.data.link} target="_blank">
      <div
        className={clsx(
          'relative group rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col',
          detailsExpand ? 'shadow-2xl' : '',
          'text-white'
        )}
      >
        {['NFT-Video', 'Video'].includes(data.data.type) ? (
          <video
            src={data.data.image}
            autoPlay
            muted
            className={clsx(
              'rounded-xl',
              detailsExpand ? 'rounded-b-none' : ''
            )}
          />
        ) : (
          <img
            src={data.data.image}
            alt="Checks inspired artwork"
            loading="lazy"
            className={clsx(
              'rounded-xl',
              detailsExpand ? 'rounded-b-none' : ''
            )}
          />
        )}
        <div
          className={clsx(
            'invisible group-hover:visible absolute w-full h-full rounded-xl',
            ' bg-black/40'
          )}
        />
        {data.data.author.twitter && (
          //   <a
          //     href={`https://twitter.com/${data.data.author.twitter}`}
          //     target="_blank"
          //     className="cursor-pointer"
          //   >
          <div className="absolute top-5 left-5 p-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group">
            <div className={clsx('')}>{`@${data.data.author.twitter}`}</div>
            {/* <div className="invisible group-hover:visible">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div> */}
          </div>
          //   </a>
        )}
        {data.data.name && (
          <div
            className={clsx(
              'absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pr-6',
              'text-3xl'
            )}
          >
            {data.data.name}
          </div>
        )}
        {data.data.endTime && mintingNow(data.data.endTime) && (
          <span className="absolute top-4 right-4 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green/80"></span>
          </span>
        )}
        {detailsExpand ? (
          <div className="m-3 flex flex-row justify-between items-center">
            <div className="text-xl">{data.data.name}</div>
            <a
              href={`https://twitter.com/${data.data.author.twitter}`}
              target="_blank"
              className="py-px px-1 hover:border border-grey-light rounded-lg"
            >
              <div className="text-grey">{`@${data.data.author.twitter}`}</div>
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </a>
  )
}

const ArtDisplay = ({ art, mintingNow }: { art: any[]; mintingNow: any[] }) => {
  const [sorting, setSorting] = useState('Last Added')
  const numberOfArtworks = art.length

  art = sortByDateSubmitted(art, 'asc')

  const sortArt = (event: any) => {
    const type = event.target.value
    if (type === 'Last Added') {
      art = sortByDateSubmitted(art, 'asc')
    } else if (type === 'First Added') {
      art = sortByDateSubmitted(art, 'desc')
    } else {
      shuffle(art)
    }
    setSorting(type)
  }

  return (
    <div className="mx-6 sm:mx-20 flex flex-col">
      <div className="mt-4 mb-6 md:mt-12 md:mb-20 text-center text-4xl font-semibold text-grey flex flex-row justify-center gap-2 items-center">
        <p>Explore</p>
        <p>{numberOfArtworks}</p>
        <div className="h-10 w-10 hidden sm:block">
          <Check color="#7D7D7D" />
        </div>
        <p>Artworks</p>
      </div>
      <MintingNow data={mintingNow} />
      <div className="mt-6 mb-2 flex flex-row justify-between items-center">
        <select
          onChange={sortArt}
          value={sorting}
          className={clsx(
            'appearance-none rounded-full flex flex-row items-center py-1 px-4 cursor-pointer text-sm',
            'bg-white text-grey hover:bg-black hover:text-white',
            'dark:bg-grey-max dark:hover:bg-white dark:hover:text-black'
          )}
        >
          <option value="Last Added">{`Last Added`}</option>
          <option value="First Added">{`First Added`}</option>
          <option value="Random">{`Random`}</option>
        </select>
        <div className="flex flex-row gap-2">
          <LinkButton
            href="https://oncyber.io/spaces/hlc4dbyphjkHl9xH68fe"
            text="OnCyber Gallery"
          />
          <LinkButton href="/submit" text="Submit Artwork" />
        </div>
      </div>
      <div className={clsx('gap-6', styles.grid)}>
        {art.map((jpg, index) => {
          return (
            <div key={`art-${index}`}>
              <JPG data={jpg} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ArtDisplay
