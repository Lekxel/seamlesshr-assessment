<template>
  <div id="container">
    <Topbar brand="Boardash" />
    <div id="content">
      <Sidebar />
      <main>
        <Messages />
      </main>
    </div>
    <div id="fab">
      <button><i class="fa fa-plus"></i></button>
    </div>
  </div>
</template>

<style lang="scss">
@import "./global.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Topbar from "@/components/topbar/index";
import Sidebar from "@/components/sidebar/index";
import Messages from "@/views/messages/index";
export default defineComponent({
  name: "App",
  components: { Topbar, Sidebar, Messages },
});
</script>
