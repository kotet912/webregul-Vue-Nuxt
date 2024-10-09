<template>
  <v-col md="4" class="mx-auto">
    <v-card>
      <v-row>
        <v-col flat md="2">
          <v-img :src="agent.image" :alt="altText" height="140" width="140" rounded="0" />
        </v-col>
        <v-col md="6">
          <v-card-title>
            {{ agent.name }}
          </v-card-title>
          <v-card-text>
            <v-col class="d-flex ga-1 align-center pa-0 ga-1">
              <v-icon color="bgGreen" v-if="agent.document" size="16"
                >mdi mdi-check-decagram</v-icon
              >
              <span v-if="agent.document">Документы проверены</span>
              <v-icon size="16">mdi mdi-circle-medium</v-icon>
              <v-icon color="bgGreen" size="16">mdi mdi-star</v-icon>
              {{ agent.rating }}
              <v-icon size="16">mdi mdi-circle-medium</v-icon>
              {{ agent.reviewCount }} отзывов
            </v-col>
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
