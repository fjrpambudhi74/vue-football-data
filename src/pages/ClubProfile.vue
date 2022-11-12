<template>
  <div class="profile">
    <div
      class="profile-hero"
      :class="[setBackgroundColor(detailClub.clubColors)]"
    >
      <div class="profile-background">
        <svg
          class="profile-background-pattern"
          :class="[setPatternColor(detailClub.clubColors)]"
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
        <div class="profile-details" :class="setFontColor ? 'text-black' : ''">
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
            <td>{{ player.dateOfBirth }} Years</td>
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
    };
  },
  async mounted() {
    await this.getDetailClub();
  },
  computed: {
    setFontColor() {
      if (
        this.detailClub.clubColors.includes("Black") ||
        this.detailClub.clubColors.includes("White")
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async getDetailClub() {
      try {
        const clubId = this.$route.params.clubId;
        const { data } = await HTTP.get(`teams/${clubId}`);
        this.detailClub = data;
        this.clubSquad = data.squad;
        this.clubSquad.map((item) => {
          item["position"] = item.position ?? item.role;
          item["dateOfBirth"] = this.calculateAge(item.dateOfBirth);
        });
      } catch (error) {
        console.log(error);
      }
    },
    calculateAge(birthday) {
      const ageDifMs = Date.now() - new Date(birthday).getTime();
      const ageDate = new Date(ageDifMs);
      const result = Math.abs(ageDate.getUTCFullYear() - 1970);
      return result;
    },
    setBackgroundColor(color = "White") {
      if (color.includes("Red")) {
        return "profile-hero-red";
      } else if (color.includes("Sky")) {
        return "profile-hero-skyblue";
      } else if (color.includes("Blue")) {
        return "profile-hero-blue";
      } else if (color.includes("Claret")) {
        return "profile-hero-burgundy";
      } else if (color.includes("Black")) {
        return "profile-hero-black";
      } else if (color.includes("White")) {
        return "profile-hero-white";
      }
    },
    setPatternColor(color = "White") {
      if (color.includes("Red")) {
        return "profile-background-pattern-red";
      } else if (color.includes("Sky")) {
        return "profile-background-pattern-skyblue";
      } else if (color.includes("Blue")) {
        return "profile-background-pattern-blue";
      } else if (color.includes("Claret")) {
        return "profile-background-pattern-burgundy";
      } else if (color.includes("Black")) {
        return "profile-background-pattern-black";
      } else if (color.includes("White")) {
        return "profile-background-pattern-white";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  margin-bottom: 24px;
}
.profile-hero {
  position: relative;
  padding: 64px 32px;
  overflow: hidden;
  color: #333;

  &-red {
    background-color: #eb0024 !important;
  }
  &-white {
    background-color: #f5f5f5 !important;
  }
  &-black {
    background-color: #f5f5f5 !important;
  }
  &-blue {
    background-color: #0a4595 !important;
  }
  &-skyblue {
    background-color: #6caee0 !important;
  }
  &-burgundy {
    background-color: #480025 !important;
  }
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
  &-red {
    fill: #eb0024 !important;
  }
  &-white {
    fill: #f5f5f5 !important;
  }
  &-black {
    fill: #f5f5f5 !important;
  }
  &-blue {
    fill: #0a4595 !important;
  }
  &-skyblue {
    fill: #6caee0 !important;
  }
  &-burgundy {
    fill: #480025 !important;
  }
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
  color: #fff;
}

.text-black {
  color: #333 !important;
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
