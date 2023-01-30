import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { saEvent } from '../scripts/events'
import { useBoardStore } from '../store/board'
import { useMenuStore } from '../store/menu'
import { ColorMode } from '../utils/colors'
import { boardToImage } from '../utils/image'

const prices = [0.0069, 0.005, 0.01, 0.033]

const Mint: NextPage<{ data: string }> = (props) => {
  const { data } = props

  const darkMode = useMenuStore((state) => state.darkMode)
  const board = useBoardStore((state) => state.board)
  const rows = useBoardStore((state) => state.rows)
  const columns = useBoardStore((state) => state.columns)

  const [buttonClicked, setButtonClicked] = useState(false)
  const [image, setImage] = useState<string | undefined>(undefined)
  const [price, setPrice] = useState(prices[3])
  const [twitterHandle, setTwitterHandle] = useState('')
  const [twitterRecorder, setTwitterRecorder] = useState<boolean | undefined>(
    undefined
  )

  const mint = (number: number) => {
    setButtonClicked(!buttonClicked)
    saEvent('ab01_mint_button_clicked', {
      price: price.toString(),
      number: number
    })
  }

  const goBack = () => {
    saEvent('ab01_mint_page_exit', { price: price.toString() })
  }

  const notifyMe = () => {
    if (twitterHandle.length >= 2) {
      saEvent('ab01_mint_notify_me', { twitter: twitterHandle })
      setTwitterRecorder(true)
    } else {
      setTwitterRecorder(false)
    }
  }

  useMemo(() => {
    setPrice(prices[Math.floor(Math.random() * prices.length)])
  }, [setPrice])

  useEffect(() => {
    const img = boardToImage(
      board,
      darkMode ? ColorMode.dark : ColorMode.light,
      rows,
      columns
    )
    setImage(img)
  }, [board, setImage])

  useEffect(() => {
    if (board && image && price) {
      saEvent('ab01_mint_page_open', { price: price.toString() })
    }
  }, [board, image, price])

  if (!board || !image || !price) {
    return <div></div>
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col">
        <Head>
          <title>Mint</title>
          <meta name="description" content="" />
        </Head>

        <main className="">
          {buttonClicked ? (
            <div className="px-8 sm:px-20 flex flex-col text-center items-center mx-auto max-w-2xl justify-center h-screen">
              <p className="text-4xl">Thank you for the interest!</p>
              <p className="mt-6 text-2xl text-grey-dark">
                This feature is not live yet, but we are working like 🐝 to
                finally make it a reality!
              </p>
              {/* <a
                href="https://twitter.com/iamng_eth"
                target="_blank"
                className="mt-8 bg-black text-white dark:bg-white dark:text-black py-3 px-6 rounded-xl"
              >
                Follow
              </a> */}
              <p className="mt-12 leading-4 text-grey-dark">
                Leave your Twitter handle and we'll
                <br />
                drop you a message when it's ready✨
              </p>
              <input
                type="text"
                value={twitterHandle}
                placeholder="twitter_handle"
                onChange={(e) => {
                  setTwitterHandle(e.target.value)
                }}
                className={clsx(
                  'mt-4 w-56 bg-white-light dark:bg-black rounded-xl px-3 py-1.5 text-lg border-2 border-black',
                  'caret-grey dark:caret-grey-dark text-black dark:text-white focus:outline-none focus:ring-none',
                  'placeholder:text-grey-dark'
                )}
              />
              {twitterRecorder === undefined ? (
                <button
                  onClick={notifyMe}
                  className="mt-2 w-56 bg-black text-white dark:bg-white dark:text-black py-3 px-6 rounded-xl"
                >
                  Notify Me
                </button>
              ) : twitterRecorder ? (
                <p className="mt-2 text-green leading-4 max-w-xs">
                  You are in!
                </p>
              ) : (
                <p className="mt-2 text-red leading-4 max-w-xs">
                  We were not able to save your handle. Maybe it's too short or
                  something happened along the way. Please try again.
                </p>
              )}

              <Link
                href="/"
                className="mt-16 border-2 border-black text-black dark:border-white dark:text-white py-3 px-6 rounded-xl font-semibold"
              >
                Go back to main page
              </Link>
            </div>
          ) : (
            <div className="mt-20 px-8 sm:px-20 flex flex-col text-center items-center mx-auto max-w-2xl justify-center">
              <p className="text-3xl">Mint this artwork?</p>
              <img
                //   width={400}
                src={image}
                className="mt-6 rounded-2xl shadow-xl"
              />
              <p className="mt-6 text-grey-dark leading-4 text-justify">
                You can mint your artwork on CreateChecks contract to
                commemorade your work and save it forever on blockchain! You
                also will be able to auction it or sell for a fixed price on any
                of the popular marketplaces. CreateChecks takes no royalties on
                secondary sales.
              </p>
              <button
                onClick={() => mint(1)}
                className="mt-6 bg-black text-white dark:bg-white dark:text-black py-3 px-6 rounded-xl w-full text-lg"
              >
                <div className="flex flex-row justify-between">
                  <p>Mint</p>
                  <p>{`${price} Ξ`}</p>
                </div>
              </button>
              <button
                onClick={() => mint(20)}
                className="mt-2 border-2 border-black text-black dark:border-white dark:text-white py-3 px-6 rounded-xl w-full text-lg"
              >
                <div className="flex flex-row justify-between">
                  <p>Mint 20</p>
                  <p>{`${price * 20} Ξ`}</p>
                </div>
              </button>
              <button
                onClick={() => mint(10)}
                className="mt-2 border-2 border-black text-black dark:border-white dark:text-white py-3 px-6 rounded-xl w-full text-lg"
              >
                <div className="flex flex-row justify-between">
                  <p>Mint 10</p>
                  <p>{`${price * 10} Ξ`}</p>
                </div>
              </button>
              <button
                onClick={() => mint(5)}
                className="mt-2 border-2 border-black text-black dark:border-white dark:text-white py-3 px-6 rounded-xl w-full text-lg"
              >
                <div className="flex flex-row justify-between">
                  <p>Mint 5</p>
                  <p>{`${price * 5} Ξ`}</p>
                </div>
              </button>
              <Link
                href="/"
                onClick={goBack}
                className="mt-20 mb-20 bg-black text-white dark:bg-white dark:text-black py-3 px-6 rounded-xl w-full text-lg"
              >
                Go back, I don't want to mint
              </Link>
            </div>
          )}
        </main>

        <footer className="">
          <></>
        </footer>
      </div>
    </div>
  )
}

export default Mint
