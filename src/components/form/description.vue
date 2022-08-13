<template>
  <div class="field description">
    <!-- <div class="field-label is-normal" v-if="config.label">
      <label class="label">{{ config.label }}</label>
    </div>-->
    <div
      class="content"
      v-html="config.value"
      v-if="config.type === 'description'"
    ></div>
    <hr v-if="config.type === 'label'" />
    <h6
      class="subtitle is-6"
      v-html="config.value"
      v-if="config.value && config.type === 'label'"
    ></h6>
    <a
      :href="config.value"
      target="_blank"
      class="button is-black"
      v-html="config.label"
      v-if="config.type === 'url'"
    ></a>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src

import { defineComponent, PropType } from "vue";
import { IDescription } from ".";

export default defineComponent({
  props: {
    config: {
      type: Object as PropType<IDescription>,
      required: true,
    },
  },
});
</script>
<style scoped lang="scss">
.field {
  .content {
    font-size: $size-7;
  }
}
</style>
