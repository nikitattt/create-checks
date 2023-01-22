import type { NextPage } from 'next'
import Head from 'next/head'
import BuildBy from '../components/BuildBy'
import NavBar from '../components/NavBar'
import { useMenuStore } from '../store/menu'
import ArtDisplay from '../components/ArtDisplay'

const Discover: NextPage<{ art: any[] }> = (props) => {
  const { art } = props

  const darkMode = useMenuStore((state) => state.darkMode)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="font-sans text-black bg-background dark:bg-black dark:text-white flex flex-col">
        <Head>
          <title>Discover Checks Art</title>
          <meta
            name="description"
            content="Discover Checks Art and Derivatives"
          />
        </Head>

        <main className="">
          <NavBar page="/discover" />
          <ArtDisplay art={art} />
          <BuildBy />
        </main>

        <footer className="mt-20 mb-16 text-center">
          <a
            href="https://twitter.com/iamng_eth/status/1616641888768987139"
            target="_blank"
            className="underline text-grey"
          >
            Submit artwork
          </a>
        </footer>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      art: [
        {
          name: 'Checks',
          type: 'NFT',
          image:
            'https://openseauserdata.com/files/0e07d4fb4ef0272ccb309437ec3310ce.svg',
          link: 'https://create.zora.co/collections/0x34eebee6942d8def3c125458d1a86e0a897fd6f9',
          author: {
            twitter: 'jackbutcher'
          }
        },
        {
          name: '✖',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/badb714706cdf364871e7e24e27f2aaf.jpg?auto=format&w=3840',
          link: 'https://create.zora.co/collections/0xee2010b07c6e26635db774177a58e9d79d13ed13',
          author: {
            twitter: 'traf'
          }
        },
        {
          name: 'Checks out',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/ea43d5579c02a90a77041fb6a36c1762.png?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0xc6f24005e2be8077f791529cbecefca1c7292842',
          author: {
            twitter: 'jalil_eth'
          }
        },
        {
          name: 'Bricks',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/1775482a38a7a52063898bbda3c95331.jpg?auto=format&w=3840',
          link: 'https://create.zora.co/collections/0x5b5b5470246992d519b02550213182cf0e0bf2c3',
          author: {
            twitter: 'aaraalto',
            address: '',
            ens: 'aaraalto.eth'
          }
        },
        {
          name: 'Noggled Checks - VV + Lil Nouns',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/cf4ee4de7790c745715d8f59970918dc.png?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0xa6d58aaaf07dcb19551654ff7617b234d75d53a5',
          author: {
            twitter: '',
            address: '',
            ens: 'lilsaturn.eth'
          }
        },
        {
          name: 'Super Check Bros.',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/1a52555f8f268aa544d3d263f41d80f8.png?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0x2affe08d05daa8ae7b3fa8c1a23ad64301c271a1',
          author: {
            twitter: '',
            address: '',
            ens: 'messhup.eth'
          }
        },
        {
          name: 'SAMO',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/6a7cb13f8e303d618aaa90c792e65236.jpg?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0x8526b570b1d56cbd87123b14222c43561c264386',
          author: {
            twitter: '',
            address: '',
            ens: 'saintless.eth'
          }
        },
        {
          name: 'cc0hecks',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/500422d70efdbd3b91a27352819bb605.jpg?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0x8e359c7468ebf30512bcb5ca39c330d10a1505d8',
          author: {
            twitter: '',
            address: '',
            ens: 'ianbydesign.eth'
          }
        },
        {
          name: 'Checks - Squiggle Edition',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/af9b7e490a99f60d585716366a705afa.png?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0x50e9dc61b38854e55900b1bee88dc4183fc24127',
          author: {
            twitter: '',
            address: '',
            ens: 'venture-punk.eth'
          }
        },
        {
          name: 'GMs',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/4aa387072f3f2354d8fd2592989d95ea.png?auto=format&w=3840',
          link: 'https://create.zora.co/collections/0x816840b298c3a326330236ac1368d3887d27a7cb',
          author: {
            twitter: '',
            address: '',
            ens: 'scapes.eth'
          }
        },
        {
          name: 'CC0 is Free',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/d553c45ea29909e4040c504801e3967d.png?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0x08488e76f89a42c184db687e38c525bfe6292ef1',
          author: {
            twitter: '',
            address: '',
            ens: 'lukecannon.eth'
          }
        },
        {
          name: '100s Edition',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/4f9c9ae0c8e33175867bd5901e4964fc.png?auto=format&w=3840',
          link: 'https://create.zora.co/collections/0x4db3ba1de77945fef71bd759474c5bdd4458ff3d',
          author: {
            twitter: '',
            address: '0x48c0903bb3de15eF805EeCbA1182D2102c96BFdb',
            ens: ''
          }
        },
        {
          name: 'The First 80',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/839d7713b69cb5cb94fcc357a020d7be.png?auto=format&w=3840',
          link: 'https://create.zora.co/collections/0x98425fc60cacdae330477d71407e64f94271bf98',
          author: {
            twitter: '',
            address: '',
            ens: 'ratlabs.eth'
          }
        },
        {
          name: 'tiny checks',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/b248653c5f3dd7ba26dbc1ed5eea3b73.png?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0xeba2f99d79127a375abc63073db7f919216be646',
          author: {
            twitter: '',
            address: '0xb57fD863535525B880Ff7E23cdF17644A08cb448',
            ens: ''
          }
        },
        {
          name: 'CHECKS HALLUCINATION',
          type: 'NFT',
          image:
            'https://4g6yls4jbeahh5qxcvpmfifmykmwrwcufdyxzi5eq3fkphn35fza.arweave.net/4b2Fy4kJAHP2FxVewqCswplo2FQo8XyjpIbKp5276XI',
          link: 'https://app.manifold.xyz/c/checls-hallucination',
          author: {
            twitter: '',
            address: '',
            ens: ''
          }
        },
        {
          name: 'PAINTS',
          type: 'NFT',
          image:
            'https://jixljckwmbgynqa76y7vt5lb72geyh7orz4edtkdhtjhn57hb2xa.arweave.net/Si60iVZgTYbAH_Y_WfVh_oxMH-6OeEHNQzzSdvfnDq4',
          link: 'https://app.manifold.xyz/c/paints',
          contractAddress: '0x8034e244de9f4758ca46c1a2802e25b563c12a00',
          author: {
            twitter: '',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checksboard',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/dbe86da1afbe9806f706e521f45f9cfe.jpg?auto=format&w=3840',
          link: 'https://create.zora.co/collections/0xd5ed45076eb09a16bc1e1c03279a36dc1d27a13f',
          contractAddress: '0xd5ed45076eb09a16bc1e1c03279a36dc1d27a13f',
          author: {
            twitter: '',
            address: '0xFD1439812568e6bB4520e027fcB1F69080eA271E',
            ens: ''
          }
        },
        {
          name: '69BURN',
          type: 'NFT',
          image:
            'https://lwaqp3v3us4ticfpubmqfd34vko3y6hhkydzflpz7z3x6ibczlya.arweave.net/XYEH7rukuTQIr6BZAo98qp28eOdWB5Kt-f53fyAiyvA',
          link: 'https://app.manifold.xyz/c/69burn',
          contractAddress: '0x23be642733e29a40f22ed20cc6bab12acb9f9c7f',
          author: {
            twitter: 'sv3nsei',
            address: '',
            ens: 'sv3nsei.eth'
          }
        },
        {
          name: 'Checks and Balances',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/b74b77520c328f9e43c10f29f75102fc.gif?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0xef53e82c1a3d50685d30571f7763fdb7bd06a6e8',
          contractAddress: '0xef53e82c1a3d50685d30571f7763fdb7bd06a6e8',
          author: {
            twitter: '',
            address: '',
            ens: 'toadyhawk.eth'
          }
        },
        {
          name: 'MIC CHECK',
          type: 'NFT',
          image:
            'https://tmk6elu4kbfz4mmazq2xpligywfnu4ukpdvctbe5myvi4rmwyquq.arweave.net/mxXiLpxQS54xgMw1d60GxYracop46imEnWYqjkWWxCk',
          link: 'https://app.manifold.xyz/c/rugcheck',
          contractAddress: '0xF1C1E550e0753551008481cF59F4B792BBd9EaD5',
          author: {
            twitter: '',
            address: '',
            ens: 'rugcommunity.eth'
          }
        },
        {
          name: 'CHECK SWEEPER',
          type: 'NFT',
          image:
            'https://mgjc3d5uya73nwkvx57jtksr3nkegrwkfbzszppae6tbhr47fj3a.arweave.net/YZItj7TAP7bZVb9-mapR21RDRsoocyy94CemE8efKnY',
          link: 'https://app.manifold.xyz/c/check-sweeper',
          contractAddress: '0x637A3Bf83A753cBCd54f2A93Eb9aF593fAfF0EF4',
          author: {
            twitter: '0xBunzy',
            address: '',
            ens: '0xbunzy.eth'
          }
        },
        {
          name: 'CHEXCOPY',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/f530c5add1135686b9c4484ff72ce8c5.gif?auto=format&w=3840',
          link: 'https://create.zora.co/collections/0x3d8b3b4a4e3cc1655a8aaf842801f72e9f120297',
          contractAddress: '0x3d8b3b4a4e3cc1655a8aaf842801f72e9f120297',
          author: {
            twitter: '',
            address: '',
            ens: 'ianbydesign.eth'
          }
        },
        {
          name: 'UMA Checks the Donuts',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/1c345a7cad111171f99da7032222618b.png?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0x8818581ff4e019c58ced4c39a4d401d5469270c8',
          contractAddress: '0x8818581ff4e019c58ced4c39a4d401d5469270c8',
          author: {
            twitter: '',
            address: '',
            ens: 'hapsigmi.eth'
          }
        },
        // 2 batch
        {
          name: 'A re-creation of Nouns',
          type: 'NFT',
          image:
            'https://openseauserdata.com/files/b619474ece369cf24d1eaf1aafd399b8.svg',
          link: 'https://opensea.io/collection/check-this-noun',
          contractAddress: '0x5e5f2a4b4a909fbb44044fb52ae94ff313605d43',
          author: {
            twitter: 'toadyhawk',
            twitterTwo: 'volkyeth',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Genesis Check',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/78cc6fce6ffe859a4baec2fdcffb9f0b.jpg?auto=format&w=1000',
          link: 'https://opensea.io/collection/genesis-check',
          contractAddress: '0x9b5a3990316c3359e3f89c220b936e8ad6a326fc',
          author: {
            twitter: 'gillesdc',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Status Check VV',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/eaa81bc7479d0b045bf074c6e1d12e17.jpg?auto=format&w=1000',
          link: 'https://opensea.io/collection/statuscheck',
          contractAddress: '0xe6262b650f1f550b542801087a475ef6ed057c7a',
          author: {
            twitter: 'gillesdc',
            address: '',
            ens: ''
          }
        },
        {
          name: 'wens',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/6a09547f5656ca9ccef95685152380c8.gif?auto=format&w=1000',
          link: 'https://create.zora.co/collections/0x3ef8af57390e095c143f90683a103124d77325c7',
          contractAddress: '0x3ef8af57390e095c143f90683a103124d77325c7',
          author: {
            twitter: '_lukeweaver_',
            address: '',
            ens: 'lukeweaver.eth'
          }
        },
        {
          name: 'PUNKS',
          type: 'NFT',
          image:
            'https://ndpgydvazqstki5q3ltbfwxgrptowbyxn4q4eucjh7qyymszvmra.arweave.net/aN5sDqDMJTUjsNrmEtrmi-brBxdvIcJQST_hjDJZqyI',
          link: 'https://app.manifold.xyz/c/PUNKs',
          contractAddress: '0x9ebec37b93df8c9e9823ccbf1d2bb40630eda59b',
          author: {
            twitter: '_0ND1',
            address: '',
            ens: ''
          }
        },
        {
          name: 'PHUNKS',
          type: 'NFT',
          image:
            'https://rievrq6dndmpxghwwo6avfb3itrkw6cxpdlegvp6o66pglw7mkoa.arweave.net/iglYw8No2PuY9rO8CpQ7ROKreFd41kNV_ne88y7fYpw',
          link: 'https://app.manifold.xyz/br/PHUNKs',
          contractAddress: '0x9ebec37b93df8c9e9823ccbf1d2bb40630eda59b',
          author: {
            twitter: '_0ND1',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Blank Check',
          type: 'NFT',
          image:
            'https://bafybeifga3aee6jpd6yqudzwipzqg5ojy2juk35f2wv5ranehfaykzyv5m.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x1be8b499abe06ef26ecd77b9448a1bfe088c8e18',
          contractAddress: '0x1be8b499abe06ef26ecd77b9448a1bfe088c8e18',
          author: {
            twitter: 'Jehoseph',
            address: '',
            ens: 'jehoseph.eth'
          }
        },
        {
          name: 'Natural Checks',
          type: 'NFT',
          image:
            'https://dl.openseauserdata.com/cache/originImage/files/e9094f2af2dcf8b0e4aeab248eaf7abd.png',
          link: 'https://create.zora.co/collections/0x07bd6f16d05b585803ee21f1aee2a48b96762ae9',
          contractAddress: '0x07bd6f16d05b585803ee21f1aee2a48b96762ae9',
          author: {
            twitter: '',
            address: '',
            ens: 'galenom.eth'
          }
        },
        {
          name: "OK'd",
          type: 'NFT',
          image:
            'https://bafybeie6qbwjligehiw56dbzffgmx53tg7m7ngjeisajk4azcom3mopeui.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x781fc3524d4d1737a9bd1f9657a61ecfe25af443',
          contractAddress: '0x781fc3524d4d1737a9bd1f9657a61ecfe25af443',
          author: {
            twitter: 'nedimsparrow',
            address: '',
            ens: 'nedim.eth'
          }
        },
        {
          name: '3D Checks',
          type: 'NFT',
          image:
            'https://dl.openseauserdata.com/cache/originImage/files/63e16ff6c812b642115a66bae4a54aba.png',
          link: 'https://oncyber.io/marketplace?buy=3dchecks',
          contractAddress: '0x449f661c53ae0611a24c2883a910a563a7e42489',
          author: {
            twitter: 'specificobj',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Check Dots',
          type: 'NFT',
          image:
            'https://bafybeihrheuq3gzqrjtzvmk2c5xilkyltblzmy4i3qlx6nraasnw23uvc4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xb47521876eef9bb1c89f0be8078bc6878d0daaef',
          contractAddress: '0xb47521876eef9bb1c89f0be8078bc6878d0daaef',
          author: {
            twitter: 'Neeoverse',
            address: '0x3A1b54f02a335E83313fa69f04635180a6D6037E',
            ens: ''
          }
        },
        {
          name: 'OKPC #3716',
          type: 'NFT',
          image:
            'https://dl.openseauserdata.com/cache/originImage/files/37e735289e384c1f589f77ce68c133a2.svg',
          link: 'https://okpc.app/network/3716',
          contractAddress: '0x7183209867489E1047f3A7c23ea1Aed9c4E236E8',
          author: {
            twitter: '_midmod_',
            address: '',
            ens: ''
          }
        },
        {
          name: "Don't Check MEME",
          type: 'NFT',
          image:
            'https://bafybeif2xjt73gq7qk6yl3xc45g7vtxdmbhbbxphrch76hzihjxibzkfri.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x58dd57e8f427fd0baf705242937b5b96557c5ef6',
          contractAddress: '0x58dd57e8f427fd0baf705242937b5b96557c5ef6',
          author: {
            twitter: 'JordanLyall',
            address: '',
            ens: 'venture-punk.eth'
          }
        },
        {
          name: 'Check Invaders',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/ed7f4a98ae615e1ef044aca008d9d15a.png?auto=format&w=1000',
          link: 'https://opensea.io/collection/checkinvaders',
          contractAddress: '0x386eB50346726a15bFC27BE61d415eA7aa0F6B54',
          author: {
            twitter: 'JordanLyall',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checkmate Chess Set',
          type: 'NFT',
          image:
            'https://bafybeifxx6lve74mobpbvl24ga3foaerjvwttafbdbu3dx4urpi4uzlxxq.ipfs.nftstorage.link/',
          link: 'https://www.baker.studio/work/checkmate',
          contractAddress: '0xe4c130b21ec937e86645ac00f31821dd08b711fb',
          author: {
            twitter: 'nickpbaker',
            address: '',
            ens: 'nicholasbaker.eth'
          }
        },
        // 3 batch
        {
          name: 'LIFE 1/7 : START',
          type: 'NFT',
          image:
            'https://bafkreihzkb3npfho2nj73de4oohe4qoli4cxzzcy5uznydc5rjeny4ove4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xca48ba21370be14cddc53e46c27c68eaebb2961d',
          contractAddress: '0xca48ba21370be14cddc53e46c27c68eaebb2961d',
          author: {
            twitter: 'wutaner',
            address: '',
            ens: 'tinyart.eth'
          }
        },
        {
          name: 'LIFE 2/7 : COMMON',
          type: 'NFT',
          image:
            'https://bafybeiawzu7vf7xuvizu2ljlvehntew6xx76r3mkk3lvub7y2grmpiwlhu.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x264f8c7572f6fe05058eb908c1fec02efff5be3b',
          contractAddress: '0x264f8c7572f6fe05058eb908c1fec02efff5be3b',
          author: {
            twitter: 'wutaner',
            address: '',
            ens: 'tinyart.eth'
          }
        },
        {
          name: 'LIFE 3/7 : UNCOMMON',
          type: 'NFT',
          image:
            'https://bafybeicu6amrbqmoe3sv6dv4yusdgyew3syxbz7y5eevzaal2kszjtrtm4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x800304d8777af6139cbdc96f9f8d7c1beaabc724',
          contractAddress: '0x800304d8777af6139cbdc96f9f8d7c1beaabc724',
          author: {
            twitter: 'wutaner',
            address: '',
            ens: 'tinyart.eth'
          }
        },
        {
          name: 'LIFE 4/7 : RARE',
          type: 'NFT',
          image:
            'https://bafybeifq4ukzjfythfqoawulb7fwvs4psj4ev3mm3c3wl3rneonq7mtemu.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x6c595007366f2d5446809a473fcfc4b0513ad79f',
          contractAddress: '0x6c595007366f2d5446809a473fcfc4b0513ad79f',
          author: {
            twitter: 'wutaner',
            address: '',
            ens: 'tinyart.eth'
          }
        },
        {
          name: 'LIFE 5/7 : EPIC',
          type: 'NFT',
          image:
            'https://bafybeicc3uxnt6sw66oz74lgthssryfdro76x3e2ah3dgxvtzhlaygnix4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x45a9a431a322bdbda6dc864be2b99033b0ddc5a3',
          contractAddress: '0x45a9a431a322bdbda6dc864be2b99033b0ddc5a3',
          author: {
            twitter: 'wutaner',
            address: '',
            ens: 'tinyart.eth'
          }
        },
        {
          name: 'LIFE 6/7 : LEGENDARY',
          type: 'NFT',
          image:
            'https://bafkreie6zbl7jl4qpa26sbdwabr4fdzlvhzxlaxoxqa4h6rc5irlibqp6a.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xb76ec9151d2be526f69e2a6478097c136250bcbb',
          contractAddress: '0xb76ec9151d2be526f69e2a6478097c136250bcbb',
          author: {
            twitter: 'wutaner',
            address: '',
            ens: 'tinyart.eth'
          }
        },
        {
          name: 'LIFE 7/7 : ORDINARY',
          type: 'NFT',
          image:
            'https://bafkreiguohg5o7wl4mhmlkxagy56gxmkddmkxffpkjahjgixr5qu5fttxa.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x83b01d054cf4f304f0bd397bed21f60ddcc33681',
          contractAddress: '0x83b01d054cf4f304f0bd397bed21f60ddcc33681',
          author: {
            twitter: 'wutaner',
            address: '',
            ens: 'tinyart.eth'
          }
        },
        {
          name: 'Hearts',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/6ed08d9975910f7ebcfcaeff88af106c.png?auto=format&w=1000',
          link: 'https://www.hearts.studio/',
          contractAddress: '0x919435518099feed50aec90f12d05a1d6425f133',
          author: {
            twitter: 'jensblond',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Uncheck',
          type: 'NFT',
          image:
            'https://ipfs.io/ipfs/QmTGg2QLWucP8LjktS6qCAajN6sm6q9G4PJBX2iiMLzYDk/nft.svg',
          link: 'https://foundation.app/@Peimsloot/misc-e6b3/1',
          contractAddress: '0xBeFDE264D3D61e68b1ab9991D29FF38CCb8eeaDb',
          author: {
            twitter: 'peimsloot',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checkbeanz',
          type: 'NFT',
          image:
            'https://bafybeid5gcytkkly554i5eym5cxn6tzzovne6haov2uj23bmaxamfw2gea.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xc841d642eb512b83c481138e36a56fcd7a7c5f14',
          contractAddress: '0xc841d642eb512b83c481138e36a56fcd7a7c5f14',
          author: {
            twitter: 'peimsloot',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Check this Lil Noun',
          type: 'NFT',
          image:
            'https://bafybeihyfrkro5gx4k3h5ouxwfai733ntvfkttz24rsfme55n23wigisdq.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xb55281837432e8e93d2f7204a1bd2dcbfbae1076',
          contractAddress: '0xb55281837432e8e93d2f7204a1bd2dcbfbae1076',
          author: {
            ttwitter: 'toadyhawk',
            twitterTwo: 'volkyeth',
            address: '',
            ens: ''
          }
        },
        {
          name: 'UNCHECKED',
          type: 'NFT',
          image:
            'https://uqparo7igb7yhy5gzfhruiskf2oon5ai26u7k6xt5jsixa2erb4a.arweave.net/pB4Iu-gwf4PjpslPGiJKLpzm9AjXqfV68-pki4NEiHg',
          link: 'https://app.manifold.xyz/c/unchecked',
          contractAddress: '0x8BC9D5370ccC399a0B1eeBAC401d1bBAf465D618',
          author: {
            twitter: 'willdjthrill',
            address: '',
            ens: 'willaa.eth'
          }
        },
        {
          name: 'imperfect checks',
          type: 'NFT',
          image:
            'https://bafybeiaujakh3kjywuya47ssyv5nm7djr7phb37udhclowequz76cf56u4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x94df5e73061a0697357b0718686d04530aa43023',
          contractAddress: '0x94df5e73061a0697357b0718686d04530aa43023',
          author: {
            twitter: 'kaleidoscope_hq',
            address: '0xC276cFC6A9CB835b2dD89217489F00C489dd7f42',
            ens: ''
          }
        },
        {
          name: 'persistence check',
          type: 'NFT',
          image:
            'https://bafkreif5d4madq57fiiscop7xgc7mkui3alk72ckwmjzr4g3cohx7byygm.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xdd04fa6412d36961044faef96ab56fc569b6e8f0',
          contractAddress: '0xdd04fa6412d36961044faef96ab56fc569b6e8f0',
          author: {
            twitter: 'kaleidoscope_hq',
            address: '0xC276cFC6A9CB835b2dD89217489F00C489dd7f42',
            ens: ''
          }
        },
        {
          name: 'Mine Check',
          type: 'NFT',
          image:
            'https://bafkreia3zmggsjzvtvwx3re2d3wmhn65sfdist2k6nry2xz4cjsejgfsse.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xd421ba04ffadd798e84a0cf719b7de04063c593d',
          contractAddress: '0xd421ba04ffadd798e84a0cf719b7de04063c593d',
          author: {
            twitter: 'kaleidoscope_hq',
            address: '0xC276cFC6A9CB835b2dD89217489F00C489dd7f42',
            ens: ''
          }
        },
        {
          name: 'Blank Checks',
          type: 'NFT',
          image:
            'https://bafkreiemnz6tbhted6qwhuc2le3xgiquomnvzbwpmufhiq7ao2zkuuyh7y.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xaf44befb039c4078ed499352868ee22adde399ee',
          contractAddress: '0xaf44befb039c4078ed499352868ee22adde399ee',
          author: {
            twitter: 'tylerpixel',
            address: '',
            ens: 'tylerpixel.eth'
          }
        },
        {
          name: 'Trips',
          type: 'NFT',
          image:
            'https://bafybeifmfxc2m7gopj5d5f3i2xr4ldd43jeh5adkgvcyepvddmlr46lwmq.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xcf3252951234cc297de6a119713e7a23fa9230d8',
          contractAddress: '0xcf3252951234cc297de6a119713e7a23fa9230d8',
          author: {
            twitter: 'reganpthompson',
            address: '',
            ens: 'reganthompson23.eth'
          }
        },
        {
          name: 'Checkers',
          type: 'NFT',
          image:
            'https://bafkreicy7m5wh3jcladqlbceunm43ayn4hpawpxyyrpse2sczkmbohfhcq.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x2e6bcf339559e22d800ef552f602e078d2c08bee',
          contractAddress: '0x2e6bcf339559e22d800ef552f602e078d2c08bee',
          author: {
            twitter: 'gillesdc',
            address: '',
            ens: 'gillesdc.eth'
          }
        },
        {
          name: 'Checks Republic',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmTZ8M9XoAIpB6S?format=png&name=900x900',
          link: 'https://twitter.com/jacksheps/status/1613654602611564544',
          contractAddress: '',
          author: {
            twitter: 'jacksheps',
            address: '',
            ens: ''
          }
        },
        {
          name: 'NETVVORK Check',
          type: 'NFT',
          image:
            'https://bafybeidswb2ste2u3tv5vtq5z4h2vbzui4p4zrfk4orpwf2axosbmyg5ha.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x5a4b7a3b2f5c69ff9c13c912ef58830bf605ba48',
          contractAddress: '0x5a4b7a3b2f5c69ff9c13c912ef58830bf605ba48',
          author: {
            twitter: '0xkwydk',
            address: '',
            ens: 'saintless.eth'
          }
        },
        {
          name: 'Chex',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmT6XTAaYAE_Zom?format=jpg&name=large',
          link: 'https://twitter.com/_lukeweaver_/status/1613690154467885056',
          contractAddress: '',
          author: {
            twitter: '_lukeweaver_',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Peaches',
          type: 'NFT',
          image:
            'https://bafkreihau3jhpmljjahlkawj2gdh6zjq5d3zzupscaqsgk4bsvmcw42ui4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x9a06df903eec0a7be28bf3f9b76f896907a2dba2',
          contractAddress: '0x9a06df903eec0a7be28bf3f9b76f896907a2dba2',
          author: {
            twitter: 'PeachyTakes',
            address: '',
            ens: 'peachynft.eth'
          }
        },
        {
          name: 'Shreks',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmSyqVNaEAAno_z?format=jpg&name=large',
          link: 'https://twitter.com/tylerpixel/status/1613611431462858755',
          contractAddress: '',
          author: {
            twitter: 'tylerpixel',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Luxury Checks',
          type: 'NFT',
          image:
            'https://bafybeid6zndbegprvcft557mhpexmkg2o7smhcconp63t7iykh6wk7qyii.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x7bce9217b21c6e22177cf1a22acccbc8a80fcf12',
          contractAddress: '0x7bce9217b21c6e22177cf1a22acccbc8a80fcf12',
          author: {
            twitter: 'dallascowan',
            address: '',
            ens: 'dallascowan.eth'
          }
        },
        {
          name: 'KEKS',
          type: 'NFT',
          image:
            'https://x53wqgauizk4wydh6xcsfomxlxvnri6qlkztoup4dfoqclhoisea.arweave.net/v3doGBRGVctgZ_XFIrmXXerYo9BaszdR_BldASzuRIg',
          link: 'https://app.manifold.xyz/c/KEKS',
          contractAddress: '0x9ebec37b93df8c9e9823CcBF1D2bb40630eDa59b',
          author: {
            twitter: '_0ND1',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Welcome to the infinite art show',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmYJSUFXEAEDWsD?format=jpg&name=large',
          link: 'https://twitter.com/jrdnmix/status/1613987832120414234',
          contractAddress: '',
          author: {
            twitter: 'jrdnmix',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Jacks',
          type: 'NFT',
          image:
            'https://bafybeifeishuhw5c3oz5pkg4jvbzl63j6iozykxkppqvggnkxbppu4yhne.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x7fd325d63870b3b43692bea616c531abde2f6212',
          contractAddress: '0x7fd325d63870b3b43692bea616c531abde2f6212',
          author: {
            twitter: 'theartofwarren',
            address: '',
            ens: 'theartofwarren.eth'
          }
        },
        {
          name: 'The Copy of Checks',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmY6KONaUAQxY2c?format=jpg&name=large',
          link: 'https://twitter.com/catradarusman/status/1614041900625039366',
          contractAddress: '',
          author: {
            twitter: 'catradarusman',
            address: '',
            ens: ''
          }
        },
        // 4 batch
        {
          name: 'Holder',
          type: 'NFT',
          image:
            'https://bafybeid5s5vob6rcsptzge4qsln6zgfj3t7fqjqzmduxa3pjuxtjrimtfu.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x4bb3d9e2fadffbefc72d92b52559374cf5722b69',
          contractAddress: '0x4bb3d9e2fadffbefc72d92b52559374cf5722b69',
          author: {
            twitter: 'serifa_eth',
            address: '',
            ens: 'serifa.eth'
          }
        },
        {
          name: 'Cross-Checks',
          type: 'NFT',
          image:
            'https://formfunction.imgix.net/nft-images/tsvDtvwJ7pBmZk0QGj_9b.png?q=100&auto=format&ixlib=react-9.5.4&w=3038',
          link: 'https://formfunction.xyz/@exile/eq1Z1caWdR4vs6aBJNqD7TU3x48VPH6qURcWoD9oipX?width=2000&height=2000',
          contractAddress: '',
          author: {
            twitter: 'stateofexile_',
            address: '',
            ens: ''
          }
        },
        {
          name: 'CHECK YOURSELF',
          type: 'NFT',
          image:
            'https://bm5tyvjqr6iypf4gxm4zq2mo6xjibvuxg27ckuxaxxg6r53irxjq.arweave.net/Czs8VTCPkYeXhrs5mGmO9dKA1pc2viVS4L3N6PdojdM',
          link: 'https://app.manifold.xyz/c/Checkurself',
          contractAddress: '0x00dAD08dc49a45cEFa4EDc1F2CB000688e3eF1f3',
          author: {
            twitter: 'derakmandious',
            address: '',
            ens: 'lordofvibes.eth'
          }
        },
        {
          name: 'KEKS',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmjRG5FXoAMBGUi?format=jpg&name=large',
          link: 'https://twitter.com/devonfigures/status/1614770963068903426',
          contractAddress: '',
          author: {
            twitter: 'devonfigures',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checkception',
          type: 'NFT',
          image:
            'https://bafybeibr6tk3nknpw43h3szebpaauf3gmailiuwvfvjrib4pu2a4mn52tm.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xf220468183a183c843e4377679b3d214e187eb2f',
          contractAddress: '0xf220468183a183c843e4377679b3d214e187eb2f',
          author: {
            twitter: 'visualzare',
            address: '',
            ens: 'visualzare.eth'
          }
        },
        {
          name: 'allindots girls',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fmm0FvwWYAEOOr1?format=jpg&name=large',
          link: 'https://twitter.com/allindots/status/1615019966700347394',
          contractAddress: '',
          author: {
            twitter: 'allindots',
            address: '',
            ens: ''
          }
        },
        {
          name: 'From NotWarren',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmqAi5yXEAYeVFQ?format=jpg&name=large',
          link: 'https://twitter.com/notwarrenETH/status/1615244758774865920',
          contractAddress: '',
          author: {
            twitter: 'notwarrenETH',
            address: '',
            ens: ''
          }
        },
        {
          name: 'verified',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fmpmh3KaYAEAuJe?format=jpg&name=large',
          link: 'https://twitter.com/latteshelby/status/1615216155911933957',
          contractAddress: '',
          author: {
            twitter: 'latteshelby',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Certified X Copied',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmsCSFJaEAYpH-v?format=jpg&name=large',
          link: 'https://twitter.com/CryptoMiyagi_/status/1615387407230341120',
          contractAddress: '',
          author: {
            twitter: 'CryptoMiyagi_',
            address: '',
            ens: ''
          }
        },
        {
          name: 'CERTIFIED X COPY',
          type: 'NFT',
          image:
            'https://ul7cdhrdkxyg2k5pyfjcjei3jndzsjal5zo2tsu6e7cuvwixodya.arweave.net/ov4hniNV8G0rr8FSJJEbS0eZJAvuXanKnifFStkXcPA',
          link: 'https://app.manifold.xyz/c/certified-x-copy',
          contractAddress: '0xCb2263f27DeA3b397bCFe6d3D8EBb0dE61b06636',
          author: {
            twitter: '0xBunzy',
            address: '',
            ens: '0xbunzy.eth'
          }
        },
        {
          name: 'SUMMER - JPG EDITION',
          type: 'NFT',
          image:
            'https://ujmrghap3oi7ysrywcjzjthypvfsdsp74ae6oz4xcohtmmikncqa.arweave.net/olkTHA_bkfxKOLCTlMz4fUshyf_gCednlxOPNjEKaKA',
          link: 'https://app.manifold.xyz/c/summer-jpg-edition',
          contractAddress: '0x5B5D55DB54eF42f2a6Ae30D8e0dD8a7879593a81',
          author: {
            twitter: 'kkostya',
            address: '',
            ens: 'kkostya.eth'
          }
        },
        {
          name: 'CERTIFIED PEPE',
          type: 'NFT',
          image:
            'https://edjk7qhv5nmn6jrazsbznjfdmmq3h7sjw45r3gtow7fl5idwroda.arweave.net/INKvwPXrWN8mIMyDlqSjYyGz_km3Ox2abrfKvqB2i4Y',
          link: 'https://app.manifold.xyz/c/certified-pepe',
          contractAddress: '0xe30CF712CcAB13d65c77E02263A68597d17A26B9',
          author: {
            twitter: '0xBunzy',
            address: '',
            ens: '0xbunzy.eth'
          }
        },
        {
          name: 'Checks x Zen',
          type: 'NFT',
          image:
            'https://bafybeidd4pnrgbtmcjohi2bhfzi4niy744ccsemubpfclq5aqeyoilgdi4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xaf7e846d4b954defe3c9a6b904a6e54de134e52c',
          contractAddress: '0xaf7e846d4b954defe3c9a6b904a6e54de134e52c',
          author: {
            twitter: 'Churrolover2',
            address: '',
            ens: 'churrolover.eth'
          }
        },
        {
          name: 'Keks ft. Checks',
          type: 'NFT',
          image:
            'https://bafkreic7wkzejxgdcvozannv5zulbetphcixcistohtkzxgcaloonzp3vy.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x8101ec6bb31ffc74fbc8425d68df0eb96bde1b12',
          contractAddress: '0x8101ec6bb31ffc74fbc8425d68df0eb96bde1b12',
          author: {
            twitter: 'Fiddyten',
            address: '',
            ens: '8613.eth'
          }
        },
        {
          name: 'FlysAlpha x Checks',
          type: 'NFT',
          image:
            'https://bafybeifjgsglkbfsvyuotse7753ltaz466cvtzn2j5w25c3swb5wzbm6uu.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x3a7edd7769ec6f3ca36afd790433884a21f7d4a4',
          contractAddress: '0x3a7edd7769ec6f3ca36afd790433884a21f7d4a4',
          author: {
            twitter: '',
            address: '',
            ens: ''
          }
        },
        {
          name: 'SOUL CHECKS - DARK',
          type: 'NFT',
          image:
            'https://bafybeiehyjucwkgk5o5yji626gy5qdbydhm2g7scnorcqca7dfclwjv5t4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xc512a554cf0601d9fca0f7652cf876c0b928f0ee',
          contractAddress: '0xc512a554cf0601d9fca0f7652cf876c0b928f0ee',
          author: {
            twitter: 'lad1699',
            address: '',
            ens: 'gaul.eth'
          }
        },
        {
          name: 'SOUL CHECKS - LIGHT',
          type: 'NFT',
          image:
            'https://bafybeihtfoeyrnqtcuec6t3fsdux47jmxyl4vvw2ece24rpkoh4keee4zi.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x25675333725e97358828d21f25ec8a79a9e8a4d7',
          contractAddress: '0x25675333725e97358828d21f25ec8a79a9e8a4d7',
          author: {
            twitter: 'lad1699',
            address: '',
            ens: 'gaul.eth'
          }
        },
        {
          name: 'Moonbirds',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmroDQTaYAAz9GN?format=jpg&name=4096x4096',
          link: 'https://twitter.com/_JayJay88/status/1615358894393655296',
          contractAddress: '',
          author: {
            twitter: '_JayJay88',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Floor Checks',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmN96MTakAACD-D?format=jpg&name=medium',
          link: 'https://twitter.com/floor/status/1613326767569223680',
          contractAddress: '',
          author: {
            twitter: 'floor',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Rarible Checks',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmsTpDTWQAA_MYw?format=png&name=medium',
          link: 'https://twitter.com/rarible/status/1615406638868926470',
          contractAddress: '',
          author: {
            twitter: 'rarible',
            address: '',
            ens: ''
          }
        },
        // 5 batch
        {
          name: 'OKX Cheks',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fms0cwYWYBM9Wg5?format=png&name=medium',
          link: 'https://twitter.com/okx/status/1615447985906671632',
          contractAddress: '',
          author: {
            twitter: 'okx',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Pi',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmmPO6fagAEKbgl?format=jpg&name=large',
          link: 'https://twitter.com/aesunk/status/1614980047235911683',
          contractAddress: '',
          author: {
            twitter: 'aesunk',
            address: '',
            ens: ''
          }
        },
        {
          name: 'OFF-CHECKS',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fmt-atcXgAA9a1T?format=jpg&name=large',
          link: 'https://twitter.com/theartofwarren/status/1615523896429772800',
          contractAddress: '',
          author: {
            twitter: 'theartofwarren',
            address: '',
            ens: ''
          }
        },
        {
          name: 'NFTs, explained',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmuEWp1XgAEt9qK?format=jpg&name=large',
          link: 'https://twitter.com/0xkwydk/status/1615530421491585027',
          contractAddress: '',
          author: {
            twitter: '0xkwydk',
            address: '',
            ens: ''
          }
        },
        {
          name: '✓✓✓',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmtlL0vaMAAr4Ba?format=jpg&name=large',
          link: 'https://twitter.com/gid3xn/status/1615496487441698820',
          contractAddress: '',
          author: {
            twitter: 'gid3xn',
            address: '',
            ens: ''
          }
        },
        {
          name: 'check, balance',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm4U4bKaUAA5CAB?format=jpg&name=large',
          link: 'https://twitter.com/gid3xn/status/1616252421860392963',
          contractAddress: '',
          author: {
            twitter: 'gid3xn',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Check',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm8-QMRaMAExhnm?format=jpg&name=large',
          link: 'https://twitter.com/gid3xn/status/1616579310781108225',
          contractAddress: '',
          author: {
            twitter: 'gid3xn',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Check Rise',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm8-cIEaYAEEg73?format=png&name=900x900',
          link: 'https://twitter.com/gid3xn/status/1616579581020098561',
          contractAddress: '',
          author: {
            twitter: 'gid3xn',
            address: '',
            ens: ''
          }
        },
        {
          name: 'a doodles checks',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fmunz6TWYAgAwka?format=jpg&name=large',
          link: 'https://twitter.com/MeltedBears/status/1615570174790221824',
          contractAddress: '',
          author: {
            twitter: 'MeltedBears',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checks',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmueJfFXgAECfCe?format=png&name=small',
          link: 'https://twitter.com/donatellapomme/status/1615558786747441152',
          contractAddress: '',
          author: {
            twitter: 'donatellapomme',
            address: '',
            ens: ''
          }
        },
        {
          name: '🍆',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fmt54hZXwAQfMx9?format=png&name=900x900',
          link: 'https://twitter.com/CallMeChenAgain/status/1615519159122526208',
          contractAddress: '',
          author: {
            twitter: 'CallMeChenAgain',
            address: '',
            ens: ''
          }
        },
        {
          name: '🍑',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fmt57uUXEAAyrb7?format=png&name=900x900',
          link: 'https://twitter.com/CallMeChenAgain/status/1615519159122526208',
          contractAddress: '',
          author: {
            twitter: 'CallMeChenAgain',
            address: '',
            ens: ''
          }
        },
        {
          name: 'S',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmuwVnlaMAEEdYm?format=png&name=medium',
          link: 'https://twitter.com/0xBunzy/status/1615579169152438272',
          contractAddress: '',
          author: {
            twitter: '0xBunzy',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checky Night',
          type: 'NFT',
          image:
            'https://bafybeiel7chewisl5judp66k3iattbdcqi2rf2jraravxxyezuw6463oda.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xccb89d15b3977defda59d30542ed54dc38842c64',
          contractAddress: '0xccb89d15b3977defda59d30542ed54dc38842c64',
          author: {
            twitter: 'visualzare',
            address: '',
            ens: 'visualzare.eth'
          }
        },
        {
          name: 'REKTS - RG EDITION',
          type: 'NFT',
          image:
            'https://n7mz5ihcl6ckvu34leemcbhxfmrt2y7wsilnw2vjh7v6ixrdnwzq.arweave.net/b9meoOJfhKrTfFkIwQT3KyM9Y_aSFttqqT_r5F4jbbM',
          link: 'https://app.manifold.xyz/c/rekts-RG-Edition',
          contractAddress: '0xbB5dA6DE3d235a45909D8e91b86069D114C72D5f',
          author: {
            twitter: 'pep0tto',
            address: '0x6abCe6d8F90Cd034e6A1Efa853c61CeD6941Aa7d',
            ens: ''
          }
        },
        {
          name: 'nevvsvvorthy',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmzkLiCXkAAMtfs?format=png&name=large',
          link: 'https://twitter.com/theartofwarren/status/1615917524587102208',
          contractAddress: '',
          author: {
            twitter: 'theartofwarren',
            address: '',
            ens: ''
          }
        },
        {
          name: 'BLOCKS.',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmyqbhPXgAIPAck?format=jpg&name=large',
          link: 'https://twitter.com/harvmcm/status/1615853762391822338',
          contractAddress: '',
          author: {
            twitter: 'harvmcm',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Pink Checks',
          type: 'NFT',
          image:
            'https://ipfs.io/ipfs/QmcTt3ChcScYi8CBDFBe1YYeeK5gxoq85nQJKPK2Pczg9G/nft.png',
          link: 'https://foundation.app/@evantan/evantan/7?ref=0x15F7320adb990020956D29Edb6ba17f3D468001e',
          contractAddress: '0x61fc7650b9995b91F343a646AAb74D423EdBA4b5',
          author: {
            twitter: 'evantan',
            address: '0x15f7320adb990020956d29edb6ba17f3d468001e',
            ens: ''
          }
        },
        {
          name: 'protozoa, medical illustration, detailed, under a microscope, enlarged',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmxNIXAXkAEsbaN?format=jpg&name=large',
          link: 'https://twitter.com/lastpunk9999/status/1615751702526988288',
          contractAddress: '',
          author: {
            twitter: 'lastpunk9999',
            address: '',
            ens: ''
          }
        },
        {
          name: 'new meta adjusted',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmxnFVHWQAUuxyU?format=jpg&name=large',
          link: 'https://twitter.com/0xkwydk/status/1615779767889928193',
          contractAddress: '',
          author: {
            twitter: '0xkwydk',
            address: '',
            ens: ''
          }
        },
        {
          name: 'black hole',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmxFDwoaEAA6jnS?format=jpg&name=large',
          link: 'https://twitter.com/AlteFide/status/1615748356470640641',
          contractAddress: '',
          author: {
            twitter: 'AlteFide',
            address: '',
            ens: ''
          }
        },
        {
          name: "Maslow's hierarchy of needs",
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/FmxS7X4WABgfwAv?format=jpg&name=large',
          link: 'https://twitter.com/discopump/status/1615757553584963594',
          contractAddress: '',
          author: {
            twitter: 'discopump',
            address: '',
            ens: ''
          }
        }
      ]
    }
  }
}

// {
//     name: '',
//     type: 'NFT',
//     image:
//       '',
//     link: '',
//     contractAddress: '',
//     author: {
//       twitter: '',
//       address: '',
//       ens: ''
//     }
//   }

export default Discover
