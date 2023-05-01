<template>
  <div class="movie">
    <a class="movie__link" @click="onMovieClick" :class="{ scale: isSelected }">
      <img class="movie__poster" :src="movie.poster" :alt="movie.title" />
    </a>
    <div class="movie__rating">
      <img :src="Star" alt="stars" class="movie__rating-img" />
      <span class="movie__rating-imdb">{{ movie.imdb_rating }}</span>
      <span>/10</span>
    </div>
    <h2 class="movie__name">{{ movie.title }}</h2>
  </div>
</template>

<script>
import { toRefs } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import Star from '../assets/images/star.svg';

export default {
  props: {
    movie: {
      type: Object,
      required: true,
    },
    screenWidth: {
      type: Number,
      default: 0,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change-movie'],

  setup(props, { emit }) {
    const { screenWidth, movie } = toRefs(props);
    const router = useRouter();

    const onMovieClick = () => {
      if (screenWidth.value > 500) {
        emit('change-movie', movie.value.id);
      } else {
        router.push({
          name: 'movie',
          params: {
            id: movie.value.id,
          },
        });
      }
    };
    return {
      Star,
      onMovieClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.movie {
  @media (min-width: 1152px) {
    width: 120px;
  }
  &__link {
    display: block;
    width: 164px;
    height: 215px;
    margin-bottom: 14px;
    cursor: pointer;
    transition: all 0.3s;

    @media (min-width: 500px) {
      width: 190px;
    }

    @media (min-width: 1152px) {
      width: 120px;
      height: 170px;
    }
  }
  &__poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__rating {
    line-height: 19px;
    font-size: 14px;
    margin-bottom: 8px;
    color: #e2e2e2;
    display: flex;
    align-items: baseline;

    @media (min-width: 1152px) {
      font-size: 12px;
      line-height: 14px;
    }

    &-imdb {
      font-size: 16px;
      font-weight: 500;
      margin-right: 4px;
      color: #ffffff;

      @media (min-width: 1152px) {
        font-size: 14px;
        line-height: 17px;
      }
    }

    &-img {
      width: 16px;
      height: 16px;
      margin-right: 4px;
      align-self: center;

      @media (min-width: 1152px) {
        width: 12px;
        height: 12px;
      }
    }
  }

  &__name {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: left;
    text-transform: lowercase;

    &::first-letter {
      text-transform: capitalize;
    }

    @media (min-width: 1152px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
}

.scale {
  transform: scale(1.2) translateY(-5px);
}
</style>
