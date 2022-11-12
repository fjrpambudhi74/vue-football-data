<template>
  <div>
    <AppHeader></AppHeader>
    <div class="wrapper">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import AppHeader from "../layout/NavbarHeader.vue";
export default {
  name: "AppLayout",
  components: {
    AppHeader,
  },
};
</script>
