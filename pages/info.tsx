import type { NextPage } from 'next'
import Head from 'next/head'
import BuildBy from '../components/BuildBy'
import Check from '../components/Check'
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
          <div className="px-8 sm:px-20 flex flex-col text-center items-center mx-auto max-w-2xl">
            <p className="mt-12 text-center text-2xl">What is</p>
            <a
              href="https://checks.art/"
              target="_blank"
              className="hover:underline cursor-pointer"
            >
              <p className="text-center text-6xl font-bold">Checks</p>
            </a>
            {/* <div className="h-12 w-12">
              <Check color="#000" />
            </div> */}
            <p className="mt-16">
              CHECKS IS AN INFINITE CANVAS FOR EXPRESSION THAT IS DESIGNED TO
              CHALLENGE THE CONCEPT OF OWNERSHIP AND AUTHORSHIP IN THE AGE OF
              THE INTERNET.
            </p>
            <a
              href="https://twitter.com/jackbutcher"
              target="_blank"
              className="mt-3 hover:underline cursor-pointer self-center"
            >
              <p className="text-grey font-medium">@jackbutcher</p>
            </a>
            <div className="mt-16">1</div>
            <a
              href="https://checks.art/intro"
              target="_blank"
              className="mt-1 hover:underline cursor-pointer"
            >
              <p className="font-medium text-2xl">Official Intro</p>
            </a>
            <div className="mt-16">2</div>
            <a
              href="https://twitter.com/_lukeweaver_/status/1618273618789539843"
              target="_blank"
              className="mt-1 hover:underline cursor-pointer"
            >
              <div>
                <p className="font-medium text-2xl">Checks 101</p>
                <p className="text-grey font-medium">by Luke</p>
              </div>
            </a>
          </div>
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
