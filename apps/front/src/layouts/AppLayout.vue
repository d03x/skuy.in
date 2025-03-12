<script setup lang="ts">
import Avatar from '@/components/Avatar.vue';
import BottomNavMenu from '@/components/BottomNavMenu.vue';
import AccountIcon from '@/components/icons/AccountIcon.vue';
import FlashOrder from '@/components/icons/FlashOrder.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import TransferIcon from '@/components/icons/TransferIcon.vue';
import Menu from '@/components/Menu.vue';
import { ref } from 'vue';
import MobileNavbar from './MobileNavbar.vue';
let isOpen = ref(false)

function ontoggle(toggle: boolean) {
  isOpen.value = toggle;
}
</script>

<template>
  <div class="max-w-xl bg-gray-50 relative min-h-screen mx-auto">
    <header class="h-12.5 sticky top-0 flex shadow items-center px-6 bg-white ">
      <div class="mr-auto flex items-center space-x-3">
        <Menu @toggle="ontoggle" />
        <span class="font-bold text-lg"><span class="text-blue">TopUp</span><span class="text-orange">Q</span></span>
      </div>
      <div class="ml-auto">
        <Avatar />
      </div>
    </header>
    <div>
      <router-view />
    </div>
    <MobileNavbar />
  </div>
</template>
