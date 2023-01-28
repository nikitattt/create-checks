export interface CollectionResponse {
  name: string
  image: string
  floor: number
  highestBid: number
  volume: {
    day?: number
    week?: number
    month?: number
  }
  sales: {
    day?: number
    week?: number
    month?: number
  }
  change: {
    day?: FloorChange
    week?: FloorChange
    month?: FloorChange
  }
  history?: {
    data: HistoryElement[]
  }
}

export interface FloorChange {
  direction: FloorChangeDirection
  percentage: number
  tokenAmount: number
}

export enum FloorChangeDirection {
  up = 'up',
  down = 'down'
}

export interface HistoryElement {
  timestamp: string
  unixTimestamp: number
  avgPrice: number
}
