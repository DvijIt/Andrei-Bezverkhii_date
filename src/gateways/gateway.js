const baseUrl = 'https://my-json-server.typicode.com/moviedb-tech/movies/list';

const fetchMovies = async () => {
  const response = await fetch(baseUrl);
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

export const getMovies = async () => {
  try {
    return await fetchMovies();
  } catch (err) {
    console.error(err.message);
  }
};
