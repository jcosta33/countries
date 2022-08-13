<template>
  <div class="field" :class="{ 'is-horizontal': config.isHorizontal }">
    <label
      class="label"
      :for="`${config.id}`"
      v-if="config.label"
      style="padding: 0.55rem 1rem 0px 0px"
    >
      {{ config.label }}
      <span
        class="has-text-dark is-size-7 tooltip is-tooltip-top"
        :data-tooltip="config.info"
        v-if="config.info"
        style="vertical-align: bottom"
        >*</span
      >
    </label>
    <div class="field-body">
      <div class="control">
        <div
          class="select is-fullwidth"
          :class="{ 'is-loading': config.loading }"
        >
          <select
            @change="updateValue(($event.target as HTMLSelectElement).value)"
            :value="config.default && !modelValue ? 'default' : modelValue"
            :disabled="config.disabled === true"
          >
            <option
              v-if="config.default && !modelValue"
              value="default"
              disabled
              selected
            >
              {{ config.default }}
            </option>
            <option
              v-for="option in config.options"
              :value="option.value"
              :key="option.value"
              :selected="option.value === modelValue"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
        <span class="label-error" v-if="config.error">
          <span class="icon">
            <i class="material-icons-outlined">info</i>
          </span>
          <span style="vertical-align: text-bottom">{{ config.message }}</span>
        </span>
        <span class="label-message" v-if="!config.error && config.message">
          <span class="icon">
            <i class="material-icons-outlined">info</i>
          </span>
          <span style="vertical-align: text-bottom">{{ config.message }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// @ is an alias to /src

import { defineComponent, PropType, watch } from "vue";
import { Select } from ".";

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<Select>,
      required: true,
    },
    modelValue: [Number, String],
  },

  setup(props, { emit }) {
    emit("update:modelValue", props.config.value);

    watch(
      () => props.config,
      () => {
        emit("update:modelValue", props.config.value);
      }
    );

    const updateValue = (value: string) => {
      emit("update:modelValue", value);
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

<style>
.control {
  width: 100%;
}
</style>
