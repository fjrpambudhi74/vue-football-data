<template>
  <div class="home">
    <list-areas></list-areas>
  </div>
</template>

<script>
// @ is an alias to /src
import ListAreas from "@/components/ListAreas.vue";

export default {
  name: "HomeView",
  components: {
    ListAreas,
  },
};
</script>
