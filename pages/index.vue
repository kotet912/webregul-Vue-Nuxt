<template>
  <v-container app grid-list-xs class="pa-0" fluid>
    <AppCartCompany />
    <!-- TODO: отдельно поместить к компоненту чтобы не повторялся -->
    <v-divider class="hidden-sm-and-down"></v-divider>
    <v-row justify="center" align="center" no-gutters>
      <v-col cols="12" class="pa-0 px-4">
        <v-select
          v-model="selectedItem"
          :items="items"
          :item-value="(item) => item.value"
          label="Все товары и услуги"
          max-width="438"
          variant="outlined"
          class="ma-auto pt-5 custom-text-color"
          bg-color="#EDEDED"
          rounded="lg"
          flat
          menu-icon="mdi mdi-menu-down"
          :item-props="itemProps"
          icon="mdi-check"
          @click="handleSelectClick"
        >
          <!-- Слот для отображения каждого элемента в списке -->
          <template v-slot:item="{ item, props }">
            <v-list-item v-bind="props" class="item-custom" color="#F5F5F5">
              <!-- Добавляем иконку галочки для выбранного элемента -->
              <v-icon v-if="selectedItem === item.value" color="bgGreen" class="ml-auto"
                >mdi-check</v-icon
              >
            </v-list-item>
          </template>
        </v-select>

        <!-- Модалка -->
        <v-dialog v-model="isDialogOpen" fullscreen hide-overlay>
          <v-card color="#F5F5F5">
            <v-toolbar flat color="#F5F5F5">
              <v-btn icon @click="isDialogOpen = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <span class="text-body-1 font-weight-bold">Товары и услуги</span>
              <v-spacer></v-spacer>
            </v-toolbar>

            <v-card-text>
              <v-list class="bg-colorText">
                <v-list-item
                  class="item-custom"
                  color="#F5F5F5"
                  v-for="(item, index) in items"
                  :key="index"
                  :disabled="!item.value"
                  @click="selectItem(item)"
                >
                  <v-list-item-title>{{ item.title || item.subtitle }}</v-list-item-title>
                  <v-icon v-if="selectedItem === item.value" color="bgGreen" class="ml-auto"
                    >mdi-check</v-icon
                  >
                </v-list-item>
              </v-list>
            </v-card-text>

            <v-card-actions class="pb-12">
              <v-btn
                color="bgGreen"
                class="text-md-caption text-body-2 w-100"
                height="56"
                @click="applySelection"
                style="border-radius: 12px"
                variant="flat"
                >Применить</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-col class="pa-0">
      <v-row align="stretch" class="pa-0 pa-md-4 ma-0 mx-auto">
        <v-col
          cols="12"
          lg="3"
          md="3"
          sm="6"
          xs="12"
          class="h-100 mx-auto"
          v-for="product in products"
          :key="product.id"
        >
          <AppCart :product="product" />
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import AppCartCompany from '@/components/AppCartCompany.vue'
import AppCart from '@/components/AppCart.vue'
import { useAsyncData } from '#app'
definePageMeta({
  name: 'HomePage',
})

const items = [
  { title: 'Все товары и услуги', value: 'all' },
  { title: '', subtitle: 'Категория 1', value: '' },
  { title: 'Гробы 5', value: 'Coffins' },
  { title: 'Урны 12', value: 'urns' },
  { title: '', subtitle: 'Категория 2', value: '' },
  { title: 'Тапки 2', value: 'slippers' },
  { title: 'Покрывало 1', value: 'cover' },
]

const selectedItem = ref('all') // Значение по умолчанию
const isDialogOpen = ref(false) // Для модалки

// Открытие модалки для мобильных устройств
const handleSelectClick = (event) => {
  if (window.innerWidth < 600) {
    event.preventDefault() // Предотвращаем открытие стандартного выпадающего списка
    isDialogOpen.value = true // Открываем модалку
  }
}
// Выбор элемента в модалке
const selectItem = (item) => {
  if (item.value) {
    selectedItem.value = item.value // Обновляем выбранный пункт
  }
}
const applySelection = () => {
  isDialogOpen.value = false // Закрываем модалку после нажатия "Применить"
}

function itemProps(item) {
  return {
    title: item.title,
    subtitle: item.subtitle,
    disabled: !item.title || !item.value, // Блокируем элемент, если нет title или value
  }
}

const { data: products, error } = await useAsyncData('products', () => $fetch('/api/products'))

if (error.value) {
  console.error('Ошибка при получении данных продуктов:', error.value)
}
</script>

<style>
.custom-text-color .v-label {
  color: #0f0f0f;
  opacity: 1;
}

.custom-text-color .v-field__outline {
  opacity: 30%;
}
/* Убираем стандартное выделение */
.v-list-item--active {
  background-color: transparent !important;
}
.item-custom .v-list-item__content {
  display: flex;
}

.item-custom .v-list-item--active {
  background-color: transparent !important;
}

.item-custom .v-list-item-title {
  color: #0f0f0f !important;
}

.item-custom .v-list-item__content {
  display: flex !important;
}
</style>
