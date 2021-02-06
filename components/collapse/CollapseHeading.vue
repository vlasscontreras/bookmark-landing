<template>
  <div class="collapse-heading">
    <div :class="classes" v-on="listeners">
      <span>{{ heading }}</span>

      <Arrow :class="arrowClasses" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    heading: {
      type: String,
      default: '',
    },
    active: {
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
        flex: true,
        'items-center': true,
        'justify-between': true,
        'cursor-pointer': true,
        'py-5': true,
        'hover:text-secondary': true,
        'text-lg': true,
        'text-primary-dark': true,
      };
    },

    arrowClasses () {
      return {
        'text-primary': !this.active,
        'text-secondary': this.active,
        transform: this.active,
        'rotate-180': this.active,
        'mx-5': true,
        arrow: true,
      };
    },
  },
});
</script>

<style scoped>
.arrow {
  min-width: 18px;
}
</style>
