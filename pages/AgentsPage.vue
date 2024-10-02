<template>
  <div>
    <h1>agents</h1>
  </div>
</template>

<script setup>
// В вашем компоненте или сторе
import { useApiFetch } from '@/utils/api'

definePageMeta({
  middleware: 'auth',
})

async function fetchProtectedData() {
  try {
    const response = await useApiFetch('/api/protected/data')
    console.log(response.data)
  } catch (error) {
    console.error(error)
    // Можно добавить перенаправление на логин или отображение сообщения об ошибке
  }
}
</script>
