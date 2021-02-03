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
        'uppercase',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-offset-2',
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
          'text-white',
          'focus:ring-offset-white',
        );
      } else if (this.variant === 'secondary') {
        classes.push(
          'bg-secondary',
          'hover:bg-secondary-dark',
          'focus:ring-secondary',
          'text-white',
          'focus:ring-offset-white',
        );
      } else if (this.variant === 'white-outline') {
        classes.push(
          'bg-transparent',
          'hover:bg-white',
          'ring-white',
          'ring-2',
          'text-white',
          'hover:text-primary',
          'focus:ring-offset-primary',
        );
      }

      return classes;
    },
  },
});
</script>
