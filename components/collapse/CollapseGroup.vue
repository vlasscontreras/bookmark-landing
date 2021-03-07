<template>
  <div class="collapse-group">
    <Collapse v-for="collapse in collapses" :key="collapse.heading" :active="isActive(collapse.heading)" :heading="collapse.heading" @toggle="toggleActive(collapse.heading)">
      {{ collapse.content }}
    </Collapse>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    collapses: {
      type: Array,
      default: () => [],
    },
  },

  data () {
    return {
      active: '',
    };
  },

  methods: {
    isActive (collapse: string) {
      return collapse === this.active;
    },

    toggleActive (collapse: string) {
      this.active = this.isActive(collapse) ? '' : collapse;
    },
  },
});
</script>
