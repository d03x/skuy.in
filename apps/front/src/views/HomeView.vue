<script setup lang="ts">
import bn from "@/assets/banner.webp"
import ArrowRight from "@/components/icons/ArrowRight.vue";
import GameIcon from "@/components/icons/GameIcon.vue";
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
</script>

<template>
  <div class=":uno: px-2 space-y-3">
    <div class=":uno: rounded overflow-hidden mt-4 md:h-[200px] h-[140px] bg-gray-100">
      <img :src="bn" class="h-full object-cover w-full" alt="">
    </div>
    <div class=":uno: overflow-x-auto pt-2 border-b-gray-100 border-b pb-2">
      <ul class=":uno: flex gap-4 items-center flex-row">
        <a class=":uno: px-4 hover:ring-2 font-semibold bg-gray-200 border-gray-400 rounded whitespace-nowrap py-1 text-xs border block"
          v-for="i in ['Game', 'Kuota', 'Pulsa', 'Sosial Media', 'Joki', 'Internet', 'Tagihan']" href="">
          {{ i }}
        </a>
      </ul>
    </div>

    <section>
      <div class="flex items-center section_header bg-gray-50 justify-between">
        <div class="bg-orange-500 font-bold with_arrow  py-2">
          <div class="px-4">
            Topup Game
          </div>
        </div>
        <RouterLink class="font-semibold flex items-center text-orange" to="/c/game">
          Lihat Semua
          <ArrowRight />
        </RouterLink>
      </div>
      <div class=":uno: py-3">
        <div class=":uno: grid md:grid-cols-6 grid-cols-4">
          <div v-for="i in 8" class="p-1">
            <div style="clip-path: polygon(16% 0%, 100% 0%, 100% 84%, 84% 100%, 0% 100%, 0% 16%);">
              <img
                src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fgame%2F202526%2Fz0f7lo6pv6827grtbpaei9.jpg&w=96&q=75"
                alt="">
            </div>
          </div>
        </div>
      </div>
    </section>



    <section>
      <div class="flex section_header bg-gray-100 justify-between">
        <div class="bg-orange-500 font-bold with_arrow  py-2">
          <div class="px-4">
            Kuota & Pulsa
          </div>
        </div>
        <RouterLink class="font-semibold flex items-center text-orange" to="/c/game">
          Lihat Semua
          <ArrowRight />
        </RouterLink>
      </div>
    </section>



  </div>
</template>

<style scoped>
.with_arrow {
  background: linear-gradient(to top, orange, #d1d1d1);
  position: relative;
  color: white; /* Warna lebih gelap untuk kontras */
}

.with_arrow div {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  font-weight: bold;
}
.with_arrow::after {
  content: '';
  display: block;
  top: 0;
  right: -39px;
  clip-path: polygon(0 0, 0 0, 100% 100%, 0% 100%);
  height: 100%;
  background: linear-gradient(to top, orange, #d1d1d1);
  width: 40px;
  position: absolute;
}
</style>