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
        >
          *
        </span>
      </label>
    </div>
    <div class="control" v-for="(option, i) in config.options" :key="i">
      <input
        class="is-checkradio"
        :id="`checkbox-${config.id}_${i}`"
        :name="`${config.id}_${i}`"
        type="checkbox"
        :checked="option.checked"
        :value="option.checked ? 'on' : 'off'"
        v-on:change="updateValue($event.target as any, i)"
      />
      <label :for="`checkbox-${config.id}_${i}`">{{ option.label }}</label>
    </div>
    <span class="label-message" v-if="!config.error && config.message">
      <span class="icon">
        <i class="material-icons-outlined">info</i>
      </span>
      <span style="vertical-align: text-bottom">
        {{ config.message }}
      </span>
    </span>
    <span class="label-error" v-if="config.error">
      <span class="icon">
        <i class="material-icons-outlined">info</i>
      </span>
      <span style="vertical-align: text-bottom">
        {{ config.message }}
      </span>
    </span>
  </div>
</template>

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
    value: Array,
  },
  setup(props, { emit }) {
    emit("update:modelValue", props.config.options);

    watch(
      () => props.config,
      () => {
        emit("input", props.config.options);
      }
    );

    const updateValue = ($target: HTMLInputElement, i: number): void => {
      const { options } = props.config;
      if (props.config.error) {
        props.config.error = false;
        props.config.message = undefined;
      }
      if ($target.value === "on") {
        $target.value = "off";
      } else {
        $target.value = "on";
      }
      options[i].checked = $target.value === "on";
      if (props.config.onChange) {
        props.config.onChange(options);
      }
      emit("update:modelValue", options);
    };
    return { updateValue };
  },
});
</script>
