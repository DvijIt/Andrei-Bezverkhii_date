import {$} from '@core/Dom';
import {getMovies} from '@/gateways/gateway';
import {getItem, setItem} from '@/gateways/storage';

export const moviesContainer = $.create('section', 'movies_container');

export const movies = () => {
  moviesList()
      .then(moviesList => {
        moviesContainer.append(moviesList);
      });
  return moviesContainer;
};

const getIds = () => {
  return JSON.parse(getItem('favouriteIds')) || [];
};

const isFavourite = (id) => {
  return getIds().includes(id);
};

const renderMoviesList = data => {
  const moviesElemList = $.create('ul').addClass('movies_list');
  const movies = data.map(movie => {
    const {id, img, name, year} = movie;
    const listElem = $.create('li');
    listElem
        .addClass('movie_item')
        .attr('id', id);
    const itemContainer = $.create('div', 'movie-item_container');
    const itemImg = $.create('img', 'movie-item_image')
        .attr('src', img).attr('alt', name);
    const itemTitle = $.create('h3', 'movie-item_title').text(name);
    const itemYear = $.create('p', 'movie-item_year').text(year);
    const itemFavourite = $.create('span', 'movie-item_favourite')
        .html(isFavourite(id) ? '&#9733;' : '&#9734;');
    itemContainer.append(itemImg);
    itemContainer.append(itemTitle);
    itemContainer.append(itemYear);
    itemContainer.append(itemFavourite);

    listElem.append(itemContainer);

    itemFavourite.on('click', () => {
      if (!isFavourite(id)) {
        setItem('favouriteIds', JSON.stringify([...getIds(), id]));
        itemFavourite.html(isFavourite(id) ? '&#9733;' : '&#9734;');
        console.log(itemFavourite.$el.innerHTML);
      } else {
        const ids = getIds().filter(elId => elId !== id);
        setItem('favouriteIds', JSON.stringify([...ids]));
        itemFavourite.html(isFavourite(id) ? '&#9733;' : '&#9734;');
        console.log(itemFavourite.$el.innerHTML);
      }
    });
    return listElem.$el;
  });

  moviesElemList.$el.append(...movies);
  return moviesElemList;
};

const moviesList = async () => {
  const data = await getMovies();
  return renderMoviesList(data);
};
