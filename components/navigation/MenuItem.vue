<template>
  <li role="menu-item">
    <Button v-if="button" v-bind="$attrs" :class="classname">
      <slot />
    </Button>

    <nuxt-link v-else v-bind="$attrs" :class="classname">
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
    button: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
