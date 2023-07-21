// 1、导入
import Vue from 'vue'
import VueRouter from "vue-router"

const Home = ()=> import("views/home/Home")
const Category = ()=> import("views/category/Category")
const ShopCart = ()=> import("views/shop-cart/shop-cart")
const Profile = ()=> import("views/profile/Profile")
const Detail = ()=> import("views/goods/Detail")


// 2、初始化
Vue.use(VueRouter)

// 3、定义routes
const routes = [
// 路由信息
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:Home,
  },
  {
    path:'/category',
    component:Category,
  },
  {
    path:'/shop-cart',
    component:ShopCart,
  },
  {
    path:'/profile',
    component:Profile,
  },
  {
    path:'/detail/:id',
    component:Detail,
  },
]


// new router
const router = new VueRouter({
  routes,
  mode:"history"
})


// 导出
export default router



