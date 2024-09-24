import { create } from 'zustand'

const useGameStore = create((set, get) => ({
  money: 1000000
}))
export default useGameStore
