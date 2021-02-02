<template>
  <nuxt-link v-if="to !== null" :to="to" :class="classname">
    <slot />
  </nuxt-link>

  <a v-else-if="href !== null" :href="href" :class="classname">
    <slot />
  </a>

  <button v-else :class="classname">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import classnames from 'classnames';

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
    classname (): string {
      return classnames(
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
        this.getVariantClasses(),
      );
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
