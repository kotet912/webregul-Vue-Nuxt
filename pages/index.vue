<template>
  <v-container app grid-list-xs>
    <AppCartCompany />
    <AppCart />
  </v-container>
</template>

<script setup>
import AppCartCompany from '@/components/AppCartCompany.vue'
import AppCart from '@/components/AppCart.vue'
definePageMeta({
  name: 'HomePage',
})
</script>
