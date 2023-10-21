import { ref } from 'vue'
import { defineStore } from 'pinia'
import Userservice from '@/service/userservice'
import type { IUser } from '@/types/user.interface'
import $api from '@/http'

export const useUser = defineStore('user', () => {
  const user = ref({} as IUser)
  const isAuth = ref(false)

  const setAuth = (bool: boolean) => {
    isAuth.value = bool
  }

  const setUser = (user1: IUser) => {
    user.value = user1
  }

  const registration = async (u: IUser) => {
    try {
      const resp = await $api.post('/users/register', u)
      localStorage.setItem('token', resp.data.tokens.accessToken)
      setAuth(true)
      setUser(resp.data.user)
      return resp.status
    } catch (e: any) {
      console.log(e)
      return e.response.status
    }
  }

  const login = async (u1: IUser) => {
    try {
      const response = await $api.post('/users/login', u1)
      localStorage.setItem('token', response.data.tokens.accessToken)
      setAuth(true)
      setUser(response.data.user)
      return response.status
    } catch (e: any) {
      return e.response.status
    }
  }

  return{
    user, 
    isAuth, 
    setAuth, 
    setUser,
    registration, 
    login
  }
})
