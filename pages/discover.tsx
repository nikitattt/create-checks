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

        <footer className="mb-20">
          <></>
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
