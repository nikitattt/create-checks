import type { NextPage } from 'next'
import Head from 'next/head'
import BuildBy from '../components/BuildBy'
import Description from '../components/Description'
import Menu from '../components/Menu'
import NavBar from '../components/NavBar'

import dynamic from 'next/dynamic'
import { useMenuStore } from '../store/menu'

const Board = dynamic(() => import('../components/Board'), {
  ssr: false
})

const Home: NextPage<{ data: string }> = (props) => {
  const { data } = props

  const darkMode = useMenuStore((state) => state.darkMode)

  // TODO: remove h-screen when having longer pages
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col h-screen">
        <Head>
          <title>Create Checks Art</title>
          <meta
            name="description"
            content="Create Checks Art. Inspired by @jackbutcher's Checks - VV Edition."
          />
        </Head>

        <main className="">
          <NavBar page="/" />
          <Board />
          <BuildBy />
          <Description />
          <Menu />
        </main>

        <footer className="">
          <></>
        </footer>
      </div>
    </div>
  )
}

export default Home
