import axios from 'axios';

const BASE_URL = 'https://live.mocat.amifactory.network';

export const loadMovies = async (page = 1) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/movies/?page=${page - 1}`);

    return res.data;
  } catch (e) {
    return { error: 'Failed to load movies' };
  }
};

export const loadMovie = async (movieId = 1) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/movies/${movieId}`);

    return { movieData: res.data };
  } catch (e) {
    return { error: 'Failed to load movie' };
  }
};
