<!-- pages/login.vue -->
<template>
  <v-container>
    <v-form @submit.prevent="handleLogin">
      <v-text-field label="Имя пользователя" v-model="username" required></v-text-field>
      <v-text-field label="Пароль" v-model="password" type="password" required></v-text-field>
      <v-btn type="submit" color="primary">Войти</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const username = ref('')
const password = ref('')
const userStore = useUserStore()
const router = useRouter()

const handleLogin = async () => {
  const success = await userStore.login({ username: username.value, password: password.value })
  if (success) {
    router.push('/')
  } else {
    alert('Неверное имя пользователя или пароль')
  }
}
</script>
