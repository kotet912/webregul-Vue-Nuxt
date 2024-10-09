<template>
  <v-container>
    <AppCartCompany />
    <v-divider></v-divider>
    <v-col class="pt-8 ga-3 d-flex flex-column">
      <v-row v-for="(agent, index) in agents" :key="index">
        <AppCartAgent :agent="agent" />
      </v-row>
    </v-col>
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
