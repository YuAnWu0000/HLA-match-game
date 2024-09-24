import { create } from 'zustand'

const useGlobalStore = create((set, get) => ({
  isLoading: false,
  isDialogOpen: false,
  customDialog: {
    name: '',
    props: {}
  },
  setCustomDialog: (name, data) =>
    set((state) => ({ customDialog: { name, props: data ? data : {} } })),
  dialogData: {
    title: '',
    body: '',
    buttons: [
      {
        name: '取消',
        variant: 'secondary',
        event: () => {}
      },
      {
        name: '確認',
        variant: 'primary',
        event: () => {}
      }
    ]
  },
  setDialogData: (data) => {
    get().setCustomDialog('', {})
    return set((state) => ({ dialogData: data }))
  }
}))
export default useGlobalStore
