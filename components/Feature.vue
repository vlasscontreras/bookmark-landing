<template>
  <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
    <div class="col relative">
      <InfiniteShape class="bg-primary right-1/4 md:right-1/3 top-11 md:top-36" direction="left" />
      <component :is="content.image" class="relative max-w-full mx-auto" />
    </div>

    <div class="col">
      <h3 class="text-primary-dark font-medium text-2xl sm:text-3xl md:text-4xl mb-6">
        {{ content.heading }}
      </h3>

      <p class="text-neutral text-lg mb-6">
        {{ content.content }}
      </p>

      <Button :to="content.path">
        {{ $t('moreInfo') }}
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import FeatureBookmark from '@/components/illustrations/FeatureBookmark.vue';
import FeatureSearch from '@/components/illustrations/FeatureSearch.vue';
import FeatureShare from '@/components/illustrations/FeatureShare.vue';

export default Vue.extend({
  components: {
    FeatureBookmark,
    FeatureSearch,
    FeatureShare,
  },

  props: {
    content: {
      type: Object,
      required: true,
    },
  },
});
</script>
