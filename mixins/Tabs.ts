import Vue from 'vue';

import { toSlug } from '@/lib/util';

export default Vue.extend({
  props: {
    current: {
      type: String,
      default: null,
    },
  },

  methods: {
    /**
     * Is the given tab title the current one? If no current, set the
     * first one as current.
     *
     * @param {String}  title Tab title.
     * @param {Boolean} index Tab index.
     * @return {Boolean}
     */
    isCurrent (title: String, index: Number): Boolean {
      if (this.current) {
        return this.getId(title) === this.current;
      }

      return index === 0;
    },

    /**
     * Get a URL-safe ID for the given tab title
     *
     * @param {String}  title Tab title.
     * @return {String}
     */
    getId (title: String): String {
      return `tab-${toSlug(title)}`;
    },
  },
});
