<template>
  <div class="tabs flex justify-center flex-col md:flex-row max-w-2xl mx-auto mb-12">
    <Tab v-for="(tab, index) in tabs" :key="`${tab.title}-tab`" :current="isCurrent(tab.title, index)" @click="setCurrent(tab.title)">
      {{ tab.title }}
    </Tab>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

import TabMixin from '@/mixins/Tabs';

export default (Vue as VueConstructor<Vue & InstanceType<typeof TabMixin>>).extend({
  mixins: [TabMixin],
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    current: {
      type: String,
      default: null,
    },
  },

  methods: {
    /**
     * Set the current tab
     *
     * @param {String} id Tab ID
     */
    setCurrent (title: String) {
      this.$emit('change', this.getId(title));
    },
  },
});
</script>
