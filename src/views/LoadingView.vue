<script setup>
import { useRouter } from 'vue-router'
import { useLoadingStore } from '../stores/loading';
import { watch } from 'vue'

const loadingStore = useLoadingStore();
const router = useRouter()

watch(() => loadingStore.isLoaded, () => {
  // Navigate to the home page with vue-router
  router.push({ name: 'home' })
})
</script>

<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>
