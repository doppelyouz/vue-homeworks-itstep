import { createRouter, createWebHashHistory } from 'vue-router'
import Todo from '@/views/Todo'

const routes = [
  {
    path: '/',
    name: 'todo',
    component: Todo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
