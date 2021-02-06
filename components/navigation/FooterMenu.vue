<template>
  <ul>
    <li>
      <nuxt-link :to="localePath('/')" active-class="text-secondary">
        {{ $t('features') }}
      </nuxt-link>
    </li>

    <li>
      <nuxt-link :to="localePath('/')" active-class="text-secondary">
        {{ $t('pricing') }}
      </nuxt-link>
    </li>

    <li>
      <nuxt-link :to="localePath('/')" active-class="text-secondary">
        {{ $t('contact') }}
      </nuxt-link>
    </li>

    <li>
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
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
