import { mount } from '@vue/test-utils';
import Logo from '@/components/Logo.vue';

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo, {
      mocks: {
        $t: msg => msg,
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
