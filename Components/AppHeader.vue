<template>
  <v-app-bar
    color="sandy"
    class="position-relative"
    scroll-behavior="hide elevate"
    floating
    dark
    v-if="headerData"
    flat
  >
    <v-col class="d-flex ga-3">
      <v-toolbar-title
        @click="$router.push('/')"
        v-if="headerData.name"
        class="header__name flex-0-0 d-flex align-center justify-center pl-2 p6"
      >
        {{ headerData.name }}
      </v-toolbar-title>
      <v-btn
        v-if="headerData.btnLeft"
        class="text-none rounded-pill"
        color="btnBg"
        min-height="48"
        variant="flat"
      >
        <v-icon color="btnText" class="mr-1">mdi-view-grid-outline</v-icon>
        <span class="text-btnText">{{ headerData.btnLeft }}</span>
      </v-btn>
    </v-col>

    <v-spacer></v-spacer>

    <v-btn color="btnColor" class="text-none">
      <v-icon size="16">mdi mdi-map-marker</v-icon>
      {{ headerData.geolocation }}
    </v-btn>
    <div class="header__rectangle"></div>
    <v-btn color="bgGreen" class="text-none"> Разместить объявление </v-btn>
    <v-btn
      v-if="headerData.btnLeft"
      class="text-none rounded-pill pl-3 pr-1"
      color="btnBg"
      min-height="48"
      variant="flat"
    >
      <v-icon color="btnText" class="mr-2">mdi mdi-menu</v-icon>
      <v-avatar size="40" :image="headerData.avatar"> </v-avatar>
    </v-btn>
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
.header__rectangle {
  position: static;
  width: 1px;
  height: 32px;
  flex: none;
  flex-grow: 0;
  margin: 0px 24px;
  background: rgb(204, 204, 204);
}
</style>
