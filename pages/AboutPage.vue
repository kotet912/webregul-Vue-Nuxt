<template>
  <v-container app grid-list-xs class="pa-0" fluid v-if="aboutData">
    <AppCartCompany />
    <!-- TODO: отдельно поместить к компоненту чтобы не повторялся -->
    <v-divider class="hidden-sm-and-down"></v-divider>
    <v-row class="pb-7 pt-md-8 ma-0 " justify="center" align="center">
      <v-col md="5" class="ga-3 d-flex flex-column  px-0 px-md-6">
        <v-card flat>
          <v-card-title class="text-body-1 text-lg-h5  font-weight-bold">
            {{ aboutData.title }}
          </v-card-title>
          <v-card-text class="text-body-2 text-lg-body-1 ">
            {{ aboutData.description }}
          </v-card-text>
        </v-card>
        <v-card flat color="#F5F5F5" rounded="xl" class="px-4">
          <v-row class="ma-0  align-center justify-space-between" >
            <v-card-title class="text-body-1 text-lg-h5  font-weight-bold text-btnText opacity-30 pl-0">
              {{ aboutData.time[0] }}
            </v-card-title>
            <v-icon color="btnText opacity-30">mdi mdi-chevron-down</v-icon>
          </v-row>

          <v-card-text class="text-body-2 text-lg-body-1  text-btnText opacity-30 pl-0 pt-0">
            {{ aboutData.time[1] }}
          </v-card-text>
        </v-card>
        <v-card flat class="d-flex justify-space-between align-center flex-column flex-sm-row">
          <v-col class="pa-0 w-md-auto " order="1" order-sm="0">
            <v-card-title class="text-body-1 text-lg-h5 font-weight-bold">
              {{ aboutData.geo[0] }}
            </v-card-title>

            <v-card-text >
              <div class="text-body-2 text-lg-body-1  text-bgGreen w-100 w-md-75">
                {{ aboutData.geo[1] }}
              </div>
            </v-card-text>
          </v-col>
          <v-col flat class="w-md-auto flex-0-0 pa-0">
            <!-- скругление 12px переделать -->
            <v-img :width="smAndDown ? '100%' : '150'" :class="smAndDown ? 'rounded-t-xl' : 'rounded-e-xl' " cover :src="smAndDown ? aboutData.map[1] : aboutData.map[0]"> </v-img>
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
import { useDisplay } from 'vuetify'

const { smAndDown } = useDisplay()
const { data: aboutData, error } = useFetch('/api/about')

if (error.value) {
  console.error('Ошибка при получении данных о компании:', error.value)
}
</script>

