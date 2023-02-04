import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

const NumPassesMinted = ({ address }: { address: string }) => {
  const [mints, setMints] = useState(null)

  const url = 'https://api.zora.co/graphql'
  const query = `
    query ChecksTacToe {
        aggregateStat {
            nftCount(where: {collectionAddresses: "${address}"})
        }
    }
`

  const load = async () => {
    let result: AxiosResponse = await axios.post(url, { query: query })
    const data = result.data.data
    console.log(result)
    setMints(data.aggregateStat.nftCount)
  }

  useEffect(() => {
    load()
  })

  return (
    <div className="text-grey text-base">
      {mints ? <div>{mints} minted</div> : <div>Loading...</div>}
    </div>
  )
}

export default NumPassesMinted
