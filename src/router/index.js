import { createRouter, createWebHashHistory } from 'vue-router'
import Todo from '@/views/Todo'
import Posts from '@/views/Posts'
import FloorRepair from '@/views/FloorRepair'
import Blogs from '@/views/Blogs'

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
  },
  {
    path: '/floor',
    name: 'floor',
    component: FloorRepair
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: Blogs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
