<template>
  <li role="menuitem" class="w-full md:w-auto">
    <Button v-if="as === 'button'" v-bind="$attrs" :class="classname" @click="click">
      <slot />
    </Button>

    <a v-else-if="as === 'anchor'" v-bind="$attrs" :class="classname" @click="click">
      <slot />
    </a>

    <nuxt-link v-else v-bind="$attrs" :class="classname" @click="click">
      <slot />
    </nuxt-link>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  inheritAttrs: false,

  props: {
    classname: {
      type: [String, Array],
      required: false,
      default: '',
    },
    as: {
      type: String,
      required: false,
      default: '',
    },
  },

  methods: {
    click () {
      this.$emit('click');
    },
  },
});
</script>
