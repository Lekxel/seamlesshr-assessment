<template>
  <div id="container">
    <img
      v-if="image"
      :style="{
        borderRadius: rounded ? '50%' : '8px',
        width: size ? `${size}px` : '50px',
        height: size ? `${size}px` : '50px',
      }"
      :src="!link ? require(`@/assets/${image}`) : image"
    />
    <span v-if="title"> {{ title }} </span>
  </div>
</template>

<style lang="scss" scoped>
#container {
  display: inline-block;
  img {
    border-radius: 50%;
  }
  span {
    color: white;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Avatar",
  props: {
    image: String,
    title: String,
    rounded: Boolean,
    size: Number,
    link: Boolean,
  },
});
</script>
