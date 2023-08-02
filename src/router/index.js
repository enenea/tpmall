// 1、导入
import Vue from 'vue'
import VueRouter from "vue-router"
import store from "@/store"

const Home = ()=> import("views/home/Home")
const Category = ()=> import("views/category/Category")
const ShopCart = ()=> import("views/shop-cart/shop-cart")
const Profile = ()=> import("views/profile/Profile")
const Login = ()=> import("views/profile/Login")
const Logout = ()=> import("views/profile/Logout")
const Register = ()=> import("views/profile/Register")
const Detail = ()=> import("views/goods/Detail")


// 2、初始化
Vue.use(VueRouter)

// 3、定义routes
const routes = [
// 路由信息
  {
    path:'',
    redirect:'/home',
    name:"home"

  },
  {
    path:'/home',
    component:Home,
    name:"home"
  },
  {
    path:'/category',
    component:Category,
    name:"category"
  },
  {
    path:'/shop-cart',
    component:ShopCart,
    name:"shop-cart"
  },
  {
    path:'/profile',
    component:Profile,
    name:"profile"
  },
  {
    path:'/detail/:id',
    component:Detail,
    meta:{
      hideBar : true,
    },
    name:"detail"
  },
  {
    path:'/login',
    component: Login,
    name:"login"
  },
  {
    path:'/register',
    component: Register,
    name:"register"
  },
  {
    path:'/logout',
    component: Logout,
    name:"logout"
  },
]


// new router
const router = new VueRouter({
  routes,
  mode:"history"
})

router.beforeEach((to ,from , next) => {

  // console.log()
  // 已经登录不可去登录\注册页面
  let notAllow = [
    "login",
    "register",
  ]

  let isLogin = store.getters.GET_TOKEN ? true : false

  if ( isLogin && notAllow.indexOf(to.name) > -1 ) {
    router.replace("/profile")
  }

  next()
})

// router.afterEach()


// 导出
export default router



