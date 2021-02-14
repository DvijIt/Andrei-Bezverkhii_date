import {App} from '@/components/App';
import {Movies} from '@/components/Movies';

const components = [Movies];

const app = new App('#app', {
  components
});

app.init();
