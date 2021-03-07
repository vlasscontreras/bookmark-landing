<template>
  <div class="tab-content">
    <div v-for="(tab, index) in tabs" :key="tab.title" :class="{hidden: !isCurrent(tab.title, index, 'tab')}">
      <component :is="component" :content="tab" />
    </div>
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
    component: {
      required: true,
      validator: _ => true,
    },
  },
});
</script>
