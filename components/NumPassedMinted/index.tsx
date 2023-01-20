import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

const url = 'https://api.zora.co/graphql'
const query = `
    query ChecksTacToe {
        aggregateStat {
            nftCount(where: {collectionAddresses: "0x764d80f0462f5769d30821c0c9352b9af653a5c9"})
        }
    }
`

const NumPassesMinted = () => {
  const [mints, setMints] = useState(null)

  const load = async () => {
    let result: AxiosResponse = await axios.post(url, { query: query })
    const data = result.data.data
    setMints(data.aggregateStat.nftCount)
  }

  useEffect(() => {
    load()
  })

  return <>{mints ? <div>{mints} minted</div> : <div>Loading...</div>}</>
}

export default NumPassesMinted
