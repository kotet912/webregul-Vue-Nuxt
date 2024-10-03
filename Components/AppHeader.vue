<template>
  <v-app-bar app color="primary" dark v-if="headerData">
    <v-container class="d-flex align-center">
      <v-img
        v-if="headerData.logo"
        :src="headerData.logo"
        alt="Company Logo"
        max-width="100"
        class="mr-4"
      ></v-img>
      <v-toolbar-title v-if="headerData.name">
        {{ headerData.name }}
      </v-toolbar-title>
    </v-container>
  </v-app-bar>
  <div v-else>Загрузка...</div>
</template>

<script setup>
import { useAsyncData } from '#app'

const { data: headerData, error } = await useAsyncData('header', () => $fetch('/api/header'))

if (error.value) {
  console.error('Ошибка при получении данных для шапки:', error.value)
}
</script>
