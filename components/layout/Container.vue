<template>
  <div class="container mx-auto px-8">
    <slot />
  </div>
</template>

<style scoped>
@screen lg {
  .container {
    max-width: 1110px;
  }
}
</style>
