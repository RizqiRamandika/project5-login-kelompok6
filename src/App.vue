<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>
<script>
import navbar from "./components/navbar.vue";

export default {
  name: "app",
  components: {
    navbar,
  },
};
</script>