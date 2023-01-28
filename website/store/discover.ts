import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DiscoverState {
  detailsExpand: boolean
  switchDetailsExpand: () => void
}

const useDiscoverStore = create<DiscoverState>()(
  persist(
    (set, get) => ({
      detailsExpand: false,
      switchDetailsExpand: () => set({ detailsExpand: !get().detailsExpand })
    }),
    {
      name: 'discover-storage'
    }
  )
)

export { useDiscoverStore }
