<template>
  <v-card-actions :class="classList" class="ga-3 pa-0 px-4">
    <v-btn
      v-for="(item, index) in buttons"
      :key="index"
      color="btnBg"
      variant="flat"
      min-height="40"
      :class="[{ 'active-btn': isActive(item.route).value }, 'px-3']"
      :to="item.route"
      style="border-radius: 12px"
    >
      <span color="btnText" class="text-none custom-text font-weight-medium">{{ item.name }}</span>
    </v-btn>
  </v-card-actions>
</template>

<script setup>
const props = defineProps({
  buttons: {
    type: Array,
    required: true,
  },
  classList: {
    type: String,
    default: '',
  },
  isActive: {
    type: Function,
    required: true,
  },
})
</script>
<style scoped>
.active-btn {
  border: 1px solid #0f0f0f !important;
}
.custom-letter-spacing {
  letter-spacing: 0.04em !important;
}
.custom-text {
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0 !important;
  text-align: center;
}
.min-h-56.v-card-actions {
  min-height: 56px;
}
</style>
