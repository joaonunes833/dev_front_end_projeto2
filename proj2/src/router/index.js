import { createRouter, createWebHashHistory } from 'vue-router'
import inicio from '../views/inicio.vue'
import comentarios from '../views/comentarios.vue'
import artigos from '../views/artigos.vue'
import atLogin from '../views/login.vue'
import pesquisa from '../views/pesquisa.vue'
import carrinho from '../views/carrinho.vue'
import bolo from '../views/bolo.vue'
import frutas from '../views/frutas.vue'
import vinho from '../views/vinho.vue'
import detalhes from '../views/detalhes_pesquisa.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: inicio
  },
  {
    path: '/detalhes',
    name: 'detalhes',
    component: detalhes
  },
  {
    path: '/comentarios',
    name: 'comentarios',
    component: comentarios
  },
  {
    path: '/artigos',
    name: 'artigos',
    component: artigos
  },
  {
    path: '/pesquisa',
    name: 'pesquisa',
    component: pesquisa
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: carrinho
  },
  {
    path: '/bolo',
    name: 'bolo',
    component: bolo
  },
  {
    path: '/frutas',
    name: 'frutas',
    component: frutas
  },
  {
    path: '/vinho',
    name: 'vinho',
    component: vinho
  },
  {
    path: '/atLogin',
    name: 'login',
    component: atLogin
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
