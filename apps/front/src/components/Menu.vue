<script setup lang="ts">
import { ref } from 'vue';

let isOpen = ref(false);

const emit = defineEmits<{
  (e: 'toggle', active: boolean): void,
}>();

function toggle() {
  emit("toggle", !isOpen.value)
  isOpen.value = !isOpen.value;
}

</script>
<template>
  <button :class="{ active: isOpen }" @click="toggle">
    <div>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
</template>
<style scoped>
button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 16px;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
}

span {
  width: 25px;
  display: block;
  height: 3px;
  background-color: rgb(135, 135, 135);
  border-radius: 200px;
  transition: all 0.3s ease;
}

button.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

button.active span:nth-child(2) {
  opacity: 0;
}

button.active span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}
</style>