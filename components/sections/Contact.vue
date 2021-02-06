<template>
  <section class="bg-primary py-16 md:py-20">
    <Container>
      <div class="text-center text-white max-w-md mx-auto">
        <div class="uppercase text-sm tracking-widest mb-8">
          {{ $t('sections.contact.headline') }}
        </div>

        <h2 class="font-medium text-2xl sm:text-3xl md:text-4xl mb-8">
          {{ $t('sections.contact.heading') }}
        </h2>

        <!-- Form -->
        <form class="grid gap-4" @submit.prevent="submit">
          <Input v-model="email" placeholder="Enter your email address" :invalid="errors.email" :disabled="loading" />

          <Button variant="secondary" :disabled="loading" class="self-start">
            {{ $t('sections.contact.button') }}
          </Button>
        </form>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      email: '',
      errors: {
        email: '',
      },
      loading: false,
    };
  },

  methods: {
    submit () {
      this.loading = true;
      this.errors.email = '';

      fetch(`https://api.trumail.io/v2/lookups/json?email=${this.email}`)
        .then(response => response.json())
        .then((response) => {
          this.loading = false;

          if (!response.validFormat) {
            this.errors.email = this.$t('errors.email') as string;
          }
        });
    },
  },
});
</script>

<style scoped>
@screen sm {
  .grid {
    grid-template-columns: 1fr auto;
  }
}
</style>
