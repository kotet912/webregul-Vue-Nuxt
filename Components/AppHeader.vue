<template>
  <v-app-bar
    color="sandy"
    class="position-relative px-5"
    scroll-behavior="hide elevate"
    floating
    dark
    v-if="headerData"
    flat
  >
    <v-col class="d-flex ga-9">
      <v-app-bar-nav-icon class="hidden-lg-and-up"></v-app-bar-nav-icon>
      <v-spacer class="hidden-sm-and-up pr-15"></v-spacer>

      <v-toolbar-title
        @click="$router.push('/')"
        v-if="headerData.name"
        class="header__name flex-0-0 d-flex align-center justify-center pl-2 p6 cursor-pointer"
      >
        {{ headerData.name }}
      </v-toolbar-title>
      <v-btn
        v-if="headerData.btnLeft"
        class="text-none text-subtitle-1 rounded-pill hidden-md-and-down"
        color="btnBg"
        min-height="48"
        variant="flat"
      >
        <v-icon color="btnText" size="24" class="mr-1 pl-1">mdi-view-grid-outline</v-icon>
        <span class="text-btnText">{{ headerData.btnLeft }}</span>
      </v-btn>
    </v-col>

    <v-spacer></v-spacer>

    <v-icon size="24" class="pa-6 hidden-lg-and-up">mdi mdi-shopping-outline</v-icon>
    <v-btn color="btnColor" class="text-none text-subtitle-1 pr-2 hidden-md-and-down">
      <v-icon size="16" class="pr-1">mdi mdi-map-marker</v-icon>
      {{ headerData.geolocation }}
    </v-btn>
    <div class="header__rectangle hidden-md-and-down"></div>
    <v-btn color="bgGreen" class="text-none mr-4 pl-2 text-subtitle-1 hidden-md-and-down">
      Разместить объявление
    </v-btn>
    <v-btn
      v-if="headerData.btnLeft"
      class="text-none rounded-pill pl-3 pr-1 mr-3 hidden-md-and-down"
      color="btnBg"
      min-height="48"
      variant="flat"
    >
      <v-icon color="btnText" size="24" class="mr-2">mdi mdi-menu</v-icon>
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
