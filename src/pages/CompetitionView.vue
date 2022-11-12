<template>
  <div class="card">
    <div class="card-container">
      <h3 class="card-title">Select Club By Competition</h3>
      <ul class="card-wrapper">
        <li
          class="card-list"
          v-for="competition in listCompetitions"
          :key="competition.id"
          @click="goToPage(competition.id)"
        >
          <span class="card-link">
            {{ competition.name }}
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
      listCompetitions: [],
    };
  },
  mounted() {
    this.getListCompetitions();
  },
  methods: {
    async getListCompetitions() {
      try {
        const areaId = this.$route.params.areaId;
        const { data } = await HTTP.get(
          `competitions?plan=TIER_ONE&areas=${areaId}`
        );
        this.listCompetitions = data.competitions;
      } catch (error) {
        console.log(error);
      }
    },
    goToPage(id) {
      this.$router.push({ name: "clubs", params: { competitionId: id } });
    },
  },
};
</script>
