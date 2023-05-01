<template>
  <div class="error">
    <img class="error__image" :src="Aliens" alt="Aliens" width="255" height="255" />
    <h1 class="error__title">Ooops</h1>
    <p class="error__description">Something went wrong!</p>
    <router-link to="/">
      <custom-button>Retry</custom-button>
    </router-link>
  </div>
</template>

<script>
import Aliens from '@/assets/images/aliens.svg';
import CustomButton from '@/components/CustomButton.vue';

export default {
  components: { CustomButton },
  setup() {
    return {
      Aliens,
    };
  },
};
</script>

<style lang="scss" scoped>
.error {
  padding-top: 260px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__image {
    display: block;
    margin-bottom: 12px;
  }

  &__title {
    font-family: 'Krona One', sans-serif;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 4px;
  }

  &__description {
    line-height: 19px;
    margin-bottom: 120px;
    color: #e2e2e2;
  }
}
</style>
