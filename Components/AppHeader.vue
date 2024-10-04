<template>
  <v-app-bar color="sandy" position="relative" app dark v-if="headerData">
    <v-toolbar-title v-if="headerData.name" class="header__name">
      {{ headerData.name }}
    </v-toolbar-title>
    <v-btn color="success" dense class="ma-0 pa-1">
      <v-icon left class="mr-1">mdi-view-grid-outline</v-icon>
      Все категории
    </v-btn>

    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <v-btn color="primary"> Ростов-на-Дону </v-btn>
    <v-btn color="info"> Разместить объявление </v-btn>
    <v-btn color="error"> - - - </v-btn>
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
<style scoped>
.header__name {
  font-family: 'Noto Serif', serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 28px;
  font-variation-settings: 'wdth' 100;
}
</style>
