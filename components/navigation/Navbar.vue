<template>
  <nav class="z-index-10">
    <Container class="py-10 flex items-center justify-between">
      <nuxt-link :to="localePath('/')">
        <Logo />
      </nuxt-link>

      <NavbarToggler class="md:hidden" @click="openMenu" />
      <NavbarMenu :show="showMenu" @close="closeMenu" />
    </Container>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      showMenu: false,
    };
  },

  methods: {
    openMenu () {
      this.showMenu = true;
    },

    closeMenu () {
      this.showMenu = false;
    },
  },
});
</script>
