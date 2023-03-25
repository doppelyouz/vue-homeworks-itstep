import { createRouter, createWebHashHistory } from 'vue-router'
import Todo from '@/views/Todo'
import Posts from '@/views/Posts'
import FloorRepair from '@/views/FloorRepair'
import Blogs from '@/views/Blogs'
import Game from '@/views/Game'
import WebShop from '@/views/WebShop'
import Cart from '@/views/Cart'
import Payment from '@/views/Payment'

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
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/web-shop',
    name: 'webShop',
    component: WebShop
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
