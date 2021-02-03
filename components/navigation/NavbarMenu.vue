<template>
  <ul role="menu" :class="menuClass">
    <li class="menu-header flex justify-between items-center md:hidden pb-10 w-full">
      <Logo color="#fff" />

      <button @click="close">
        <Close />
      </button>
    </li>

    <menu-item :to="localePath('/features')" :classname="[itemClass, 'border-t']" active-class="text-secondary">
      {{ $t('features') }}
    </menu-item>

    <menu-item :to="localePath('/pricing')" :classname="itemClass" active-class="text-secondary">
      {{ $t('pricing') }}
    </menu-item>

    <menu-item :to="localePath('/contact')" :classname="itemClass" active-class="text-secondary">
      {{ $t('contact') }}
    </menu-item>

    <menu-item :to="localePath('/login')" variant="secondary" classname="ml-4 hidden md:block" button>
      {{ $t('login') }}
    </menu-item>

    <menu-item :to="localePath('/login')" variant="white-outline" classname="text-xl mt-6 w-full md:hidden" button>
      {{ $t('login') }}
    </menu-item>

    <li class="mt-auto md:hidden">
      <SocialNav />
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import classnames from 'classnames';

export default Vue.extend({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    menuClass (): String {
      return classnames(
        'absolute',
        'md:relative',

        'bg-opacity-90',
        'bg-primary-dark',
        'md:bg-transparent',

        'h-full',
        'md:h-auto',

        'items-center',

        'left-0',

        'flex',
        'flex-col',
        'md:flex-row',

        'md:top-auto',

        'w-full',
        'md:w-auto',

        'px-8',
        'md:px-0',
        'py-10',
        'md:py-0',

        'transition-all',
        'md:transition-none',

        {
          '-top-full': !this.show,
          'top-0': this.show,
        },
      );
    },

    itemClass (): String {
      return classnames(
        'border-b',
        'border-opacity-10',
        'border-white',
        'md:border-none',

        'block',

        'px-4',
        'py-4',
        'md:py-0',

        '-mx-4',
        'md:mx-0',

        'text-xl',
        'md:text-sm',

        'uppercase',

        'text-center',

        'text-white',
        'hover:text-primary-dark',
        'md:text-primary-dark',

        'hover:bg-white',
        'md:hover:bg-transparent',
      );
    },
  },

  methods: {
    close () {
      this.$emit('close');
    },
  },
});
</script>
