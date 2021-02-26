<template>
  <MainNav title="Messages" />
  <Ads />
  <Notifications />
  <div>
    <Msg :user="user" v-for="user in users" :key="user.login" />
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
import MainNav from "./MainNav.vue";
import Ads from "./Ads.vue";
import Notifications from "./Notifications.vue";
import Msg from "./Msg.vue";
import fetchUsers, { User } from "@/data/fetchUsers";
let users: User[];
export default defineComponent({
  name: "Messages",
  props: {
    brand: String,
  },
  components: {
    MainNav,
    Ads,
    Notifications,
    Msg,
  },
  data() {
    return {
      users,
    };
  },
  methods: {
    getUsers() {
      fetchUsers(this.populateUsers);
    },
    populateUsers(users: User[]) {
      this.$data.users = users;
    },
  },
  mounted() {
    this.getUsers();
  },
});
</script>
