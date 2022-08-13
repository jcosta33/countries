<script setup lang="ts">
import Navbar from "@/partials/Navbar.vue";
</script>

<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  .material-icons-outlined {
    font-size: 125%;
  }
}
</style>
