<template>
  <v-container app grid-list-xs class="pa-0" fluid>
    <AppCartCompany />
    <!-- TODO: отдельно поместить к компоненту чтобы не повторялся -->
    <v-divider class="hidden-sm-and-down"></v-divider>
    <v-row class="py-8" justify="center" align="center">
      <v-col class="ga-3 d-flex flex-column">
        <v-row v-for="(agent, index) in agents" :key="index">
          <AppCartAgent :agent="agent" />
        </v-row>
      </v-col>
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
