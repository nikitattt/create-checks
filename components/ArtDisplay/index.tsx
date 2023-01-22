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
          'rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col',
          detailsExpand ? 'shadow-2xl' : ''
        )}
      >
        <img
          src={data.data.image}
          alt="Checks inspired artwork"
          className={clsx('rounded-xl', detailsExpand ? 'rounded-b-none' : '')}
        />
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
