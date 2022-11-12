<template>
  <div class="competition">
    <div class="competition-container">
      <h2 class="competition-title">Select Club By Competition</h2>
      <div class="card-list">
        <div
          class="card"
          v-for="competition in listCompetitions"
          :key="competition.id"
          @click="goToPage(competition.id)"
        >
          <div class="card-image">
            <img :src="competition.emblemUrl" />
          </div>
          <div class="card-title title-black">
            <p>{{ competition.name }}</p>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>
.competition-container {
  margin: 16px 64px;
}

.card-list {
  display: inline-flex;
}

.card {
  margin: 30px 20px;
  width: 250px;
  height: 250px;
  border-radius: 40px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  cursor: pointer;
  transition: 0.4s;
}

.card .card-image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  padding: 20px;
}

.card .card-image img {
  width: 65%;
  border-radius: 40px;
  object-fit: cover;
}

.card .card-title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-weight: bold;
  font-size: 25px;
  margin-top: -60px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}
</style>
