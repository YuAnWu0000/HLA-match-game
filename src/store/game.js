import { create } from 'zustand'

const useGameStore = create((set, get) => ({
  money: 1000000,
  flow: 'COUNTRY_SELECTION', // COUNTRY_SELECTION, HLA_MATCHING
  setGameFlow: (flow) => set(() => ({ flow })),
  buddhistLifesRemain: 3,
  selectedCountryId: null,
  setSelectedCountryId: (id) => set(() => ({ selectedCountryId: id }))
}))
export default useGameStore
