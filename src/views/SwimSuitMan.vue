<template>
  <div>
    <h2>{{ matos.name }}</h2>
    <img :src="matos.image" :alt="matos.name" />
    <p></p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      matos: {
        id: 1,
        name: "Poweskin red",
        image: "/src/assets/powerjammerRed.png",
        size: ["M", "S", "L"],
        price: 200,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos rerum porro maxime illo nobis aliquam eveniet quam. Molestiae, dolore obcaecati.",
        created: new Date(),
      },
    };
  },
};
</script>

<style lang="css" scoped></style>
