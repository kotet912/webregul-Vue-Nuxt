<template>
  <v-card class="d-flex justify-center flex-column align-center ga-6 pb-6" flat>
    <!-- TODO: можно вынести в отдельный компонент -->
    <v-col class="ga-8 pa-0 hidden-md-and-up">
      <v-card-actions class="ga-2 pa-0 px-6 overflow-scroll">
        <v-btn
          v-for="(item, index) in aboutData.buttons"
          :key="index"
          color="btnBg"
          variant="flat"
          min-height="40"
          :class="{ 'active-btn': isActive(item.route).value }"
          :to="item.route"
          style="border-radius: 12px"
        >
          <span color="btnText" class="text-subtitle-1 font-weight-bold">{{ item.name }}</span>
        </v-btn>
      </v-card-actions>
      <v-divider></v-divider>
    </v-col>
    <v-col :class="{ 'hidden-sm-and-down': $route.path === '/' || '/agentsPage' }">
      <v-img
        :src="aboutData.img"
        alt="Image"
        :width="120"
        cover
        :height="120"
        class="rounded-xl mx-auto"
      />
      <v-col class="d-flex justify-center flex-column align-center pa-0">
        <v-card-title class="pa-0 text-h5 font-weight-bold">{{ aboutData.name }}</v-card-title>
        <v-card-text class="pa-0 ga-3">
          <v-col>
            <v-row>
              <v-col class="d-flex ga-1 align-center pa-0 ga-1">
                <v-icon color="bgGreen" v-if="aboutData.document" size="16"
                  >mdi mdi-check-decagram</v-icon
                >
                <span v-if="aboutData.document" class="hidden-sm-and-down"
                  >Документы проверены</span
                >
                <span v-if="aboutData.document" class="hidden-md-and-up">Проверен</span>
                <v-icon size="16">mdi mdi-circle-medium</v-icon>
                <v-icon color="bgGreen" size="16">mdi mdi-star</v-icon>
                {{ aboutData.rating }}
                <v-icon size="16">mdi mdi-circle-medium</v-icon>
                {{ aboutData.reviewCount }} отзывов
              </v-col>
            </v-row>
          </v-col>
        </v-card-text>
      </v-col>
      <v-col class="d-flex justify-center flex-column align-center ga-8 pa-0 mt-5">
        <v-btn
          color="bgGreen"
          class="text-body-2 px-5 text-none hidden-xs"
          variant="flat"
          height="56"
          style="border-radius: 12px"
        >
          <span color="colorText ">Показать номер телефона</span></v-btn
        >
        <!-- TODO: можно вынести в отдельный компонент -->
        <v-card-actions class="ga-2 pa-0 hidden-sm-and-down">
          <v-btn
            v-for="(item, index) in aboutData.buttons"
            :key="index"
            color="btnBg"
            variant="flat"
            min-height="40"
            :class="{ 'active-btn': isActive(item.route).value }"
            :to="item.route"
            style="border-radius: 12px"
          >
            <span color="btnText" class="text-body-2 font-weight-bold">{{ item.name }}</span>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-col>
  </v-card>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const { data: aboutData, error } = await useAsyncData('about', () => $fetch('/api/about'))
const route = useRoute()

if (error.value) {
  console.error('Ошибка при получении данных для компании:', error.value)
}

const isActive = (buttonRoute) => computed(() => route.path === buttonRoute)
</script>
<style>
.active-btn {
  border: 1px solid #0f0f0f;
}
</style>
