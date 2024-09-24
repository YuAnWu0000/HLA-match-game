import { create } from 'zustand'

const useGameStore = create((set, get) => ({
  money: 1000000,
  flow: 'COUNTRY_SELECTION',
  setGameFlow: (flow) => set(() => ({ flow }))
}))
export default useGameStore
