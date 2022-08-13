<template>
  <div class="field" :class="{ 'is-horizontal': config.isHorizontal }">
    <div class="field-label is-normal" v-if="config.label">
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
    <div class="control" v-for="option in config.options" :key="option.value">
      <input
        class="is-checkradio"
        :id="`${config.id}-${option.value}`"
        type="radio"
        :name="config.name"
        :checked="option.checked"
        :disabled="config.disabled === true"
        :value="option.value"
        @change="updateValue(($event.target as any).value)"
      />
      <label :for="`${config.id}-${option.value}`">{{ option.label }}</label>
    </div>
    <span class="label-message" v-if="!config.error && config.message">
      <span class="icon">
        <i class="material-icons-outlined">info</i>
      </span>
      <span style="vertical-align: text-bottom">{{ config.message }}</span>
    </span>
    <span class="label-error" v-if="config.error">
      <span class="icon">
        <i class="material-icons-outlined">info</i>
      </span>
      <span style="vertical-align: text-bottom">{{ config.message }}</span>
    </span>
  </div>
</template>
<style lang="scss">
@import "./src/bulma/form/checkradio";
</style>
<script lang="ts">
// @ is an alias to /src
import { defineComponent, PropType, watch } from "vue";
import { IRadios } from ".";

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<IRadios>,
      required: true,
    },
    value: String,
  },

  setup(props, { emit }) {
    emit("update:modelValue", props.config.value);

    watch(
      () => props.config,
      () => {
        emit("update:modelValue", props.config.value);
      }
    );

    const updateValue = (value: string | number) => {
      emit("update:modelValue", value);
      if (props.config.error) {
        props.config.error = false;
        props.config.message = undefined;
      }
      if (props.config.onChange) {
        props.config.onChange(value);
      }
    };

    watch(
      () => props.config,
      () => {
        emit("update:modelValue", props.config.value);
      }
    );

    return { updateValue };
  },
});
</script>
