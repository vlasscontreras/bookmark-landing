<template>
  <ul>
    <li>
      <a href="#features" class="hover:text-secondary">
        {{ $t('features') }}
      </a>
    </li>

    <li>
      <a href="#pricing" class="hover:text-secondary">
        {{ $t('pricing') }}
      </a>
    </li>

    <li>
      <a href="#contact" class="hover:text-secondary">
        {{ $t('contact') }}
      </a>
    </li>

    <li>
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="hover:text-secondary"
      >
        {{ locale.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  computed: {
    availableLocales () {
      return this.$i18n.locales?.filter((i: any) => i.code !== this.$i18n.locale);
    },
  },
});
</script>
