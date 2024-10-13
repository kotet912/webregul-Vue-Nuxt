<template>
  <v-container app grid-list-xs class="pa-0" fluid v-if="aboutData">
    <AppCartCompany />
    <!-- TODO: отдельно поместить к компоненту чтобы не повторялся -->
    <v-divider class="hidden-sm-and-down"></v-divider>
    <v-row class="pb-9 pb-md-16 pt-md-10 ma-0" justify="center" align="center">
      <v-col md="5" class="ga-3 d-flex flex-column px-0 px-md-6 pt-3 py-md-0">
        <v-card flat>
          <v-card-title class="text-h6 text-lg-h5 font-weight-bold pb-1">
            {{ aboutData.title }}
          </v-card-title>
          <v-card-text
            style="margin-top: -1px"
            class="text-body-2 text-lg-body-1 font-weight-medium custom-line-height"
          >
            {{ aboutData.description }}
          </v-card-text>
        </v-card>
        <v-card flat color="#F5F5F5" rounded="xl" class="px-4">
          <v-row class="ma-0 align-center justify-space-between">
            <v-card-title
              class="text-h6 text-lg-h5 custom-letter-spacing font-weight-bold text-btnText opacity-30 pa-0 pt-2 pt-md-5"
            >
              {{ aboutData.time[0] }}
            </v-card-title>
            <v-icon color="btnText opacity-30 pt-2 pt-md-5">mdi mdi-chevron-down</v-icon>
          </v-row>

          <v-card-text class="text-body-2 text-lg-body-1 text-btnText opacity-30 pl-0 pt-2 pt-md-1">
            {{ aboutData.time[1] }}
          </v-card-text>
        </v-card>
        <v-col flat class="pa-0 pa-md-2">
          <v-row class="justify-space-between align-center flex-column flex-md-row ma-0 ma-md-2">
            <v-col class="pa-0" order="1" order-md="0">
              <v-card-title
                class="text-h6 text-lg-h5 custom-letter-spacing font-weight-bold pt-3 pt-md-5 pb-1"
              >
                {{ aboutData.geo[0] }}
              </v-card-title>

              <v-card-text>
                <div
                  class="text-body-2 text-lg-body-1 text-bgGreen w-75 w-md-100 custom-line-height"
                >
                  {{ aboutData.geo[1] }}
                </div>
              </v-card-text>
            </v-col>
            <v-col flat class="pa-0 mt-n1 mt-2" md="5">
              <v-img
                :max-width="smAndDown ? '' : '200'"
                :height="mdAndDown ? '96' : '132'"
                :class="[
                  smAndDown ? 'br-t-20' : 'rounded-e-xl' + ' ml-auto w-auto',
                  ' mt-md-2 ml-md-2 mr-md-n1',
                ]"
                cover
                :src="smAndDown ? aboutData.map[1] : aboutData.map[0]"
              >
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </v-row>
  </v-container>

  <v-container grid-list-xs v-else>
    <p>Загрузка информации о компании...</p>
  </v-container>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const { smAndDown, mdAndDown } = useDisplay()
const { data: aboutData, error } = useFetch('/api/about')

if (error.value) {
  console.error('Ошибка при получении данных о компании:', error.value)
}
</script>
<style scoped>
.custom-letter-spacing {
  letter-spacing: 0.04em !important;
}

.custom-line-height {
  line-height: 27px;
}
/* медия запрос на 600px */
@media screen and (max-width: 600px) {
  .custom-line-height {
    line-height: 24px;
  }
}
.br-t-20 {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>
