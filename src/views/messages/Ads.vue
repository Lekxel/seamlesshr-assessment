<template>
  <div id="ads">
    <div id="about">
      <img src="@/assets/avatar.jpg" />
      <div>
        <h4>Sales Presentation - Live Group Call</h4>
        <h5>adams_ka@gmail.com</h5>
        <p>Started 3 min ago</p>
      </div>
    </div>

    <div id="users">
      <div
        class="user"
        :style="{
          zIndex: users.length - index,
          borderColor: `rgba(255,255,255,${1 - index * 0.2})`,
        }"
        v-for="(user, index) in users"
        :key="user"
      >
        {{ user }}
      </div>
      <p>+5 more</p>
    </div>

    <div class="button">
      <button><span>You're Invited</span></button>
      <button class="fill">
        <i class="material-icons">videocam</i> <span>Join Now</span>
      </button>
    </div>
    <i class="material-icons">videocam</i>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Ads",

  data() {
    return {
      users: ["A", "K", "D", "V"],
    };
  },
});
</script>
