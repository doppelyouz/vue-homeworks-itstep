<template>
    <div>
        <Topbar />
        <div class="wrapper">
            <ul class="pizzas">
                <li v-for="pizza in pizzas" :key="pizza" class="pizza">
                    <h3 class="pizza__name">{{ pizza.name }}</h3>
                    <div class="pizza__image">
                        <img :src="pizza.image" alt="pizzaPhoto">
                    </div>
                    <div class="pizza__price">
                        Price: {{ pizza.price }}$
                    </div>
                    <button class="buy" @click="buyPizza(pizza)">Добавить в корзину</button>
                </li>
            </ul>
        </div>
    </div>
  </template>
  
  <script>
  import Topbar from '@/components/Topbar.vue';
    import { mapState } from 'vuex';

  export default {
    name: 'AppWebShop',
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            pizzas: state => state.pizzas,
            cart: state => state.cart,
        })
    },
    components: {
        Topbar
    },
    methods: {
        buyPizza(pizza) {
            this.$store.dispatch('buyPizza', pizza)
        }
    }
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
                .buy {
                    border-radius: 10px;
                    padding: 15px;
                    font-size: 20px;
                    color: white;
                    background: rgb(71, 116, 199);
                }
            }
        }
    }
  </style>
  