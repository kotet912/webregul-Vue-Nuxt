<template>
  <v-card class="position-relative" flat>
    <v-img :src="product.image" alt="Product Image" rounded="xl" />
    <v-row class="ga-1 position-absolute top-0 left-0 pa-5">
      <v-chip
        prepend-icon="mdi mdi-eye"
        variant="flat"
        color="rgba(27, 29, 34, 0.6)"
        style="border-radius: 12px"
      >
        {{ product.views }}
      </v-chip>
      <v-chip
        prepend-icon="mdi mdi-calendar-blank"
        variant="flat"
        color="rgba(27, 29, 34, 0.6) "
        style="border-radius: 12px"
      >
        {{ product.shows }} дня
      </v-chip>
    </v-row>
    <v-col class="pa-0 pt-4">
      <v-col class="pa-0 px-1 pb-2">
        <v-card-title class="pa-0 text-body-1" color="btnText"
          >{{ product.price }} ₽ {{ product.prefix ? product.prefix : '' }}</v-card-title
        >
        <v-card-title class="pa-0 text-caption" color="btnText">{{ product.name }}</v-card-title>
      </v-col>
      <v-divider></v-divider>
      <v-card-actions class="pa-1 pt-2 d-flex align-center justify-center">
        <v-btn v-if="product.status && product.move" color="bgGreen" class="text-body-2"
          >Объявление продвигается</v-btn
        >
        <v-col v-else-if="product.status && !product.move">
          <v-row align="center" justify="space-between" class="ga-3">
            <span class="text-caption opacity-70">Увеличьте количество просмотров</span>
            <v-btn color="bgGreen" class="text-body-2" style="border-radius: 12px" variant="flat"
              >Продвигать</v-btn
            >
          </v-row>
        </v-col>
        <v-btn v-else color="#BD3223" class="text-body-2">Объявление скрыто</v-btn>
      </v-card-actions>
    </v-col>
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
