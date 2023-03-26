<template>
  <div>
    <div>Cart({{ cart }})</div>
    <div v-for="swimsuit in swimsuits" :key="swimsuit.id">
      <p>id: {{ swimsuit.id }}</p>
      <p>Name : {{ swimsuit.name }}</p>
      <p>Price :{{ swimsuit.price }}</p>
      <ul>
        <li v-for="detail in swimsuit.details" :key="detail">{{ detail }}</li>
      </ul>
      <div v-for="variant in swimsuit.variants" :key="variant.id">
        <p>{{ variant.color }}</p>
        <img :src="variant.image" alt="" />
        <img :src="swimsuit.image" alt="" />
      </div>
    </div>
    <button class="button" @click="addToCart">Add to cart</button>
  </div>
</template>
<!-- OnlineSwimmingShop -->
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Swimsuit",
  data() {
    return {
      cart: 0,
      swimsuits: [
        {
          id: 1,
          name: "Maillot de bain homme ",
          price: 20,
          image: "/src/assets/powerjammerBlue.png",
          variants: [
            {
              id: 1,
              color: "red",
              image: "/src/assets/powerjammerRed.png",
            },
            {
              id: 2,
              color: "blue",
              image: "/src/assets/powerjammerBlue.png",
            },
            {
              id: 3,
              color: "green",
              image: "/src/assets/powerjammerGreen.png",
            },
          ],
          details: ["80% polyester", "20% spandex", "Made in China"],
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
  },
});
</script>

<style lang="scss" scoped></style>
