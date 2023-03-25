<template>
    <div>
      <Topbar />
      <div class="wrapper">
        <h1 class="payment" v-if="payment > 0">Ваша сумма к оплате: {{ payment }}</h1>
        <h1 class="payment" v-else>Вы все еще не оформили заказ</h1>
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
        payment: (state) => state.payment,
      }),
    },
    components: {
      Topbar,
    },
    methods: {
      checkout() {
        this.$store.dispatch("checkout");
      },
    },
  };
  </script>
    
    <style lang="scss" scoped>
  .wrapper {
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
    .payment {
        color: white;
        font-size: 35px;
    }
  }
  </style>
    