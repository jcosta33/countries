<script setup lang="ts">
import { useRouter } from "vue-router";
import CountryDetail from "./partials/CountryDetail.vue";
const router = useRouter();
</script>

<template>
  <section class="section countries">
    <div class="media">
      <div class="media-left">
        <button class="button is-black" type="button" @click="router.go(-1)">
          <span class="icon"
            ><i class="material-icons-outlined">arrow_back_ios</i></span
          >
        </button>
      </div>
      <div class="media-content">
        <h1 class="title is-3">Country detail</h1>
      </div>
    </div>
    <hr />
    <Suspense>
      <CountryDetail />

      <!-- loading state via #fallback slot -->
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </section>
</template>
