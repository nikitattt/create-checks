import clsx from 'clsx'
import { saEvent } from '../../scripts/events'
import { useBoardStore } from '../../store/board'
import { useMenuStore } from '../../store/menu'
import { ChecksColors, ColorMode } from '../../utils/colors'
import { boardToImage } from '../../utils/image'

const colors = [
  'E84AA9',
  'F2399D',
  'DB2F96',
  'E73E85',
  'FF7F8E',
  'FA5B67',
  'E8424E',
  'D5332F',
  'C23532',
  'F2281C',
  'D41515',
  '9D262F',
  'DE3237',
  'DA3321',
  'EA3A2D',
  'EB4429',
  'EC7368',
  'FF8079',
  'FF9193',
  'EA5B33',
  'EB5A2A',
  'ED7C30',
  'EF9933',
  'EF8C37',
  'F18930',
  'F09837',
  'F9A45C',
  'F2A43A',
  'F2A840',
  'F2A93C',
  'FFB340',
  'F2B341',
  'FAD064',
  'F7CA57',
  'F6CB45',
  'FFAB00',
  'F4C44A',
  'FCDE5B',
  'F9DA4D',
  'F9DA4A',
  'FAE272',
  'F9DB49',
  'FAE663',
  'FBEA5B',
  'E2F24A',
  'B5F13B',
  '94E337',
  '63C23C',
  '86E48E',
  '77E39F',
  '83F1AE',
  '5FCD8C',
  '9DEFBF',
  '2E9D9A',
  '3EB8A1',
  '5FC9BF',
  '77D3DE',
  '6AD1DE',
  '5ABAD3',
  '4291A8',
  '45B2D3',
  '81D1EC',
  '33758D',
  'A7DDF9',
  '9AD9FB',
  '2480BD',
  '60B1F4',
  'A4C8EE',
  '4576D0',
  '2E4985',
  '3263D0',
  '25438C',
  '525EAA',
  '3D43B3',
  '322F92',
  '4A2387',
  '371471',
  '3B088C',
  '9741DA',
  '6C31D7'
]

// 100% 90% 80% 70% 60% 50% 40% 30%
const opacity = ['FF', 'E6', 'CC', 'B3', '99', '80', '66', '4D']

const getGreen = () => {
  // const colors = ['#5b9f3e', '#01ef03', '#1CC500']
  // const colors = ['#01ef03', '#f7ec70']
  return `#${colors[Math.floor(Math.random() * colors.length)]}`
}

const getRed = () => {
  // const colors = ['#e73d53', '#ea3a2d', '#f3322c', '#FF1F3D']
  // const colors = ['#FF1F3D', '#60b1f4']
  return `#${colors[Math.floor(Math.random() * colors.length)]}`
}

const getColor = () => {
  return `#${colors[Math.floor(Math.random() * colors.length)]}`
}

