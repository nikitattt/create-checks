import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Check from '../Check'
import NumPassesMinted from '../NumPassedMinted'

const MintCountdown = dynamic(() => import('../MintCountdown'), {
  loading: () => <>Loading...</>
})

const MintOfTheDay = () => {
  const url =
    'https://create.zora.co/collections/0x812d8759201f803beecae875aad71e7dcaafa6f7'
  const address = '0x812d8759201f803beecae875aad71e7dcaafa6f7'
  return (
    <div className="mt-6 flex flex-row items-center">
      <div className="-rotate-90 w-max h-max text-4xl text-grey-light font-bold -m-16 tracking-tighter">
        Mint Now
      </div>
      <a className="ml-6 cursor-pointer" href={url} target="_blank">
        <img
          className="rounded-xl shadow-grey-light"
          src="https://bafkreibguecdjhl34uebuyea7qdculgm4odbqwcwvc4gpmcdow3v3x6l34.ipfs.nftstorage.link/"
          alt=""
          // height="200"
          width="300"
        />
      </a>
      <div className="p-4 font-medium text-xl flex flex-col justify-start text-start">
        <div className="text-3xl">Blue Wavy Circle of Life</div>
        <div className="text-grey text-base">Free</div>
        <div className="h-4" />
        <MintCountdown />
        <NumPassesMinted address={address} />
        <a
          href={url}
          target="_blank"
          className={clsx(
            'mt-4 rounded-full w-max py-1 px-6',
            'bg-white hover:bg-black hover:text-white'
          )}
        >
          Zora
        </a>
      </div>
    </div>
  )
}

export default MintOfTheDay
