import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import BuildBy from '../components/BuildBy'
import NavBar from '../components/NavBar'
import OriginalsColors from '../components/OriginalsColors'
import { useMenuStore } from '../store/menu'

const Assets: NextPage<{ art: any[]; mintingNow: any[] }> = (props) => {
  const { art, mintingNow } = props

  const darkMode = useMenuStore((state) => state.darkMode)
  const switchDarkMode = useMenuStore((state) => state.switchDarkMode)

  useEffect(() => {
    switchDarkMode(true)
  })

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col">
        <Head>
          <title>Checks Assets</title>
          <meta name="description" content="Discover Checks related assets" />
        </Head>

        <main className="text-center">
          <NavBar page="/assets" />
          <p className="mt-20 text-4xl font-bold">Colors</p>
          <p className="mt-2">
            All colors used in{' '}
            <a
              href="https://etherscan.io/address/0x036721e5a769cc48b3189efbb9cce4471e8a48b1#code#F17#L1"
              target="_blank"
              className="mt-8 underline"
            >
              Checks VV Originals
            </a>
          </p>
          <p className="mt-20 text-sm text-grey">
            Click on any check to copy color
          </p>
          <OriginalsColors />
          <BuildBy />
        </main>

        <footer className="mt-20 mb-16 text-center"></footer>
      </div>
    </div>
  )
}

export default Assets
