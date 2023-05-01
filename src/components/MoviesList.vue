<template>
  <div class="movies" v-if="movies.length > 0">
    <movies-item
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      :screenWidth="screenWidth"
      @change-movie="(movieId) => $emit('change-movie', movieId)"
    />
    <div v-if="isNextPage" class="movies__card" @click="$emit('more-movies')">
      <img class="movies__card-image" :src="AddMovie" alt="" />
      <p>View more</p>
    </div>
  </div>
  <movies-list-skeleton v-else />
</template>

<script>
import MoviesItem from './MoviesItem.vue';
import MoviesListSkeleton from './MoviesListSkeleton.vue';
import AddMovie from '@/assets/images/plus.svg';

export default {
  components: { MoviesItem, MoviesListSkeleton },
  emits: ['more-movies', 'change-movie'],
  props: {
    movies: {
      type: Array,
      required: true,
    },
    isNextPage: {
      type: Boolean,
      required: true,
    },
    screenWidth: {
      type: Number,
      default: 0,
    },
  },

  setup() {
    return {
      AddMovie,
    };
  },
};
</script>

<style lang="scss" scoped>
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, 164px);
  gap: 16px 15px;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 2px;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(73, 73, 72);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #da1617;
  }

  scrollbar-width: thin;
  scrollbar-color: #da1617 rgb(73, 73, 72);

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fill, 190px);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 190px);
    padding-right: 16px;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }

  &__card {
    width: 100%;
    height: 215px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 22px;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(240, 248, 255, 0.3);
    }

    &:active {
      background-color: rgba(240, 248, 255, 0.5);
    }

    &-image {
      margin-bottom: 12px;
    }
  }
}
</style>
