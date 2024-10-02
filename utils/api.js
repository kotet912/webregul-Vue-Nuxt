// utils/api.js
import { useUserStore } from '@/stores/user'

export function useApiFetch(url, options = {}) {
  const userStore = useUserStore()
  const headers = options.headers || {}

  if (userStore.token) {
    headers.Authorization = `Bearer ${userStore.token}`
  }

  return $fetch(url, {
    ...options,
    headers,
  })
}
