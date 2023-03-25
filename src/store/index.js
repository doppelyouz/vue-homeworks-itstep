import { createStore } from 'vuex'

export default createStore({
  state: {
    pizzas: [
      {
          id: 1,
          name: 'Napoletana',
          image: 'https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/PIZZA-NAPOLETANA-2-1410x940.jpg',
          price: 30
      },
      {
          id: 2,
          name: 'Calzone',
          image: 'https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/calzone-pizza-624x416.jpg',
          price: 25
      },
      {
          id: 3,
          name: 'Romana',
          image: 'https://www.alma.scuolacucina.it/wp-content/uploads/2021/11/shutterstock_pizza-romana-624x416.jpg',
          price: 35
      }
    ],
    cart: [],
    payment: 0
  },
  getters: {
  },
  mutations: {
    buyPizzaSuccess(state, payload) {
      state.cart.push(payload);
    },
    checkoutSuccess(state) {
      state.payment = state.cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
    );
      state.cart = [];
    }
  },
  actions: {
    buyPizza(context, pizza) {
      context.commit("buyPizzaSuccess", pizza);
    },
    checkout(context) {
      context.commit("checkoutSuccess");
    },
  },
  modules: {
  }
})
