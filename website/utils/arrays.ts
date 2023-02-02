import dayjs from 'dayjs'

export function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

export function sortByDateSubmitted(array: any[], sortType: string) {
  if (sortType === 'asc') {
    return array.sort(
      (i, j) => dayjs(j.dateSubmitted).unix() - dayjs(i.dateSubmitted).unix()
    )
  } else {
    return array.sort(
      (i, j) => dayjs(i.dateSubmitted).unix() - dayjs(j.dateSubmitted).unix()
    )
  }
}
