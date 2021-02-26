<template>
  <div id="notifications">
    <div class="notification" v-for="message in messages" :key="message.name">
      <i class="fa fa-user"></i>
      <div>
        <h3>{{ message.name }} Messages</h3>
        <h4>
          <span>{{ message.number }} </span><small>This month</small>
        </h4>
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
  name: "Notifications",
  props: {
    title: String,
  },
  data() {
    return {
      messages: [
        { name: "Overall", number: 2389 },
        { name: "Sent", number: 1494 },
        { name: "Received", number: 895 },
      ],
    };
  },
});
</script>
