<template>
  <div class="club">
    <div class="club-container">
      <h2 class="club-title">Select Clubs For Detail</h2>
      <ul class="club-wrapper">
        <li v-for="club in listClubs" :key="club.id" @click="goToPage(club.id)">
          <div class="club-card">
            <div class="club-content">
              <div class="club-bg">
                <img
                  :src="require('@/assets/images/stadium.jpg')"
                  alt="stadium"
                />
              </div>
              <div class="club-image-container">
                <img
                  class="club-image-logo"
                  :src="club.crestUrl"
                  alt="club-logo"
                />
              </div>

              <div
                class="club-text"
                :class="[
                  setBackgroundColor(club.clubColors),
                  setFontColor(club.clubColors)
                    ? 'club-text--black'
                    : 'club-text--white',
                ]"
              >
                <h4>
                  {{ club.name }}
                </h4>
                <p>{{ club.venue }}</p>
                <div class="club-link">
                  <p
                    :class="
                      setFontColor(club.clubColors) ? 'club-text--black' : ''
                    "
                  >
                    Club Profile
                  </p>
                  <svg
                    class="club-link-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 20"
                  >
                    <path
                      d="M31.996 9.996c-.028-.603-.225-1.233-.69-1.657l-.001-.002-2.577-2.576-4.117-4.118L23.667.7a2.438 2.438 0 0 0-1.658-.69c-.576 0-1.262.255-1.658.69-.407.447-.713 1.032-.69 1.658.027.623.24 1.206.69 1.657l2.583 2.583 1.052 1.052H12.52l-6.816.001c-1.1 0-2.21-.013-3.31 0h-.048c-.605 0-1.23.262-1.657.69-.41.409-.713 1.07-.69 1.658.027.603.225 1.233.69 1.657.463.425 1.027.691 1.657.69h9.224l7.905-.002h4.521l-2.701 2.702-.945.944a2.44 2.44 0 0 0-.69 1.658c0 .575.255 1.262.69 1.657.447.408 1.031.714 1.657.69.621-.032 1.209-.24 1.658-.69l2.584-2.583 4.118-4.118.944-.945c.24-.24.41-.525.522-.831.108-.272.173-.56.163-.832"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
    setBackgroundColor(color = "White") {
      if (color.includes("Red")) {
        return "club-bg--red";
      } else if (color.includes("Sky")) {
        return "club-bg--skyblue";
      } else if (color.includes("Blue")) {
        return "club-bg--blue";
      } else if (color.includes("Claret")) {
        return "club-bg--burgundy";
      } else if (color.includes("Black")) {
        return "club-bg--black";
      } else if (color.includes("White")) {
        return "club-bg--white";
      }
    },
    setFontColor(color) {
      if (color.includes("Black")) {
        return true;
      }
      return false;
    },
    goToPage(id) {
      this.$router.push({ name: "club-profile", params: { clubId: id } });
    },
  },
};
</script>

<style lang="scss" scoped>
.club-container {
  padding: 32px;
}
.club-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-decoration: none;
  list-style: none;
}

.club-card {
  margin: 20px;
  width: 280px;
  position: relative;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.club-card .club-bg {
  position: relative;
  margin: auto;
  overflow: hidden;
  border-radius: 5px 5px 0px 0px;
  height: 200px;
}

.club-card .club-bg img {
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0px 0px;
  transition: all 0.8s;
}

.club-image-container {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
  width: 96px;
  height: 96px;
  position: absolute;
  left: 90px;
  margin-top: -70px;
  border-radius: 100%;
  background: #fff;
}

.club-card .club-bg:hover img {
  transform: scale(1.1);
}

.club-image-logo {
  width: 70%;
  margin-top: 15px;
}

.club-card .club-text {
  padding: 40px 15px 15px;
  line-height: 1.5;
  text-align: center;
  color: fff;
}

.club-text--black {
  color: #333 !important;
}

.club-text--white {
  color: #fff !important;
}

.club-bg--red {
  background-color: #eb0024 !important;
}
.club-bg--white {
  background-color: #f5f5f5 !important;
}
.club-bg--black {
  background-color: #f5f5f5 !important;
}
.club-bg--blue {
  background-color: #0a4595 !important;
}
.club-bg--skyblue {
  background-color: #6caee0 !important;
}
.club-bg--burgundy {
  background-color: #480025 !important;
}

.club-link {
  display: flex;
  justify-content: center;
  position: relative;
  padding: 10px 0;
  color: #fff;
}
.club-link-icon {
  width: 12px;
  fill: #fff;
  margin-left: 8px;
}
.club-link:after {
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  bottom: 10px;
  position: absolute;
  background: #fff;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.club-link:hover:after {
  width: 46%;
  left: 65px;
}
</style>
