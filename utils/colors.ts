export const ChecksColors = [
  '#000000',
  '#60b1f4',
  '#545EA5',
  '#BB4D62',
  '#92783b',
  '#4068c1',
  '#ed7c30',
  '#0057ff',
  '#302f8d',
  '#e73d53',
  '#f7ec70',
  '#9bd9fb',
  '#b5dc61',
  '#4ba391',
  '#7a5ab4',
  '#f3322c',
  '#93cf98',
  '#312f91',
  '#db4d58',
  '#f9da4e',
  '#5c83cb',
  '#ea3a2d',
  '#977a30',
  '#5b9f3e'
]

export const getRandomCheckColor = () => {
  return ChecksColors[Math.floor(Math.random() * ChecksColors.length)]
}

export function addAlpha(color: string, opacity: number) {
  // coerce values so ti is between 0 and 1.
  var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
  return color + _opacity.toString(16).toUpperCase()
}
