<template>
  <div class="area-container">
    <h3 class="area-title">Select By Country</h3>
    <ul class="area-card">
      <li class="area-card-list" v-for="area in listAreas" :key="area.id">
        <router-link :to="{ name: 'competition', params: { areaId: area.id } }">
          <span class="area-card-link">
            {{ area.name }}
          </span>
        </router-link>
      </li>
    </ul>
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
  },
};
</script>

<style lang="scss">
.area-container {
  margin: 16px 64px;
}

.area-title {
  margin-bottom: 32px;
}

ul {
  list-style: none;
  text-align: center;
  align-items: center;
}
.area-card-list {
  border: 1px solid #505154;
  padding: 16px;
  border-radius: 8px;
  margin: 8px auto;
  width: 500px;

  &:hover {
    background-color: #dbdbdb;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    transition: 0.1s all ease-in-out;
  }
}
.area-card-link {
  text-decoration: none !important;
  color: black;
}
</style>
