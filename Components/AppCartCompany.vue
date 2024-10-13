<template>
  <v-card class="d-flex justify-center flex-column align-center ga-6 pb-md-7" flat>
    <!-- Компонент для мобильных устройств -->
    <v-col class="ga-8 pa-0 hidden-md-and-up">
      <ButtonList
        :buttons="aboutData.buttons"
        :isActive="isActive"
        classList="ga-3 pa-0 px-4 overflow-scroll min-h-56"
      />
      <v-divider style="margin-top: -1px"></v-divider>
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
        <v-row class="pa-0 d-flex justify-start ma-0 mr-md-3">
          <v-col class="pa-0 align-center d-flex" style="font-size: 15px">
            <v-icon color="bgGreen" v-if="aboutData.document" size="18" style="padding-right: 2px"
              >mdi mdi-check-decagram</v-icon
            >
            <span
              v-if="aboutData.document"
              class="text-none font-weight-regular text-no-wrap pr-1 hidden-sm-and-down"
              >{{ documents[0] }}</span
            >
            <span v-if="aboutData.document" class="pr-1 hidden-md-and-up">{{ documents[1] }}</span>
            <v-icon size="16" class="mx-n1">mdi mdi-circle-medium</v-icon>
            <v-icon color="bgGreen" size="20" class="ml-1">mdi mdi-star</v-icon>
            <span style="padding-left: 2px">
              {{ aboutData.rating }}
            </span>
            <v-icon size="16" class="">mdi mdi-circle-medium</v-icon>
            <span style="padding-left: 2px" class="text-no-wrap">
              {{ aboutData.reviewCount }} {{ textReview }}
            </span>
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
          <span color="colorText ">{{ textPhone }}</span></v-btn
        >

        <!-- Компонент для десктопных устройств -->
        <ButtonList
          :buttons="aboutData.buttons"
          :isActive="isActive"
          classList="ga-2 pa-0 hidden-sm-and-down"
        />
      </v-col>
    </v-col>
  </v-card>
</template>

<script setup>
import ButtonList from '@/components/ButtonList.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const documents = ['Документы проверены', 'Проверен']
const textPhone = 'Показать номер телефона'
const textReview = 'отзывов'

const { data: aboutData, error } = await useAsyncData('about', () => $fetch('/api/about'))
const route = useRoute()

if (error.value) {
  console.error('Ошибка при получении данных для компании:', error.value)
}

const isActive = (buttonRoute) => computed(() => route.path === buttonRoute)
</script>
<style scoped>
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
.min-h-56.v-card-actions {
  min-height: 56px;
}
</style>
