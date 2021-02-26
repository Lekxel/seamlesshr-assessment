<template>
  <nav>
    <a href="#">
      <i class="fa fa-bell"></i>
      <span>Set Alert</span>
    </a>
    <a href="">
      <Avatar :rounded="false" image="avatar.jpg" />
      <span>Essie Howell</span>
      <i class="fa fa-plus-circle"></i>
    </a>
  </nav>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>

<script lang="ts">
import Avatar from "../ui/Avatar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Nav",
  props: {
    brand: String,
  },
  components: {
    Avatar,
  },
});
</script>
