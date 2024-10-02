import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // Состояние
  const count = ref(0)

  // Геттеры
  const doubleCount = computed(() => count.value * 2)

  // Действия
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
