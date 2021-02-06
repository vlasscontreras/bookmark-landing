<template>
  <section class="py-16 md:py-20">
    <Container>
      <!-- Section header -->
      <div class="max-w-lg mx-auto">
        <h2 class="text-center text-primary-dark font-medium text-2xl sm:text-3xl md:text-4xl mb-6">
          Features
        </h2>

        <p class="text-center text-neutral text-lg mb-6">
          Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>

      <!-- Section Tabs -->
      <TabGroup :tabs="features" :component="featureComponent" class="text-center md:text-left" />
    </Container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import FeatureRepository from '@/services/FeatureRepository';
import FeatureContent from '@/components/Feature.vue';
import { Feature } from '@/types';

export default Vue.extend({
  props: {
    featureRepository: {
      type: FeatureRepository,
      default: () => new FeatureRepository(),
    },
  },

  data () {
    return {
      features: [] as Array<Feature>,
      featureComponent: FeatureContent,
    };
  },

  async created () {
    this.features = await this.featureRepository.all();
  },
});
</script>
