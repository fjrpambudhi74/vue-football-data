<template>
  <div class="profile">
    <div v-if="isLoading">Loading ...</div>
    <div v-else class="profile-hero">
      <div class="profile-background">
        <svg
          class="profile-background-pattern"
          viewBox="0 0 31 126"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <g transform="translate(-146.000000, -36.000000)">
              <g id="Hero" transform="translate(4.000000, 36.000000)">
                <path
                  d="M145.103125,-5.68434189e-14 C149.040625,44.3625 152.321875,72.45 154.946875,84.2625 C156.784375,82.81875 158.81875,81.046875 161.05,78.946875 C166.491425,104.633254 170.23205,120.317629 172.271875,126 C172.271875,126 162.18125,126 142,126 L142,-5.68434189e-14 L145.103125,-5.68434189e-14 Z"
                  id="Path"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="profile-wrapper">
        <div class="profile-badge">
          <img :src="detailClub.crestUrl" alt="logo-club" />
        </div>
        <div class="profile-details">
          <h1>{{ detailClub.name }}</h1>
          <div>
            <p>{{ detailClub.venue }}</p>
          </div>
          <div>{{ detailClub.address }}</div>
          <div>
            <a :href="detailClub.website">{{ detailClub.website }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-table player-index">
      <table>
        <thead>
          <tr>
            <th style="width: 10px">No.</th>
            <th>Player</th>
            <th>Position</th>
            <th>Age</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in clubSquad" :key="player.id">
            <td>{{ index + 1 }}</td>
            <td>{{ player.name }}</td>
            <td>{{ player.position }}</td>
            <!-- <td>{{ player.dateOfBirth }}</td> -->
            <td>{{ player.nationality }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { HTTP } from "@/api/config";

export default {
  data() {
    return {
      detailClub: [],
      clubSquad: [],
      isLoading: false,
    };
  },
  mounted() {
    this.getDetailClub();
  },
  methods: {
    async getDetailClub() {
      try {
        this.isLoading = true;
        const clubId = this.$route.params.clubId;
        const { data } = await HTTP.get(`teams/${clubId}`);
        this.detailClub = data;
        this.clubSquad = data.squad;
        console.log(this.detailClub);
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-hero {
  position: relative;
  margin-top: 32px;
  padding: 64px 32px;
  overflow: hidden;
  color: #333;
}
.profile-background {
  background-image: url("../assets/images/stadium.jpg") !important;
  position: absolute;
  top: 0;
  right: -15rem;
  bottom: 0;
  height: 100%;
  width: 800px;
  z-index: 0;
  background-size: cover;
  background-position: 50%;
}

.profile-background-pattern {
  position: absolute;
  fill: #e8e8e8;
  height: 100%;
  left: -1px;
  right: auto;
  top: 0;
}
.profile-wrapper {
  display: flex;
  max-width: 1376px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
}
.profile-details {
  margin-left: 64px;
  margin-top: 32px;
}

.player-index table {
  text-align: left;
}

.profile-table table {
  margin-top: 32px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  border-collapse: unset;
  display: table;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 0px;
}

.profile-table thead th {
  background: #f0f0f0;
  color: #6c6c6c;
  padding: 8px 32px;
  text-align: left;
}

.profile-table td,
.table th {
  padding: 20px 32px;
}

.profile-table td {
  border-bottom: 1px solid #efefef;
  font-weight: 500;
  text-align: left;
}
</style>
