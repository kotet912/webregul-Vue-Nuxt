<template>
  <v-card>
    <v-img :src="product.image" alt="Product Image" />
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle
      >{{ product.price }} ₽ {{ product.prefix ? product.prefix : '' }}</v-card-subtitle
    >
    <v-card-text>
      <p>Просмотры: {{ product.views }}</p>
      <p>Показов: {{ product.shows }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="product.status && product.move" color="success">Объявление продвигается</v-btn>
      <v-col v-else-if="product.status && !product.move">
        <v-row>
          <span>Увеличьте количество просмотров</span>
          <v-btn color="success">Продвигать</v-btn>
        </v-row>
      </v-col>
      <v-btn v-else color="error">Объявление скрыто</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
