import {mount} from '@vue/test-utils';
import Component from '../src/js/Component';

describe('Loading component props', () => {

  test('accepts props', () => {
    let wrapper = mount(Component, {
      propsData: {
        active: true,
        transition: 'custom',
        isFullPage: false,
        color: 'blue',
        backgroundColor: '#ccc',
        opacity: 0.6,
        height: 100,
        width: 100,
        loader: 'dots',
        message: 'test',
        zIndex: 9999,
      },
    });

    expect(wrapper.vm.$el).toMatchSnapshot();
    wrapper.destroy();
  });

});
