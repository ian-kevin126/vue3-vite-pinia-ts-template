// store/modules/user.ts
import { defineStore } from 'pinia'
import { UserState } from '@/types/store/user' // TypeScript类型声明，文件路径 src/types/store/user.d.ts

const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: '',
    nickname: ''
  }),
  actions: {
    getUserinfo() {
      return new Promise((resolve, reject) => {
        console.log(22222)

        // resolve(data)
      })
    }
  }
})

export default useUserStore
