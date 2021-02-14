import {$} from '@core/Dom';

export const app = ($el, options) => {
  const $wrapper = $.create('div', 'app_wrapper');
  const $root = $($el);
  const components = options.components || [];

  components.forEach(component => {
    const node = component();
    $wrapper.append(node.$el);
  });
  return $root.append($wrapper);
};
