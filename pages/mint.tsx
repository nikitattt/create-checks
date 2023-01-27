import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { saEvent } from '../scripts/events'
import { useBoardStore } from '../store/board'
import { useMenuStore } from '../store/menu'
import { ColorMode } from '../utils/colors'
import { boardToImage } from '../utils/image'

const prices = ['0.0069', '0.005', '0.0042', '0.01', '0.033']

const Mint: NextPage<{ data: string }> = (props) => {
  const { data } = props

  const darkMode = useMenuStore((state) => state.darkMode)
  const board = useBoardStore((state) => state.board)

  const [buttonClicked, setButtonClicked] = useState(false)
  const [image, setImage] = useState<string | undefined>(undefined)
  const [price, setPrice] = useState<string | undefined>(prices[3])

  useMemo(() => {
    setPrice(prices[Math.floor(Math.random() * prices.length)])
  }, [setPrice])

  const mint = (number: number) => {
    setButtonClicked(!buttonClicked)
    saEvent('mint_button_clicked', { price: price, number: number })
    console.log('send event ' + price)
  }

  useEffect(() => {
    const img = boardToImage(board, darkMode ? ColorMode.dark : ColorMode.light)
    setImage(img)
    // saEvent('mint_page_open')
  }, [board, setImage])

  useEffect(() => {
    // console.log('send event')
    // saEvent('mint_page_open')
  })

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
                We are working to finally make it a reality!
              </p>
              <a
                href="https://twitter.com/iamng_eth"
                target="_blank"
                className="mt-8 bg-black text-white dark:bg-white dark:text-black py-3 px-6 rounded-xl"
              >
                Follow
              </a>
              <p className="mt-2 leading-4 text-grey-dark">
                to hear first
                <br />
                when it's live!
              </p>

              <Link
                href="/"
                className="mt-8 border-2 border-black text-black dark:border-white dark:text-white py-3 px-6 rounded-xl font-semibold"
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
                  <p>{`${Number(price) * 20} Ξ`}</p>
                </div>
              </button>
              <button
                onClick={() => mint(10)}
                className="mt-2 border-2 border-black text-black dark:border-white dark:text-white py-3 px-6 rounded-xl w-full text-lg"
              >
                <div className="flex flex-row justify-between">
                  <p>Mint 10</p>
                  <p>{`${Number(price) * 10} Ξ`}</p>
                </div>
              </button>
              <button
                onClick={() => mint(5)}
                className="mt-2 border-2 border-black text-black dark:border-white dark:text-white py-3 px-6 rounded-xl w-full text-lg"
              >
                <div className="flex flex-row justify-between">
                  <p>Mint 5</p>
                  <p>{`${Number(price) * 5} Ξ`}</p>
                </div>
              </button>
              <Link
                href="/"
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
