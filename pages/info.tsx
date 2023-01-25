import type { NextPage } from 'next'
import Head from 'next/head'
import BuildBy from '../components/BuildBy'
import NavBar from '../components/NavBar'
import { useMenuStore } from '../store/menu'

const Info: NextPage<{ data: string }> = (props) => {
  const { data } = props

  const darkMode = useMenuStore((state) => state.darkMode)

  // TODO: remove h-screen when having longer pages
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col h-screen">
        <Head>
          <title>Checks Art Info</title>
          <meta
            name="description"
            content="History and information about @jackbutcher's Checks - VV Edition."
          />
        </Head>

        <main className="">
          <NavBar page="/info" />
          <p className="mt-60 text-center">INFO</p>
          <BuildBy />
        </main>

        <footer className="">
          <></>
        </footer>
      </div>
    </div>
  )
}

export default Info
