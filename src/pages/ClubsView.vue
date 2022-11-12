<template>
  <div class="card">
    <div class="card-container">
      <h3 class="card-title">Select Clubs For Detail</h3>
      <ul class="card-wrapper">
        <li
          class="card-list"
          v-for="club in listClubs"
          :key="club.id"
          @click="goToPage(club.id)"
        >
          <span class="card-link">{{ club.name }}</span>
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
