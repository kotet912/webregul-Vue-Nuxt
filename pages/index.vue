<template>
  <v-container app grid-list-xs class="pa-0 " fluid>
    <AppCartCompany />
    <v-divider></v-divider>
    <v-row justify="center" align="center">
      <v-col cols="4">
        <v-select :items="items" item-value="value" v-model="items.value" label="Все товары и услуги" variant="outlined"
          class=" ma-auto pt-5 " rounded="lg"></v-select>
      </v-col>
    </v-row>

    <AppCart />
  </v-container>
</template>

<script setup>
import AppCartCompany from '@/components/AppCartCompany.vue'
import AppCart from '@/components/AppCart.vue'
definePageMeta({
  name: 'HomePage',
})

const items = [
  { text: 'Все товары и услуги', value: 'all' },
  { text: 'Товары', value: 'products' },
  { text: 'Услуги', value: 'services' },
]
</script>
