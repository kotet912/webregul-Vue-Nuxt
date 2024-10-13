<template>
  <v-container app grid-list-xs class="pa-0" fluid>
    <AppCartCompany />
    <v-divider class="hidden-sm-and-down"></v-divider>
    <AppSelect />
    <v-col class="pa-0">
      <v-row align="stretch" class="pa-0 pa-md-4 ma-0 mx-auto">
        <v-col
          cols="12"
          lg="3"
          md="3"
          sm="6"
          xs="12"
          class="h-100 mx-auto"
          v-for="product in products"
          :key="product.id"
        >
          <AppCart :product="product" />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup>
import { useAsyncData } from '#app'

import AppCartCompany from '@/components/AppCartCompany.vue'
import AppCart from '@/components/AppCart.vue'
import AppSelect from '@/components/AppSelect.vue'

definePageMeta({
  name: 'HomePage',
})

const { data: products, error } = await useAsyncData('products', () => $fetch('/api/products'))

if (error.value) {
  console.error('Ошибка при получении данных продуктов:', error.value)
}
</script>
