<template>
  <div class="movie" v-if="movie">
    <div class="movie__img-wrapper">
      <img class="movie__image" :src="movie.bg_picture" alt="Poster" />
    </div>
    <div class="movie__wrapper">
      <div class="movie__rating-wrapper movie__rating-wrapper--large">
        <h3 class="movie__rating-title">iMDb rating</h3>
        <div class="movie__rating">
          <img class="movie__rating-img" :src="Star" alt="star" width="20" height="20" />
          <span class="movie__rating-value">{{ movie.imdb_rating }}</span>
          /10
        </div>
      </div>
      <div class="movie__top">
        <h2 class="movie__title">
          <span class="movie__title-capitalize">
            {{ movie.title }}
          </span>
          <span class="movie__year"> &#40;{{ movie.release_year }}&#41;</span>
        </h2>
        <custom-button class="movie__top-btn" :isTrailer="true">Watch trailer</custom-button>
      </div>

      <div class="movie__main">
        <div class="movie__desc-wrapper">
          <p class="movie__description">{{ movie.description }}</p>

          <div class="movie__rating-wrapper movie__rating-wrapper--tablet">
            <h3 class="movie__rating-title">iMDb rating</h3>
            <div class="movie__rating">
              <img class="movie__rating-img" :src="Star" alt="star" width="20" height="20" />
              <span class="movie__rating-value">{{ movie.imdb_rating }}</span>
              /10
            </div>
          </div>
        </div>

        <div class="movie__info">
          <p class="movie__genres" v-if="genres">{{ genres }}</p>
          <p class="movie__mpa" v-if="movie.mpa_rating">{{ movie.mpa_rating }}</p>
          <p class="movie__duration" v-if="duration">{{ duration }}</p>
        </div>

        <div class="movie__persons-wrapper">
          <p class="movie__persons" v-if="movie.directors.length">
            {{ movie.directors.length > 1 ? 'Directors:' : 'Director:' }}
            <span class="movie__persons-name">{{ getPersons('directors') }}</span>
          </p>
          <p class="movie__persons" v-if="movie.writers.length">
            {{ movie.writers.length > 1 ? 'Writers:' : 'Writer:' }}
            <span class="movie__persons-name">{{ getPersons('writers') }}</span>
          </p>
          <p class="movie__persons" v-if="movie.stars.length">
            {{ movie.stars.length > 1 ? 'Stars:' : 'Star:' }}
            <span class="movie__persons-name">{{ getPersons('stars') }}</span>
          </p>
        </div>
      </div>

      <div class="movie__footer">
        <div class="movie__rating-wrapper movie__rating-wrapper--hide">
          <h3 class="movie__rating-title">iMDb rating</h3>
          <div class="movie__rating">
            <img class="movie__rating-img" :src="Star" alt="star" width="20" height="20" />
            <span class="movie__rating-value">{{ movie.imdb_rating }}</span>
            /10
          </div>
        </div>
        <custom-button :isTrailer="true">Watch trailer</custom-button>
      </div>
    </div>
    <router-link to="/" class="arrow-link">
      <img width="22" height="14" :src="Arrow" alt="Arrow left" />
    </router-link>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { computed, onMounted, ref, toRefs, watch } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { loadMovie } from '../api/movie';
import Star from '../assets/images/star.svg';
import Arrow from '../assets/images/arrow.svg';
import CustomButton from '@/components/CustomButton.vue';
import { useRedirectTo } from '@/hooks/useRedirectTo';

export default {
  components: {
    CustomButton,
  },
  props: {
    selectedMovie: {
      type: Number,
      default: 1,
    },
    screenWidth: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    const route = useRoute();
    const movie = ref();
    const { selectedMovie, screenWidth } = toRefs(props);
    const { redirectTo } = useRedirectTo();

    const getMovie = async () => {
      const { movieData, error } = await loadMovie(
        screenWidth.value > 900 ? selectedMovie.value : route.params.id,
      );

      if (error) {
        redirectTo('not-found');
        return;
      }

      movie.value = movieData;
    };

    onMounted(getMovie);

    watch(selectedMovie, () => getMovie());

    const genres = computed(() => {
      return movie.value.genres.map((genre) => genre.title).join(', ');
    });

    const duration = computed(() => {
      const duration = +movie.value.duration;
      const hours = Math.trunc(duration / 60);
      const minutes = duration - hours * 60;

      let result = hours ? `${hours}h ` : '';
      result += minutes ? `${minutes}m` : '';

      return result.trim();
    });

    const getPersons = (personType) => {
      return movie.value[personType]
        .map((person) => `${person.first_name} ${person.last_name}`)
        .join(', ');
    };

    return {
      movie,
      genres,
      duration,
      getPersons,
      Star,
      Arrow,
    };
  },
};
</script>

