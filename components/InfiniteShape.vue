<template>
  <div :class="{'infinite-shape': true, 'absolute': true, 'shape-left': direction === 'left'}" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    direction: {
      type: String,
      default: 'right',
      validator: (value) => {
        return ['left', 'right'].includes(value);
      },
    },
  },
});
</script>

<style scoped>
.infinite-shape {
  height: 99%;
  width: 100vw;
}

.infinite-shape:not(.shape-left) {
  border-radius: 100rem 0 0 100rem;
}

.infinite-shape.shape-left {
  border-radius: 0 100rem 100rem 0;
}

@screen md {
  .infinite-shape {
    height: 91%;
  }
}
</style>
