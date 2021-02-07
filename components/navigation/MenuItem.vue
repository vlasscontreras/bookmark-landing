<template>
  <li role="menuitem" class="w-full md:w-auto" :aria-labelledby="id">
    <Button v-if="is('button')" v-bind="$attrs" :id="id" :class="classname" @click="click">
      <slot />
    </Button>

    <a v-else-if="is('anchor')" v-bind="$attrs" :id="id" :class="classname" @click="click">
      <slot />
    </a>

    <nuxt-link v-else v-bind="$attrs" :id="id" :class="classname" @click="click">
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

  data () {
    return {
      id: '',
    };
  },

  mounted () {
    this.id = 'menu-item-' + Math.random().toString(36).substr(2, 9);
  },

  methods: {
    click () {
      this.$emit('click');
    },

    is (type: String) {
      return this.as === type;
    },
  },
});
</script>
