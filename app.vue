<template>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
userStore.init()
</script>
