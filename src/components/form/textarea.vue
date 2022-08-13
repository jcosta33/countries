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
    <div class="field-body">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            type="text"
            :placeholder="config.placeholder"
            :value="config.value"
            :maxlength="config.maxLength ? config.maxLength : 1000"
            :disabled="config.disabled === true"
            v-on:input="updateValue(($event.target as any).value)"
          ></textarea>

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
@import "./src/bulma/form/input-textarea";
</style>
<script lang="ts">
// @ is an alias to /src

import { defineComponent, PropType } from "vue";
import { ITextarea } from ".";

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<ITextarea>,
      required: true,
    },
    value: String,
  },

  setup(props, { emit }) {
    const updateValue = (value: string | number) => {
      if (props.config.error) {
        props.config.error = false;
        props.config.message = undefined;
      }
      if (props.config.onInput) {
        props.config.onInput(value);
      }
      emit("input", value);
    };
    return { updateValue };
  },
});
</script>
