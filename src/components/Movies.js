import {$} from '@core/dom';
import {getMovies} from '@/gateways/gateway';

// class Movies {
//   constructor() {
//     this.$root = $.create('div', 'movies_container');
//     this.movies = [];
//   }
//
//
// }


const Movies = () => {
  const moviesContainer = $.create('div', 'movies_container');
  moviesList()
      .then(moviesList => {
        moviesContainer.append(moviesList);
      });
  return moviesContainer;
};

const renderMoviesList = data => {
  const moviesElemList = $.create('ul');
  const movies = data.map(movie => {
    const listElem = $.create('li');
    listElem.text(movie.name);
    return listElem.$el;
  });

  moviesElemList.$el.append(...movies);
  return moviesElemList;
};

const moviesList = async () => {
  const data = await getMovies();
  return renderMoviesList(data);
};

export {Movies};
