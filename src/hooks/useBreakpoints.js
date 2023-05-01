import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useRedirectTo } from './useRedirectTo';

export const useBreakpoints = () => {
  const windowWidth = ref(window.innerWidth);
  const { redirectTo } = useRedirectTo();
  const route = useRoute();

  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));

  const onWidthChange = (selectedMovie = null) => {
    windowWidth.value = window.innerWidth;

    // When resizing screen to large on route /movie/:id save selected movie
    if (window.innerWidth >= 900 && route.name === 'movie') {
      if (selectedMovie && route.params.id) {
        selectedMovie.value = +route.params.id;
      }
      redirectTo('home');
    }
  };

  const width = computed(() => windowWidth.value);

  return { width, onWidthChange };
};
