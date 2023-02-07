<template>
  <div>
    <Header />
    <router-view></router-view>
    <h2>Home page</h2>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    HelloWorld,
    Header,
  },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
