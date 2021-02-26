<template>
  <div id="container">
    <Topbar brand="Boardash" />
    <div id="content">
      <Sidebar :menus="menus" :selectedMenu="selectedMenu" :setMenu="setMenu" />
      <main>
        <MainNav :title="selectedMenu" />
        <Messages v-if="selectedMenu === 'Message'" />
      </main>
    </div>
    <div id="fab">
      <button><i class="material-icons">add</i></button>
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
import MainNav from "@/views/messages/MainNav.vue";
export default defineComponent({
  name: "App",
  components: { Topbar, Sidebar, Messages, MainNav },
  data() {
    return {
      selectedMenu: "Message",
      menus: [
        {
          title: "Overview",
          icon: "dashboard",
        },
        {
          title: "Reservation",
          icon: "bookmark",
        },
        {
          title: "Meeting",
          icon: "event_note",
        },
        {
          title: "Customers",
          icon: "group",
        },
        {
          title: "Ticket",
          icon: "local_activity",
        },
        {
          title: "Message",
          icon: "chat_bubble",
        },
        {
          title: "Profile",
          icon: "person",
        },
        {
          title: "Logout",
          icon: "power_settings_new",
        },
      ],
    };
  },
  methods: {
    setMenu(menu: string) {
      this.$data.selectedMenu = menu;
    },
  },
});
</script>
