<template>
  <v-footer fluid class="bg-grey-lighten-4 pa-0 border-t-thin" height="88">
    <v-row class="ga-5 pa-0 px-8 ma-0 mt-n4 align-sm-center flex-column flex-sm-row">
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
        variant="text"
        class="mx-2 text-none w-0 hidden-sm-and-up"
        to="/"
        v-for="(item, index) in lang"
        :key="index"
        :v-if="item.status === true"
      >
        <v-img :src="item.img" alt="altText" height="16" width="16" class="mr-1"></v-img
        >{{ item.text }}</v-btn
      >
    </v-row>
  </v-footer>
</template>

<script setup>
const footerDate = [
  {
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
