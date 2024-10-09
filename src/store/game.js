import { create } from 'zustand'
export const COUNTRY_MAP = {
  1: { name: '美國', cost: 50000, image: '/images/card/USA_flag.jpg' },
  2: { name: '英國', cost: 30000, image: '/images/card/UK_flag.jpg' },
  3: { name: '日本', cost: 30000, image: '/images/card/JP_flag.jpg' },
  4: { name: '中國', cost: 30000, image: '/images/card/CN_flag.jpg' },
  5: { name: '台灣', cost: 10000, image: '/images/card/TW_flag.jpg' }
}
export const HLA_MAP = {
  1: { name: '美國', cost: 50000, image: '/images/card/USA_flag.jpg' },
  2: { name: '英國', cost: 30000, image: '/images/card/UK_flag.jpg' },
  3: { name: '日本', cost: 30000, image: '/images/card/JP_flag.jpg' },
  4: { name: '中國', cost: 30000, image: '/images/card/CN_flag.jpg' },
  5: { name: '台灣', cost: 10000, image: '/images/card/TW_flag.jpg' }
}
const useGameStore = create((set, get) => ({
  money: 1000000,
  flow: 'SELF_HLA', // SELF_HLA, COUNTRY_SELECTION, HLA_MATCHING
  setGameFlow: (flow) => set(() => ({ flow })),
  buddhistLifesRemain: 3,
  selectedCountryId: null,
  setSelectedCountryId: (id) => set(() => ({ selectedCountryId: id })),
  settleCountryFee: () => {
    // 在台灣慈濟補助5次
    if (get().selectedCountryId === 5 && get().buddhistLifesRemain > 0)
      return set(() => ({
        buddhistLifesRemain: get().buddhistLifesRemain - 1
      }))
    const cost = COUNTRY_MAP[get().selectedCountryId].cost
    return set(() => ({
      money: get().money - cost
    }))
  },
  showPairingResult: false,
  setShowPairingResult: (isShow) => set(() => ({ showPairingResult: isShow })),
  selectedHLAs: [],
  selectHLA: () => {}
}))
export default useGameStore
