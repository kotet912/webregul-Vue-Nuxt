<template>
  <v-container grid-list-xs>
    <h1>Home</h1>
    <h1>Счетчик: {{ counter.count }}</h1>
    <h2>Удвоенный счетчик: {{ counter.doubleCount }}</h2>
    <v-btn @click="counter.increment">Увеличить</v-btn>
    <CounterDisplay />
  </v-container>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter'
import CounterDisplay from '~/components/CounterDisplay.vue'
// Инициализируем Store
const counter = useCounterStore()
</script>
