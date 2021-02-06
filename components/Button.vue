<template>
  <nuxt-link v-if="to !== null" :to="to" :class="classname" v-on="listeners" :disabled="disabled">
    <slot />
  </nuxt-link>

  <a v-else-if="href !== null" :href="href" :class="classname" v-on="listeners" :disabled="disabled">
    <slot />
  </a>

  <button v-else :class="classname" v-on="listeners" :disabled="disabled">
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
    disabled: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
    },
    noXPadding: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    listeners (): ComputedOptions<any> {
      return this.$listeners;
    },

    classname (): Object {
      return {
        'inline-block': true,
        'font-medium': true,
        'py-3': true,
        rounded: true,
        'text-sm': true,
        'focus:outline-none': true,
        'focus:ring-2': true,
        'focus:ring-offset-2': true,
        'text-center': true,
        'shadow-lg': true,
        'px-7': !this.noXPadding,
        'pointer-events-none': this.disabled,
        'opacity-80': this.disabled,

        // Primary.
        'bg-primary': this.isVariant(['primary']),
        'hover:bg-primary-dark': this.isVariant(['primary']),
        'focus:ring-primary-dark': this.isVariant(['primary']),

        // Secondary.
        'bg-secondary': this.isVariant(['secondary']),
        'hover:bg-secondary-dark': this.isVariant(['secondary']),
        'focus:ring-secondary': this.isVariant(['secondary']),

        // Light.
        'bg-gray-100': this.isVariant(['light']),
        'hover:bg-gray-200': this.isVariant(['light']),
        'focus:ring-gray-100': this.isVariant(['light']),
        'text-gray-600': this.isVariant(['light']),

        // Outline.
        'bg-transparent': this.isVariant(['white-outline']),
        'hover:bg-white': this.isVariant(['white-outline']),
        'ring-white': this.isVariant(['white-outline']),
        'ring-2': this.isVariant(['white-outline']),
        'hover:text-primary-dark': this.isVariant(['white-outline']),
        'focus:ring-offset-primary-dark': this.isVariant(['white-outline']),

        // General, used by one or more variant.
        'text-white': this.isVariant(['primary', 'secondary', 'white-outline']),
        'focus:ring-offset-white': this.isVariant(['primary', 'secondary', 'light']),
      };
    },
  },

  methods: {
    isVariant (variants: Array<String>): Boolean {
      return variants.includes(this.variant);
    },
  },
});
</script>
