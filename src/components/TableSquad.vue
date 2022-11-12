<template>
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
        <tr v-for="(player, index) in listSquad" :key="player.id">
          <td>{{ index + 1 }}</td>
          <td>{{ player.name }}</td>
          <td>{{ player.position }}</td>
          <td>{{ player.dateOfBirth }} Years</td>
          <td>{{ player.nationality }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    listSquad: {
      default() {
        return {};
      },
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
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
