// stores/user.js
import { defineStore } from 'pinia'
import { useCookie } from '#app'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: null,
    user: null,
  }),
  actions: {
    async login({ username, password }) {
      try {
        // Отправляем запрос на API логина
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: { username, password },
        })

        // Сохраняем токен и информацию о пользователе
        this.token = response.token
        this.user = { username }

        // Сохраняем токен в куки
        const tokenCookie = useCookie('token')
        tokenCookie.value = response.token

        return true
      } catch (error) {
        // Обрабатываем ошибку логина
        console.error(error)
        return false
      }
    },
    logout() {
      this.token = null
      this.user = null

      const tokenCookie = useCookie('token')
      tokenCookie.value = null
    },
    init() {
      const tokenCookie = useCookie('token')
      if (tokenCookie.value) {
        this.token = tokenCookie.value
        this.user = { username: 'admin' } // Можно расширить логику для получения данных пользователя
      }
    },
  },
})
