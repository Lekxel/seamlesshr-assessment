<template>
  <div class="msg">
    <input type="checkbox" />
    <Avatar :size="35" image="avatar.jpg" :rounded="true" />
    <h4>{{ user?.login }}</h4>
    <p id="tag">User Testing</p>
    <p id="message">Hi Dele, we need to discuss the issue about yesterday...</p>
    <i class="fa fa-user"></i>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>

<script lang="ts">
import Avatar from "@/components/ui/Avatar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Msg",
  props: {
    user: Object,
  },
  components: {
    Avatar,
  },
});
</script>
