<template>
  <div>
    <p>je suis dans about</p>
    <img :src="image" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  data() {
    return {
      image: "../src/assets/powerjammerBlue.png",
    };
  },
});
</script>

<style scoped></style>
