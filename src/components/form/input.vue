<template>
  <div class="field" :class="{ 'is-horizontal': config.isHorizontal }">
    <label
      class="label"
      :for="`${config.id}`"
      v-if="config.label"
      style="padding: 0.55rem 1rem 0 0"
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
      <div class="field">
        <div
          class="control"
          :class="{
            'has-icons-left': config.icon,
            'is-loading': config.loading,
          }"
        >
          <input
            class="input"
            :name="config.name"
            :type="config.type"
            :placeholder="config.placeholder"
            :disabled="config.disabled === true"
            :maxlength="config.maxLength ? config.maxLength : 500"
            :max="config.maxValue ? config.maxValue : 500"
            :value="modelValue"
            @focus="onFocus"
            @blur="onBlur"
            @input="($event) => updateValue(($event.target as HTMLInputElement).value, $event)"
          />
          <span class="icon is-small is-left" v-if="config.icon">
            <i class="material-icons-outlined">{{ config.icon }}</i>
          </span>

          <span class="label-message" v-if="!config.error && config.message">
            <span class="icon">
              <i class="material-icons-outlined">info</i>
            </span>
            <span style="vertical-align: text-bottom">{{
              config.message
            }}</span>
          </span>

          <span class="label-error" v-if="config.error">
            <span class="icon">
              <i class="material-icons-outlined">info</i>
            </span>
            <span style="vertical-align: text-bottom">{{
              config.message
            }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.field {
  max-width: 100%;
}
</style>
<script lang="ts">
// @ is an alias to /src
import { defineComponent, PropType, reactive, watch } from "vue";

import { IInput } from ".";

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<IInput>,
      required: true,
    },
    modelValue: [Number, String, Object, File],
  },

  setup(props, { emit }) {
    const state = reactive({
      prevValue: "",
      value: props.config.value,
    });

    emit("update:modelValue", props.config.value);

    watch(
      () => props.config,
      () => {
        emit("update:modelValue", props.config.value);
      }
    );

    const onFocus = (e: Event): void => {
      if (props.config.onFocus) {
        props.config.onFocus(e);
      }
    };

    const onBlur = (): void => {
      if (props.config.onBlur) {
        props.config.onBlur();
      }
    };

    const updateValue = (value: string, $event: Event): void => {
      if (props.config.error) {
        props.config.error = false;
        props.config.message = undefined;
      }
      if (
        !props.config.maxValue ||
        props.config.maxValue > parseInt(value, 10)
      ) {
        state.prevValue = value;
        if (props.config.type === "number") {
          emit("update:modelValue", parseInt(value, 10));
        } else {
          emit("update:modelValue", value);
        }
        if (props.config.onInput) {
          props.config.onInput(value);
        }
      } else if (value && props.config.maxValue && $event.target) {
        // eslint-disable-next-line no-param-reassign
        ($event.target as HTMLInputElement).value = state.prevValue;
      }
    };

    return {
      onBlur,
      updateValue,
      onFocus,
      state,
    };
  },
});
</script>
