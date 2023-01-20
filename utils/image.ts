export const boardToImage = (board: string[]): string => {
  const height = 2000
  const width = 2000

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')

  if (ctx) {
    ctx.fillStyle = '#F2F2F2'
    ctx.fillRect(0, 0, width, height)

    const artCanvasX = 570
    const artCanvasY = 470
    const artCanvasW = 860
    const artCanvasH = 1060

    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(artCanvasX, artCanvasY, artCanvasW, artCanvasH)

    const boxW = 100
    const boxH = 100
    const padding = 30

    ctx.strokeStyle = '#FAFAFA'
    ctx.lineWidth = 3

    for (var y = 0; y < 10; y++) {
      for (var x = 0; x < 8; x++) {
        ctx.strokeRect(
          artCanvasX + padding + boxW * x,
          artCanvasY + padding + boxH * y,
          boxW,
          boxH
        )
      }
    }

    ctx.stroke()

    var pngUrl = canvas.toDataURL()

    return pngUrl
  } else {
    throw Error()
  }
}
