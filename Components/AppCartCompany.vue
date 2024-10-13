<template>
  <v-card class="d-flex justify-center flex-column align-center ga-6 pb-md-7" flat>
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
    <v-col :class="[$route.path !== '/aboutPage' ? 'hidden-sm-and-down' : '', 'pa-0']">
      <v-img
        :src="aboutData.img"
        alt="Image"
        :width="120"
        cover
        :height="120"
        style="border-radius: 20px"
        class="mx-auto"
      />
      <v-col class="d-flex justify-center flex-column align-center pa-0 pt-5">
        <v-card-title class="pa-0 pb-1 text-h5 font-weight-bold custom-letter-spacing">{{
          aboutData.name
        }}</v-card-title>
        <v-row class="pa-0 d-flex justify-start w-25 ma-0">
          <v-col class="pa-0 align-center d-flex" style="font-size: 15px">
            <v-icon color="bgGreen" v-if="aboutData.document" size="18"
              >mdi mdi-check-decagram</v-icon
            >
            <span
              v-if="aboutData.document"
              class="text-none font-weight-regular pr-1 hidden-sm-and-down"
              >Документы проверены</span
            >
            <span v-if="aboutData.document" class="hidden-md-and-up">Проверен</span>
            <v-icon size="16" class="mx-n1">mdi mdi-circle-medium</v-icon>
            <v-icon color="bgGreen" size="20" class="ml-1">mdi mdi-star</v-icon>
            <span style="padding-left: 2px">
              {{ aboutData.rating }}
            </span>
            <v-icon size="16" class="">mdi mdi-circle-medium</v-icon>
            <span style="padding-left: 2px"> {{ aboutData.reviewCount }} отзывов </span>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="d-flex justify-center flex-column align-center ga-6 pa-0 mt-6">
        <v-btn
          color="bgGreen"
          class="text-subtitle-1 px-4 text-none hidden-xs"
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
            :class="[{ 'active-btn': isActive(item.route).value }, 'px-3']"
            :to="item.route"
            style="border-radius: 12px"
          >
            <span color="btnText" class="text-none custom-text font-weight-medium">{{
              item.name
            }}</span>
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
  border: 1px solid #0f0f0f !important;
}
.custom-letter-spacing {
  letter-spacing: 0.04em !important;
}
.custom-text {
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0 !important;
  text-align: center;
}
</style>
