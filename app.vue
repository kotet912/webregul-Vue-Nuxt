<template>
  <NuxtLayout>
    <v-app>
      <AppHeader />
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import AppHeader from '@/components/AppHeader.vue'

const userStore = useUserStore()
userStore.init()
</script>
