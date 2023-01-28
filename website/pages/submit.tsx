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
    'w-60 bg-black text-white py-2 rounded-xl dark:bg-white dark:text-black'
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

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col">
        <Head>
          <title>Mint</title>
          <meta name="description" content="" />
          <script async src="https://tally.so/widgets/embed.js"></script>
        </Head>

        <main className="">
          <div className="mt-20 px-8 sm:px-20 flex flex-col text-center items-center mx-auto max-w-3xl justify-center">
            <h1 className="text-3xl">Submit Artwork</h1>
            <p className="mt-6">
              Submit your artwork to be featured on "Discover" and "Mint Now"
              sections.
            </p>
            <Image
              src="/img/discover-sections.png"
              alt="Sections of discover page"
              width={1000}
              height={1000}
              className="mt-6 rounded-xl"
            />
            <p className="mt-6 text-red font-bold">
              IMPORTANT:
              <br />
              Currently we can only feature Timed Editions in the "Minting Now"
              section. If your mint is not limited in time it will be added only
              to the "Discover" section. If you have a work that is currently
              minting, but it's an edition of limited works without any time
              limit, submit to just "Discover" section.
            </p>
            <p className="mt-6 italic">
              Being added to the "Minting Now" section means the automatic
              addition of the work to the "Discover" section.
            </p>
            <p className="mt-6 font-semibold">
              PLEASE
              <br />
              First check your piece haven't already been included!
            </p>
            {type === '' ? (
              <p className="mt-12 text-grey tracking-tight leading-4">
                Where do you want to add your work?
              </p>
            ) : (
              <p className="mt-12 text-grey tracking-tight leading-4">
                Have you minted your artwork?
              </p>
            )}
            {type === '' ? (
              <div className="mt-6 flex flex-col gap-2">
                <Button
                  onClick={() => {}}
                  text={`"Mint Now" & "Discover"`}
                  href="https://tally.so/r/3q5lD7"
                />
                <Button
                  onClick={() => setType('discover')}
                  text={`Just "Discover"`}
                />
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-2">
                <Button
                  onClick={() => {}}
                  text={`Yes`}
                  href="https://tally.so/r/nGeP9o"
                />
                <Button
                  onClick={() => {}}
                  text={`No`}
                  href="https://tally.so/r/wo9jee"
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
