<template>
  <div>
    <Topbar />
    <div class="wrapper">
      <ul class="pizzas">
        <li v-for="pizza in cart" :key="pizza" class="pizza">
          <h3 class="pizza__name">{{ pizza.name }}</h3>
          <div class="pizza__image">
            <img :src="pizza.image" alt="pizzaPhoto" />
          </div>
          <div class="pizza__price">Price: {{ pizza.price }}$</div>
        </li>
      </ul>
      <button class="checkout" @click="checkout" v-if="cart.length > 0">Оформить заказ</button>
      <div class="clean" v-else>Корзина пуста</div>
    </div>
  </div>
</template>
  
  <script>
import Topbar from "@/components/Topbar.vue";
import { mapState } from "vuex";

export default {
  name: "AppCart",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      cart: (state) => state.cart,
    }),
  },
  components: {
    Topbar,
  },
  methods: {
    checkout() {
      this.$store.dispatch("checkout");
        this.$router.push({name: 'payment'})
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;
  .pizzas {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    .pizza {
      display: flex;
      gap: 20px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      .pizza__name {
        font-size: 30px;
        font-weight: 600;
      }
      .pizza__image {
        max-width: 100%;
        img {
          border-radius: 20px;
          width: 100%;
        }
      }
    }
  }
  .checkout {
    display: flex;
    align-content: center;
    justify-content: center;
    border-radius: 10px;
    padding: 15px;
    font-size: 20px;
    color: white;
    background: rgb(71, 116, 199);
    margin-top: 25px;
  }
  .clean {
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 20px;
    color: white;
  }
}
</style>
  