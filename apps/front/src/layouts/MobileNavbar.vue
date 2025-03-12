<script setup lang="ts">
import BottomNavMenu from '@/components/BottomNavMenu.vue';
import AccountIcon from '@/components/icons/AccountIcon.vue';
import FlashOrder from '@/components/icons/FlashOrder.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import TransferIcon from '@/components/icons/TransferIcon.vue';

</script>
<template>
  <nav class="justify-between flex items-center max-w-xl mx-auto border-t bg-black-300 inset-x-0 bottom-0 h-14 w-full shadow-md bg-white fixed bottom-0">
    <BottomNavMenu to="/" label="Home" :icon="HomeIcon" />
    <BottomNavMenu to="/orders" label="Beli Cepat" :icon="FlashOrder" />
    <BottomNavMenu to="/transactions" label="Transaksi" :icon="TransferIcon" />
    <BottomNavMenu to="/favorite" label="Favorit" :icon="HeartIcon" />
    <BottomNavMenu to="/account" label="Akun" :icon="AccountIcon" />
  </nav>
</template>