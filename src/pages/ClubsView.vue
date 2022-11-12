<template>
  <div class="club-container">
    <h3 class="club-title">Select Clubs For Detail</h3>
    <ul class="club-card">
      <li
        class="club-card-list"
        v-for="club in listClubs"
        :key="club.id"
        @click="goToPage(club.id)"
      >
        <span class="club-card-link">{{ club.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { HTTP } from "@/api/config";

export default {
  data() {
    return {
      listClubs: [],
    };
  },
  mounted() {
    this.getListClubs();
  },
  methods: {
    async getListClubs() {
      try {
        const competitionId = this.$route.params.competitionId;
        const { data } = await HTTP.get(`competitions/${competitionId}/teams`);
        this.listClubs = data.teams;
      } catch (error) {
        console.log(error);
      }
    },
    goToPage(id) {
      this.$router.push({ name: "club-profile", params: { clubId: id } });
    },
  },
};
</script>

<style lang="scss">
.club-container {
  margin: 16px 64px;
}

.club-title {
  margin-bottom: 32px;
}

ul {
  list-style: none;
  text-align: center;
  align-items: center;
}
.club-card-list {
  border: 1px solid #505154;
  padding: 16px;
  border-radius: 8px;
  margin: 8px auto;
  width: 500px;
  cursor: pointer;

  &:hover {
    background-color: #dbdbdb;
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    transition: 0.1s all ease-in-out;
  }
}
</style>
