// src/api/system/user.ts
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

interface UserInfo {
  name: string
  id: number
}

export function getUserInfo(): AxiosPromise<UserInfo> {
  return request({
    url: '/getUserInfo',
    method: 'get'
  })
}
