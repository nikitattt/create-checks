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
          image: 'https://i.postimg.cc/VvcmP81M/checks-1.gif',
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
            'https://bafybeifgzkgg6spj64vbo3qcqznf2eor7kiv47f7lwwt6neq3fhfv2z6vq.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x13b3196c4a27eabb2b1b98b7465be145d5df5a85',
          contractAddress: '0x13b3196c4a27eabb2b1b98b7465be145d5df5a85',
          author: {
            twitter: 'discopump',
            address: '',
            ens: 'discopump.eth'
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
        },
        // 7 batch
        {
          name: 'ALWAYS WATCHING',
          type: 'NFT',
          image:
            'https://bs373kfoyogtxfpwkcd33n57sjpujfuiba73gdcd6kjklg3eciqq.arweave.net/DLf9qK7DjTuV9lCHvbe_kl9ElogIP7MMQ_KSpZtkEiE',
          link: 'https://app.manifold.xyz/c/alwayswatching',
          contractAddress: '0x69A13cb0df89E54e11287Cb1BB010d9d70B79ed0',
          author: {
            twitter: 'NonFungibleNat_',
            address: '0x4f329135096aCC3dae209A9B36B182E9c1D237AC',
            ens: ''
          }
        },
        {
          name: 'Tower of Verification',
          type: 'NFT',
          image:
            'https://bafybeidvfkxdhao7esel5lranbhgnsrct5i5e74xbne4s6kn54zftrj5h4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x50ef97702f4b4f9373daf55e251f92933777e8a7',
          contractAddress: '0x50ef97702f4b4f9373daf55e251f92933777e8a7',
          author: {
            twitter: 'specificobj',
            address: '',
            ens: 'specificobj.eth'
          }
        },
        {
          name: 'Dead Cat Check',
          type: 'NFT',
          image:
            'https://bafybeic3qbsimhzcx7ozlzsldkmhm7yq4io4ws3danbqlfud2bo5a2nkoa.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x340f8999e1f45a7155e4e2be15e20fc64c2d2d13',
          contractAddress: '0x340f8999e1f45a7155e4e2be15e20fc64c2d2d13',
          author: {
            twitter: 'brandonmighty',
            address: '',
            ens: 'brandonmighty.eth'
          }
        },
        {
          name: 'The Persistence Of Status',
          type: 'NFT',
          image:
            'https://bafybeieughwt5fkg6eh7vv2r7foeqbnk7wguq6qnqhoxcnqzff3gqg7t7y.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x225d808cae58791b21f0bab29b7867c3767fe029',
          contractAddress: '0x225d808cae58791b21f0bab29b7867c3767fe029',
          author: {
            twitter: 'gillesdc',
            address: '',
            ens: 'gillesdc.eth'
          }
        },
        {
          name: '⟳',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnKlGqwXoAMHvWO?format=jpg&name=large',
          link: 'https://twitter.com/jackbutcher/status/1617536815631847425',
          contractAddress: '',
          author: {
            twitter: 'jackbutcher',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Bouncing Checks',
          type: 'NFT-Video',
          image:
            'https://bafybeifqdgm47flpmxbnid2hhd3hsdk52gdvocbhiqknuuh42wvpj253be.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x0d02e1336666fb492c0864f8d0121fe9d300b278',
          contractAddress: '0x0d02e1336666fb492c0864f8d0121fe9d300b278',
          author: {
            twitter: 'ersguterdinge',
            address: '',
            ens: 'bonuslife.eth'
          }
        },
        {
          name: 'CHECK-MAN',
          type: 'NFT',
          image:
            'https://a247cd7aspfr7lxck7ei2w2p4ymluh7fmssmp3udduxsr4yxtr3a.arweave.net/BrnxD-CTyx-u4lfIjVtP5hi6H-VkpMfugx0vKPMXnHY',
          link: 'https://app.manifold.xyz/br/check-man',
          contractAddress: '0x637A3Bf83A753cBCd54f2A93Eb9aF593fAfF0EF4',
          author: {
            twitter: '0xBunzy',
            address: '',
            ens: '0xbunzy.eth'
          }
        },
        {
          name: 'Verified',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/FnFW-sGX0AE68uE?format=jpg&name=large',
          link: 'https://twitter.com/itsjustion/status/1617169382022455296',
          contractAddress: '',
          author: {
            twitter: 'itsjustion',
            address: '',
            ens: ''
          }
        },
        {
          name: 'SEIZE THE CHECKS',
          type: 'NFT',
          image:
            'https://edqu5dl2bpdxw6jiany7akqc62sodawxxopiptfukycdblkxbt2q.arweave.net/IOFOjXoLx3t5KANx8CoC9qThgte7nofMtFYEMK1XDPU',
          link: 'https://app.manifold.xyz/c/checks',
          contractAddress: '0x9b8a21b356B4a4f4a2d4A9E078aE74ce70bF81ed',
          author: {
            twitter: 'shaun3eth',
            address: '',
            ens: 'shaun3.eth'
          }
        },
        {
          name: 'Lucréce Monsters',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnClajSWQAEvpWu?format=jpg&name=medium',
          link: 'https://twitter.com/DesLucrece/status/1616975445500518402',
          contractAddress: '',
          author: {
            twitter: 'DesLucrece',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checkers',
          type: 'NFT',
          image:
            'https://bafybeibvhli2arrda5rdqhs6agimty4efgzszkfy3x5grk3zxfhy34poqa.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xcc7f01e867946d6b4e4787e65550ae3ca5f325fd',
          contractAddress: '0xcc7f01e867946d6b4e4787e65550ae3ca5f325fd',
          author: {
            twitter: 'nickpbaker',
            address: '',
            ens: 'nicholasbaker.eth'
          }
        },
        {
          name: 'Medusas',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnCGEBGXoAA1xcE?format=jpg&name=large',
          link: 'https://twitter.com/gillesdc/status/1616939746953134081',
          contractAddress: '',
          author: {
            twitter: 'gillesdc',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Sneetches (must watch)',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/FnAxftBacAA-0CF?format=jpg&name=large',
          link: 'https://create.zora.co/collections/0x06699b226c4c9abdc48e519b6631781fe708cdc3',
          contractAddress: '',
          author: {
            twitter: '',
            address: '',
            ens: 'timmesc.eth'
          }
        },
        {
          name: 'Surveillance Checks',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnANS-LXkAESbJn?format=jpg&name=large',
          link: 'https://twitter.com/0xdgb/status/1616806902511321091',
          contractAddress: '',
          author: {
            twitter: '',
            address: '',
            ens: ''
          }
        },
        {
          name: 'jackbutcher rn',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm_4g77akAcCuRV?format=jpg&name=900x900',
          link: 'https://twitter.com/reganpthompson/status/1616784041566670855',
          contractAddress: '',
          author: {
            twitter: 'reganpthompson',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Centralized vs Decentralized Verification',
          type: 'NFT',
          image:
            'https://bafkreic6wkyptun5pau2tyqyp6m7rpoxgt6fj62edns3wiogx3ltb6b7qa.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x22b60cdb2ad2aeca1c3d7f723edb6e8a96ca88a0',
          contractAddress: '0x22b60cdb2ad2aeca1c3d7f723edb6e8a96ca88a0',
          author: {
            twitter: '0xBDOT',
            address: '',
            ens: '0xbdot.eth'
          }
        },
        {
          name: 'There can only be one The Chosen One',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm7BCSoaMAQX-UQ?format=jpg&name=large',
          link: 'https://twitter.com/peimsloot/status/1616442231770222595',
          contractAddress: '',
          author: {
            twitter: 'peimsloot',
            address: '',
            ens: ''
          }
        },
        {
          name: 'CHECKERS',
          type: 'NFT',
          image:
            'https://gateway.pinata.cloud/ipfs/QmVMhbfteHXUzqKmuzCPGXyywkxXdT3zSrhFeW2UuBgx7a/1.png',
          link: 'https://checkers.nullish.org/',
          contractAddress: '',
          author: {
            twitter: 'signedtx',
            address: '',
            ens: 'nullish.eth'
          }
        },
        {
          name: 'Art x Culture x Vibes 🦴',
          type: 'NFT',
          image:
            'https://lpjlfgoascd7fsj6b3xoc3mmqfbcooxgfq4wsmp2hl5meeyzy2fq.arweave.net/W9KymcCQh_LJPg7u4W2MgUInOuYsOWkx-jr6whMZxos',
          link: 'https://app.manifold.xyz/c/chxgremplinz',
          contractAddress: '0x3875AFdF59eC5463F6A03040685a4c8EB151f4D3',
          author: {
            twitter: 'gremplinznft',
            address: '0x51C0FB7dff796E93B60A8bd8b73d8A79845C82bA',
            ens: ''
          }
        },
        {
          name: 'Creatures',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmnBjpIWIAAQfvu?format=jpg&name=large',
          link: 'https://twitter.com/creaturesDT/status/1615034762896212000',
          contractAddress: '',
          author: {
            twitter: 'creaturesDT',
            address: '',
            ens: ''
          }
        },
        {
          name: 'vvarhol',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm3RrCBWQAAPM43?format=jpg&name=large',
          link: 'https://twitter.com/enjoyoor/status/1616181736714420275',
          contractAddress: '',
          author: {
            twitter: 'enjoyoor',
            address: '',
            ens: ''
          }
        },
        // 8 batch
        {
          name: 'Checkmates',
          type: 'NFT',
          image:
            'https://bafkreiainvsy2hcwd7fztquwhzwykzvgke6r5awcjzkpc5nhcj3neqhiby.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x61bfc49f34758536a5369d96bd1d688d4dc5a85a',
          contractAddress: '0x61bfc49f34758536a5369d96bd1d688d4dc5a85a',
          author: {
            twitter: '0xC0DY',
            address: '',
            ens: ''
          }
        },
        {
          name: 'A Checkwork Orange',
          type: 'NFT',
          image:
            'https://bafybeic7jpnccz7agylnbfokquibopla5irjqddybejmv4wdysfovcjx4m.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x763a9d8b9615f2299d3dca5ea14af8830a26ff31',
          contractAddress: '0x763a9d8b9615f2299d3dca5ea14af8830a26ff31',
          author: {
            twitter: 'peimsloot',
            address: '0x1f919740214c7fce32e4ca5060626cc822cda703',
            ens: ''
          }
        },
        {
          name: 'IN CHECK WE TRUST',
          type: 'NFT',
          image:
            'https://ipfs.io/ipfs/QmaxE52AXG5z7w2VHeKLzwReCedVwCYN9gRmscRv9RLCva/nft.png',
          link: 'https://foundation.app/@Bitsapiens/bitmemes/1',
          contractAddress: '0xD54124B91114cAf80C57C0834e3D360E1D0f5132:1',
          author: {
            twitter: 'Bitsapiens_',
            address: '0xab5d3f7eca3e784eaca50b74cfe5d1114cc78d76',
            ens: 'bitsapiens.eth'
          }
        },
        {
          name: 'Freeze Metadata',
          type: 'NFT',
          image:
            'https://ipfs.io/ipfs/QmQC2VPJJQ8rj54WyTFQ2ZeYWr4ixSCgTzKCNv6tB8XrwP/nft.png',
          link: 'https://foundation.app/@Bitsapiens/bitmemes/2',
          contractAddress: '0xD54124B91114cAf80C57C0834e3D360E1D0f5132:2',
          author: {
            twitter: 'Bitsapiens_',
            address: '0xab5d3f7eca3e784eaca50b74cfe5d1114cc78d76',
            ens: 'bitsapiens.eth'
          }
        },
        {
          name: '',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/Fm2m-N7XwAYm_g8?format=png&name=900x900',
          link: 'https://twitter.com/peimsloot/status/1616131576546611200',
          contractAddress: '',
          author: {
            twitter: 'peimsloot',
            address: '',
            ens: ''
          }
        },
        {
          name: '',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/Fm2m-N_XwBgBUU0?format=png&name=small',
          link: 'https://twitter.com/peimsloot/status/1616131576546611200',
          contractAddress: '',
          author: {
            twitter: 'peimsloot',
            address: '',
            ens: ''
          }
        },
        {
          name: 'state of mind',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/Fm2a86PaAAMDwEm?format=jpg&name=medium',
          link: 'https://twitter.com/blankspac_e/status/1616118361305538560',
          contractAddress: '',
          author: {
            twitter: 'blankspac_e',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Vitruvian Checks',
          type: 'NFT',
          image:
            'https://bafkreicruqdfgb57usldirym2rxa44dtup5gy7svf5ttuxjip2gwn3tid4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xe65a68a73d633b0f35f063ad9b8de8c478ac5606',
          contractAddress: '0xe65a68a73d633b0f35f063ad9b8de8c478ac5606',
          author: {
            twitter: 'aaraalto',
            address: '',
            ens: 'aaraalto.eth'
          }
        },
        {
          name: 'Checks Chair',
          type: 'NFT',
          image:
            'https://bafybeibu35uy2hvffccatyrjmaqceyx35hfyf6fdte2l2nena5yfn6orbm.ipfs.nftstorage.link/',
          link: 'https://www.baker.studio/work/checks',
          contractAddress: '0x291f1915e8ca19ad879060706d51cc8e1edb40bb',
          author: {
            twitter: 'nickpbaker',
            address: '',
            ens: 'nicholasbaker.eth'
          }
        },
        {
          name: 'Gm',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmkappKXgAIKUBR?format=jpg&name=large',
          link: 'https://twitter.com/espress0eth/status/1614851246912937984',
          contractAddress: '',
          author: {
            twitter: 'espress0eth',
            address: '',
            ens: ''
          }
        },
        {
          name: '🧂✔️',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmtNkHGaEAATn7Q?format=jpg&name=medium',
          link: 'https://twitter.com/blankspac_e/status/1615470817592356864',
          contractAddress: '',
          author: {
            twitter: 'blankspac_e',
            address: '',
            ens: ''
          }
        },
        {
          name: '🔥✔️',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fmta-z0aEAAGyOP?format=jpg&name=medium',
          link: 'https://twitter.com/blankspac_e/status/1615485402496008193',
          contractAddress: '',
          author: {
            twitter: 'blankspac_e',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checkerniak Edition',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmtsC6LaEAIII38?format=jpg&name=large',
          link: 'https://twitter.com/JordanLyall/status/1615504025449005057',
          contractAddress: '',
          author: {
            twitter: 'JordanLyall',
            address: '',
            ens: ''
          }
        },
        {
          name: "☑️checking on mfers O-'",
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmtttmAXgAQtw9T?format=jpg&name=large',
          link: 'https://twitter.com/24h_eth/status/1615505996398354432',
          contractAddress: '',
          author: {
            twitter: '24h_eth',
            address: '',
            ens: ''
          }
        },
        {
          name: 'trade marks',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fmt65BhXkAAbeOR?format=png&name=large',
          link: 'https://twitter.com/jackbutcher/status/1615520085438783489',
          contractAddress: '',
          author: {
            twitter: 'jackbutcher',
            address: '',
            ens: ''
          }
        },
        {
          name: 'awake?',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmwZGHcXoAALi3u?format=jpg&name=large',
          link: 'https://twitter.com/jackbutcher/status/1615694259071459339',
          contractAddress: '',
          author: {
            twitter: 'jackbutcher',
            address: '',
            ens: ''
          }
        },
        {
          name: 'fixed it for you',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmwenypX0AE6yE1?format=jpg&name=large',
          link: 'https://twitter.com/0xRiccardo/status/1615700037786370048',
          contractAddress: '',
          author: {
            twitter: '0xRiccardo',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Soul Checks',
          type: 'NFT',
          image:
            'https://bafybeib5oyucyejobaahu4dptkac25z23t2ac57jjblpxltebabzwbbfsy.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xf41dd967582452a29742605af8a19a5ed8c067d5',
          contractAddress: '0xf41dd967582452a29742605af8a19a5ed8c067d5',
          author: {
            twitter: '@lad1699',
            address: '',
            ens: 'gaul.eth'
          }
        },
        {
          name: '',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm1OUPXWIAQY27i?format=jpg&name=large',
          link: 'https://twitter.com/enjoyoor/status/1616033956717293569',
          contractAddress: '',
          author: {
            twitter: 'enjoyoor',
            address: '',
            ens: ''
          }
        },
        {
          name: 'wen reveal?',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm1fNthXoAA439q?format=jpg&name=medium',
          link: 'https://twitter.com/jackbutcher/status/1616052564528857088',
          contractAddress: '',
          author: {
            twitter: 'jackbutcher',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checks’n’Masks',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm2OzUSaEAE09Eg?format=jpg&name=medium',
          link: 'https://twitter.com/melba_marat/status/1616105100346523648',
          contractAddress: '',
          author: {
            twitter: 'melba_marat',
            address: '',
            ens: ''
          }
        },
        {
          name: 'univverse',
          type: 'NFT',
          image:
            'https://bafkreienwsljknlcd6boitotzkymnrzmn2elaftpdr5kwgrfad4rgzfuwi.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x0339268f8135c4d1f8a5d21e695e301d9cbc1baa',
          contractAddress: '0x0339268f8135c4d1f8a5d21e695e301d9cbc1baa',
          author: {
            twitter: 'purplequantum',
            address: '0xa168ced6ff013bb1f3b137545d881b96f371cbb9',
            ens: ''
          }
        },
        {
          name: 'unitvv',
          type: 'NFT',
          image:
            'https://bafkreiaaaqbiugwoizo2j7x4nkw476ybd4u75ngiabawnd5x2mph2p26ke.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xb2174047956ef116336d59f698f9afdd35b0ffbf',
          contractAddress: '0xb2174047956ef116336d59f698f9afdd35b0ffbf',
          author: {
            twitter: 'purplequantum',
            address: '0xa168ced6ff013bb1f3b137545d881b96f371cbb9',
            ens: ''
          }
        },
        {
          name: 'Moonbirds Checkfication',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm2Pn4KaAAAwiV-?format=jpg&name=medium',
          link: 'https://twitter.com/_JayJay88/status/1616105875281973248',
          contractAddress: '',
          author: {
            twitter: '_JayJay88',
            address: '',
            ens: ''
          }
        },
        // 9 batch
        {
          name: 'Checksweeper',
          type: 'NFT',
          image:
            'https://bafkreiartuosjrxivl53zmzu2l3uhpr6eywupwc3yzo72ilnjhjb4lio5i.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x9c8a762dc73fb00ceb952359ca0d20bfedb570bf',
          contractAddress: '0x9c8a762dc73fb00ceb952359ca0d20bfedb570bf',
          author: {
            twitter: 'itsvrbs',
            address: '0x327ba8d3974aef4e167e8ce5e06c975ba43a3723',
            ens: ''
          }
        },
        {
          name: 'Self destruction',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/Fm2A_PCakAAQM1h?format=jpg&name=large',
          link: 'https://twitter.com/JordanLyall/status/1616090429740683266',
          contractAddress: '',
          author: {
            twitter: 'JordanLyall',
            address: '',
            ens: ''
          }
        },
        {
          name: '',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/Fm1q303aYAUIomu?format=png&name=medium',
          link: 'https://twitter.com/artist_hardik/status/1616065484373528576',
          contractAddress: '',
          author: {
            twitter: 'artist_hardik',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checks-DB Edition',
          type: 'NFT',
          image:
            'https://bafybeig3um7i2wcqjji4b7olbpyyghnwz6bypoong4k2xr4lwlbjfwnkqy.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xc92a713ac1180ecbf97d159550f4474d315a0f20',
          contractAddress: '0xc92a713ac1180ecbf97d159550f4474d315a0f20',
          author: {
            twitter: 'KDino1313',
            address: '0x451b5372313e4c683911d2bb685279e396be80ed',
            ens: ''
          }
        },
        {
          name: 'Happy Zorbs',
          type: 'NFT-Video',
          image:
            'https://bafybeiddpmdlu66ikh2fjfvbhq56euzh75ke5uyrmm3zoymbvmtu43cb2i.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x3351d7243688dc71c5e3548e839d2a8d58fe10a4',
          contractAddress: '0x3351d7243688dc71c5e3548e839d2a8d58fe10a4',
          author: {
            twitter: 'ripe0x',
            address: 'ripe0x.eth',
            ens: ''
          }
        },
        {
          name: 'PEPS 69 X 420',
          type: 'NFT',
          image:
            'https://xaxnnkpyy4fuehc3uonxqfmkzjg5kjw4lmjbm3kilhjee6xdpmtq.arweave.net/uC7WqfjHC0IcW6ObeBWKyk3VJtxbEhZtSFnSQnrjeyc',
          link: 'https://app.manifold.xyz/c/Peps',
          contractAddress: '0x46dF7d64c81b05EF3956da332d62955504A07126',
          author: {
            twitter: 'NicholasKGarvin',
            address: '',
            ens: 'nickgarvin.eth'
          }
        },
        {
          name: 'Pale Blue Check',
          type: 'NFT',
          image:
            'https://bafkreiecr3wzqcw76ofy3tanpxcgwu7colwkrn4g6voxlqwknni4kpi3c4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x9baf7f72a7341889fe36dfb8904fb2676ebd1e85',
          contractAddress: '0x9baf7f72a7341889fe36dfb8904fb2676ebd1e85',
          author: {
            twitter: 'hapsigmi',
            address: '',
            ens: 'hapsigmi.eth'
          }
        },
        {
          name: 'Notable: Check Y/N',
          type: 'NFT',
          image:
            'https://bafybeibrrpdouysmflvsgqeojptjn434zasymitgo4mri4fc3vlmniumb4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xfd8366b9bb403631e430f114508a97a60c515c93',
          contractAddress: '0xfd8366b9bb403631e430f114508a97a60c515c93',
          author: {
            twitter: 'SteveTheSuit6',
            address: '0x1e5c1571626b5677bb354dc09ef31ba26350f978',
            ens: ''
          }
        },
        {
          name: 'Mobilis in Infinite Edition',
          type: 'NFT',
          image:
            'https://bafkreicjshdbjk5od6eaupqrwd2775onbytz23uf6swktzt7zcs3jg5mt4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x38b66da1d1400dc97e5389da214b9b1b92154653',
          contractAddress: '0x38b66da1d1400dc97e5389da214b9b1b92154653',
          author: {
            twitter: 'leila_bt',
            address: '0x3201fc1293f5de5b3176d168ca5ed8644431638b',
            ens: ''
          }
        },
        {
          name: 'CREP “CHECKS”',
          type: 'NFT',
          image:
            'https://bafybeigxne52d7j5hjjxqar2jodgftmyybs3xsvheokl5fvvkui6gtb42y.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xde1f9306fd46718b1895ff372f1b27dfe623eea1',
          contractAddress: '0xde1f9306fd46718b1895ff372f1b27dfe623eea1',
          author: {
            twitter: 'tomontweet',
            address: '',
            ens: 'whattaplayer.eth'
          }
        },
        {
          name: '"CHUCKS" - IAMGILROY',
          type: 'NFT',
          image:
            'https://qo7yb744htqgglbymeq3grdvzm4a3jcec7wleawn6ozhvikejk5q.arweave.net/g7-A_5w84GMsOGEhs0R1yzgNpEQX7LICzfOyeqFESrs',
          link: 'https://app.manifold.xyz/c/chucks',
          contractAddress: '0xBEb21483Eb6C1137fFB5a49B9B93F2Dc55EDCf3a',
          author: {
            twitter: 'iamgilroy',
            address: '',
            ens: 'iamgilroy.eth'
          }
        },
        {
          name: 'CHEEKS',
          type: 'NFT',
          image:
            'https://gybe5ad6mza733qrw3x7jbbn7d5bk3z4kedpta6hsotqrfqf72nq.arweave.net/NgJOgH5mQf3uEbbv9IQt-PoVbzxRBvmDx5OnCJYF_ps',
          link: 'https://app.manifold.xyz/c/dos-cheeks',
          contractAddress: '0xe3dd900DD0FcF601143343E78F3Df6aeE851045f',
          author: {
            twitter: 'iamdos',
            address: '0xFf613d9d6B8F3Ea0D345a6add3DFF03bC7681e88',
            ens: ''
          }
        },
        {
          name: 'PAWS',
          type: 'NFT',
          image:
            'https://xmbdbek7pbdnofzbggmwpjpqjenkpdes5tubg3sl6mq6czjd6jgq.arweave.net/uwIwkV94RtcXITGZZ6XwSRqnjJLs6BNuS_Mh4WUj8k0',
          link: 'https://app.manifold.xyz/c/rayray-paws',
          contractAddress: '0xE6eBE4210c02a50428B31622C8DE912E063192DD',
          author: {
            twitter: 'cryptorayrays',
            address: '0xF75a7D7cC5991630FB44EAA74D938bd28e35E87E',
            ens: ''
          }
        },
        {
          name: 'FLOVVERS',
          type: 'NFT',
          image:
            'https://bafybeicu5kbtnbpbhnry5hsennj7qaiwh6uyp6ce6oqnp3qxjwqcyx5rpq.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x99ca2648b2951d642b281ef00ae831b4cf1a4c74',
          contractAddress: '0x99ca2648b2951d642b281ef00ae831b4cf1a4c74',
          author: {
            twitter: 'theartofwarren',
            address: '',
            ens: 'theartofwarren.eth'
          }
        },
        {
          name: 'Check 4 LOVE',
          type: 'NFT',
          image:
            'https://bafkreieavmdwmn4wt5hdhywy6li25cpu5szvhyw7ejjiwqsdf6cw4cijei.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x00d47fc5260be4b61da3842426dede2b1a543cc1',
          contractAddress: '0x00d47fc5260be4b61da3842426dede2b1a543cc1',
          author: {
            twitter: 'logonaut',
            address: '',
            ens: 'logonaut.eth'
          }
        },
        {
          name: 'Reign Checks',
          type: 'NFT',
          image:
            'https://bafkreifo7vznpma552dofupgr5cebgj5nvbxqzy6z2x7wtrs6vlryvfqie.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x2ffa47c0c2c12c8b705259508140df97fe0d3f3d',
          contractAddress: '0x2ffa47c0c2c12c8b705259508140df97fe0d3f3d',
          author: {
            twitter: 'logonaut',
            address: '',
            ens: 'logonaut.eth'
          }
        },
        {
          name: 'Certified Play Maker',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnLVW8IaEAAmzul?format=png&name=900x900',
          link: 'https://twitter.com/0xBunzy/status/1617590203086155777',
          contractAddress: '',
          author: {
            twitter: '0xBunzy',
            address: '',
            ens: ''
          }
        },
        {
          name: '',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/FnLsg2saYAAnJU7?format=png&name=large',
          link: 'https://twitter.com/0xBunzy/status/1617615805629497345',
          contractAddress: '',
          author: {
            twitter: '0xBunzy',
            address: '',
            ens: ''
          }
        },
        {
          name: 'CHECKS - MIX EDITION (TRADITIONAL)',
          type: 'NFT',
          image:
            'https://k72uznwxtsrimc6tuoa3blwo5jxmyq7hteipvdbou7zqxgzaga7q.arweave.net/V_VMttecooYL06OBsK7O6m7MQ-eZEPqMLqfzC5sgMD8',
          link: 'https://app.manifold.xyz/c/checks-mix',
          contractAddress:
            'https://etherscan.io/address/0xf495836fe8ec4dfecf944f37caf88c6b48768997',
          author: {
            twitter: 'starl3xx',
            address: '',
            ens: 'starl3xx.eth'
          }
        },
        {
          name: 'CheckPunks',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/d9a0d914976f8c0ca2035a0fbc1cb4cf.gif?auto=format&w=384',
          link: 'https://opensea.io/collection/checkpunks',
          contractAddress: '0xF7aF6dD6C36fC42Eb802b33D48EA3D395803C8EA',
          author: {
            twitter: 'CheckPunks',
            address: '',
            ens: ''
          }
        },
        // 10 batch
        {
          name: 'REM #3',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/931058d72e5ea2798aafae8ea38c0b25.png?auto=format&w=1000',
          link: 'https://opensea.io/assets/ethereum/0xfa0ca01cfecfd8dd50a905d9e76b259aa0b8089a/4',
          contractAddress: '0xfa0ca01cfecfd8dd50a905d9e76b259aa0b8089a:4',
          author: {
            twitter: 'rottencoffeewtf',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checks x Year of the Rabbit',
          type: 'NFT',
          image:
            'https://bafkreiadk4jpmtr4kpfsz5kbsvvnpzndc7vcouk62zjqybe47oot4m2x5u.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x685d0bc1a702126627eaf4b96c93f2474df8ed58',
          contractAddress: '0x685d0bc1a702126627eaf4b96c93f2474df8ed58',
          author: {
            twitter: 'artofnext',
            address: '',
            ens: 'robeee.eth'
          }
        },
        {
          name: 'PERMISSIONLESS FRUIT',
          type: 'NFT',
          image:
            'https://62c45nqibm7od2ogv3p3gjhh7tbnwokd7dal57af3s5x7vtnhb2q.arweave.net/9oXOtggLPuHpxq7fsyTn_MLbOUP4wL78Bdy7f9ZtOHU',
          link: 'https://app.manifold.xyz/c/permissionless-fruit',
          contractAddress: '0x463fAEb04caEa8D866A0d80C2D0AC4731E95C89f',
          author: {
            twitter: 'vishakhariharan',
            address: '',
            ens: 'vihavibes.eth'
          }
        },
        {
          name: 'DYOR',
          type: 'NFT',
          image:
            'https://bafybeicn67kjp5lokzr4ynomfhaugasa3yyngp3stren66ngsnxzr2farm.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x9589f3d70d21db69d116e9a487233eecbcde3c57',
          contractAddress: '0x9589f3d70d21db69d116e9a487233eecbcde3c57',
          author: {
            twitter: '',
            address: '0x7423cB7bAF0cE0C1ADb29A28537F3E33feDbA7e2',
            ens: ''
          }
        },
        {
          name: 'Musk Checks',
          type: 'NFT',
          image:
            'https://bafybeie4cqhv3yktkfj5hrktz32qgd5cmupxarrt4ikavsjrzqhasdxsz4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xca72ba4e421066de7dfa830a3091b9574945e917',
          contractAddress: '0xca72ba4e421066de7dfa830a3091b9574945e917',
          author: {
            twitter: 'avsinghk',
            address: '0x7423cB7bAF0cE0C1ADb29A28537F3E33feDbA7e2',
            ens: ''
          }
        },
        {
          name: 'Homes',
          type: 'NFT',
          image:
            'https://openseauserdata.com/files/5d7acc64ea2deda284ff6be426d365cd.svg',
          link: 'https://create.zora.co/collections/0xe270aa6cd00e9e8267c26066876f1a60610eda6c',
          contractAddress: '0xe270aa6cd00e9e8267c26066876f1a60610eda6c',
          author: {
            twitter: 'ErikAstramecki',
            address: '',
            ens: 'thebusinessgoat.eth'
          }
        },
        {
          name: 'The Check Standard',
          type: 'NFT',
          image:
            'https://bafybeia3geluvenm5lrsh64e36l7wrpbqhb52snbwiklf2gsavvl2sazjm.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x02fe00eaffb139b6b72d489d4c26c71807e2cdff',
          contractAddress: '0x02fe00eaffb139b6b72d489d4c26c71807e2cdff',
          author: {
            twitter: 'thrive42',
            address: '',
            ens: 'thriveordecline.eth'
          }
        },
        {
          name: 'Checks Over Stripes',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FmXRL6jXoAEJxPw?format=jpg&name=large',
          link: 'https://twitter.com/ivandetta/status/1613927123336527875',
          contractAddress: '',
          author: {
            twitter: 'ivandetta',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checks on Checks',
          type: 'NFT',
          image:
            'https://pbs.twimg.com/media/FmPWExuXEAEtP5J?format=jpg&name=large',
          link: 'https://twitter.com/jrdnmix/status/1613368623225098241',
          contractAddress: '',
          author: {
            twitter: 'jrdnmix',
            address: '',
            ens: ''
          }
        },
        {
          name: 'checks(woosh)',
          type: 'NFT',
          image:
            'https://bafkreigixubsrr2zio4az3uhjnvs2mh5me2ikrdfqgsbekiintfrtd2riy.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xc7e6825d1f2dcf7c5a512bc8a22cc833e892e78f',
          contractAddress: '0xc7e6825d1f2dcf7c5a512bc8a22cc833e892e78f',
          author: {
            twitter: 'JustinMar32',
            address: '',
            ens: 'justinmarciano.eth'
          }
        },
        {
          name: 'SOME CHECK DEWDS',
          type: 'NFT',
          image:
            'https://diufocvju27pxe3ibi6djffemosujfsh3xt2242zrf4oe5aogr2a.arweave.net/GihXCqmmvvuTaAo8NJSkY6VElkfd561zWYl44nQONHQ',
          link: 'https://app.manifold.xyz/c/some-check-dewds',
          contractAddress: '0x9a1DED118929B9ccd9902764d213bdcC4361cd7b',
          author: {
            twitter: 'drrrrck',
            address: '',
            ens: 'drrrrck.eth'
          }
        },
        {
          name: 'Freedom Check',
          type: 'NFT',
          image:
            'https://bafkreicnymez4ilzaf4s3igfkh2kbotmje6ajmhkpczimnu7747kyrm73q.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x45b32a3b49ece3ac0c03bb3e74d0e71c5d0db735',
          contractAddress: '0x45b32a3b49ece3ac0c03bb3e74d0e71c5d0db735',
          author: {
            twitter: 'miracleray_eth',
            address: '0x82E841cFE9d8BBaf6108f5581929738114eF4bD1',
            ens: ''
          }
        },
        {
          name: 'Before checks',
          type: 'NFT-Video',
          image:
            'https://bafybeiblzrmixos2flrbkr7kwmb6x72haoenkgwitv4pdtuimbxd5wwum4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x82fc75d53e3c02913424fd74e9034c95025f31b3',
          contractAddress: '0x82fc75d53e3c02913424fd74e9034c95025f31b3',
          author: {
            twitter: 'miracleray_eth',
            address: '',
            ens: 'miracleray.eth'
          }
        },
        {
          name: 'POTATOCHECKZ',
          type: 'NFT',
          image:
            'https://b5oqg5fjsxarlmeswhufthhusbv5k6o35l5sbvrwdskdlk6ygfha.arweave.net/D10DdKmVwRWwkrHoWZz0kGvVedvq-yDWNhyUNavYMU4',
          link: 'https://app.manifold.xyz/c/checkZ',
          contractAddress: '0x17a451e8956dbd422Bd22f058dFa4Ff154a83dFA',
          author: {
            twitter: 'ddrtst_',
            address: '',
            ens: 'artisdead.eth'
          }
        },
        {
          name: 'PEPE CHECKS - DARK EDITION',
          type: 'NFT',
          image:
            'https://oxk76um2mm7e4ln73g6im7uhogtgtruijarttjiqq3wng427vocq.arweave.net/ddX_UZpjPk4tv9m8hn6HcaZpxohIIzmlEIbs03Nfq4U',
          link: 'https://app.manifold.xyz/c/pepe-checks-dark',
          contractAddress: '0x2E4404192c973cCd7881d71F11d6FD1efA26071C',
          author: {
            twitter: 'onarici_nft',
            address: '',
            ens: 'onarici.eth'
          }
        },
        {
          name: 'PEPE CHECKS - LIGHT EDITION',
          type: 'NFT',
          image:
            'https://4tj6k365rn2kbn2fazflxmofwjy5skyyj4nqnsov6kjlzo4o3zxa.arweave.net/5NPlb92LdKC3RQZKu7HFsnHZKxhPGwbJ1fKSvLuO3m4',
          link: 'https://app.manifold.xyz/c/pepe-checks-light',
          contractAddress: '0x2E4404192c973cCd7881d71F11d6FD1efA26071C',
          author: {
            twitter: 'onarici_nft',
            address: '',
            ens: 'onarici.eth'
          }
        },
        {
          name: 'THE BURDEN',
          type: 'NFT',
          image:
            'https://et2d3zlfwiouvyoxf7hvhjh54mq3nw2mw7iptiniio5so5bcieza.arweave.net/JPQ95WWyHUrh1y_PU6T94yG220y30PmhqEO7J3QiQTI',
          link: 'https://app.manifold.xyz/c/theburden',
          contractAddress: '0x45d0DCf93A1b78E5EbB47B2C7932879E2123Ddf1',
          author: {
            twitter: 'joshuanagao',
            address: '',
            ens: 'implantsanta.eth'
          }
        },
        {
          name: 'Black Squares',
          type: 'NFT',
          image:
            'https://bafkreifpbol7j6pzwov7e2yuxco65uo7bntazpvyahcj2bwl4rfve373ni.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x1e8e00af51ab2fda07a48156833c7577c3b98d43',
          contractAddress: '0x1e8e00af51ab2fda07a48156833c7577c3b98d43',
          author: {
            twitter: '',
            address: '',
            ens: 'energy-art.eth'
          }
        },
        {
          name: 'What a Notable World',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/168c1937fa8394c8daec536954e1274e.gif?auto=format&w=1000',
          link: 'https://opensea.io/collection/what-a-notable-world',
          contractAddress: '0x0669c91d3efaa2e5402dad1804ccc92c8336297c',
          author: {
            twitter: 'venture_punk',
            address: '',
            ens: ''
          }
        },
        // 11 batch
        {
          name: 'Banksy Checks Light',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/ca133117c9856d77fad143dc9b41d99b.gif?auto=format&w=1000',
          link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/7239764121797284302892501853764783873808252452941131366323466756448560611528',
          contractAddress: '0x495f947276749ce646f68ac8c248420045cb7b5e',
          author: {
            twitter: 'PunksFanatics',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Banksy Checks Dark',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/0946381b7c4b142b716f28b3bb957e4a.gif?auto=format&w=1000',
          link: 'https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/7239764121797284302892501853764783873808252452941131366323466757548072239304',
          contractAddress: '0x495f947276749ce646f68ac8c248420045cb7b5e',
          author: {
            twitter: 'PunksFanatics',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Checkified Hierarchy',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnQbhoGaUAIDFah?format=png&name=large',
          link: 'https://twitter.com/avsinghk/status/1617948435235364865',
          contractAddress: '',
          author: {
            twitter: 'avsinghk',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Decks',
          type: 'NFT',
          image:
            'https://34h4z5n5l4t5re7iceodqabqqdvl67v754ezdgn4gwdjuf2zseka.arweave.net/3w_M9b1fJ9iT6BEcOAAwgOq_fr_vCZGZvDWGmhdZkRQ',
          link: 'https://app.manifold.xyz/c/decks',
          contractAddress: '0x55d1422CD99E98ABFA1A4c13983Aa2765b6EC539',
          author: {
            twitter: 'mbstuart',
            address: '0xA7efbb4a06A680F3B65c5861Ec387408CeafbEc8',
            ens: ''
          }
        },
        {
          name: 'CIRCLES',
          type: 'NFT',
          image:
            'https://dni667cumxhkvgkm6lqdhxjeiqc4ulhrnr64isjjndhbu5lyvchq.arweave.net/G1HvfFRlzqqZTPLgM90kRAXKLPFsfcRJKWjOGnV4qI8',
          link: 'https://app.manifold.xyz/c/circles',
          contractAddress: '0xf82927abCC8f032822Ed4d1B1Cc98c47FC016F71',
          author: {
            twitter: 'joincirclexyz',
            address: '',
            ens: 'satviksethi.eth'
          }
        },
        {
          name: 'Chepe',
          type: 'NFT',
          image:
            'https://i.seadn.io/gcs/files/78faa23c4069823cada069872bca06f8.png?auto=format&w=1000',
          link: 'https://opensea.io/assets/ethereum/0x2811ee5cc98fb6323d7ef2c215cd38842c2ed7e8/4',
          contractAddress: '0x2811ee5cc98fb6323d7ef2c215cd38842c2ed7e8:4',
          author: {
            twitter: '_JKNFT_',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Check Ape Yacht Club',
          type: 'NFT-Video',
          image:
            'https://bafkreifb3e25stfhppyaoma2korbd3tp2bkyuqzvfznypsuly2cylc2bwm.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x9744145e2da29057da9947601ca49dc3ee3061da',
          contractAddress: '0x9744145e2da29057da9947601ca49dc3ee3061da',
          author: {
            twitter: 'ersguterdinge',
            address: '',
            ens: 'bonuslife.eth'
          }
        },
        {
          name: '',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnPNYo5WAAAV0V7?format=jpg&name=medium',
          link: 'https://twitter.com/tomontweet/status/1617862520282435584',
          contractAddress: '',
          author: {
            twitter: 'tomontweet',
            address: '',
            ens: ''
          }
        },
        {
          name: '',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnO2LTHXoAAcz2-?format=jpg&name=900x900',
          link: 'https://twitter.com/ianbydesign/status/1617837005471379456',
          contractAddress: '',
          author: {
            twitter: 'ianbydesign',
            address: '',
            ens: ''
          }
        },
        {
          name: '',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnO2LTIWIAELJxH?format=jpg&name=900x900',
          link: 'https://twitter.com/ianbydesign/status/1617837005471379456',
          contractAddress: '',
          author: {
            twitter: 'ianbydesign',
            address: '',
            ens: ''
          }
        },
        {
          name: '',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnOgL15XwAAkg6N?format=png&name=large',
          link: 'https://twitter.com/wstreetcoffee/status/1617812918606893056',
          contractAddress: '',
          author: {
            twitter: 'wstreetcoffee',
            address: '',
            ens: ''
          }
        },
        {
          name: 'D I V E R S I T Y',
          type: 'NFT',
          image:
            'https://bafkreicr7m63vbmood4ezq4un6ov5qa4b6bh5qy7sjvt5vo22x3xt232da.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x9699fe0906c75f64b93d05ee0ad8c6fb686ab0cf',
          contractAddress: '0x9699fe0906c75f64b93d05ee0ad8c6fb686ab0cf',
          author: {
            twitter: 'v4runs',
            address: '0x21f8a74e187c7d0dc2fa8a777c9fe59c9b92d737',
            ens: ''
          }
        },
        {
          name: 'Blue Wavy Circle of Life',
          type: 'NFT',
          image:
            'https://bafybeiayxjbsyvevxf5mdfku4dmsd5rjpqtteeeyacl5kf4kr3ii3bgimy.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0x2556ae62d79b6f4b3a1a21767cd30ccfbb2b0cb2',
          contractAddress: '0x2556ae62d79b6f4b3a1a21767cd30ccfbb2b0cb2',
          author: {
            twitter: 'dannyomo',
            address: '',
            ens: 'dannyomo.eth'
          }
        },
        {
          name: '',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnQqd6WXoAAjnHh?format=jpg&name=large',
          link: 'https://twitter.com/itsvrbs/status/1617964864722595840',
          contractAddress: '',
          author: {
            twitter: 'itsvrbs',
            address: '',
            ens: ''
          }
        },
        // 12 batch
        {
          name: 'CHECKHALLA',
          type: 'NFT',
          image:
            'https://bafybeier5qnrqzgi3fgm7c2gosss6aypgl5hrrd4mwbxrot5fftt27j7om.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xdad40e1321126198d256be2811a0c56bf00345f1',
          contractAddress: '0xdad40e1321126198d256be2811a0c56bf00345f1',
          author: {
            twitter: 'ivandetta',
            address: '',
            ens: 'ivandetta.eth'
          }
        },
        {
          name: 'Check Connection',
          type: 'NFT',
          image:
            'https://bafybeifmht5ngltxlfyjrqjszevv4xs6rrqyrfzmkf45m2sc6ycbghzgq4.ipfs.nftstorage.link/',
          link: 'https://create.zora.co/collections/0xb6a4d51b672fdf1756c94eabec5b936b55a0bb57',
          contractAddress: '0xb6a4d51b672fdf1756c94eabec5b936b55a0bb57',
          author: {
            twitter: 'Jehoseph',
            address: '',
            ens: 'jehoseph.eth'
          }
        },
        {
          name: '',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnFrWrfWIAE71T0?format=jpg&name=large',
          link: 'https://twitter.com/BrainEmojis/status/1617193101877022728',
          contractAddress: '',
          author: {
            twitter: 'BrainEmojis',
            address: '',
            ens: ''
          }
        },
        {
          name: 'CHEQUIGGLE',
          type: 'NFT',
          image:
            'https://dl.openseauserdata.com/cache/originImage/files/ec93723913fd2d738594b1b4c5619dc3.png',
          link: 'https://app.manifold.xyz/c/chequiggle',
          contractAddress: '0x0Fe66E38e81DdE40134454D7af433fE6dDB537d9',
          author: {
            twitter: 'yonvisuals',
            address: '',
            ens: 'yonvisuals.eth'
          }
        },
        {
          name: '',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnAAom8XgAIBC7V?format=jpg&name=large',
          link: 'https://twitter.com/theartofwarren/status/1616792969385746433',
          contractAddress: '',
          author: {
            twitter: '',
            address: '',
            ens: ''
          }
        },
        {
          name: 'decentralized verification',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnGxJWQXkAAYNMA?format=jpg&name=large',
          link: 'https://twitter.com/0xTjo/status/1617268943294455808',
          contractAddress: '',
          author: {
            twitter: '0xTjo',
            address: '',
            ens: ''
          }
        },
        {
          name: 'Ganrs',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/Fm-YrFSacAIG9rl?format=png&name=large',
          link: 'https://twitter.com/bossj_eth/status/1616678989736841217',
          contractAddress: '',
          author: {
            twitter: 'bossj_eth',
            address: '',
            ens: ''
          }
        },
        {
          name: '⚔️☑️',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnSGR55XgAASuww?format=png&name=medium',
          link: 'https://twitter.com/dr_edje/status/1618066049773236225',
          contractAddress: '',
          author: {
            twitter: 'dr_edje',
            address: '',
            ens: ''
          }
        },
        {
          name: '',
          type: 'Image',
          image:
            'https://pbs.twimg.com/media/FnR_v1qWAAENQ11?format=jpg&name=large',
          link: 'https://twitter.com/matthewjgroff/status/1618058629466443778',
          contractAddress: '',
          author: {
            twitter: 'matthewjgroff',
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
