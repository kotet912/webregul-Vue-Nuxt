<template>
  <v-container>
    <v-row v-for="(agent, index) in agents" :key="index">
      <AppCartAgent :agent="agent" />
    </v-row>
  </v-container>
</template>

<script setup>
import { useAsyncData } from '#app'

definePageMeta({
  middleware: 'auth',
})

const { data: agents, error } = await useAsyncData('agents', () => $fetch('/api/agents'))

if (error.value) {
  console.error('Ошибка при получении данных продуктов:', error.value)
}
</script>
