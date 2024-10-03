<template>
  <v-container grid-list-xs v-if="aboutData">
    <v-card>
      <v-card-title primary-title>
        {{ aboutData.title }}
      </v-card-title>
      <v-card-subtitle>
        {{ aboutData.description }}
      </v-card-subtitle>
    </v-card>
    <v-card>
      <v-card-title primary-title>
        {{ aboutData.time[0] }}
      </v-card-title>
      <v-card-subtitle>
        {{ aboutData.time[1] }}
      </v-card-subtitle>
    </v-card>
    <v-card>
      <v-col>
        <v-card-title primary-title>
          {{ aboutData.geo[0] }}
        </v-card-title>
        <v-card-subtitle>
          {{ aboutData.geo[1] }}
        </v-card-subtitle>
      </v-col>
      <v-col>
        <v-img cover :src="aboutData.map"> </v-img>
      </v-col>
    </v-card>
  </v-container>

  <v-container grid-list-xs v-else>
    <p>Загрузка информации о компании...</p>
  </v-container>
</template>

<script setup>
const { data: aboutData, error } = useFetch('/api/about')

if (error.value) {
  console.error('Ошибка при получении данных о компании:', error.value)
}
</script>
