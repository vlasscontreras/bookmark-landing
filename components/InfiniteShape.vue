<template>
  <div class="infinite-shape absolute" />
</template>

<style scoped>
.infinite-shape {
  border-radius: 100rem 0 0 100rem;
  height: 99%;
  width: 100vw;
}

@screen md {
  .infinite-shape {
    height: 91%;
  }
}
</style>
