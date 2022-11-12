<template>
  <div class="card">
    <div class="card-container">
      <h2 class="card-title">Select By Country</h2>
      <ul class="card-wrapper">
        <li
          class="card-list"
          v-for="area in listAreas"
          :key="area.id"
          @click="goToPage(area.id)"
        >
          <span class="card-link">
            {{ area.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { HTTP } from "@/api/config";

export default {
  data() {
    return {
      listAreas: [],
    };
  },
  mounted() {
    this.getListAreas();
  },
  methods: {
    async getListAreas() {
      try {
        const { data } = await HTTP.get("areas");
        this.listAreas = data.areas;
      } catch (error) {
        console.log(error);
      }
    },
    goToPage(id) {
      this.$router.push({ name: "competition", params: { areaId: id } });
    },
  },
};
</script>
