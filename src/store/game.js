import { create } from 'zustand'

const useGameStore = create((set, get) => ({
  money: 1000000,
  flow: 'HLA_MATCHING', // COUNTRY_SELECTION, HLA_MATCHING
  setGameFlow: (flow) => set(() => ({ flow }))
}))
export default useGameStore
