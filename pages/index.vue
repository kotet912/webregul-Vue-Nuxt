<template>
  <v-container app grid-list-xs class="pa-0 " fluid>
    <AppCartCompany />
    <v-divider></v-divider>
    <v-select :items="items" v-model="value" label="Все товары и услуги" variant="outlined" class="w-25 ma-auto pt-5 "
      rounded="lg"></v-select>
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
