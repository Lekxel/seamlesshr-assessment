<template>
  <aside>
    <div id="top">
      <i class="material-icons">bookmark</i>
      <Avatar :size="30" image="avatar.jpg" />
      <div>
        <h4>Welcome {{ admin }}</h4>
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
        <i class="material-icons">{{ menu?.icon }}</i
        ><span>{{ menu?.title }}</span>
      </button>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import "./style.scss";
</style>

<script lang="ts">
import Avatar from "../ui/Avatar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  props: {
    menus: Object,
    selectedMenu: String,
    setMenu: Function,
  },
  components: {
    Avatar,
  },
  data() {
    return {
      admin: "Essie",
    };
  },
});
</script>
