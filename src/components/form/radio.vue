<template>
  <div class="field" :class="{ 'is-horizontal': config.isHorizontal }">
    <div class="control">
      <input
        class="is-checkradio"
        :id="`${config.id}`"
        type="radio"
        :name="config.name"
        :value="config.value"
        :disabled="config.disabled === true"
        v-on:change="updateValue(($event.target as any).value)"
      />
      <label class="label" :for="`${config.id}`">
        {{ config.label }}
        <span
          class="has-text-dark is-size-7 tooltip is-tooltip-top"
          :data-tooltip="config.info"
          v-if="config.info"
          style="vertical-align: bottom"
          >*</span
        >
      </label>
    </div>
    <span class="label-error" v-if="config.error">{{ config.message }}</span>
  </div>
</template>
<style lang="scss">
@import "./src/bulma/form/checkradio";
</style>
<script lang="ts">
// @ is an alias to /src

import { defineComponent, PropType } from "vue";
import { IRadio } from ".";

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<IRadio>,
      required: true,
    },
    value: String,
  },
  setup(props, { emit }) {
    const updateValue = (value: string | number) => {
      emit("input", value);
      if (props.config.error) {
        props.config.error = false;
        props.config.message = undefined;
      }
      if (props.config.onChange) {
        props.config.onChange(value);
      }
    };
    return { updateValue };
  },
});
</script>
