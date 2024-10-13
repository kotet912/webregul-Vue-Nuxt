<template>
  <v-container app grid-list-xs class="pa-0" fluid>
    <AppCartCompany />
    <v-divider class="hidden-sm-and-down"></v-divider>
    <AppAbout />
  </v-container>
</template>

<script setup>
import AppCartCompany from '@/components/AppCartCompany.vue'
</script>
