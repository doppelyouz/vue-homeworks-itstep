<template>
  <div v-if="isEditing" class="todo__info">
    <input class="li__title input" v-model="newTitle" />
    <input class="li__note input" v-model="newNote" />
  </div>
  <div v-else class="todo__info">
    <div class="li__title">{{todo.title}}</div>
    <div class="li__note">{{todo.note}}</div>
  </div>
  <div class="todo__settings">
    <div class="todo__delete" @click="deleteTodo">delete</div>
    <div v-if="isEditing" class="todo__edit done" @click="editTodo">done</div>
    <div v-else class="todo__edit" @click="editTodo">edit</div>
    <div class="todo__checked" @click="completeTodo">complete</div>
  </div>
</template>

<script>

  export default {
    name: 'AppTodoItem',
    emits: ["delete-todos", "complete-todos", "edit-todos"],
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        isEditing: false,
        newTitle: '',
        newNote: ''
      }
    },
    methods: {
      editTodo(event) {
        event.preventDefault();
        this.isEditing = !this.isEditing;
        if(this.newTitle.length > 0 && this.newNote.length) {
          const todoNew = {
            ...this.todo,
            title: this.newTitle,
            note: this.newNote
          };
          
          this.$emit('edit-todos', todoNew)
        }
        this.newTitle = '';
        this.newNote = '';
      },
      completeTodo() {
        this.$emit('complete-todos', this.todo.id)
      },
      deleteTodo() {
        this.$emit('delete-todos', this.todo.id)
      }
    }
  }
</script>

<style lang="scss" scoped>
      .li__title {
        font-size: 35px;
        margin-bottom: 15px;
      }

      .li__note {
        font-size: 15px;
      }
      .input {
        padding: 10px;
        background-color: inherit;
        border: 1px solid beige;
        border-radius: 10px;
      }
      .todo__settings {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .todo__edit.done {
          font-size: 30px;
          font-weight: 700;
        }
      }
</style>