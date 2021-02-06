<template>
  <div class="tab-group">
    <TabCollection :tabs="tabs" :current="current" @change="setCurrent" />
    <TabContentCollection :tabs="tabs" :current="current" :component="component" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    component: {
      required: true,
      validator: _ => true,
    },
  },

  data () {
    return {
      current: '',
    };
  },

  methods: {
    setCurrent (id: string) {
      this.current = id;
    },
  },
});
</script>
