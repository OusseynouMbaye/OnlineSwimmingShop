<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<script lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    // HelloWorld,
    Header,
  },
});
</script>

<style scoped></style>
