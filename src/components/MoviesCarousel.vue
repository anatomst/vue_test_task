<template>
  <div class="slider" v-if="movies.length > 0">
    <swiper @swiper="onSwiper" :slides-per-view="7" :space-between="24">
      <swiper-slide v-for="movie in movies" :key="movie.id">
        <movies-item
          :movie="movie"
          :screenWidth="screenWidth"
          :isSelected="selectedMovie === movie.id"
          @change-movie="(movieId) => $emit('change-movie', movieId)"
        />
      </swiper-slide>
      <swiper-slide v-if="isNextPage">
        <div class="movies__card" @click="onMoreMovies">
          <img class="movies__card-image" :src="AddMovie" alt="" />
          <p>View more</p>
        </div>
      </swiper-slide>
    </swiper>
    <button
      @click="onSlideNext"
      class="slider__btn slider__btn--right"
      :class="{ disabled: isSliderEnd }"
    >
      <img :src="Arrow" alt="Arrow-left" class="slider__btn-image" />
    </button>
    <button
      @click="onSlidePrev"
      class="slider__btn slider__btn--left"
      :class="{ disabled: isSliderStart }"
    >
      <img :src="Arrow" alt="Arrow-right" class="slider__btn-image" />
    </button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { Swiper, SwiperSlide } from 'swiper/vue';
import MoviesItem from '@/components/MoviesItem.vue';
import Arrow from '@/assets/images/arrow.svg';
import AddMovie from '@/assets/images/plus.svg';

import 'swiper/css';

export default {
  components: { MoviesItem, Swiper, SwiperSlide },
  props: {
    selectedMovie: { type: Number, default: 1 },
    movies: { type: Array, default: [] },
    screenWidth: { type: Number, default: 0 },
    isNextPage: { type: Boolean, default: true },
    getMovies: { type: Function },
  },
  emits: ['change-movie'],

  setup(props) {
    const myCarousel = ref(null);
    const swiper = ref();
    const isSliderEnd = ref(false);
    const isSliderStart = ref(true);

    const onSwiper = (instance) => {
      swiper.value = instance;
    };

    const onSlideNext = () => {
      swiper.value.slideNext();
      if (swiper.value.isEnd) {
        isSliderEnd.value = true;
      }
      isSliderStart.value = false;
    };

    const onSlidePrev = () => {
      swiper.value.slidePrev();
      if (swiper.value.isBeginning) {
        isSliderStart.value = true;
      }
      isSliderEnd.value = false;
    };

    const onMoreMovies = () => {
      props.getMovies();
      isSliderEnd.value = false;
    };

    return {
      myCarousel,
      swiper,
      onSwiper,
      Arrow,
      AddMovie,
      onSlideNext,
      onSlidePrev,
      isSliderEnd,
      isSliderStart,
      onMoreMovies,
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  padding: 27px 20px 10px;
}

.slider {
  width: 1000px;
  margin: 0 auto;

  position: relative;

  &__btn {
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 0.2s;
    position: absolute;
    top: 95px;

    &--left {
      left: -50px;
    }

    &--right {
      right: -50px;
      transform: rotate(180deg);
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.54);
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.8);
    }

    &-image {
      width: 18px;
    }
  }
}

.disabled {
  cursor: default;
  background: rgba(186, 181, 181, 0.05);
  &:hover {
    background: rgba(186, 181, 181, 0.05);
  }
}

.movies__card {
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

  @media (min-width: 1152px) {
    height: 170px;
  }

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
</style>
