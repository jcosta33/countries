<script setup lang="ts">
import { useStore } from "@/store";
import { useRoute } from "vue-router";
import { useInputs, useForm } from "./";
import Select from "@/components/form/select.vue";
import Input from "@/components/form/input.vue";
import { reactive } from "vue";

let timeout = setTimeout(() => {});

const route = useRoute();
const store = useStore();

const inputs = reactive(useInputs());
const form = reactive(useForm());

const searchCountries = () => {
  clearTimeout(timeout);
  inputs.value = {
    ...inputs.value,
    value: form.value,
    loading: true,
  };
  timeout = setTimeout(async () => {
    await store.getCountries({ filter: form.filter, value: form.value });
    inputs.value = {
      ...inputs.value,
      value: form.value,
      loading: false,
    };
  }, 1000);
};

const handleFilters = async () => {
  if (form.filter === "all") {
    inputs.filters = {
      ...inputs.filters,
      value: form.filter,
      loading: true,
    };
    await store.getCountries();
    inputs.filters = {
      ...inputs.filters,
      value: form.filter,
      loading: false,
    };
  }
};

inputs.filters.onChange = handleFilters;
inputs.value.onInput = searchCountries;

const filter = route.query.filter as string;
const value = route.query.value as string;

if (filter) {
  inputs.filters.value = filter;
  inputs.value.value = value;
  await store.getCountries({ filter, value });
} else {
  await store.getCountries();
}
</script>

<template>
  <div class="columns">
    <div class="column is-3">
      <Select :config="inputs.filters" v-model="form.filter" />
    </div>
    <div class="column" v-if="form.filter !== 'all' && form.filter !== ''">
      <Input :config="inputs.value" v-model="form.value" />
    </div>
  </div>
  <p v-if="store.countries.list.length === 0">Nothing to see here!</p>
  <div class="columns is-multiline" style="margin-top: 1rem">
    <div v-for="country in store.countries.list" class="column is-4">
      <router-link :to="`country/${country.cca2}`" class="box country">
        <h4 class="title is-4">{{ country.flag }} {{ country.name.common }}</h4>
        <h5 class="subtitle">
          {{ country.subregion }},
          {{ country.region }}
        </h5>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.country {
  .subtitle {
    .icon {
      vertical-align: bottom;
    }
  }
  .tags {
    margin-top: 0.5rem;
  }
}
</style>
