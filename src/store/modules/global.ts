// src/store/index.ts
import { GlobalState } from '@/types/store/global'
import { defineStore } from 'pinia'

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
const globalStore = defineStore({
  id: 'global', // id: 必须的，在所有 Store 中唯一
  // state: 返回对象的函数
  state: (): GlobalState => ({
    token: '我是token',
    userInfo: {}
  }),
  getters: {},
  actions: {
    // 不使用箭头函数
    setToken(token: string) {
      this.token = token
    },
    setUserIngo(userInfo: any) {
      this.userInfo = userInfo
    }
  },
  // 持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'global',
        storage: localStorage // storage: sessionStorage,
      }
    ]
  }
})

export default globalStore
