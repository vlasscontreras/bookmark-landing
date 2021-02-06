<template>
  <div class="bg-white shadow-lg p-6 rounded-xl text-center">
    <component :is="icon" class="mx-auto mb-6" />

    <h3 class="text-primary-dark font-medium text-xl mb-2">
      {{ `${$t('addTo')} ${name}` }}
    </h3>
    <div class="text-gray-400 text-sm mb-6">
      {{ `${$t('minVersion')} ${minVersion}` }}
    </div>

    <Dots class="-mx-6 mb-6" :width="false" />

    <Button class="w-full">
      {{ $t('addInstallExtension') }}
    </Button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    minVersion: {
      type: String,
      required: true,
    },
    icon: {
      required: true,
      validator: _ => true,
    },
  },
});
</script>
