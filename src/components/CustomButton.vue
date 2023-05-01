<template>
  <button class="btn">
    <img v-if="isTrailer" :src="PlayImg" alt="play" class="btn__image" />
    <slot></slot>
  </button>
</template>

<script>
import PlayImg from '../assets/images/play.svg';
export default {
  name: 'custom-button',
  props: {
    isTrailer: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return {
      PlayImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  width: 180px;
  height: 48px;
  background: #da1617;
  border-radius: 2px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  transition: background-color 0.3s;

  &:hover {
    background: #9c0c0c;
  }

  &__image {
    margin-right: 14px;
  }
}
</style>
