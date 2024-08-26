<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

onMounted(async () => {
  const { default: Framework7 } = await import('https://cdn.jsdelivr.net/npm/framework7@8.3.3/+esm');
  var framework7App = new Framework7({
    theme: 'ios', // can be 'auto' and 'md' also
    navbar: {
      mdCenterTitle: true
    },
  });
  window.framework7App = framework7App;
  framework7App.navbar.size('.navbar');
})

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
