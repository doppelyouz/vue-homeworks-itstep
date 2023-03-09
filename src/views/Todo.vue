<template>
  <div class="space">
    <TodoCreator @add="addTodo" />
    <Todos :todos="todos" 
      @delete="deleteTodo" 
      @complete="completeTodo"
      @edit="editTodo"
      :completedCount="completedCount" 
      :ratioСompletedTasks="ratioOfСompletedTasksChanger" />
  </div>
</template>
<!-- 
@complete="completeTodo"
@edit="editTodo" -->

<script>
import Todos from "@/components/Todos.vue";
import TodoCreator from "@/components/TodoCreator.vue";
export default {
  name: "AppTodo",
  data() {
    return {
      todos: [],
      completedCount: 0,
      ratioСompletedTasks: 0,
    };
  },
  components: {
    Todos,
    TodoCreator,
  },
  computed: {
    ratioOfСompletedTasksChanger() {
      return Number((this.ratioСompletedTasks * 100).toFixed());
    }
  },
  methods: {
    addTodo(newToDoItem) {
      this.todos = [...this.todos, newToDoItem];
      if (newToDoItem.completed) {
        this.completedCount++;
      }
      console.log(this.completedCount / this.todos.length);
      this.ratioСompletedTasks = this.completedCount / this.todos.length;
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        } else {
          if (todo.completed) {
            this.completedCount -= 1;
          }
        }
      });
      this.ratioСompletedTasks = this.todos.length === 0 ? 0 :this.completedCount / this.todos.length
    },
    completeTodo(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          if (todo.completed) {
            this.completedCount -= 1;
          } else {
            this.completedCount += 1;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      this.ratioСompletedTasks = this.completedCount / this.todos.length;
    },
    editTodo({ id, title, note }) {
      this.todos = this.todos.map((t) => {
        if (id === t.id) {
          return {
            ...t,
            title,
            note,
          };
        }
        return t;
      });
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
}
</style>
