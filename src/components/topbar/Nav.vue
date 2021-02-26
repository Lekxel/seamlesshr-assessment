<template>
  <nav>
    <a class="nav-link" href="#">
      <i class="material-icons">notifications_none</i>
      <span>Set Alert</span>
    </a>
    <a class="nav-link" href="">
      <Avatar :size="30" :rounded="true" image="avatar.jpg" />
      <span>Essie Howell</span>
      <i id="plus" class="material-icons">add_circle_outline</i>
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

  components: {
    Avatar,
  },
});
</script>
