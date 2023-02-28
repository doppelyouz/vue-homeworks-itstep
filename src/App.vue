<template>
  <div class="space">
    <form class="form">
      <div class="form__input-block">
        <div class="form__title">Title:</div>
        <input type="text" v-model="title">
      </div>
      <div class="form__input-block">
        <div class="form__note">Note:</div>
        <input type="text" v-model="note">
      </div>
      <button @click="addTodo()">Add</button>
    </form>
    <ul class="ul">
      <li v-for="todo in todos" :key="todo.id" :class="{ 'completed' : todo.completed}" class="li">
        <div v-if="todo.isEditing" class="todo__info">
          <input class="li__title" v-model="title"/>
          <input class="li__note" v-model="note" />
        </div>
        <div v-else class="todo__info">
          <div class="li__title">{{todo.title}}</div>
          <div class="li__note">{{todo.note}}</div>
        </div>
        <div class="todo__settings">
          <div class="todo__delete" @click="deleteTodo(todo.id)">delete</div>
          <div v-if="todo.isEditing" class="todo__edit done" @click="editTodo(todo)">done</div>
          <div v-else class="todo__edit" @click="editTodo(todo)">edit</div>
          <div class="todo__checked" @click="completeTodo(todo.id)">complete</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "",
        note: "",
        todos: []
      }
    },
    methods: {
      addTodo() {
        if(this.title.length > 0 && this.note.length > 0) {
          this.todos.push({id: `id-${Date.now()}`, title: this.title, note: this.note, completed: false, isEditing: false});
          this.title = "";
          this.note = "";
        }
      },
      deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      completeTodo(id) {
        this.todos = this.todos.map(todo => {
          if(todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        });
      },
      editTodo(todo) {
        todo.isEditing = !todo.isEditing;
        this.todos = this.todos.map(t => {
          if(todo.id === t.id) {
            return {
              ...t,
              title: this.title,
              note: this.note
            }
          }
          return t;
        });
        this.title = "";
        this.note = "";
      }
    }
  }
</script>

<style lang="scss" scoped>
  .space {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    padding-top: 25px;

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
        align-items:center;
        max-width: 200px;
        width: 100%;
        padding: 20px 0px;
        border-radius: 20px;
        background-color:SteelBlue;
        color:white;
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
    .li {
      padding: 25px;
      background-color: MintCream;
      color:black;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.5);
      margin-bottom: 25px;
      display: flex;
      justify-content: space-between;
      
      .li__title {
        font-size: 35px;
        margin-bottom: 15px;
      }
      .li__note {
        font-size: 15px;
      }
      .todo__settings {
        display: flex;
        flex-direction: column;
        gap:10px;
        .todo__edit.done {
          font-size: 30px;
          font-weight: 700;
        }
      }
    }
    .li.completed {
        text-decoration: line-through;
        background-color: DarkGreen;
      }
  }
</style>