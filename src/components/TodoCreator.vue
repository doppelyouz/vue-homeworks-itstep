<template>
<form class="form" @submit="addToDo">
    <div class="form__input-block">
      <div class="form__title">Title:</div>
      <input type="text" v-model="title">
    </div>
    <div class="form__input-block">
      <div class="form__note">Note:</div>
      <input type="text" v-model="note">
    </div>
    <button type="submit">Add</button>
  </form>
</template>

<script>
  export default {
    name: 'AppTodo',
    props: {
    },
    components: {
    },
    data() {
        return {
            title: "",
            note: "",
        }
    },
    methods: {
        addToDo(event) {
            event.preventDefault();
            if (this.title.length > 0 && this.note.length > 0) {
              const newToDoObject = {
                  id: `id + ${Date.now()}`,
                  title: this.title,
                  note: this.note,
                  completed: false
              }
            
              this.$emit("add", newToDoObject);
              this.title= '';
              this.note= '';
            }
        }
    }
  }
</script>

<style lang="scss" scoped>
    .form {
      width: 100%;
      background-color: LightCyan;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      padding: 30px;
      margin-bottom: 25px;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 200px;
        width: 100%;
        padding: 20px 0px;
        border-radius: 20px;
        background-color: SteelBlue;
        color: white;
        font-size: 35px;
      }

      .form__input-block {
        margin-bottom: 25px;

        .form__title {
          font-size: 35px;
          margin-bottom: 15px;
        }

        .form__note {
          margin-bottom: 15px;
          font-size: 35px;
        }

        input {
          height: 50px;
          border-radius: 10px;
          width: 100%;
          padding: 25px;
        }
      }
    }

</style>