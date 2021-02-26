<template>
  <div id="search">
    <input placeholder="Search message, people, ticket" />
    <button><i class="fa fa-search"></i></button>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Search",
  props: {
    brand: String,
  },
});
</script>
