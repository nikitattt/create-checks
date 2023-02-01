import { ColorMode } from './colors'

const getColorByMode = (mode: ColorMode, dark: string, light: string) => {
  if (mode === ColorMode.dark) {
    return dark
  } else {
    return light
  }
}

export const boardToImage = (
  board: string[],
  mode: ColorMode,
  rows: number,
  columns: number
): string => {
  const checkPath =
    'M59 31.8666C59 27.5898 56.625 23.8592 53.181 22.1005C53.61 20.88 53.827 19.5934 53.822 18.2989C53.822 12.3114 49.191 7.46431 43.467 7.46431C42.209 7.46431 40.974 7.67841 39.857 8.1296C38.147 4.47106 34.585 2 30.5 2C26.415 2 22.852 4.47105 21.166 8.10658C20.016 7.65839 18.791 7.43328 17.556 7.44129C11.833 7.44129 7.20099 12.2884 7.20099 18.2989C7.20099 19.6295 7.41502 20.913 7.84302 22.1005C4.37502 23.8592 2 27.5658 2 31.8666C2 35.9053 4.11401 39.4458 7.27301 41.3226C7.22201 41.7808 7.19799 42.2409 7.20099 42.7011C7.20099 48.6887 11.833 53.5587 17.556 53.5587C18.815 53.5587 20.05 53.3456 21.166 52.8934C22.829 56.5049 26.391 59 30.476 59C34.561 59 38.124 56.529 39.786 52.8934C40.902 53.3216 42.114 53.5587 43.396 53.5587C49.12 53.5587 53.751 48.7117 53.751 42.7011C53.751 42.2259 53.728 41.7738 53.68 41.3226C56.863 39.3027 59 35.9293 59 31.8666ZM41.045 22.8138L29.289 40.4432C29.141 40.6673 28.949 40.8584 28.726 41.0074C28.503 41.1555 28.253 41.2585 27.99 41.3096C27.727 41.3606 27.456 41.3586 27.194 41.3036C26.932 41.2486 26.683 41.1425 26.463 40.9905L26.154 40.7523L19.599 34.1946C19.41 34.0065 19.26 33.7824 19.158 33.5353C19.056 33.2882 19.004 33.0241 19.004 32.7569C19.004 32.4898 19.056 32.2257 19.158 31.9796C19.26 31.7325 19.41 31.5085 19.599 31.3194C19.787 31.1313 20.011 30.9812 20.258 30.8792C20.505 30.7772 20.769 30.7241 21.036 30.7241C21.302 30.7241 21.567 30.7772 21.813 30.8792C22.06 30.9812 22.284 31.1313 22.472 31.3194L27.27 36.0954L37.649 20.5088C37.797 20.2857 37.988 20.0946 38.211 19.9456C38.434 19.7965 38.684 19.6945 38.947 19.6435C39.21 19.5924 39.481 19.5944 39.743 19.6494C40.006 19.7045 40.254 19.8105 40.475 19.9626C40.7 20.1086 40.893 20.2987 41.044 20.5208C41.194 20.7429 41.299 20.992 41.352 21.2551C41.405 21.5182 41.406 21.7894 41.353 22.0525C41.3 22.3156 41.195 22.5657 41.045 22.7878V22.7898V22.8138Z'

  const boxW = 100
  const boxH = 100
  const padding = 30
  const checkPadding = 20

  const artCanvasW = columns * boxW + padding * 2
  const artCanvasH = rows * boxH + padding * 2

  let ratioSpacerX = 0
  let ratioSpacerY = 0

  if (rows > columns) {
    ratioSpacerY = ((rows - columns) * boxH) / 2
  } else if (columns > rows) {
    ratioSpacerX = ((columns - rows) * boxW) / 2
  }

  const artCanvasX = 570 - ratioSpacerX
  const artCanvasY = 570 - ratioSpacerY

  const height = artCanvasH + artCanvasY * 2
  const width = artCanvasW + artCanvasX * 2

  console.log(height)
  console.log(width)

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')

  if (ctx) {
    ctx.fillStyle = getColorByMode(mode, '#000000', '#F2F2F2')
    ctx.fillRect(0, 0, width, height)

    ctx.fillStyle = getColorByMode(mode, '#111111', '#FFFFFF')
    ctx.fillRect(artCanvasX, artCanvasY, artCanvasW, artCanvasH)

    ctx.strokeStyle = getColorByMode(mode, '#282828', '#f5f5f5')
    ctx.lineWidth = 2

    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < columns; x++) {
        const xPoint = artCanvasX + padding + boxW * x
        const yPoint = artCanvasY + padding + boxH * y

        ctx.strokeRect(xPoint, yPoint, boxW, boxH)
      }
    }

    ctx.stroke()

    ctx.translate(
      artCanvasX + padding + checkPadding,
      artCanvasY + padding + checkPadding
    )

    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < columns; x++) {
        if (board[y * columns + x] !== '') {
          const color = board[y * columns + x]

          const path = new Path2D(checkPath)
          ctx.fillStyle = color
          ctx.fill(path)
        }
        ctx.translate(boxW, 0)
      }
      ctx.translate(-boxW * columns, boxH)
    }

    var pngUrl = canvas.toDataURL()

    return pngUrl
  } else {
    throw Error()
  }
}
