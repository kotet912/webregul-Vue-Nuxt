<template>
  <v-container app grid-list-xs class="pa-0" fluid>
    <AppCartCompany />
    <v-divider></v-divider>
    <v-row justify="center" align="center">
      <v-col cols="4">
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
      <v-row align="center" class="pa-4">
        <v-col cols="3" v-for="(item, index) in 6" :key="index" class="pa-2">
          <AppCart />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup>
import AppCartCompany from '@/components/AppCartCompany.vue'
import AppCart from '@/components/AppCart.vue'

definePageMeta({
  name: 'HomePage',
})

// Данные для списка
const items = ['Все товары и услуги', 'Товары', 'Услуги']
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
