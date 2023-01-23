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
        },
        // 6 batch
        {
          name: 'Heart Checks',
          type: 'NFT',
          image:
            'https://bafkreif7hx4u2oxbe4rqayycqdgj5kghrorwqhrjfhuxpiqs25x4qbttra.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x93372c15345c9070bd3eb1ad9007f0705cdbd290',
          contractAddress: '0x93372c15345c9070bd3eb1ad9007f0705cdbd290',
          author: {
            twitter: 'nasergivechi',
            address: '',
            ens: 'nasergivechi.eth'
          }
        },
        {
          name: 'SEIZE THE MEMES OF PRODUCTION',
          type: 'NFT',
          image:
            'https://nmd6o65y4j2vn3b64jhmrprjxuioatevv4stivutfd2l7ouhc6ua.arweave.net/awfne7jidVbsPuJOyL4pvRDgTJWvJTRWkyj0v7qHF6g',
          link: 'https://app.manifold.xyz/c/memesofproduction',
          contractAddress: '0xa105AD461d126950980E3AbBF64c2005cEA60e9C',
          author: {
            twitter: 'minimal_meme_s',
            address: '0xB90A806fE45Ee016FD0020CBB603e8102Dd91A83',
            ens: ''
          }
        },
        {
          name: 'SEIZE THE MEMES OF PRODUCTION',
          type: 'NFT',
          image:
            'https://rdahfarrnejbyjoxfit23jgh4fkl6a4jeh56d3qyx7mdli3sap7a.arweave.net/iMBygjFpEhwl1yonraTH4VS_A4kh--HuGL_YNaNyA_4',
          link: 'https://foundation.app/@minimal_memes/mmeme/1',
          contractAddress: '0x915678B29db8C4cF6C43e64DbBbA30c1B57fc251',
          author: {
            twitter: 'minimal_meme_s',
            address: '0xB90A806fE45Ee016FD0020CBB603e8102Dd91A83',
            ens: ''
          }
        },
        {
          name: 'Eye Check',
          type: 'NFT',
          image:
            'https://bafkreicuoecibq7r5xwtwjdshctnubgcqdag32ufbentrqyxv6gpfkkzcm.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x851891457146b25b127550d6a943cf54e2738c09',
          contractAddress: '0x851891457146b25b127550d6a943cf54e2738c09',
          author: {
            twitter: 'cfowlerdesign',
            address: '0x71122e22f8090027d6bc3082fcd8bb8a27e23729',
            ens: ''
          }
        },
        {
          name: 'Sight Check',
          type: 'NFT',
          image:
            'https://bafkreihur54gcucosvremyoz523trpx5zpexdeiv3pbh5yjrpgmnncg47u.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xbe3bb0f170c97ab75f01bc3b438a56b7851bac21',
          contractAddress: '0xbe3bb0f170c97ab75f01bc3b438a56b7851bac21',
          author: {
            twitter: 'cfowlerdesign',
            address: '0x71122e22f8090027d6bc3082fcd8bb8a27e23729',
            ens: ''
          }
        },
        {
          name: 'Chainchecks - Original',
          type: 'NFT',
          image:
            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgMzcgMzciIGZpbGw9Im5vbmUiPgo8cmVjdCB3aWR0aD0iMzciIGhlaWdodD0iMzciIGZpbGw9IiNFQkVCRUIiLz4KPHJlY3QgeD0iMTAiIHk9IjgiIHdpZHRoPSIxNyIgaGVpZ2h0PSIyMSIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeD0iMTEiIHk9IjkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNEQjM5NUUiLz4KPHJlY3QgeD0iMTEiIHk9IjExIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMkU2NjhCIi8+CjxyZWN0IHg9IjExIiB5PSIxMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0YwQTMzQSIvPgo8cmVjdCB4PSIxMSIgeT0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM1MjVFQTkiLz4KPHJlY3QgeD0iMTEiIHk9IjE3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMzM3NThDIi8+CjxyZWN0IHg9IjExIiB5PSIxOSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0VBN0IzMCIvPgo8cmVjdCB4PSIxMSIgeT0iMjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM5Njc5MzEiLz4KPHJlY3QgeD0iMTEiIHk9IjIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjNDA2OEMwIi8+CjxyZWN0IHg9IjExIiB5PSIyNSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0Y3RDk0QSIvPgo8cmVjdCB4PSIxMSIgeT0iMjciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMjJGOTAiLz4KPHJlY3QgeD0iMTMiIHk9IjkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM2MDIyNjMiLz4KPHJlY3QgeD0iMTMiIHk9IjExIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRjZDQkE2Ii8+CjxyZWN0IHg9IjEzIiB5PSIxMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzVBQkFEMyIvPgo8cmVjdCB4PSIxMyIgeT0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFQzczNjgiLz4KPHJlY3QgeD0iMTMiIHk9IjE3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRjA5ODM3Ii8+CjxyZWN0IHg9IjEzIiB5PSIxOSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzNFOEJBMyIvPgo8cmVjdCB4PSIxMyIgeT0iMjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNENTMzMkYiLz4KPHJlY3QgeD0iMTMiIHk9IjIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRjlEQTREIi8+CjxyZWN0IHg9IjEzIiB5PSIyNSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0M3RURGMiIvPgo8cmVjdCB4PSIxMyIgeT0iMjciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFODQyNEUiLz4KPHJlY3QgeD0iMTUiIHk9IjkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM1QzgzQ0IiLz4KPHJlY3QgeD0iMTUiIHk9IjExIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjREEzMzIxIi8+CjxyZWN0IHg9IjE1IiB5PSIxMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0Q2RjRFMSIvPgo8cmVjdCB4PSIxNSIgeT0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGQkVBNUIiLz4KPHJlY3QgeD0iMTUiIHk9IjE3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjOUFEOUZCIi8+CjxyZWN0IHg9IjE1IiB5PSIxOSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0YwQTBDQSIvPgo8cmVjdCB4PSIxNSIgeT0iMjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFNzNFNTMiLz4KPHJlY3QgeD0iMTUiIHk9IjIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjNzdEM0RFIi8+CjxyZWN0IHg9IjE1IiB5PSIyNSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0YyQjM0MSIvPgo8cmVjdCB4PSIxNSIgeT0iMjciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMyRTQ5ODUiLz4KPHJlY3QgeD0iMTciIHk9IjkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNCMUVGQzkiLz4KPHJlY3QgeD0iMTciIHk9IjExIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMkQ1MzUyIi8+CjxyZWN0IHg9IjE3IiB5PSIxMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0QxREY0RiIvPgo8cmVjdCB4PSIxNyIgeT0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM5M0NGOTgiLz4KPHJlY3QgeD0iMTciIHk9IjE3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRjdERDlCIi8+CjxyZWN0IHg9IjE3IiB5PSIxOSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzREMzY1OCIvPgo8cmVjdCB4PSIxNyIgeT0iMjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMyRjIyNDMiLz4KPHJlY3QgeD0iMTciIHk9IjIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjNkE1NTJBIi8+CjxyZWN0IHg9IjE3IiB5PSIyNSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0VBNUIzMyIvPgo8cmVjdCB4PSIxNyIgeT0iMjciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM1RkM5QkYiLz4KPHJlY3QgeD0iMTkiIHk9IjkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMyNTQzOEMiLz4KPHJlY3QgeD0iMTkiIHk9IjExIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjNUZDRDhDIi8+CjxyZWN0IHg9IjE5IiB5PSIxMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0E0QzhFRSIvPgo8cmVjdCB4PSIxOSIgeT0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFQjVBMkEiLz4KPHJlY3QgeD0iMTkiIHk9IjE3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRkFFNjYzIi8+CjxyZWN0IHg9IjE5IiB5PSIxOSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzgxRDFFQyIvPgo8cmVjdCB4PSIxOSIgeT0iMjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNEQjRENTgiLz4KPHJlY3QgeD0iMTkiIHk9IjIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjOEEyMjM1Ii8+CjxyZWN0IHg9IjE5IiB5PSIyNSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0Q5N0QyRSIvPgo8cmVjdCB4PSIxOSIgeT0iMjciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGOURCNDkiLz4KPHJlY3QgeD0iMjEiIHk9IjkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM3QTI1MjAiLz4KPHJlY3QgeD0iMjEiIHk9IjExIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjNDI5MUE4Ii8+CjxyZWN0IHg9IjIxIiB5PSIxMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0VGODkzMyIvPgo8cmVjdCB4PSIyMSIgeT0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNCODJDMzYiLz4KPHJlY3QgeD0iMjEiIHk9IjE3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRjRCREJFIi8+CjxyZWN0IHg9IjIxIiB5PSIxOSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzNCMkYzOSIvPgo8cmVjdCB4PSIyMSIgeT0iMjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGMkE5M0MiLz4KPHJlY3QgeD0iMjEiIHk9IjIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRkFFMjcyIi8+CjxyZWN0IHg9IjIxIiB5PSIyNSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0FCREQ0NSIvPgo8cmVjdCB4PSIyMSIgeT0iMjciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM0QUEzOTIiLz4KPHJlY3QgeD0iMjMiIHk9IjkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM4NUMzM0MiLz4KPHJlY3QgeD0iMjMiIHk9IjExIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRUY4QzM3Ii8+CjxyZWN0IHg9IjIzIiB5PSIxMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0E3RERGOSIvPgo8cmVjdCB4PSIyMyIgeT0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNFQTNBMkQiLz4KPHJlY3QgeD0iMjMiIHk9IjE3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRjdDQTU3Ii8+CjxyZWN0IHg9IjIzIiB5PSIxOSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0YyQTkzQiIvPgo8cmVjdCB4PSIyMyIgeT0iMjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM1QTlGM0UiLz4KPHJlY3QgeD0iMjMiIHk9IjIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRUI0NDI5Ii8+CjxyZWN0IHg9IjIzIiB5PSIyNSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0YyQTg0MCIvPgo8cmVjdCB4PSIyMyIgeT0iMjciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNERTMyMzciLz4KPHJlY3QgeD0iMjUiIHk9IjkiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNDMjM1MzIiLz4KPHJlY3QgeD0iMjUiIHk9IjExIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjNTM1Njg3Ii8+CjxyZWN0IHg9IjI1IiB5PSIxMyIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzlERUZCRiIvPgo8cmVjdCB4PSIyNSIgeT0iMTUiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGNkNCNDUiLz4KPHJlY3QgeD0iMjUiIHk9IjE3IiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRUU4MzdEIi8+CjxyZWN0IHg9IjI1IiB5PSIxOSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzYwQjFGNCIvPgo8cmVjdCB4PSIyNSIgeT0iMjEiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM2RDJGMjIiLz4KPHJlY3QgeD0iMjUiIHk9IjIzIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjRTBDOTYzIi8+CjxyZWN0IHg9IjI1IiB5PSIyNSIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iI0VFODI4RiIvPgo8cmVjdCB4PSIyNSIgeT0iMjciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiM3QTVBQjQiLz4KPC9zdmc+Cg==',
          link: 'https://chainchecks.xyz/mint',
          contractAddress: '0x38b48a7E6FE2574dB72F12fbeC29C499a051D424',
          author: {
            twitter: 'parkthomp',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Chainchecks - Blue Edition',
          type: 'NFT',
          image:
            'data:image/svg+xml,%3Csvg%20width%3D%222000%22%20height%3D%222000%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url(%23a)%22%3E%3Cpath%20d%3D%22M2000%200H0v2000h2000V0z%22%20fill%3D%22%23EBEBEB%22%2F%3E%3Cpath%20d%3D%22M1448.89%20447.852H551.108V1552.15h897.782V447.852z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20fill%3D%22%2360B1F4%22%20d%3D%22M600%20494h57v57h-57zM600%20706h57v57h-57zM600%201130h57v57h-57zM600%20600h57v57h-57zM600%201024h57v57h-57zM600%20812h57v57h-57zM600%201236h57v57h-57zM600%20918h57v57h-57zM600%201342h57v57h-57zM600%201448h57v57h-57zM706%20494h57v57h-57zM706%20706h57v57h-57zM706%201130h57v57h-57zM706%20600h57v57h-57zM706%201024h57v57h-57zM706%20812h57v57h-57zM706%201236h57v57h-57zM706%20918h57v57h-57zM706%201342h57v57h-57zM706%201448h57v57h-57zM812.001%20494h57v57h-57zM812.001%20706h57v57h-57zM812.001%201130h57v57h-57zM812.001%20600h57v57h-57zM812.001%201024h57v57h-57zM812.001%20812h57v57h-57zM812.001%201236h57v57h-57zM812.001%20918h57v57h-57zM812.001%201342h57v57h-57zM812.001%201448h57v57h-57zM918%20494h57v57h-57zM918%20706h57v57h-57zM918%201130h57v57h-57zM918%20600h57v57h-57zM918%201024h57v57h-57zM918%20812h57v57h-57zM918%201236h57v57h-57zM918%20918h57v57h-57zM918%201342h57v57h-57zM918%201448h57v57h-57zM1024%20494h57v57h-57zM1024%20706h57v57h-57zM1024%201130h57v57h-57zM1024%20600h57v57h-57zM1024%201024h57v57h-57zM1024%20812h57v57h-57zM1024%201236h57v57h-57zM1024%20918h57v57h-57zM1024%201342h57v57h-57zM1024%201448h57v57h-57zM1130%20494h57v57h-57zM1130%20706h57v57h-57zM1130%201130h57v57h-57zM1130%20600h57v57h-57zM1130%201024h57v57h-57zM1130%20812h57v57h-57zM1130%201236h57v57h-57zM1130%20918h57v57h-57zM1130%201342h57v57h-57zM1130%201448h57v57h-57zM1236%20494h57v57h-57zM1236%20706h57v57h-57zM1236%201130h57v57h-57zM1236%20600h57v57h-57zM1236%201024h57v57h-57zM1236%20812h57v57h-57zM1236%201236h57v57h-57zM1236%20918h57v57h-57zM1236%201342h57v57h-57zM1236%201448h57v57h-57zM1342%20494h57v57h-57zM1342%20706h57v57h-57zM1342%201130h57v57h-57zM1342%20600h57v57h-57zM1342%201024h57v57h-57zM1342%20812h57v57h-57zM1342%201236h57v57h-57zM1342%20918h57v57h-57zM1342%201342h57v57h-57zM1342%201448h57v57h-57z%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22a%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h2000v2000H0z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E',
          link: 'https://create.zora.co/collections/0xa387e32d2e4d3ff5418fa5694836027d2ecd7923',
          contractAddress: '0xa387e32d2e4d3ff5418fa5694836027d2ecd7923',
          author: {
            twitter: 'parkthomp',
            address: '0x93da86e4231908179b738e88dd0510f7078a5cac',
            ens: ''
          }
        },
        {
          name: 'CHECK YOUR MAIL',
          type: 'NFT',
          image:
            'https://geytzcfqrx4jm7w267zfthsiczs3y772cmfnwbameixe2kmmtpbq.arweave.net/MTE8iLCN-JZ-2vfyWZ5IFmW8f_oTCtsEDCIuTSmMm8M',
          link: 'https://app.manifold.xyz/c/checkyourmail',
          contractAddress: '0xA134c292c73Dd99d0d2A545e80B986a695775623',
          author: {
            twitter: 'VinnieHager',
            address: '0xbCcE246EeBe7A39897AbF7A8F51cC60f4f5892f9',
            ens: ''
          }
        },
        {
          name: 'CHECK YOUR MAIL DELIVERY',
          type: 'NFT',
          image:
            'https://tlpf4cmie5rdsc2ejpqeef4vavx4ggpzuaclrszu7mngxpjahuva.arweave.net/mt5eCYgnYjkLREvgQheVBW_DGfmgBLjLNPsaa70gPSo',
          link: 'https://app.manifold.xyz/br/check-your-mail-delivery',
          contractAddress: '0xA134c292c73Dd99d0d2A545e80B986a695775623',
          author: {
            twitter: 'VinnieHager',
            address: '0xbCcE246EeBe7A39897AbF7A8F51cC60f4f5892f9',
            ens: ''
          }
        },
        {
          name: 'Cncptl Prspctv',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/FmiuxD_aUAASXZE?format=jpg&name=large',
          link: 'https://twitter.com/CncptlPrspctv/status/1614732650681602048',
          contractAddress: '',
          author: {
            twitter: 'CncptlPrspctv',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Pepe Checks',
          type: 'NFT',
          image:
            'https://bafybeihustqi4jb3jt3uk7fzqu3z5o6il7yxp3pm64bunn6sdtdmkkwere.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x6ecb9652170d3fbaa6741ac53b0c2cd43488728f',
          contractAddress: '0x6ecb9652170d3fbaa6741ac53b0c2cd43488728f',
          author: {
            twitter: 'discopump',
            address: '',
            ens: 'discopump.eth'
          }
        },
        {
          name: '$200 only on CHKRS',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fmow1_ZacAAnFdH?format=jpg&name=large',
          link: 'https://twitter.com/gremplin/status/1615157125692657667',
          contractAddress: '',
          author: {
            twitter: 'gremplin',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Air Check 23',
          type: 'NFT',
          image:
            'https://bafkreie2apkm6rcb3epyjnaf4ootr3jvedufcchr53t5hnydy45pewurb4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x5fe8df1449ae8e2b48b6f85c0f30d73317fcd7f1',
          contractAddress: '0x5fe8df1449ae8e2b48b6f85c0f30d73317fcd7f1',
          author: {
            twitter: 'reshatg23',
            address: '0x67417c4a1bea040cd82a811456b4b7d76d1f8751',
            ens: ''
          }
        },
        {
          name: 'FRAGILE CHECK',
          type: 'NFT',
          image:
            'https://p6fgcogcsa7gg477czakb2cui4dsnd2r2u65lasyipwrwfnis7ma.arweave.net/f4phOMKQPmNz_xZAoOhURwcmj1HVPdWCWEPtGxWol9g',
          link: 'https://app.manifold.xyz/c/brokencheck',
          contractAddress: '0xCF1565cD65358c390C56219efF8Fcd4d6A9b8cb4',
          author: {
            twitter: 'mantilla_angy',
            address: '',
            ens: 'angelamantilla.eth'
          }
        },
        {
          name: 'Chimps',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fmq4ae8XoAAyv9j?format=png&name=large',
          link: 'https://twitter.com/TimpersHD/status/1615306404729872387',
          contractAddress: '',
          author: {
            twitter: 'TimpersHD',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Super Status Kart',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmrQxm-XwAE9MZA?format=jpg&name=large',
          link: 'https://twitter.com/gillesdc/status/1615333657509756929',
          contractAddress: '',
          author: {
            twitter: 'gillesdc',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Check the Weather Frens!',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnLFzCmXwA4n_yP?format=jpg&name=medium',
          link: 'https://twitter.com/Neeoverse/status/1617572701010538497',
          contractAddress: '',
          author: {
            twitter: 'Neeoverse',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Check Yourself',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/FnJ98MHacAEVp7N?format=jpg&name=large',
          link: 'https://twitter.com/nasergivechi/status/1617493875702259713',
          contractAddress: '',
          author: {
            twitter: 'nasergivechi',
            address: '',
            ens: ''
          }
        },
        {
          name: 'VERIFIEDPEPE',
          type: 'NFT',
          image:
            'https://fbtxkwo4nfxzx5v47boihqaul76bmnyujnuqb6qvyj6bwdi3olda.arweave.net/KGd1Wdxpb5v2vPhcg8AUX_wWNxRLaQD6FcJ8Gw0bcsY',
          link: 'https://app.manifold.xyz/c/verifiedpepe',
          contractAddress: '0xd16f199d80b6151cc42b34F4625399B81f4B8aa5',
          author: {
            twitter: 'balt1711',
            address: '0xD8d7789453CBd59041AD448767dD374b8888ab66',
            ens: ''
          }
        },
        {
          name: 'DOS LARVAS OG | CHECK',
          type: 'NFT',
          image:
            'https://j2julxmxgc4ueyp3aes7ua7vvvm6wiihwy7q46kfejkl4ow7jroq.arweave.net/TpNF3ZcwuUJh-wEl-gP1rVnrIQe2Pw55RSJUvjrfTF0',
          link: 'https://app.manifold.xyz/c/larvas',
          contractAddress: '0x8EAFF1F8d997C2f772bF03490d8BD190B565A315',
          author: {
            twitter: 'doslarvas',
            address: '',
            ens: 'doslarvas.eth'
          }
        },
        {
          name: 'POSITIONS OF FLYZ',
          type: 'NFT',
          image:
            'https://nm363jrqxny6neghxnb3hmyy5gw75a6ba3bppcudrsztv44mybqa.arweave.net/azftpjC7ceaQx7tDs7MY6a3-g8EGwveKg4yzOvOMwGA',
          link: 'https://app.manifold.xyz/c/PoF95',
          contractAddress: '0xDe75a10396e79441855f388AcfC7B8f13EC74F11',
          author: {
            twitter: 'biterror_eth',
            address: '',
            ens: 'biterror.eth'
          }
        },
        {
          name: 'Left Unchecked',
          type: 'NFT',
          image:
            'https://ipfs.io/ipfs/QmbeLBMLFEzHcATyqBJ7Xi1trJnCwjfMVvhwNjQEfMc5m8/nft.png',
          link: 'https://foundation.app/@Haps/specopps/8',
          contractAddress: '0x8c88d3B16270736d2bF7C636770b0759506C6dE7',
          author: {
            twitter: 'hapsigmi',
            address: '0x81772de3466a34901f0a13230869a3ac65f213dd',
            ens: 'hapsigmi.eth'
          }
        },
        {
          name: 'Check The Time',
          type: 'NFT',
          image:
            'https://bafybeico6acvafw5tpvjbgszf3giqjaxhnialfrcp3nxcnl6ghxul6uny4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x935ff2b476b926d79898dd1c7be060b5a75cccd8',
          contractAddress: '0x935ff2b476b926d79898dd1c7be060b5a75cccd8',
          author: {
            twitter: 'JKalinaOfficial',
            address: '0x147596f1648fcdd4f6b99e0848f397f356fd4233',
            ens: ''
          }
        },
        {
          name: 'CHECKS - DD EDITION: WHITE',
          type: 'NFT',
          image:
            'https://xb62cqblekom64iinf64geta53fac6ukic2xwkx7im2t3qhqyciq.arweave.net/uH2hQCsinM9xCGl9wxJg7soBeopAtXsq_0M1PcDwwJE',
          link: 'https://app.manifold.xyz/c/Checks-dd-edition-white',
          contractAddress: '0xD70f16e639E09F90bd7Ee3F3C3BbAD33326D3094',
          author: {
            twitter: 'seanbonner',
            address: '',
            ens: 'seanbonner.eth'
          }
        },
        {
          name: 'CHECKS - DD EDITION: BLACK',
          type: 'NFT',
          image:
            'https://assets.manifold.xyz/image/upload/c_limit,q_80,w_1024/v1674244600/5ed17814a7e7964a691c7fdd57f2de6b8b22483fe97e9a2af659de1c7a6d4432.png',
          link: 'https://app.manifold.xyz/br/Checks-dd-edition-black',
          contractAddress: '0xD70f16e639E09F90bd7Ee3F3C3BbAD33326D3094',
          author: {
            twitter: 'seanbonner',
            address: '',
            ens: 'seanbonner.eth'
          }
        },
        {
          name: 'CHECKS - DD EDITION: BLEU',
          type: 'NFT',
          image:
            'https://assets.manifold.xyz/image/upload/c_limit,q_80,w_1024/v1674247240/2c00edcf11f39847c7878befaf1d344ee4cc4c582a682d23e017893c0d65f6b2.png',
          link: 'https://app.manifold.xyz/br/Checks-dd-edition-bleu',
          contractAddress: '0xD70f16e639E09F90bd7Ee3F3C3BbAD33326D3094',
          author: {
            twitter: 'seanbonner',
            address: '',
            ens: 'seanbonner.eth'
          }
        },
        {
          name: 'Variant 101',
          type: 'NFT',
          image:
            'https://ipfs.io/ipfs/QmScgM1dVDCEiDqiAhwxLebBPFzMt8kSgFWXsA2GmEAVVi/nft.png',
          link: 'https://foundation.app/@Haps/variants-by-haps/104',
          contractAddress: '0xfF095979Fa64637307818c250BF8f964E8184562:104',
          author: {
            twitter: 'hapsigmi',
            address: '0x81772de3466a34901f0a13230869a3ac65f213dd',
            ens: 'hapsigmi.eth'
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
