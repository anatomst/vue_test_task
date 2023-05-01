<template>
  <div class="movie-skeleton">
    <div class="movie-skeleton__poster"></div>
    <div class="movie-skeleton__rating"></div>
    <div class="movie-skeleton__name-top"></div>
    <div class="movie-skeleton__name-bottom"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.movie-skeleton {
  &__poster {
    width: 164p;
    height: 215px;
    background-color: #303030;
    margin-bottom: 12px;
  }

  &__rating {
    width: 66px;
    height: 21px;
    margin-bottom: 8px;
    background-color: #3d3d3d;
  }
  &__name-top {
    width: 136px;
    height: 19px;
    margin-bottom: 4px;
    background-color: #4d4d4d;
  }
  &__name-bottom {
    width: 109px;
    height: 19px;
    margin-bottom: 4px;
    background-color: #4d4d4d;
  }
}
</style>
