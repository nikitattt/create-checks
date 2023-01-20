import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import BuildBy from '../components/BuildBy'
import Check from '../components/Check'
import CheckColorSelect from '../components/CheckColorSelect'
import Description from '../components/Description'
import GameBoard from '../components/GameBoard'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'
import { useGameStore } from '../store/game'
import { getRandomCheckColor } from '../utils/colors'

const Home: NextPage<{ data: string }> = (props) => {
  const { data } = props

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
    <div className="font-sans text-black bg-background flex flex-col">
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
  )
}

export default Home
