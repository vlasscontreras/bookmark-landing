<template>
  <section class="py-16 md:py-20">
    <Container>
      <!-- Section header -->
      <div class="max-w-lg mx-auto">
        <h2 class="text-center text-primary-dark font-medium text-2xl sm:text-3xl md:text-4xl mb-6">
          Download the extension
        </h2>

        <p class="text-center text-neutral text-lg mb-12">
          We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
        </p>
      </div>

      <!-- Browsers -->
      <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl">
        <div class="col">
          <BrowserExtension name="Chrome" min-version="62" :icon="chrome" class="max-w-xs mx-auto" />
        </div>

        <div class="col md:mt-10">
          <BrowserExtension name="Firefox" min-version="55" :icon="firefox" class="max-w-xs mx-auto" />
        </div>

        <div class="col md:mt-20">
          <BrowserExtension name="Opera" min-version="46" :icon="opera" class="max-w-xs mx-auto" />
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import GoogleChrome from '@/components/icons/GoogleChrome.vue';
import Firefox from '@/components/icons/Firefox.vue';
import Opera from '@/components/icons/Opera.vue';

export default Vue.extend({
  data () {
    return {
      chrome: GoogleChrome,
      firefox: Firefox,
      opera: Opera,
    };
  },
});
</script>
