import type { NextPage } from 'next'
import Head from 'next/head'
import BuildBy from '../components/BuildBy'
import NavBar from '../components/NavBar'
import { useMenuStore } from '../store/menu'
import ArtDisplay from '../components/ArtDisplay'
import Link from 'next/link'
import { mintingNow } from '../utils/dates'
import { shuffle, sortByDateSubmitted } from '../utils/arrays'

import art from '../art/art.json'

const Discover: NextPage<{ art: any[]; mintingNow: any[] }> = (props) => {
  const { art, mintingNow } = props

  const darkMode = useMenuStore((state) => state.darkMode)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col">
        <Head>
          <title>Discover Checks Art</title>
          <meta
            name="description"
            content="Discover Checks Art and Derivatives"
          />
        </Head>

        <main className="">
          <NavBar page="/discover" />
          <ArtDisplay art={art} mintingNow={mintingNow} />
          <div className="hidden lg:block">
            <BuildBy />
          </div>
        </main>

        <footer className="mt-20 mb-16 text-center">
          <Link href="/submit" className="underline text-grey">
            Submit artwork
          </Link>
        </footer>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const mintingNowArt = art.filter((e) => e.endTime && mintingNow(e.endTime))
  const sortedArt = sortByDateSubmitted(art, 'asc')

  return {
    props: {
      mintingNow: mintingNowArt,
      art: sortedArt
    }
  }
}

// {
//   name: '',
//   link: '',
//   image: '',
//   type: 'NFT',
//   contractAddress: '',
//   createdOnCreateChecksArt: false,
//   cost: '',
//   platform: '',
//   endTime: '',
//   author: {
//     twitter: '',
//     address: '',
//     ens: ''
//   }
// }

// {
//     name: '',
//     type: 'NFT',
//     image:
//       '',
//     link: '',
//     contractAddress: '',
//     createdOnCreateChecksArt: false,
//     author: {
//       twitter: '',
//       address: '',
//       ens: ''
//     }
//   }

export default Discover
