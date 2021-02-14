import {$} from '@core/Dom';

export class App {
  constructor($root, options) {
    this.$root = $($root);
    this.components = options.components || [];
  }
  init() {
    this.components.forEach(component => {
      const node = component();
      this.$root.append(node.$el);
    });
  };
}
