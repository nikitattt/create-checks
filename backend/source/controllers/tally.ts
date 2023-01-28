import { Request, Response, NextFunction } from 'express'
import axios from 'axios'

require('dotenv').config()

const discordHook = process.env.DISCORD_HOOK

const receiveData = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body.data

  let artData: any = {}
  let author: any = {}
  let title = ''

  if (data.formId === '3q5lD7') {
    title = 'Mint and Discover section'
  } else if (data.formId === 'nGeP9o') {
    title = 'Minted work on Discover section'
  } else if (data.formId === 'wo9jee') {
    title = 'Not minted work on Discover section'
  }

  if (['3q5lD7', 'nGeP9o', 'wo9jee'].includes(data.formId)) {
    for (const field of data.fields) {
      if (
        ['question_m6yrao', 'question_w4yPMB', 'question_mVAoOa'].includes(
          field.key
        )
      ) {
        artData.name = field.value
      }
      if (['question_3x14Zo'].includes(field.key)) {
        artData.platform = field.value
      }
      if (
        ['question_w7z466', 'question_mO986A', 'question_31yGaO'].includes(
          field.key
        )
      ) {
        artData.link = field.value === null ? '' : field.value
      }
      if (
        ['question_wbyNb0', 'question_wAGWEN', 'question_nPe8JQ'].includes(
          field.key
        )
      ) {
        if (data.formId === 'wo9jee') {
          artData.image = field.value[0].url
        } else {
          artData.image = field.value
        }
      }
      if (['question_wAGW1o', 'question_mKZ8XK'].includes(field.key)) {
        if (
          [
            'c9846f0b-2e7f-4910-b12b-f1e33cd12956',
            '28f121dc-258f-42d4-840b-6d36769bda3c'
          ].includes(field.value)
        ) {
          artData.type = 'NFT'
        } else {
          artData.type = 'NFT-Video'
        }
      }
      if (['question_nPe8ax'].includes(field.key)) {
        artData.endTime = field.value
      }
      if (['question_3EE842'].includes(field.key)) {
        artData.cost = field.value
      }
      if (['question_mBl8P4', 'question_mJx8y7'].includes(field.key)) {
        artData.contractAddress = field.value
      }
      if (['question_wk1OVd', 'question_wLN5Rz'].includes(field.key)) {
        author.ens = field.value === null ? '' : field.value
      }
      if (['question_wv1qQX', 'question_mJx85z'].includes(field.key)) {
        author.address = field.value
      }
      if (
        ['question_mKZ8qz', 'question_w2yOpA', 'question_3EE87o'].includes(
          field.key
        )
      ) {
        author.twitter = field.value.replace('@', '')
      }
      if (
        ['question_wLN5Qz', 'question_mRa8AP', 'question_mYvV66'].includes(
          field.key
        )
      ) {
        if (
          [
            '0041f15e-7820-47f9-961b-ace3ba0568fa',
            '074549c9-4acd-4c42-b0f2-18773f58513f',
            'f4e48f11-6714-4940-a21c-3e84d49e49e5'
          ].includes(field.value)
        ) {
          artData.createdOnCreateChecksArt = true
        } else {
          artData.createdOnCreateChecksArt = false
        }
      }
    }
  }

  artData.author = author

  if (discordHook) {
    axios
      .post(discordHook, {
        username: 'Tally',
        content: 'New art submission',
        embeds: [
          {
            title: title,
            description: 'Code to add: ```' + JSON.stringify(artData) + '```',
            thumbnail: {
              url: artData.image
            }
          }
        ]
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return res.status(200).end()
}

// const work = [
//   {
//     name: 'ETH',
//     link: 'https://create.zora.co/collections/0xa6e0c670dbe1de68a226c95f07b02b0e2ddfc0c3',
//     image:
//       'https://bafkreiftjrdunn4flyqopwnd3tqo5fj4h7p24brw2g4h6a2vfd5iic7r3e.ipfs.nftstorage.link/',
//     type: 'NFT',
//     contractAddress:
//       'https://etherscan.io/token/0xa6e0c670dbe1de68a226c95f07b02b0e2ddfc0c3',
//     createdOnCreateChecksArt: false,
//     author: {
//       ens: '',
//       address: '0x44CBC890Ba06FC409cFB4DEDCBC220b7A538B0FA',
//       twitter: 'zeromata_eth'
//     }
//   }
// ]

export default { receiveData }
