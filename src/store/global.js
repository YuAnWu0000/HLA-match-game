import { create } from 'zustand'

const useGlobalStore = create((set, get) => ({
  isLoading: false,
  isDialogOpen: false,
  customDialog: {
    name: '',
    props: {}
  },
  setCustomDialog: (name, data) =>
    set((state) => ({ customDialog: { name, props: data ? data : {} } }))
}))
export default useGlobalStore
