<template>
  <div class="competition-container">
    <h3 class="competition-title">Select By Competition</h3>
    <ul class="competition-card">
      <li
        class="competition-card-list"
        v-for="competition in listCompetitions"
        :key="competition.id"
      >
        <router-link
          :to="{ name: 'clubs', params: { competitionId: competition.id } }"
        >
          <span class="competition-card-link">
            {{ competition.name }}
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
      listCompetitions: [],
    };
  },
  mounted() {
    this.getListCompetitions();
  },
  methods: {
    async getListCompetitions() {
      const areaId = this.$route.params.areaId;
      const { data } = await HTTP.get(
        `competitions?plan=TIER_ONE&areas=${areaId}`
      );
      this.listCompetitions = data.competitions;
      console.log(this.listCompetitions);
    },
  },
};
</script>

<style lang="scss">
.competition-container {
  margin: 16px 64px;
}

.competition-title {
  margin-bottom: 32px;
}

ul {
  list-style: none;
  text-align: center;
  align-items: center;
}
.competition-card-list {
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
</style>
