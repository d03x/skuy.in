<script setup lang="ts">
import type { Component } from 'vue';
let props = defineProps<{
  icon?: Component,
  label: string,
  to: string,
}>()
</script>

<template>
  <RouterLink :to="props.to"
    class=":uno: cursor-pointer max-w-16 w-full block text-gray-600 hover:text-orange transition-all">
    <div class=":uno: flex items-center justify-center flex-col">
      <span>
        <props.icon />
      </span>
      <span class=":uno: text-[10px] block mt-1 font-semibold">
        {{ props.label }}
      </span>
    </div>
  </RouterLink>
</template>