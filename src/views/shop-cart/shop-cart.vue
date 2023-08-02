<template>
  <div class="shop-cart">
    <MainNavBar :title="title" :num="num" />

    <cartItem></cartItem>

    <ShopCatrBar></ShopCatrBar>
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar"
import cartItem from "./CatrCommon/CatrItem"
import ShopCatrBar from "./CatrCommon/ShopCatrBar"


export default {
  name:'ShopCart',
  components: {
    MainNavBar,
    cartItem,
    ShopCatrBar,
  },
  methods:{
    add(){

    },
    dec(){

    },

  },

  data() {
    return {
      title:"购物车",
      num:1
    }
  }
}
</script>

<style scoped>
.shop-cart{
  background: #eee;
  height: 100vh;
  overflow: hidden;
  padding: 0 1rem;
}
</style>
