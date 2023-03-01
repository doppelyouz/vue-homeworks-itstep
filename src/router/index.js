import { createRouter, createWebHashHistory } from 'vue-router'
import Todo from '@/views/Todo'
import Posts from '@/views/Posts'

const routes = [
  {
    path: '/todo',
    name: 'todo',
    component: Todo
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
