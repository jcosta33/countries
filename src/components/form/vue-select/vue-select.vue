<template>
  <div class="field">
    <div v-if="config.label" class="field-label is-normal">
      <label class="label">{{ config.label }}</label>
    </div>
    <div v-if="!optionsSet" class="select is-fullwidth is-loading">
      <select>
        <option selected>{{ config.placeholder }}</option>
      </select>
    </div>
    <vSelect
      v-if="optionsSet"
      :options="options"
      :placeholder="config.placeholder"
      @input="onChange"
    />
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */

import vSelect from "vue-select";

export default {
  name: "VueSelect",
  components: {
    vSelect,
  },
  props: ["config"],
  data() {
    return { options: [], dataLoaded: false, optionsSet: false };
  },
  watch: {
    // whenever question changes, this function will run
    config(newConfig, oldConfig) {
      if (!this.dataLoaded) {
        this.dataLoaded = true;

        const options = newConfig.options.map((option) => ({
          code: option.value,
          label: option.label,
        }));

        this.options = options;
        this.optionsSet = true;
      }
    },
  },
  created() {
    this.$emit("input", this.config.value);
    this.config.error = false;
    if (this.config.onInput) {
      this.config.onInput(this.config.value);
    }

    if (this.config.options.length > 0) {
      const options = this.config.options.map((option) => ({
        code: option.value,
        label: option.label,
      }));
      this.options = options;
      this.optionsSet = true;
    }
  },
  methods: {
    onChange(value) {
      this.$emit("input", value.code);
      this.config.error = false;
      if (this.config.onInput) {
        this.config.onInput(value.code);
      }
    },
  },
};
</script>
<style lang="scss">
@import "vue-select.scss";
@import "./src/bulma/form/select";
.select.is-loading select {
  color: $grey;
}
</style>
