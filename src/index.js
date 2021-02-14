import {app} from '@/components/app';
import {movies} from '@/components/movies';
import {favourite} from '@/components/favourite';
import '@/index.css';

const components = [movies, favourite];

document.addEventListener('DOMContentLoaded', function() {
  app('#app', {components});
});

