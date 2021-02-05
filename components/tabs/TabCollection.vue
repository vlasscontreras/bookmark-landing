<template>
  <div class="tabs flex justify-center flex-col md:flex-row max-w-2xl mx-auto mb-12">
    <Tab v-for="tab in tabs" :key="tab.id" :current="tab.id === current" @click="setCurrent(tab.id)">
      {{ tab.title }}
    </Tab>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
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
    setCurrent (id: String) {
      this.$emit('change', id);
    },
  },
});
</script>
