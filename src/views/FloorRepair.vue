<template>
  <div class="space">
    <form class="form">
      <div class="form__input-block">
        <div class="form__input-name">Width:</div>
        <input type="text" v-model="width">
      </div>
      <div class="form__input-block">
        <div class="form__input-name">Length:</div>
        <input type="text" v-model="length">
      </div>
      <div class="form__input-block">
        <div class="form__input-name">Type of coverage: </div>
        <select v-model="coverage">
          <option value="laminate" selected >laminate</option>
          <option value="wood">wood</option>
          <option value="tile">tile</option>
        </select>
      </div>
    </form>
    <div class="price">{{ priceCalc }}</div>
  </div>
</template>

<script>
  export default {
    name: "AppFloorRepair",
    data() {
      return {
        width: null,
        length: null,
        coverage: 'laminate',
        price: null,
        bonus: 1
      }
    },
    methods: {
        bonusChecker() {
            if(this.width * this.length >= 100) {
                this.bonus = 0.5;
            }
        }
    },
    computed: {
        priceCalc() {
            if(this.width <= 0 || this.width > 15) {
                return "width isn't correct";
            }
            if(this.length <= 0 || this.length > 15) {
                return "length isn't correct";
            }
            this.bonusChecker();
            switch(this.coverage) {
                case 'laminate':
                    return ((this.width * this.length) * 100) * this.bonus;
                case 'wood':
                    return ((this.width * this.length) * 200) * this.bonus;
                case 'tile':
                    return ((this.width * this.length) * 300) * this.bonus;
            } 
            return 'incorrect data'
        }
    },
  };
</script>

<style lang="scss" scoped>
  .space {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding-top: 25px;

    .form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      background-color: LightCyan;
      border-radius: 20px;
      padding: 30px;
      margin-bottom: 25px;

      .form__input-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        .form__input-name {
          font-size: 25px;
        }

        input {
          width: 100%;
          padding: 15px 10px;
          border-radius: 10px;
          border: 1px solid black;
        }

        select {
          width: 100%;
          padding: 15px 10px;
          border-radius: 10px;
          border: 1px solid black;
          font-size: 20px;
        }
      }
    }
    .price {
        color:white;
        font-size: 35px;
    }
  }
</style>