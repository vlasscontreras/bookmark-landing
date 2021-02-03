<template>
  <footer class="bg-primary-dark py-8">
    <Container class="gap-4 md:gap-20 grid">
      <nuxt-link :to="localePath('/')" class="mb-4 md:mb-0">
        <Logo color="white" class="mx-auto md:ml-0" />
      </nuxt-link>

      <footer-menu class="text-white text-center uppercase text-sm grid items-center gap-4 md:gap-10 md:grid-flow-col auto-cols-max justify-center md:justify-start mb-4 md:mb-0" />

      <social-nav class="justify-center md:justify-end" />
    </Container>
  </footer>
</template>

<style scoped>
@screen md {
  .container {
    grid-template-columns: auto 1fr auto;
  }
}
</style>
