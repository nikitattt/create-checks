import fs from 'fs'
import axios from 'axios'
import data from './data.json'
const path = require('path')

let working: any[] = []
let noWorking: any[] = []
let workingCount: number = 0
let noWorkingCount: number = 0

const checkImages = async () => {
  for (const item of data) {
    try {
      const response = await axios.get(item.image)
      if (response.status === 200) {
        working.push(item)
        workingCount++
        console.log(`Image is working (Total working: ${workingCount})`)
      } else {
        noWorking.push(item)
        noWorkingCount++
        console.log(
          `Image is not working (Total not working: ${noWorkingCount})`
        )
      }
    } catch (error) {
      noWorking.push(item)
      noWorkingCount++
      console.log(
        `Image is failed to load (Total not working: ${noWorkingCount})`
      )
    }
  }

  try {
    const workingFilePath = path.resolve('source/check/working.json')
    fs.writeFileSync(workingFilePath, JSON.stringify(working, null, 4))
    console.log(`Working images saved successfully at ${workingFilePath}`)
  } catch (error) {
    console.error('Error saving working images:', error)
  }

  try {
    const noWorkingFilePath = path.resolve('source/check/notWorking.json')
    fs.writeFileSync(noWorkingFilePath, JSON.stringify(noWorking, null, 4))
    console.log(`Non-working images saved successfully at ${noWorkingFilePath}`)
  } catch (error) {
    console.error('Error saving non-working images:', error)
  }
}

checkImages()
