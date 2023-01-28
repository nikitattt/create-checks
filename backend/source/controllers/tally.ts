import { Request, Response, NextFunction } from 'express'
import axios from 'axios'

require('dotenv').config()

const discordHook = process.env.DISCORD_HOOK

const receiveData = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body.data

  let artData: any = {}
  let title = ''

  // {
  //   name: '',
  //   link: '',
  //   image: '',
  //   type: 'NFT',
  //   contractAddress: '',
  //   createdOnCreateChecksArt: false,
  //   cost: '',
  //   platform: '',
  //   endTime: '',
  //   author: {
  //     twitter: '',
  //     address: '',
  //     ens: ''
  //   }
  // }

  if (data.formId === '3q5lD7') {
    title = 'Mint and Discover section'
    let author: any = {}
    for (const field of data.fields) {
      if (field.key === 'question_m6yrao') {
        artData.name = field.value
      }
      if (field.key === 'question_3x14Zo') {
        artData.platform = field.value
      }
      if (field.key === 'question_w7z466') {
        artData.link = field.value
      }
      if (field.key === 'question_wbyNb0') {
        artData.image = field.value
      }
      if (field.key === 'question_wAGW1o') {
        if (field.value === 'c9846f0b-2e7f-4910-b12b-f1e33cd12956') {
          artData.type = 'NFT'
        } else {
          artData.type = 'NFT-Video'
        }
      }
      if (field.key === 'question_nPe8ax') {
        artData.endTime = field.value
      }
      if (field.key === 'question_3EE842') {
        artData.cost = field.value
      }
      if (field.key === 'question_mBl8P4') {
        artData.contractAddress = field.value
      }
      if (field.key === 'question_wk1OVd') {
        author.ens = field.value
      }
      if (field.key === 'question_wv1qQX') {
        author.address = field.value
      }
      if (field.key === 'question_mKZ8qz') {
        author.twitter = field.value.replace('@', '')
      }
      if (field.key === 'question_wLN5Qz') {
        if (field.value === '0041f15e-7820-47f9-961b-ace3ba0568fa') {
          artData.createdOnCreateChecksArt = true
        } else {
          artData.createdOnCreateChecksArt = false
        }
      }
    }
    artData.author = author
  }

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

export default { receiveData }
