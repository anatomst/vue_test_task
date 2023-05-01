<template>
  <div class="home">
    <div class="home__container">
      <h1 class="app__title">Popular <span class="app__title--red">series</span></h1>
      <movies-list
        :movies="movies"
        :isNextPage="isNextPage"
        @more-movies="getMovies"
        :screenWidth="screenWidth"
        @change-movie="(movieId) => $emit('change-movie', movieId)"
      />
    </div>
    <movies-carousel
      v-if="screenWidth >= 1152"
      @change-movie="(movieId) => $emit('change-movie', movieId)"
      :selectedMovie="selectedMovie"
      :movies="movies"
      :screenWidth="screenWidth"
      :isNextPage="isNextPage"
      :getMovies="getMovies"
    />
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { loadMovies } from '../api/movie';
import { onMounted } from '@vue/runtime-core';
import MoviesList from '@/components/MoviesList.vue';
import { useRedirectTo } from '@/hooks/useRedirectTo';
import MoviesCarousel from '@/components/MoviesCarousel.vue';

export default {
  name: 'HomeView',
  components: { MoviesList, MoviesCarousel },
  props: {
    screenWidth: { type: Number, default: 0 },
    selectedMovie: { type: Number, default: 1 },
  },
  emits: ['change-movie'],
  setup() {
    const movies = ref([]);
    const page = ref(1);
    const isNextPage = ref(true);
    const { redirectTo } = useRedirectTo();

    const getMovies = async () => {
      const { results, pages, error } = await loadMovies(page.value);

      if (error) {
        redirectTo('not-found');
        return;
      }

      if (pages > page.value) {
        page.value += 1;
      } else {
        isNextPage.value = false;
      }

      movies.value = [...movies.value, ...results];
    };

    onMounted(getMovies);

    return {
      movies,
      isNextPage,
      getMovies,
    };
  },
};
</script>

<style lang="scss" scoped>
.selected {
  transform: scale(1.2);
}
.home {
  @media (min-width: 900px) {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }

  @media (min-width: 1152px) {
    position: initial;
  }

  &__container {
    max-width: 1440px;
    width: 100%;
    padding: 28px 16px;
    margin: 0 auto;
    position: relative;

    @media (min-width: 900px) {
      height: 100vh;
      padding: 40px 16px;
    }

    @media (min-width: 1152px) {
      display: none;
    }
  }
}

.app__title {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 20px;

  @media (min-width: 500px) {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 24px;
  }

  @media (min-width: 900px) {
    display: none;
  }

  &--red {
    color: #da1617;
  }
}
</style>
