<template>
  <div class="field" :class="{ 'is-horizontal': config.isHorizontal }">
    <div class="control">
      <input
        class="switch"
        :id="`${config.id}`"
        :name="config.name"
        type="checkbox"
        :checked="config.value"
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
@import "./src/bulma/form/switch";
</style>
<script lang="ts">
// @ is an alias to /src
import { defineComponent, PropType } from "vue";
import { ISwitch } from ".";

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<ISwitch>,
      required: true,
    },
    value: Boolean,
  },

  setup(props, { emit }) {
    const updateValue = (value: string | number) => {
      props.config.value = !props.config.value;
      emit("input", props.config.value);
      if (props.config.error) {
        props.config.error = false;
        props.config.message = undefined;
      }
      if (props.config.onChange) {
        props.config.onChange(value);
      }
      if (props.config.onClick) {
        props.config.onClick(value);
      }
    };
    return { updateValue };
  },
});
</script>
