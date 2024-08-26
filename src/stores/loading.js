import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const _isLoaded = ref(false)
  const isLoaded = computed(() => _isLoaded.value);
  function setIsLoaded(status) {
    _isLoaded.value = status
  }

  return { isLoaded, setIsLoaded }
})
