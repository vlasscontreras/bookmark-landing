<template>
  <button type="button" class="text-primary-dark focus:outline-none" :aria-label="$t('toggleMenu')" v-on="listeners">
    <Burger fill="currentColor" width="18" />
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    listeners () {
      return this.$listeners;
    },
  },
});
</script>
