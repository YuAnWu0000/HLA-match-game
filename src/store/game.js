import { create } from 'zustand'

export const COUNTRY_MAP = {
  1: {
    name: '美國',
    cost: 50000,
    image: 'images/card/USA_flag.jpg',
    checkUpCost: 80000,
    donationCost: 1020000
  },
  2: {
    name: '英國',
    cost: 30000,
    image: 'images/card/UK_flag.jpg',
    checkUpCost: 100000,
    donationCost: 760000
  },
  3: {
    name: '日本',
    cost: 30000,
    image: 'images/card/JP_flag.jpg',
    checkUpCost: 30000,
    donationCost: 530000
  },
  4: {
    name: '中國',
    cost: 30000,
    image: 'images/card/CN_flag.jpg',
    checkUpCost: 50000,
    donationCost: 260000
  },
  5: {
    name: '台灣',
    cost: 10000,
    image: 'images/card/TW_flag.jpg',
    checkUpCost: 20000,
    donationCost: 90000
  }
}
export const HLA_MAP = {
  r1: { id: 'r1', name: 'HLA - r1', image: 'images/card/hla_r1.png' },
  b2: { id: 'b2', name: 'HLA - b2', image: 'images/card/hla_b2.png' },
  g3: { id: 'g3', name: 'HLA - g3', image: 'images/card/hla_g3.png' },
  death4: { id: 'death4', name: 'Death', image: 'images/card/4.png' },
  d5: { id: 'd5', name: 'HLA - d5', image: 'images/card/hla_d5.png' },
  p6: { id: 'p6', name: 'HLA - p6', image: 'images/card/hla_p6.png' },
  o7: { id: 'o7', name: 'HLA - o7', image: 'images/card/hla_o7.png' },
  w8: { id: 'w8', name: 'HLA - w8', image: 'images/card/hla_w8.png' },
  g9: { id: 'g9', name: 'HLA - g9', image: 'images/card/hla_g9.png' },
  p10: { id: 'p10', name: 'HLA - p10', image: 'images/card/hla_p10.png' }
}

const useGameStore = create((set, get) => ({
  money: 1000000,
  flow: 'SELF_HLA', // SELF_HLA, COUNTRY_SELECTION, HLA_MATCHING, DONATION_COST, WIN, FAILED
  setGameFlow: (flow) => set(() => ({ flow })),
  buddhistLifesRemain: 5,
  myHLAs: [
    { id: 'r1', name: 'HLA - r1', image: 'images/card/hla_r1.png' },
    { id: 'b2', name: 'HLA - b2', image: 'images/card/hla_b2.png' }
  ],
  roundCount: 0,
  selectedCountryId: null,
  setSelectedCountryId: (id) => set(() => ({ selectedCountryId: id })),
  settleCountryFee: () => {
    // 在台灣慈濟補助5次
    if (get().selectedCountryId === 5 && get().buddhistLifesRemain > 0) {
      set(() => ({
        buddhistLifesRemain: get().buddhistLifesRemain - 1,
        roundCount: get().roundCount + 1
      }))
      return get().setGameFlow('HLA_MATCHING')
    }
    // 其餘情況直接扣錢
    const cost = COUNTRY_MAP[get().selectedCountryId].cost
    if (get().money - cost < 0) return get().setGameFlow('FAILED')
    set(() => ({
      money: get().money - cost,
      roundCount: get().roundCount + 1
    }))
    return get().setGameFlow('HLA_MATCHING')
  },
  showCountryResult: false,
  setShowCountryResult: (isShow) => set(() => ({ showCountryResult: isShow })),
  showPairingResult: false,
  setShowPairingResult: (isShow) => set(() => ({ showPairingResult: isShow })),
  selectedHLAs: [],
  selectHLA: (hlaData) => {
    if (get().selectedHLAs.length === 2) return
    // 時候已到
    if (hlaData.id === 'death4') {
      setTimeout(() => {
        // 等翻完牌後才出現時候已到
        get().setShowTimesUp(true)
        get().clearPairingResult()
      }, 500)
    } else {
      const nowSelectedHLAs = get().selectedHLAs.concat(hlaData)
      set(() => ({ selectedHLAs: nowSelectedHLAs }))
      if (nowSelectedHLAs.length === 2)
        setTimeout(() => {
          // 等翻完牌後才出現配對結果
          get().setShowPairingResult(true)
        }, 500)
    }
  },
  clearPairingResult: () =>
    set(() => ({ selectedCountryId: null, selectedHLAs: [] })),
  checkPairingResult: () => {
    const isPairingArr = get().myHLAs.map(
      (my) => !!get().selectedHLAs.find((s) => s.id === my.id)
    )
    const isPairing = isPairingArr.reduce((acc, curr) => acc && curr, true)
    return isPairing
  },
  showTimesUp: false,
  setShowTimesUp: (isShow) => set(() => ({ showTimesUp: isShow })),
  failedReason: '錢幣不足',
  setFailedReason: (reason) => set(() => ({ failedReason: reason })),
  settleDonationCost: () => {
    const checkCost = COUNTRY_MAP[get().selectedCountryId].checkUpCost
    const donationCost = COUNTRY_MAP[get().selectedCountryId].donationCost
    if (get().money >= checkCost + donationCost) get().setGameFlow('WIN')
    else get().setGameFlow('FAILED')
  },
  restart: () => {
    return set(() => ({
      money: 1000000,
      flow: 'SELF_HLA',
      buddhistLifesRemain: 5,
      myHLAs: [
        { id: 'r1', name: 'HLA - r1', image: 'images/card/hla_r1.png' },
        { id: 'b2', name: 'HLA - b2', image: 'images/card/hla_b2.png' }
      ],
      roundCount: 0,
      selectedCountryId: null,
      selectedHLAs: []
    }))
  }
}))
export default useGameStore
