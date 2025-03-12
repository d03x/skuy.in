<script lang="ts" setup>
import clsx from 'clsx';
import { computed, watchEffect } from 'vue';

let nama = defineModel({
  required: true,
});

const props = defineProps<{
  class?: string,
  label? : string,
}>()

const className = computed(() => [
  "w-full px-4 text-black py-2 bg-gray-50 text-gray-600 rounded-lg text-base  transition",
  "focus:(outline-none ring-1 ring-blue-500)",
  "dark:(bg-gray-800 text-white border-gray-700 focus:ring-blue-400)",
  props.class,
])
</script>

<template>

<input autocomplete="off" v-model="nama" :class="[...className]" type="text">
</template>