<template>
  <nuxt-link v-if="to !== null" :to="to" :class="classname" v-on="listeners">
    <slot />
  </nuxt-link>

  <a v-else-if="href !== null" :href="href" :class="classname" v-on="listeners">
    <slot />
  </a>

  <button v-else :class="classname" v-on="listeners">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue, { ComputedOptions } from 'vue';

export default Vue.extend({
  props: {
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'primary',
    },
  },

  computed: {
    listeners (): ComputedOptions<any> {
      return this.$listeners;
    },

    classname (): Array<String> {
      return [
        'inline-block',
        'px-8',
        'py-3',
        'rounded',
        'text-sm',
        'text-white',
        'uppercase',
        'text-white',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-offset-2',
        'focus:ring-offset-white',
        'text-center',
        ...this.getVariantClasses(),
      ];
    },
  },

  methods: {
    getVariantClasses (): Array<String> {
      const classes = [];

      if (this.variant === 'primary') {
        classes.push(
          'bg-primary',
          'hover:bg-primary-dark',
          'focus:ring-primary',
        );
      } else if (this.variant === 'secondary') {
        classes.push(
          'bg-secondary',
          'hover:bg-secondary-dark',
          'focus:ring-secondary',
        );
      }

      return classes;
    },
  },
});
</script>
