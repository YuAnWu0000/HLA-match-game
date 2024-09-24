import { create } from 'zustand'

const useGlobalStore = create((set, get) => ({
  isLoading: false,
  isDialogOpen: false
}))
export default useGlobalStore
