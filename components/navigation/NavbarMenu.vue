<template>
  <ul role="menu" :class="menuClass">
    <li role="menuitem" class="menu-header flex justify-between items-center md:hidden pb-10 w-full">
      <Logo color="#fff" />

      <button type="button" :aria-label="$t('closeMenu')" @click="close">
        <Close />
      </button>
    </li>

    <menu-item href="#features" :classname="[itemClass, 'border-t']" active-class="md:text-secondary" as="anchor" @click="close">
      {{ $t('features') }}
    </menu-item>

    <menu-item href="#pricing" :classname="itemClass" active-class="md:text-secondary" as="anchor" @click="close">
      {{ $t('pricing') }}
    </menu-item>

    <menu-item href="#contact" :classname="itemClass" active-class="md:text-secondary" as="anchor" @click="close">
      {{ $t('contact') }}
    </menu-item>

    <menu-item
      :to="localePath('/')"
      variant="secondary"
      classname="ml-4 hidden md:block"
      as="button"
      @click="close"
    >
      {{ $t('login') }}
    </menu-item>

    <menu-item
      :to="localePath('/')"
      variant="white-outline"
      classname="text-xl mt-6 w-full md:hidden"
      as="button"
      @click="close"
    >
      {{ $t('login') }}
    </menu-item>

    <li role="menuitem" class="mt-auto md:hidden">
      <social-nav class="justify-center" />
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
        'fixed',
        'md:relative',

        'bg-opacity-95',
        'bg-primary-dark',
        'md:bg-transparent',

        'h-screen',
        'md:h-auto',

        'items-center',

        'left-0',

        'flex',
        'flex-col',
        'md:flex-row',

        'md:top-auto',

        'w-screen',
        'md:w-auto',

        'px-8',
        'md:px-0',
        'py-10',
        'md:py-0',

        'transition-all',
        'md:transition-none',

        'uppercase',

        {
          '-top-screen-y': !this.show,
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

        'text-center',

        'text-white',
        'hover:text-primary-dark',
        'md:text-primary-dark',
        'md:hover:text-secondary',

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
