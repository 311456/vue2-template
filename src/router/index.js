import VueRouter from 'vue-router'

const routes = [
  {
    path: "/",
    redirect: '/layout/home',
    component: () => import('@/views/Layout/Layout')
  },
  {
    path: "/login",
    component: () => import('@/views//Login/Login')
  },
  {
    path: "/layout",
    redirect: "/layout/home",
    component: () => import('@/views/Layout/Layout'),
    children: [
      {
        path: "profile",
        component: () => import("@/views/Profile/Myinfo")
      },
      {
        path: "home",
        component: () => import('@/views/Home/Home')
      }
    ]
  },
  {
    path: "*",
    component: () => import('@/views/NoMatch')
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router