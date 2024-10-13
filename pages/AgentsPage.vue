<template>
  <v-container app grid-list-xs class="pa-0" fluid>
    <AppCartCompany />
    <v-divider class="hidden-sm-and-down"></v-divider>
    <v-row class="pa-0 py-6 py-md-8 pb-12 ma-0" justify="center" align="center">
      <v-col class="ga-2 ga-md-3 d-flex flex-column pa-0">
        <v-row class="ma-0" v-for="(agent, index) in agents" :key="index">
          <AppCartAgent :agent="agent" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useAsyncData } from '#app'
import AppCartCompany from '@/components/AppCartCompany.vue'

definePageMeta({
  middleware: 'auth',
})

const { data: agents, error } = await useAsyncData('agents', () => $fetch('/api/agents'))

if (error.value) {
  console.error('Ошибка при получении данных продуктов:', error.value)
}
</script>
