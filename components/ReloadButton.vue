<script setup lang="ts">
  import { ref } from 'vue';

  const { onClick } = defineProps<{ onClick: () => void }>();
  const loadingAnimation = ref(false);

  const handleClick = () => {
    loadingAnimation.value = true;
    onClick()
    setTimeout(() => {
      loadingAnimation.value = false;
    }, 500);
  }
</script>

<template>
  <button
    @click="handleClick()"
    class="bg-primary-variant rounded-md p-2 font-bold text-white w-full md:w-80 md:text-xl md:p-4 flex gap-3 items-center"
  >
    <img
      src="@/assets/icons/reload.svg"
      width="25"
      class="text-white"
      :class="loadingAnimation && 'animate-once animate-spin animate-duration-500'"
    />
      GET A RANDOM CAT FACT
  </button>
</template>

