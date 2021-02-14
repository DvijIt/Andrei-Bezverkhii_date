import {$} from '@core/Dom';

export const favourite = () => {
  const favouriteContainer = $
      .create('aside', 'favourite_container')
      .html('<h2>Aside</h2>');

  return favouriteContainer;
};
