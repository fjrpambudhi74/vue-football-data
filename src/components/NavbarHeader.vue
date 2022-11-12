<template>
  <div>
    <nav>
      <div class="navbar-logo">
        <h1>Frontend Test</h1>
      </div>
      <div class="navbar-link">
        <a href="https://github.com/fjrpambudhi74">
          <button class="button button-line">
            <font-awesome-icon :icon="['fab', 'github']" class="myIcon" />&nbsp;
            GitHub
          </button>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarHeader",
};
</script>
