<template>
  <v-container app grid-list-xs class="pa-0" fluid>
    <AppCartCompany />
    <!-- TODO: отдельно поместить к компоненту чтобы не повторялся -->
    <v-divider class="hidden-sm-and-down"></v-divider>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" lg="3" md="4" sm="6" xs="12" class="pa-0 px-7">
        <v-select
          :items="items"
          label="Все товары и услуги"
          variant="outlined"
          class="ma-auto pt-5 custom-text-color"
          bg-color="#EDEDED"
          rounded="lg"
          flat
        ></v-select>
      </v-col>
    </v-row>
    <v-col class="pa-0">
      <v-row align="stretch" class="pa-0 pa-md-4 ma-0 mx-auto">
        <v-col cols="12" lg="3" md="3" sm="6" xs="12" class="h-100 mx-auto" v-for="product in products" :key="product.id">
          <AppCart :product="product" />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup>
import AppCartCompany from '@/components/AppCartCompany.vue'
import AppCart from '@/components/AppCart.vue'
import { useAsyncData } from '#app'
definePageMeta({
  name: 'HomePage',
})

// Данные для списка
const items = ['Все товары и услуги', 'Товары', 'Услуги']

const { data: products, error } = await useAsyncData('products', () => $fetch('/api/products'))

if (error.value) {
  console.error('Ошибка при получении данных продуктов:', error.value)
}
</script>

<style>
.custom-text-color .v-label {
  color: #0f0f0f;
  opacity: 1;
}
.custom-text-color .v-field__outline {
  opacity: 1;
}
</style>
