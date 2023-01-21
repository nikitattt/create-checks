import type { NextPage } from 'next'
import Head from 'next/head'
import BuildBy from '../components/BuildBy'
import NavBar from '../components/NavBar'
import { useMenuStore } from '../store/menu'
import ArtDisplay from '../components/ArtDisplay'

const Discover: NextPage<{ art: any[] }> = (props) => {
  const { art } = props

  const darkMode = useMenuStore((state) => state.darkMode)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col h-screen">
        <Head>
          <title>Discover Checks Art</title>
          <meta
            name="description"
            content="Discover Checks Art and Derivatives"
          />
        </Head>

        <main className="">
          <NavBar page="/discover" />
          <ArtDisplay art={art} />
          <BuildBy />
        </main>

        <footer className="">
          <></>
        </footer>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      art: [
        {
          name: 'Checks',
          type: 'NFT',
          image:
            'https://openseauserdata.com/files/0e07d4fb4ef0272ccb309437ec3310ce.svg',
          link: 'https://create.zora.co/collections/0x34eebee6942d8def3c125458d1a86e0a897fd6f9',
          author: {
            twitter: 'jackbutcher'
          }
        },
        {
          name: '✖',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/badb714706cdf364871e7e24e27f2aaf.jpg?auto=format&w=3840',
          link: 'https://create.zora.co/collections/0xee2010b07c6e26635db774177a58e9d79d13ed13',
          author: {
            twitter: 'traf'
          }
        },
        {
          name: 'Checks out',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/ea43d5579c02a90a77041fb6a36c1762.png?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0xc6f24005e2be8077f791529cbecefca1c7292842',
          author: {
            twitter: 'jalil_eth'
          }
        }
      ]
    }
  }
}

export default Discover
