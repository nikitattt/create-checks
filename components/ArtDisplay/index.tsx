import clsx from 'clsx'
import { useDiscoverStore } from '../../store/discover'
import Check from '../Check'
import styles from './ArtDisplay.module.css'

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
        <img
          src={data.data.image}
          alt="Checks inspired artwork"
          className={clsx('rounded-xl', detailsExpand ? 'rounded-b-none' : '')}
        />
        <div
          className={clsx(
            'invisible group-hover:visible absolute w-full h-full rounded-xl',
            ' bg-black/40'
          )}
        />
        {data.data.author.twitter && (
          <a
            href={`https://twitter.com/${data.data.author.twitter}`}
            target="_blank"
            className="cursor-pointer"
          >
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
          </a>
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

const ArtDisplay = ({ art }: { art: any[] }) => {
  return (
    <div className="mx-6 sm:mx-20 flex flex-col">
      <div className="mt-12 mb-20 text-center text-4xl font-semibold text-grey flex flex-row justify-center gap-2">
        <p>Explore</p>
        <div className="h-10 w-10">
          <Check color="#7D7D7D" />
        </div>
        <p>Artworks</p>
      </div>
      {/* <div className="w-max mb-6 items-start">
        <DetailsSwitch />
      </div> */}
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
