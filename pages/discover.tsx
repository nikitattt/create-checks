import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import BuildBy from '../components/BuildBy'
import Description from '../components/Description'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'
import { useGameStore } from '../store/game'
import { getRandomCheckColor } from '../utils/colors'

import dynamic from 'next/dynamic'
import { useMenuStore } from '../store/menu'
import ArtDisplay from '../components/ArtDisplay'

const Discover: NextPage<{ data: string }> = (props) => {
  const { data } = props

  const darkMode = useMenuStore((state) => state.darkMode)

  // TODO: remove h-screen when having longer pages
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
          <ArtDisplay art={[]} />
          <BuildBy />
        </main>

        <footer className="">
          <></>
        </footer>
      </div>
    </div>
  )
}

export default Discover
