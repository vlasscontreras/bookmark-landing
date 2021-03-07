<template>
  <div class="collapse border-b border-t border-gray-200">
    <CollapseHeading :heading="heading" :active="active" @click="toggleActive" />

    <transition name="slide">
      <div v-if="active">
        <div class="pt-3 pb-5 text-neutral leading-8">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    heading: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggleActive (collapse: string) {
      this.$emit('toggle', collapse);
    },
  },
});
</script>

<style scoped>
.slide-enter-active {
  transition-duration: 0.5s;
  transition-timing-function: ease;
}

.slide-leave-active {
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.3, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 40rem;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
