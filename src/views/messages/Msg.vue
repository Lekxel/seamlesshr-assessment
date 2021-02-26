<template>
  <div class="msg">
    <input type="checkbox" />
    <Avatar :link="true" :size="35" :image="user?.avatar_url" :rounded="true" />
    <h4>{{ user?.login }}</h4>
    <p class="tag">Some Tag</p>
    <p class="message">
      This should be the excerpt of the full message. Just think you should know
      about it...
    </p>
    <button><i class="material-icons more">more_vert</i></button>
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
