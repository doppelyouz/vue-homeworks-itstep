<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id" :class="{ completed: todo.completed }" class="li">
      <TodoItem :todo="todo" @delete-todos="$emit('delete', todo.id)" @complete-todos="$emit('complete', todo.id)" @edit-todos="editTodo" />
    </li>
  </ul>
  <div class="completedCount">
    Выполнено:
    {{ completedCount }}
  </div>
  <div class="completedCount" style="padding-bottom: 25px">
    Cоотношение:
    {{ ratioСompletedTasks + "%" }}
    <div class="scale" :style="{
        backgroundColor: 'green',
        height: '50px',
        width: ratioСompletedTasks + '%',
      }"></div>
  </div>
</template>

<script>
  import TodoItem from "./TodoItem.vue";
  export default {
    name: "AppTodo",
    emits: ["delete", "complete", "edit"],
    props: {
      todos: {
        type: Array,
        required: true,
      },
      ratioСompletedTasks: {
        type: Number,
        required: true,
      },
      completedCount: {
        type: Number,
        required: true,
      },
    },
    methods: {
      editTodo(newTodo) {
        this.$emit('edit', newTodo);
      }  
    },
    components: {
      TodoItem,
    },
  };
</script>

<style lang="scss" scoped>
  .li.completed {
    text-decoration: line-through;
    background-color: DarkGreen;
  }

  .li {
    padding: 25px;
    background-color: MintCream;
    color: black;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
  }

  .completedCount {
    font-size: 35px;
    color: white;

    .scale {
      transition: 0.5s all;
      border-radius: 10px;
      margin-top: 10px;
    }
  }
</style>