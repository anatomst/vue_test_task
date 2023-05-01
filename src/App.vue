<template>
  <router-view v-if="width < 900" />
  <div class="large" v-else>
    <div class="large__wrapper">
      <home-view
        :screenWidth="width"
        :selectedMovie="selectedMovie"
        @change-movie="handleChangeMovie"
      />
      <movie-view :selectedMovie="selectedMovie" :screenWidth="width" />
    </div>
  </div>
</template>

<script>
import { useBreakpoints } from '@/hooks/useBreakpoints';
import HomeView from '@/views/HomeView.vue';
import MovieView from './views/MovieView.vue';
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
export default {
  name: 'App',
  components: { HomeView, MovieView },

  setup() {
    const { width, onWidthChange } = useBreakpoints();
    const selectedMovie = ref(1);

    const handleChangeMovie = (movieId) => {
      selectedMovie.value = movieId;
    };

    watch(width, () => onWidthChange(selectedMovie));

    return { width, selectedMovie, handleChangeMovie };
  },
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';

html {
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: white;
}

body {
  background-color: #161616;
  min-height: 100vh;
}

.large {
  &__wrapper {
    @media (min-width: 1152px) {
      height: 100vh;
      display: flex;
      max-width: 1440px;
      padding: 0 60px;
      margin: 0 auto;
      flex-direction: column-reverse;
    }

    @media (min-width: 1400px) {
      padding: 0 100px;
    }
  }
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}
</style>
