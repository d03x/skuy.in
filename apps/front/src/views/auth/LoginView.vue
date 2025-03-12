<script setup lang="ts">
import Input from '@/components/Input.vue';
import { ref } from 'vue';
const nama = ref<string>("dadan")
</script>

<template>
  <div class="container">
  <div class="max-w-sm mt-24 shadow bg-white rounded-lg border border-gray-100 p-9 mx-auto w-full">
    <div class="text-3xl font-bold mb-5 text-gray-600">
      <h2>Login Untuk Akses</h2>
    </div>
    <div class="grid grid-cols-1 gap-4">
      <Input label="email" placeholder="Ketikan nama anda" v-model="nama"/>
      <Input type="password" placeholder="Ketikan nama anda" v-model="nama"/>
      <button class="btn bg-blue-500 py-3 hover:bg-blue-600">Login</button>
    </div>
  </div>
  </div>

</template>
