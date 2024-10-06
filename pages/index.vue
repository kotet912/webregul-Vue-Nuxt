<template>
  <v-container app grid-list-xs class="pa-0">
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
