<template>
  <v-container app grid-list-xs class="pa-0" fluid v-if="aboutData">
    <AppCartCompany />
    <v-divider></v-divider>
    <v-row class="pt-8" justify="center" align="center">
      <v-col md="5" class="ga-3 d-flex flex-column px-6">
        <v-card flat>
          <v-card-title class="text-h5 font-weight-bold">
            {{ aboutData.title }}
          </v-card-title>
          <v-card-text>
            {{ aboutData.description }}
          </v-card-text>
        </v-card>
        <v-card flat>
          <v-row class="ma-0 d-flex align-center justify-space-between">
            <v-card-title class="text-h5 font-weight-bold text-grey-lighten-4">
              {{ aboutData.time[0] }}
            </v-card-title>
            <v-icon color="grey-lighten-4">mdi mdi-chevron-down</v-icon>
          </v-row>

          <v-card-text class="text-grey-lighten-4">
            {{ aboutData.time[1] }}
          </v-card-text>
        </v-card>
        <v-card flat class="d-flex justify-space-between align-center">
          <v-col class="pa-0">
            <v-card-title class="text-h5 font-weight-bold">
              {{ aboutData.geo[0] }}
            </v-card-title>

            <v-card-text>
              <div class="text-bgGreen w-75">
                {{ aboutData.geo[1] }}
              </div>
            </v-card-text>
          </v-col>
          <v-col flat class="w-auto flex-0-0">
            <!-- скругление 12px переделать -->
            <v-img width="150" class="rounded-e-xl" cover :src="aboutData.map"> </v-img>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
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
