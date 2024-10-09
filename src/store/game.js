import { create } from 'zustand'

export const COUNTRY_MAP = {
  1: { name: '美國', cost: 50000, image: '/images/card/USA_flag.jpg' },
  2: { name: '英國', cost: 30000, image: '/images/card/UK_flag.jpg' },
  3: { name: '日本', cost: 30000, image: '/images/card/JP_flag.jpg' },
  4: { name: '中國', cost: 30000, image: '/images/card/CN_flag.jpg' },
  5: { name: '台灣', cost: 10000, image: '/images/card/TW_flag.jpg' }
}
export const HLA_MAP = {
  r1: { id: 'r1', name: 'HLA - r1', image: '/images/card/hla_r1.png' },
  b2: { id: 'b2', name: 'HLA - b2', image: '/images/card/hla_b2.png' },
  g3: { id: 'g3', name: 'HLA - g3', image: '/images/card/hla_g3.png' },
  y4: { id: 'y4', name: 'HLA - y4', image: '/images/card/hla_y4.png' },
  d5: { id: 'd5', name: 'HLA - d5', image: '/images/card/hla_d5.png' },
  p6: { id: 'p6', name: 'HLA - p6', image: '/images/card/hla_p6.png' },
  o7: { id: 'o7', name: 'HLA - o7', image: '/images/card/hla_o7.png' },
  w8: { id: 'w8', name: 'HLA - w8', image: '/images/card/hla_w8.png' },
  g9: { id: 'g9', name: 'HLA - g9', image: '/images/card/hla_g9.png' },
  p10: { id: 'p10', name: 'HLA - p10', image: '/images/card/hla_p10.png' }
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
  showCountryResult: false,
  setShowCountryResult: (isShow) => set(() => ({ showCountryResult: isShow })),
  showPairingResult: false,
  setShowPairingResult: (isShow) => set(() => ({ showPairingResult: isShow })),
  selectedHLAs: [],
  selectHLA: (hlaData) => {
    if (get().selectedHLAs.length === 2) return
    const nowSelectedHLAs = get().selectedHLAs.concat(hlaData)
    set(() => ({ selectedHLAs: nowSelectedHLAs }))
    if (nowSelectedHLAs.length === 2) get().setShowPairingResult(true)
  }
}))
export default useGameStore