const RandomButton = () => {
  const board = useBoardStore((state) => state.board)
  const rows = useBoardStore((state) => state.rows)
  const columns = useBoardStore((state) => state.columns)
  const darkMode = useMenuStore((state) => state.darkMode)
  // const addCheck = useBoardStore((state) => state.addCheck)
  const setBoard = useBoardStore((state) => state.setBoard)
  const resetBoard = useBoardStore((state) => state.resetBoard)

  const setArray = () => {
    const board = [
      '#2E4985',
      '#5FC9BF',
      '#77E39F',
      '#DA3321',
      '#C23532',
      '#6AD1DE',
      '#F2A93C',
      '#F2A93C',
      '#FA5B67',
      '#EA3A2D',
      '#9DEFBF',
      '#EB5A2A',
      '#F9DA4D',
      '#3EB8A1',
      '#371471',
      '#6C31D7',
      '#2E9D9A',
      '#B5F13B',
      '#FFAB00',
      '#FA5B67',
      '#FBEA5B',
      '#FBEA5B',
      '#F2A43A',
      '#F2A93C',
      '#A4C8EE',
      '#B5F13B',
      '#3EB8A1',
      '#6AD1DE',
      '#33758D',
      '#F18930',
      '#FAD064',
      '#3EB8A1',
      '#DA3321',
      '#F09837',
      '#FAE272',
      '#D5332F',
      '#5FCD8C',
      '#F9DA4A',
      '#C23532',
      '#9DEFBF',
      '#FAD064',
      '#9741DA',
      '#F9DB49',
      '#FCDE5B',
      '#FFB340',
      '#2E9D9A',
      '#EF8C37',
      '#63C23C',
      '#3EB8A1',
      '#EC7368',
      '#9D262F',
      '#FAE272',
      '#45B2D3',
      '#D5332F',
      '#F7CA57',
      '#FFB340',
      '#3EB8A1',
      '#FFB340',
      '#9741DA',
      '#EC7368',
      '#6C31D7',
      '#525EAA',
      '#3D43B3',
      '#3263D0',
      '#D41515',
      '#FAE663',
      '#F9DB49',
      '#6AD1DE',
      '#FF7F8E',
      '#DE3237',
      '#E73E85',
      '#81D1EC',
      '#9DEFBF',
      '#FA5B67',
      '#322F92',
      '#9741DA',
      '#F2399D',
      '#371471',
      '#DE3237',
      '#F2A840',
      '#FF9193',
      '#F9DA4A',
      '#FF9193',
      '#2480BD',
      '#B5F13B',
      '#F9A45C',
      '#A7DDF9',
      '#9D262F',
      '#83F1AE',
      '#ED7C30',
      '#4A2387',
      '#EB5A2A',
      '#FBEA5B',
      '#4A2387',
      '#FFAB00',
      '#3263D0',
      '#FFAB00',
      '#F2A93C',
      '#94E337',
      '#D41515',
      '#25438C',
      '#EB5A2A',
      '#6C31D7',
      '#FF8079',
      '#77E39F',
      '#F9DB49',
      '#F2A840',
      '#FA5B67',
      '#EC7368',
      '#E73E85',
      '#371471',
      '#525EAA',
      '#25438C',
      '#EC7368',
      '#45B2D3',
      '#FF9193',
      '#E84AA9',
      '#25438C',
      '#77E39F',
      '#D5332F',
      '#F2399D',
      '#77E39F',
      '#EA5B33',
      '#D41515',
      '#33758D',
      '#F9A45C',
      '#81D1EC',
      '#63C23C',
      '#3B088C',
      '#FAE663',
      '#DE3237',
      '#DA3321',
      '#2E4985',
      '#60B1F4',
      '#EF9933',
      '#5ABAD3',
      '#81D1EC',
      '#6C31D7',
      '#FAD064',
      '#33758D',
      '#F18930',
      '#E8424E',
      '#45B2D3',
      '#3263D0',
      '#3D43B3',
      '#322F92',
      '#F2A93C',
      '#F2A840',
      '#33758D',
      '#A7DDF9',
      '#F2399D',
      '#F9DA4A',
      '#F2A840',
      '#DA3321',
      '#EB4429',
      '#4576D0',
      '#A4C8EE',
      '#A4C8EE',
      '#25438C',
      '#ED7C30',
      '#F09837',
      '#F9DA4A',
      '#77D3DE',
      '#FFB340',
      '#FF7F8E',
      '#5FC9BF',
      '#FF7F8E',
      '#E2F24A',
      '#E8424E',
      '#3263D0',
      '#5FC9BF',
      '#3263D0',
      '#EF8C37',
      '#FA5B67',
      '#94E337',
      '#60B1F4',
      '#5FC9BF',
      '#FFB340',
      '#86E48E',
      '#3263D0',
      '#3D43B3',
      '#63C23C',
      '#F4C44A',
      '#B5F13B',
      '#A7DDF9',
      '#D5332F',
      '#D5332F',
      '#FAD064',
      '#FFB340',
      '#ED7C30',
      '#9DEFBF',
      '#3D43B3',
      '#371471',
      '#371471',
      '#63C23C',
      '#D5332F',
      '#3263D0',
      '#EA3A2D',
      '#3263D0',
      '#FA5B67',
      '#371471',
      '#EA5B33',
      '#F2B341',
      '#83F1AE',
      '#5ABAD3',
      '#371471',
      '#F18930',
      '#33758D',
      '#63C23C',
      '#F09837',
      '#3D43B3',
      '#EF8C37',
      '#4291A8',
      '#4291A8',
      '#EB4429',
      '#F7CA57',
      '#FAE272',
      '#C23532',
      '#E8424E',
      '#3263D0',
      '#3B088C',
      '#322F92',
      '#81D1EC',
      '#DB2F96',
      '#3263D0',
      '#77E39F',
      '#25438C',
      '#9741DA',
      '#F09837',
      '#60B1F4',
      '#EC7368',
      '#2E4985',
      '#3EB8A1',
      '#FF9193',
      '#EF9933',
      '#FF8079',
      '#F2281C',
      '#9741DA',
      '#EA3A2D',
      '#F09837',
      '#63C23C',
      '#E84AA9',
      '#EA5B33',
      '#5ABAD3',
      '#D5332F',
      '#FF8079',
      '#3D43B3',
      '#A7DDF9',
      '#60B1F4',
      '#4A2387',
      '#2E9D9A',
      '#9D262F',
      '#F2281C',
      '#2E9D9A',
      '#86E48E',
      '#EA5B33'
    ]

    setBoard(board)
  }

  const chart = () => {
    console.log('\n- - running algo - -\n')
    // resetBoard()
    let chartBoard = new Array(columns * rows).fill('')
    console.log(chartBoard.length)
    const upperBound = 0
    const lowerBound = rows - 1
    const red = getRed()
    const green = getGreen()
    // Returns a random integer from 0 to 9:

    let moves: any[] = []

    // let y = Math.floor(Math.random() * rows)
    let y = Math.round(rows / 2)
    let p = columns * y

    for (let i = 0; i < columns; i++) {
      let up = Math.random() < 0.5
      if (y === lowerBound) up = true
      else if (y === upperBound) up = false
      // console.log(up)

      // const red = getRed()
      // const green = getGreen()

      let move
      if (Math.random() > 0.8) {
        // Can do big move
        move = Math.floor(Math.random() * (up ? y : lowerBound - y))
      } else {
        // Do smaller moves
        move = Math.floor(Math.random() * (up ? y / 2 : (lowerBound - y) / 2))
      }
      if (move === 0) move = 1

      moves.push({ move: move, up: up })

      /*
       * chart var 1
       */
      // p = columns * y + i
      // chartBoard[p] = up ? green : red
      /*
       * chart var 2
       */
      if (up) {
        p = columns * y + i - columns
      } else {
        p = columns * y + i + columns
      }

      // console.log(`- top - i: ${i}, y: ${y}, p: ${p}, move: ${move}, up: ${up}`)
      // console.log(`y: ${y}, p: ${p}, move: ${move}, up: ${up}`)

      // console.log('- start move')
      for (let j = 0; j < move; j++) {
        if (up) {
          y -= 1
        } else {
          y += 1
        }

        p = columns * y + i
        chartBoard[p] = up ? green : red
        // console.log(
        //   `i: ${i}, j: ${j}, y: ${y}, p: ${p}, move: ${move}, up: ${up}`
        // )
      }
      // console.log('- end move')
      // console.log('')
      // console.log(chartBoard.length)
    }
    console.log(moves)

    setBoard(chartBoard)
    // console.log(chartBoard.length)
    // console.log(chartBoard)

    // saEvent('save_image', { mode: darkMode ? 'dark' : 'light' })
  }

  const filledOneColorChart = () => {
    let chartBoard = new Array(columns * rows).fill('')

    const upperBound = 0
    const lowerBound = rows - 1
    let color = getColor()
    let colorTwo = getColor()
    // let color = '#00bed7'
    // let colorTwo = '#ff91ae'

    // let y = Math.floor(Math.random() * rows)
    let y = Math.round(rows / 2)
    let p = columns * y

    for (let i = 0; i < columns; i++) {
      let up = Math.random() < 0.5
      if (y === lowerBound || y === lowerBound - 1) up = true
      else if (y === upperBound) up = false

      let move = 1

      if (up) {
        y = y - move
      } else {
        y = y + move
      }

      // color = getColor()
      chartBoard[p] = color

      for (let j = y; j <= lowerBound; j++) {
        // color = getColor()
        p = j * columns + i
        chartBoard[p] = j === y ? colorTwo : color
        // chartBoard[p] = j === y || j === y + 1 ? colorTwo : color
        // chartBoard[p] = j === y || j === y + 1 ? colorTwo : getColor()
      }
    }

    setBoard(chartBoard)
  }

  const randomFill = () => {
    let chartBoard = new Array(columns * rows).fill('')
    for (let i = 0; i < chartBoard.length; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      chartBoard[i] = `#${color}`
    }
    setBoard(chartBoard)
  }

  const horizontalOrnamentFill = () => {
    let chartBoard = new Array(columns * rows).fill('')
    const randomColors = Math.random() < 0.5
    const tO = Math.random() < 0.5

    const vts = [2, 4, 5, 6]

    const vt = vts[Math.floor(Math.random() * vts.length)]

    for (let i = 0; i < rows; i++) {
      var color = colors[Math.floor(Math.random() * colors.length)]
      for (let j = 0; j < columns; j++) {
        const p = columns * i + j
        if (tO) {
          if (p % 3) {
            chartBoard[p] = `#${color}`
          }
        } else {
          if ((p + i) % vt === 0) {
            if (randomColors)
              color = colors[Math.floor(Math.random() * colors.length)]

            chartBoard[p] = `#${color}`
          }
        }
      }
    }
    setBoard(chartBoard)
  }

  const horizontalEvenFill = () => {
    let chartBoard = new Array(columns * rows).fill('')
    let colorIndex = Math.floor(Math.random() * (colors.length - rows))
    for (let i = 0; i < rows; i++) {
      const color = colors[colorIndex + i]
      for (let j = 0; j < columns; j++) {
        const p = columns * i + j
        chartBoard[p] = `#${color}`
      }
    }
    setBoard(chartBoard)
  }

  const horizontalGradientEvenFill = () => {
    let chartBoard = new Array(columns * rows).fill('')
    const up = Math.random() < 0.5
    const op = up ? [...opacity].reverse() : [...opacity]

    let color = colors[Math.floor(Math.random() * colors.length)]

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const p = columns * i + j
        chartBoard[p] = `#${color}${op[i]}`
      }
    }

    setBoard(chartBoard)
  }

  const horizontalGradientFill = () => {
    let chartBoard = new Array(columns * rows).fill('')
    const changeColor = Math.random() < 0.25
    const up = Math.random() < 0.5
    const op = up ? [...opacity].reverse() : [...opacity]

    let color = colors[Math.floor(Math.random() * colors.length)]

    for (let i = 0; i < columns; i++) {
      if (changeColor) color = colors[Math.floor(Math.random() * colors.length)]
      for (let j = 0; j < rows; j++) {
        const p = columns * j + i
        chartBoard[p] = `#${color}${op[i % rows]}`
      }
    }

    setBoard(chartBoard)
  }

  // const verticalEvenFill = () => {
  //   let chartBoard = new Array(columns * rows).fill('')
  //   for (let i = 0; i < columns; i++) {
  //     const color = colors[Math.floor(Math.random() * colors.length)]
  //     for (let j = 0; j < rows; j++) {
  //       const p = j * columns + i
  //       chartBoard[p] = `#${color}`
  //     }
  //   }
  //   setBoard(chartBoard)
  // }

  const verticalOrnamentFill = () => {
    let chartBoard = new Array(columns * rows).fill('')
    const vts = [
      3
      // 5, 6
    ]
    const vt = vts[Math.floor(Math.random() * vts.length)]
    for (let i = 0; i < columns; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)]
      for (let j = 0; j < rows; j++) {
        const p = j * columns + i
        if (p % vt) {
          chartBoard[p] = `#${color}`
        }
      }
    }
    setBoard(chartBoard)
  }

  const saveBoard = () => {
    const algos = [
      // chart,
      // filledOneColorChart,

      // randomFill,
      // horizontalOrnamentFill,
      // horizontalGradientEvenFill,
      // horizontalEvenFill,
      // verticalOrnamentFill,
      // horizontalGradientFill

      setArray
    ]

    algos[Math.floor(Math.random() * algos.length)]()
    // chart()
    // filledOneColorChart()
    // randomFill()
    // horizontalOrnamentFill()
    // horizontalEvenFill()
    // horizontalGradientEvenFill()
    // verticalEvenFill() // not good
    // verticalOrnamentFill()
  }

  return (
    <button
      onClick={saveBoard}
      className={clsx(
        'rounded-full py-1 px-3 cursor-pointer text-sm transition-all duration-300',
        'bg-white text-grey w-max hover:bg-black hover:text-white',
        'dark:bg-black-canvas dark:text-grey dark:hover:bg-white dark:hover:text-black',
        'shadow-lg sm:shadow-none'
      )}
    >
      Random Chart
    </button>
  )
}

export default RandomButton
