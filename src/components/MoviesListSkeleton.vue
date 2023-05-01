<template>
  <div class="movies-skeleton">
    <item-skeleton />
    <item-skeleton />
    <item-skeleton />
    <item-skeleton />
  </div>
</template>

<script>
import ItemSkeleton from './ItemSkeleton.vue';
export default {
  components: {
    ItemSkeleton,
  },
};
</script>

<style scoped lang="scss">
.movies-skeleton {
  display: grid;
  grid-template-columns: repeat(auto-fill, 164px);
  gap: 16px 15px;
  justify-content: center;
}
</style>
