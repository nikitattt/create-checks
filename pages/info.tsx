import clsx from 'clsx'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import BuildBy from '../components/BuildBy'
import Check from '../components/Check'
import NavBar from '../components/NavBar'
import { useMenuStore } from '../store/menu'

const SectionTitle = ({ index, name }: { index: number; name: string }) => {
  return (
    <div className="mt-20">
      {/* <div>{index}</div> */}
      <p className="mt-1 font-medium text-2xl tracking-tight">{name}</p>
    </div>
  )
}

const ExternalLink = ({
  link,
  name,
  className
}: {
  link: string
  name: string
  className?: string
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className={clsx('p-2 hover:underline cursor-pointer', className)}
    >
      <div className="flex flex-row gap-1 items-center">
        <p className="font-medium">{name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-3 h-3 mb-px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>
      </div>
    </a>
  )
}

const Info: NextPage<{ data: string }> = (props) => {
  const { data } = props

  const darkMode = useMenuStore((state) => state.darkMode)

  // TODO: remove h-screen when having longer pages
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col">
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
            <p className="mt-12 text-center text-xl text-grey tracking-tight">
              What is
            </p>
            <p className="text-center text-4xl font-bold">Checks</p>
            {/* <div className="h-12 w-12">
              <Check color="#000" />
            </div> */}
            <p className="mt-16 text-lg">
              Checks is a digital artwork released 3 Jan 2023 by{' '}
              <span>
                <a
                  href="https://twitter.com/jackbutcher"
                  target="_blank"
                  className="cursor-pointer underline hover:no-underline"
                >
                  Jack Butcher
                </a>
              </span>{' '}
              that is designed to challenge the ownership and authorship in the
              age on Internet.
            </p>
            <p className="mt-16 -mb-6 tracking-tight leading-5 text-grey-dark">
              Great resources to
              <br />
              learn about Checks:
            </p>

            <SectionTitle index={1} name="Official Intro" />
            <ExternalLink
              link="https://checks.art/intro"
              name="Checks website"
              className="mt-4"
            />
            <ExternalLink
              link="https://checks.art/intro"
              name="Jack's transparency thread"
            />

            <SectionTitle index={2} name="Checks 101 by Luke" />
            <ExternalLink
              link="https://twitter.com/_lukeweaver_/status/1618273618789539843"
              name="Twitter Thread"
              className="mt-4"
            />

            <SectionTitle index={3} name="Podcasts" />
            <ExternalLink
              link="https://podcasts.proof.xyz/artist-profile-jack-butcher-subverts-twitter-verification-with-checks-vv-edition/#play"
              name="Jack on Proof"
              className="mt-4"
            />
            <ExternalLink
              link="https://podcasts.apple.com/us/podcast/gm-web3-on-rug-radio-ft-jack-butcher/id1623389858?i=1000595818382"
              name="Jack on GM Web3"
            />

            <SectionTitle index={4} name="Spaces" />
            <ExternalLink
              link="https://twitter.com/i/spaces/1MnGnpyPrlkxO?s=20"
              name="Check In by Jack"
              className="mt-4"
            />
            <ExternalLink
              link="https://twitter.com/i/spaces/1yNGaNnZPMgJj"
              name="Jack on Zora"
            />
            <ExternalLink
              link="https://twitter.com/i/spaces/1vAxRAzvwrDJl?s=20"
              name="Checks VV - Community Space"
            />
            <ExternalLink
              link="https://twitter.com/i/spaces/1DXxyvLLEOWKM?s=20"
              name="Checks Community Space Ep2"
            />

            <SectionTitle index={5} name="News Outlets" />
            <ExternalLink
              link="https://nftnow.com/features/how-jack-butchers-checks-challenges-the-way-people-view-nfts/"
              name="nft now"
              className="mt-4"
            />

            <p className="mt-20 text-center text-xl text-grey tracking-tight">
              What is
            </p>
            <p className="text-center text-3xl font-bold">CreateChecks.Art</p>
            <p className="mt-16 text-lg">
              CreateChecks.Art (this website) is a community project created by{' '}
              <span>
                <a
                  href="https://twitter.com/iamng_eth"
                  target="_blank"
                  className="cursor-pointer underline hover:no-underline"
                >
                  ng
                </a>
              </span>{' '}
              to allow easier creation of Checks based art and to showcase
              community created art.
            </p>
          </div>
          <BuildBy />
        </main>

        <footer className="mt-16 mb-20 text-center">
          <>
            <Link href="/submit" className="underline text-grey">
              Submit your artwork
            </Link>
          </>
        </footer>
      </div>
    </div>
  )
}

export default Info
