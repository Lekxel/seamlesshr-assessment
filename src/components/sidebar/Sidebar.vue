<template>
  <aside>
    <div id="top">
      <Avatar image="avatar.jpg" />
      <div>
        <h3>Welcome {{ admin }}</h3>
        <p>Super Admin</p>
      </div>
    </div>
    <div id="menus">
      <button
        @click="setMenu(menu?.title)"
        v-for="menu in menus"
        :key="menu.title"
        :class="{ active: selectedMenu === menu?.title }"
      >
        <i :class="`fa fa-${menu?.icon}`"></i> <span>{{ menu?.title }}</span>
      </button>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>

//
<script lang="ts">
// import Search from "./Seach.vue";
import Avatar from "../ui/Avatar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  props: {
    brand: String,
  },
  components: {
    // Search,
    Avatar,
  },
  data() {
    return {
      admin: "Essie",
      selectedMenu: "Message",
      menus: [
        {
          title: "Overview",
          icon: "user",
        },
        {
          title: "Reservation",
          icon: "user",
        },
        {
          title: "Meeting",
          icon: "user",
        },
        {
          title: "Customers",
          icon: "user",
        },
        {
          title: "Ticket",
          icon: "user",
        },
        {
          title: "Message",
          icon: "user",
        },
        {
          title: "Profile",
          icon: "user",
        },
        {
          title: "Logout",
          icon: "user",
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
