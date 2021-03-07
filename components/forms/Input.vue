<template>
  <div class="flex flex-col">
    <input
      type="text"
      :value="value"
      :class="classes"
      :disabled="disabled"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    >
    <div v-if="invalid" class="bg-secondary text-white text-xs italic p-1 text-left ring-secondary ring-2 rounded-b">
      {{ invalid }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  inheritAttrs: false,
  props: {
    invalid: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    listeners () {
      return this.$listeners;
    },

    classes () {
      return {
        'appearance-none': true,
        border: true,
        'border-transparent': true,
        'ring-2': true,
        'ring-secondary': this.invalid,
        'py-3': true,
        'px-4': true,
        'bg-white': true,
        'text-primary-dark': true,
        'placeholder-gray-400': true,
        'shadow-md': true,
        rounded: true,
        'text-sm': true,
        'focus:outline-none': true,
        'focus:ring-secondary': true,
        'focus:border-transparent': true,
        'pointer-events-none': this.disabled,
        'opacity-80': this.disabled,
      };
    },
  },
});
</script>