<style lang="scss" scoped>
.movie {
  position: relative;

  @media (min-width: 900px) {
    padding-left: 450px;
  }

  @media (min-width: 1152px) {
    padding-left: 0;
    margin-bottom: 50px;
  }

  &__wrapper {
    position: absolute;
    top: 344px;
    padding: 0 24px 24px;
    line-height: 22px;

    @media (min-width: 500px) {
      top: 695px;
    }

    @media (min-width: 900px) {
      position: static;
    }

    @media (min-width: 1152px) {
      padding: 0;
    }
  }

  &__top {
    margin-bottom: 24px;
    position: relative;
    @media (min-width: 500px) {
      margin-bottom: 30px;
    }

    @media (min-width: 1152px) {
      margin-bottom: 12px;
    }

    &-btn {
      display: none;

      @media (min-width: 500px) {
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
      }

      @media (min-width: 1152px) {
        display: none;
      }
    }
  }

  &__img-wrapper {
    width: 100%;
    height: 500px;
    position: relative;

    @media (min-width: 500px) {
      height: 785px;
    }

    @media (min-width: 900px) {
      height: 390px;
    }

    @media (min-width: 1152px) {
      position: fixed;
      height: 100vh;
      left: 0;
      top: 0;
      z-index: -1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(180deg, rgba(22, 22, 22, 0) 47.99%, #161616 100%);
      @media (min-width: 1152px) {
        background: linear-gradient(
          180deg,
          rgba(22, 22, 22, 0) 0%,
          rgba(22, 22, 22, 0.89) 67.19%,
          #161616 100%
        );
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    font-family: 'Krona One', sans-serif;
    font-size: 28px;
    line-height: 35px;
    text-transform: lowercase;

    &::first-letter {
      text-transform: capitalize;
    }

    @media (min-width: 500px) {
      font-size: 40px;
      line-height: 50px;
      padding-right: 200px;
    }

    @media (min-width: 1152px) {
      padding-right: 0;
      max-width: 500px;
    }
  }

  &__year {
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-left: 8px;
  }

  &__main {
    position: relative;
  }

  &__desc-wrapper {
    position: relative;
    margin-bottom: 24px;

    @media (min-width: 500px) {
      margin-bottom: 16px;
    }

    @media (min-width: 1152px) {
      max-width: 500px;
      margin-bottom: 12px;
    }
  }

  &__description {
    @media (min-width: 500px) {
      padding-right: 120px;
    }

    @media (min-width: 1152px) {
      padding-right: 0;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-bottom: 24px;

    @media (min-width: 500px) {
      margin-bottom: 50px;
    }

    @media (min-width: 1152px) {
      margin-bottom: 20px;
    }
  }

  &__genres,
  &__mpa {
    position: relative;
    margin-right: 24px;

    @media (min-width: 500px) {
      margin-right: 40px;
    }
  }

  &__genres::after,
  &__mpa::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 50%;
    height: 10px;
    width: 1px;
    background: #a6a6a6;
    transform: translateY(-50%);
    @media (min-width: 500px) {
      right: -20px;
    }
  }

  &__persons-wrapper {
    @media (min-width: 1152px) {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  &__persons {
    margin-bottom: 8px;
    color: #e2e2e2;

    @media (min-width: 1152px) {
      max-width: 440px;
    }

    &-name {
      font-weight: 500;
      color: white;
    }
  }

  &__persons:last-of-type {
    margin-bottom: 38px;

    @media (min-width: 500px) {
      margin-bottom: 0;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: 500px) {
      display: none;
    }

    @media (min-width: 1152px) {
      display: block;
    }
  }

  &__rating-wrapper {
    color: #e2e2e2;

    @media (min-width: 500px) {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    &--hide {
      @media (min-width: 1152px) {
        display: none;
      }
    }

    &--tablet {
      display: none;

      @media (min-width: 500px) {
        display: flex;
        position: absolute;
        right: 0;
        top: 0;
      }

      @media (min-width: 1152px) {
        display: none;
      }
    }

    &--large {
      display: none;

      @media (min-width: 1152px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 17px;
      }
    }
  }

  &__rating-title {
    font-weight: 500;
    margin-bottom: 8px;
  }

  &__rating-value {
    font-size: 28px;
    font-weight: 500;
    margin-left: 7px;
    line-height: 33px;
    color: white;
  }
}

.arrow-link {
  position: fixed;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: 46px;
  left: 26px;
  transition: background-color 0.2s;

  @media (min-width: 900px) {
    display: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.54);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
