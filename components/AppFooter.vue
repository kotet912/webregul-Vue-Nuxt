<template>
  <v-footer
    fluid
    class="bg-grey-lighten-4 pb-6 pb-md-0 pa-0 border-t-thin flex-0-0 align-start"
    :height="mdAndDown ? 'auto' : '88'"
  >
    <v-row
      class="ga-4 ga-md-5 pa-4 pt-5 pa-md-0 px-md-8 ma-0 pt-md-5 align-sm-center flex-column flex-sm-row"
    >
      <span
        v-for="(item, index) in footerDate"
        :key="index"
        :class="[
          {
            'text-footerItem': index !== 0,
            'hidden-sm-and-up': index > 2,
          },
          'text-subtitle-1',
        ]"
      >
        {{ item.text }}
      </span>
      <v-btn
        variant="flat"
        class="ml-1 pa-0 text-body-2 justify-start hidden-sm-and-up bg-grey-lighten-4"
        to="/"
        v-for="(item, index) in lang"
        :key="index"
        :v-if="item.status === true"
      >
        <v-img :src="item.img" alt="altText" height="17" width="17" class="mt-1 mr-1 pr-1"></v-img
        >{{ item.text }}</v-btn
      >
    </v-row>
  </v-footer>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { mdAndDown } = useDisplay()
const footerDate = [
  {
    // text: '© Annonce ' + new Date().getFullYear(),
    text: '© Annonce 2023',
    to: '/',
  },
  {
    text: 'Документы',
    to: '/documents',
  },
  {
    text: 'О компании',
    to: '/about',
  },
  {
    text: 'Продавцам',
    to: '/',
  },
  {
    text: 'Покупателям',
    to: '/',
  },
  {
    text: 'Разместить объявление',
    to: '/',
  },
]
const lang = [
  {
    text: 'Русский',
    img: '/assets/images/svg/flag-ru.svg',
    status: true,
  },
]
</script>
