<template>
  <section id="features" class="py-16 md:py-20">
    <Container>
      <!-- Section header -->
      <div class="max-w-lg mx-auto">
        <h2 class="text-center text-primary-dark font-medium text-2xl sm:text-3xl md:text-4xl mb-6">
          {{ $t('sections.features.heading') }}
        </h2>

        <p class="text-center text-neutral text-lg mb-6">
          {{ $t('sections.features.blurb') }}
        </p>
      </div>

      <!-- Section Tabs -->
      <TabGroup :tabs="features" :component="featureComponent" class="text-center md:text-left" />
    </Container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import FeatureContent from '@/components/Feature.vue';

export default Vue.extend({
  data () {
    return {
      featureComponent: FeatureContent,
      features: [
        {
          title: this.$t('sections.features.content.bookmark.title'),
          heading: this.$t('sections.features.content.bookmark.heading'),
          content: this.$t('sections.features.content.bookmark.content'),
          path: '/',
          image: 'FeatureBookmark',
        },
        {
          title: this.$t('sections.features.content.search.title'),
          heading: this.$t('sections.features.content.search.heading'),
          content: this.$t('sections.features.content.search.content'),
          path: '/',
          image: 'FeatureSearch',
        },
        {
          title: this.$t('sections.features.content.share.title'),
          heading: this.$t('sections.features.content.share.heading'),
          content: this.$t('sections.features.content.share.content'),
          path: '/',
          image: 'FeatureShare',
        },
      ],
    };
  },
});
</script>
