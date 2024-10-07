<template>
  <v-container fluid class="bg-grey-lighten-4 pa-0">
    <v-col class="border-t-thin">
      <v-row class="ga-5 pt-6 pb-10 px-8">
        <span
          v-for="(item, index) in footerDate"
          :key="index"
          :class="index === 1 || index === 2 ? 'text-footerItem' : ''"
        >
          {{ item.text }}
        </span>
      </v-row>
    </v-col>
  </v-container>
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
]
</script>
