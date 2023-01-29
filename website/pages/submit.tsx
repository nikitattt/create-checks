import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useMenuStore } from '../store/menu'

const Button = ({
  onClick,
  text,
  href
}: {
  onClick: () => void
  text: string
  href?: string
}) => {
  const style =
    'bg-black text-white py-2 px-10 rounded-xl dark:bg-white dark:text-black'
  if (href) {
    return (
      <a href={href} target="_blank" className={style}>
        {text}
      </a>
    )
  } else
    return (
      <button onClick={onClick} className={style}>
        {text}
      </button>
    )
}

const Mint: NextPage<{ data: string }> = (props) => {
  const { data } = props

  const [type, setType] = useState('')

  const darkMode = useMenuStore((state) => state.darkMode)

  // const questionText = () => {}
  const questionText =
    (type === '' && 'Have you minted your artwork?') ||
    (type === 'minted' &&
      'Is it an Open Edition with a time limit?\ni.e. people can mint an unlimited amount of NFTs but only for a limited time.') ||
    ''

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col">
        <Head>
          <title>Submit Artwork</title>
          <meta
            name="description"
            content="Submit your Checks based artwork to the collection of art displayed on the Discover page on CreateChecks.Art"
          />
          <script async src="https://tally.so/widgets/embed.js"></script>
        </Head>

        <main className="">
          <div className="mt-20 px-8 sm:px-20 flex flex-col text-center items-center mx-auto max-w-3xl justify-center">
            <h1 className="text-3xl">Submit Artwork</h1>
            <p className="mt-6">
              Submit your artwork to be featured on Discover page of
              CreateChecks.Art
            </p>
            <Image
              src="/img/discover-page.png"
              alt="Sections of discover page"
              width={1000}
              height={1000}
              className="mt-6 rounded-xl shadow-xl"
            />
            <p className="mt-6 font-semibold text-grey">
              Please,
              <br />
              First check your piece haven't already been included already!
            </p>
            <p className="mt-12 tracking-tight leading-4 whitespace-pre-line text-lg">
              {questionText}
            </p>
            {type === '' ? (
              <div className="mt-6 flex flex-col gap-2">
                <Button onClick={() => setType('minted')} text={`Yes`} />
                <Button
                  onClick={() => {}}
                  text={`No`}
                  href="https://tally.so/r/wo9jee"
                />
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-2">
                <Button
                  onClick={() => {}}
                  text={`Yes`}
                  href="https://tally.so/r/3q5lD7"
                />
                <Button
                  onClick={() => {}}
                  text={`No`}
                  href="https://tally.so/r/nGeP9o"
                />
              </div>
            )}
            <Link
              href="/"
              className="mt-12 py-2 px-6 border-2 border-black text-black rounded-xl dark:border-white dark:text-white"
            >
              Back to main page
            </Link>
          </div>
        </main>

        <footer className="mb-40">
          <></>
        </footer>
      </div>
    </div>
  )
}

export default Mint
