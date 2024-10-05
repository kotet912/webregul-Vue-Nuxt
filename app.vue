<template>
  <NuxtLayout>
    <v-app>
      <AppHeader />
      <NuxtPage />
      <AppFooter />
    </v-app>
  </NuxtLayout>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import AppHeader from '@/components/AppHeader.vue'

const userStore = useUserStore()
userStore.init()
</script>
<style>
html {
  overflow-y: auto !important;
}
body {
  font-family: 'Inter', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>
