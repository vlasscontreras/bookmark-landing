<template>
  <button :class="classes" v-on="listeners">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    current: {
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
        'flex-grow': true,
        'rounded-none': true,
        'p-6': true,
        'focus:outline-none': true,
        'border-t': true,
        'md:border-t-0': true,
        'border-b': true,
        'border-gray-200': true,
        'text-gray-500': !this.current,
        'text-gray-700': this.current,
        relative: true,
        current: this.current,
      };
    },
  },
});
</script>

<style scoped>
.current::after {
  background-color: theme('colors.secondary.DEFAULT');
  bottom: 0;
  content: '';
  height: 4px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 50%;
}

@screen md {
  .current::after {
    width: 100%;
  }
}
</style>
