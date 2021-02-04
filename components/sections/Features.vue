<template>
  <section class="py-20">
    <Container>
      <!-- Section header -->
      <div class="max-w-lg mx-auto">
        <h2 class="text-center text-primary-dark font-medium text-2xl sm:text-3xl md:text-4xl mb-6">
          Features
        </h2>

        <p class="text-center text-neutral text-lg mb-6">
          Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>

      <!-- Section Tabs -->
      <div class="tabs flex justify-center">
        <button v-for="tab in tabs" :key="`tab-${tab.id}`" :class="{ 'px-4': true, 'focus:outline-none': true, 'text-secondary': activeTab === tab.id }" @click="setActive(tab.id)">
          {{ tab.title }}
        </button>
      </div>

      <div class="content">
        <div v-for="tab in tabs" :key="`content-${tab.id}`" :class="{hidden: activeTab !== tab.id}">
          <div class="grid grid-cols-2">
            <div class="col">
              Image
            </div>

            <div class="col">
              <h3 class="text-primary-dark font-medium text-2xl sm:text-3xl md:text-4xl mb-6">
                {{ tab.subTitle }}
              </h3>

              <p class="text-neutral text-lg mb-6">
                {{ tab.content }}
              </p>

              <Button :to="tab.cta.url">
                {{ tab.cta.text }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data () {
    return {
      activeTab: 'bookmarking',
      tabs: [
        {
          id: 'bookmarking',
          title: 'Simple Bookmarking',
          subTitle: 'Bookmark in one click',
          content: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
          cta: {
            text: 'More Info',
            url: '#',
          },
        },
        {
          id: 'searching',
          title: 'Speedy Searching',
          subTitle: 'Intelligent search',
          content: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
          cta: {
            text: 'More Info',
            url: '#',
          },
        },
        {
          id: 'sharing',
          title: 'Easy Sharing',
          subTitle: 'Share your bookmarks',
          content: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
          cta: {
            text: 'More Info',
            url: '#',
          },
        },
      ],
    };
  },

  methods: {
    setActive (id: string) {
      this.activeTab = id;
    },
  },
});
</script>
