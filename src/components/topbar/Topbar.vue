<template>
  <div>
    <h1 id="brand">{{ brand }}</h1>
    <Search />
    <Nav />
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>

<script lang="ts">
import Search from "./Seach.vue";
import Nav from "./Nav.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Topbar",
  props: {
    brand: String,
  },
  components: {
    Search,
    Nav,
  },
});
</script>
