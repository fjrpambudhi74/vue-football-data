<template>
  <div class="card">
    <div class="card-container">
      <h2 class="card-title">Select By Country</h2>
      <div class="search-box">
        <input
          class="search-input"
          type="text"
          v-model="search"
          placeholder="Search Country"
        />
      </div>
      <ul class="card-wrapper">
        <li
          class="card-list"
          v-for="area in filteredData"
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
      search: "",
    };
  },
  mounted() {
    this.getListAreas();
  },
  computed: {
    filteredData() {
      return this.listAreas.filter((country) => {
        return country.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
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

<style lang="scss" scoped>
.search-box {
  max-width: 500px;
  position: relative;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: -20px;
  margin-bottom: 30px;
}

.search-input {
  width: 100%;
  font-size: 16px;
  padding: 15px 45px 15px 15px;
  background-color: #fff;
  color: #333;
  border-radius: 6px;
  border: none;
  transition: all 0.4s;
  border: 1px solid #333;
}

.search-input:focus {
  border: none;
  outline: none;
  box-shadow: 0 1px 12px #dbdbdb;
}
</style>
