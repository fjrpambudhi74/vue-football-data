<template>
  <div>
    <nav>
      <div class="logo">
        <h1>Frontend Test</h1>
        <div class="menu-icon">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <a href="https://github.com/fjrpambudhi74">
        <button class="button button-line">
          <font-awesome-icon :icon="['fab', 'github']" class="myIcon" />&nbsp;
          GitHub
        </button>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarHeader",
};
</script>
