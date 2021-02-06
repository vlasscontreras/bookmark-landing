<template>
  <section class="py-16 md:py-20">
    <Container>
      <!-- Section header -->
      <div class="max-w-lg mx-auto">
        <h2 class="text-center text-primary-dark font-medium text-2xl sm:text-3xl md:text-4xl mb-6">
          {{ $t('sections.faq.heading') }}
        </h2>

        <p class="text-center text-neutral text-lg mb-12">
          {{ $t('sections.faq.blurb') }}
        </p>

        <!-- Collapsible -->
        <CollapseGroup :collapses="faqs" />
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      faqs: [
        {
          heading: this.$t('sections.faq.content[0].heading'),
          content: this.$t('sections.faq.content[0].content'),
        },
        {
          heading: this.$t('sections.faq.content[1].heading'),
          content: this.$t('sections.faq.content[1].content'),
        },
        {
          heading: this.$t('sections.faq.content[2].heading'),
          content: this.$t('sections.faq.content[2].content'),
        },
        {
          heading: this.$t('sections.faq.content[3].heading'),
          content: this.$t('sections.faq.content[3].content'),
        },
      ],
    };
  },
});
</script>
