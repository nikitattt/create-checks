import { FloorChange, FloorChangeDirection } from '../types/collections'

export function extractChange(
  floorSale: number,
  floorSaleChange: number
): FloorChange {
  const absDiff = floorSale * floorSaleChange - floorSale
  const avg = (floorSale + floorSaleChange) / 2
  const percentage = (absDiff / avg) * 100

  return {
    direction:
      floorSaleChange > 1 ? FloorChangeDirection.up : FloorChangeDirection.down,
    percentage: parseFloat(Math.abs(percentage).toFixed(2)),
    tokenAmount: parseFloat(Math.abs(absDiff).toFixed(2))
  }
}
