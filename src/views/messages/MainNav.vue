<template>
  <div id="mainNav">
    <h2>{{ title }}</h2>
    <div>
      <div id="pagination">
        <i class="material-icons">chevron_left</i>
        <span>1 - 50 pages</span>
        <i class="material-icons">chevron_right</i>
      </div>
      <div id="btns">
        <button class="active">All</button>
        <div id="group-btn">
          <button>Unread</button>
          <button>Important</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainNav",
  props: {
    title: String,
  },
});
</script>
