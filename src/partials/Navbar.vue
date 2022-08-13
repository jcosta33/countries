<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <span class="navbar-item">
          <img src="@/assets/logo.png" />
        </span>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="isActive = !isActive"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': isActive }"
      >
        <div class="navbar-start">
          <router-link to="/" class="navbar-item"> Home </router-link>
          <router-link to="/countries" class="navbar-item">
            Countries
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <button type="button" class="button is-primary">
              <span class="icon"
                ><i class="material-icons-outlined">radio_button_unchecked</i></span
              >
              <span>Meaningless button!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: { showNavigation: Boolean },
  data() {
    return {
      isActive: false,
    };
  },
  watch: {
    $route() {
      this.isActive = false;
    },
  },
});
</script>
<style lang="scss"></style>
