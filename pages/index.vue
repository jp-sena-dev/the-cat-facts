<script setup lang="ts">
  import ReloadButton from '~/components/ReloadButton.vue';
  import { useFactsStore } from '~/stores/facts';

  const factsStore = useFactsStore();

  const loadingFact = ref(true);
  const currentFact = ref();

  const getNewFact = () => {
    loadingFact.value = true;
    currentFact.value = factsStore.getRandomFact();
    setTimeout(() => {
      loadingFact.value = false;
    }, 100);
  }

  onMounted(async () => {
    await factsStore.loadFacts()
    getNewFact()
  })


  const handleClick = () => {
    getNewFact();
  };

</script>

<template>
  <div class="h-screen grid grid-rows-[1fr_3fr]">
    <header class="bg-primary p-4 md:p-10 grid place-items-center">
      <h1 class="text-white text-4xl md:text-6xl font-bold text-center">THE DEFSAFE CAT FACTS PAGE</h1>
    </header>
    <main class="bg-background md:my-16 grid md:grid-cols-[2fr_3fr] gap-20 p-2 md:px-10 py-6 max-w-screen-xl mx-auto">
      <section class="h-full flex flex-col justify-around">
        <h1 class="text-2xl md:text-4xl font-semibold">CAT FACT:</h1>
        <div class="min-h-[70%] md:h-4/5 flex items-center overflow-hidden">
          <p v-if="!loadingFact" class="text-primary-variant font-semibold text-2xl xl:text-4xl text-left animate-fade-up animate-once animate-duration-1000 animate-ease-in-out">{{ currentFact }}</p>
        </div>
        <ReloadButton :onClick="handleClick" />
      </section>
      <section class="grayscale grid grid-cols-3 gap-10">
        <div class="col-span-2">
          <img class="rounded-3xl object-cover grid-rows-subgrid h-full" preload format="webp" src="@/assets/kitty1.webp" />
        </div>
        <div class="flex flex-col gap-10">
          <img class="rounded-3xl object-cover h-full" format="webp" src="@/assets/kitty2.webp" />
          <img class="rounded-3xl object-cover h-full" preload format="webp" src="@/assets/kitty3.webp" />
        </div>
      </section>
    </main>
  </div>
</template>

