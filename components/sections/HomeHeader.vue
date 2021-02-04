<template>
  <section>
    <Container class="grid md:grid-cols-2 py-10 xl:py-20 items-center gap-24 md:gap-16 lg:gap-24">
      <!-- Illustration Column -->
      <div class="md:order-2 relative">
        <div class="hero-shape bg-primary absolute left-1/4 md:left-1/3 top-11 md:top-36" />
        <HeroGraphic class="relative max-w-full md:max-w-none shadow-2xl rounded-3xl overflow-visible" />
      </div>

      <!-- Text & CTA Column -->
      <div class="col text-center md:text-left">
        <h1 class="text-primary-dark font-medium text-3xl sm:text-4xl md:text-5xl mb-6">
          A Simple Bookmark Manager
        </h1>

        <p class="text-neutral text-lg mb-6">
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>

        <!-- Buttons -->
        <div class="grid grid-flow-col gap-4 justify-center md:justify-start">
          <Button class="px-3 sm:px-7" no-x-padding>
            Get it on Chrome
          </Button>

          <Button variant="light" class="px-3 sm:px-7" no-x-padding>
            Get it on Firefox
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped>
.hero-shape {
  border-radius: 100rem 0 0 100rem;
  height: 99%;
  width: 100vw;
}

@screen md {
  .hero-shape {
    height: 91%;
  }
}
</style>
