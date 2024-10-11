<template>
  <v-col cols="11" md="6" sm="10" class="mx-auto pa-0">
    <v-card flat color="#F5F5F5" class="rounded-xl">
      <v-row class="ma-0 flex-nowrap hidden-md-and-down">
        <v-col flat class="ma-auto w-auto flex-0-0">
          <v-img
            :src="agent.image"
            alt="altText"
            :height="smAndDown ? 48 : 140"
            :width="smAndDown ? 48 : 140"
            style="border-radius: 20px"
          />
        </v-col>
        <v-col class="pr-2">
          <v-card-title
            class="pa-0 pb-1 d-flex text-wrap text-h6 text-md-h5 font-weight-bold"
            style="max-width: 300px"
          >
            {{ agent.name }}
          </v-card-title>
          <v-card-text class="pa-0">
            <v-col class="d-flex ga-1 align-center pa-0">
              <v-icon color="bgGreen" v-if="agent.document" size="16"
                >mdi mdi-check-decagram</v-icon
              >
              <span v-if="agent.document" class="hidden-md-and-down">Документы проверены</span>
              <span v-if="agent.document" class="hidden-lg-and-up">Проверен</span>
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

      <!-- мобильный вариант -->
      <!-- это не лучший вариант... -->
      <v-row class="ma-0 hidden-lg-and-up">
        <v-col>
          <v-row class="ma-0 flex-nowrap">
            <v-img
              :src="agent.image"
              alt="altText"
              :height="smAndDown ? 48 : 140"
              :width="smAndDown ? 48 : 140"
              :style="smAndDown ? 'border-radius: 9.6px' : 'border-radius: 20px'"
              class="flex-0-0 mt-4"
            />
            <v-col>
              <v-card-title
                class="pa-0 pb-1 d-flex text-wrap text-h6 text-md-h5 font-weight-bold"
                style="max-width: 300px"
              >
                {{ agent.name }}
              </v-card-title>
              <v-col class="d-flex align-center pa-0 flex-wrap text-body-2">
                <v-icon color="bgGreen" v-if="agent.document" size="16"
                  >mdi mdi-check-decagram</v-icon
                >
                <span v-if="agent.document" class="hidden-md-and-down">Документы проверены</span>
                <span v-if="agent.document" class="hidden-lg-and-up mx-1">Проверен</span>
                <v-icon v-if="agent.document" size="16">mdi mdi-circle-medium</v-icon>
                <v-icon v-if="agent.rating" color="bgGreen mx-1" size="16">mdi mdi-star</v-icon>
                {{ agent.rating ? agent.rating : '' }}
                <v-icon v-if="agent.rating" size="16">mdi mdi-circle-medium</v-icon>
                {{ agent.reviewCount ? agent.reviewCount : 'Нет' }} отзывов
              </v-col>
            </v-col>
          </v-row>
          <v-col class="pr-2 pt-0 pl-0">
            <v-card-text class="pa-0">
              <!-- d-inline-block text-truncate не срабатывает нормально -->
              {{ agent.description }}
            </v-card-text>
          </v-col>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>

<script setup>
import { defineProps } from 'vue'
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()

const props = defineProps({
  agent: {
    type: Object,
    required: true,
  },
})
</script>
