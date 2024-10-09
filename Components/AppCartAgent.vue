<template>
  <v-col md="6" class="mx-auto pa-0">
    <v-card flat color="#F5F5F5" class="rounded-xl">
      <v-row class="ma-0 d-flex flex-nowrap">
        <v-col flat class="ma-auto w-auto flex-0-0">
          <v-img
            :src="agent.image"
            alt="altText"
            height="140"
            width="140"
            style="border-radius: 20px"
          />
        </v-col>
        <v-col class="pr-2">
          <v-card-title
            class="pa-0 pb-1 d-flex text-wrap text-h5 font-weight-bold"
            style="max-width: 300px"
          >
            {{ agent.name }}
          </v-card-title>
          <v-card-text class="pa-0">
            <v-col class="d-flex ga-1 align-center pa-0 pb-3 ga-1">
              <v-icon color="bgGreen" v-if="agent.document" size="16"
                >mdi mdi-check-decagram</v-icon
              >
              <span v-if="agent.document">Документы проверены</span>
              <v-icon v-if="agent.document" size="16">mdi mdi-circle-medium</v-icon>
              <v-icon v-if="agent.rating" color="bgGreen" size="16">mdi mdi-star</v-icon>
              {{ agent.rating ? agent.rating : '' }}
              <v-icon v-if="agent.rating" size="16">mdi mdi-circle-medium</v-icon>
              {{ agent.reviewCount ? agent.reviewCount : 'Нет' }} отзывов
            </v-col>
            <!-- d-inline-block text-truncate не срабатывает нормально -->
            {{ agent.description }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  agent: {
    type: Object,
    required: true,
  },
})
</script>
