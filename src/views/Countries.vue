<script setup lang="ts">
import CountryList from "./partials/CountryList.vue";
</script>

<template>
  <section class="section countries">
    <h1 class="title is-1">Countries</h1>
    <h3 class="subtitle">Just keep away from France</h3>
    <Suspense>
      <CountryList />

      <!-- loading state via #fallback slot -->
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </section>
</template>
