<template>
  <v-container>
    <p>Текущее значение счетчика: {{ counter.count }}</p>
  </v-container>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter'

const counter = useCounterStore()
</script>
