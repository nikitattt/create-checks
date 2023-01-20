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

const GameBoard = dynamic(() => import('../components/GameBoard'), {
  ssr: false
})

const Home: NextPage<{ data: string }> = (props) => {
  const { data } = props

  const darkMode = useMenuStore((state) => state.darkMode)
  const setYourCheckColor = useGameStore((state) => state.setYourCheckColor)
  const setOpponentCheckColor = useGameStore(
    (state) => state.setOpponentCheckColor
  )

  useEffect(() => {
    const colorOne = getRandomCheckColor()
    let colorTwo = getRandomCheckColor()
    while (colorOne === colorTwo) {
      colorTwo = getRandomCheckColor()
    }

    setYourCheckColor(colorOne)
    setOpponentCheckColor(colorTwo)
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col">
        <Head>
          <title>Create Checks Art</title>
          <meta
            name="description"
            content="Create Checks Art. Inspired by @jackbutcher's Checks - VV Edition."
          />
        </Head>

        <main className="">
          <NavBar />
          <GameBoard />
          <BuildBy />
          <Description />
          <Menu />
        </main>

        <footer className="flex mt-20">
          <></>
        </footer>
      </div>
    </div>
  )
}

export default Home
