<script setup>
import { useRouter, RouterView } from 'vue-router'
import { onMounted, watch } from 'vue'
import { useLoadingStore } from './stores/loading';

const loadingStore = useLoadingStore();
const router = useRouter();

window.framework7CSSOnload = async function () {
  console.log("App.vue: framework7 CSS loaded")

  // Load Framework7 asynchronously
  const { default: Framework7 } = await import("https://cdn.jsdelivr.net/npm/framework7@8.3.3/+esm");
  var framework7App = new Framework7({
    theme: 'ios', // can be 'auto' and 'md' also
    navbar: {
      mdCenterTitle: true
    },
  });
  window.framework7App = framework7App;
  loadingStore.isLoaded = true;
}

onMounted(async () => {
  // Preload Framework7 CSS
  document.head.innerHTML += `<link rel="preload" href="https://cdn.jsdelivr.net/npm/framework7@8.3.3/framework7-bundle.min.css" crossorigin="anonymous" as="style" onload="this.onload=null;this.rel='stylesheet';framework7CSSOnload();"/>`;
})

// Wait until router is ready, then redirect to the home page if the current route is the root
watch(() => loadingStore.isLoaded, async () => {
  await router.isReady()
  console.log("App.vue: current route =", router.currentRoute)
  console.log("App.vue: current route name =", router.currentRoute.value.name)
  // Navigate to the home page with vue-router
  if (router.currentRoute.value.name == "root") {
    router.push({ name: 'home' })
  }
})
</script>

<template>
  <div class="loader-container" v-if="!loadingStore.isLoaded">
    <div class="loader"></div>
  </div>
  <RouterView v-else></RouterView>
</template>

<style scoped></style>
