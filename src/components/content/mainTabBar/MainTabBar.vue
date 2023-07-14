<template>
  <div>
    <tab-bar>

      <tab-bar-item path="/home" >
          <img slot="item-active" class="item-active-icon" src="~assets/img/tabbar/icon01_active.png" alt="">
          <img slot="item-noactive" class="item-icon"  src="~assets/img/tabbar/icon01.png" alt="">
          <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category">
          <img slot="item-active" class="item-active-icon"  src="~assets/img/tabbar/icon02_active.png" alt="">
          <img slot="item-noactive" class="item-icon" src="~assets/img/tabbar/icon02.png" alt="">
          <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-bar-item path="/shop-cart">
          <img slot="item-active" class="item-active-icon"  src="~assets/img/tabbar/icon03_active.png" alt="">
          <img slot="item-noactive" class="item-icon" src="~assets/img/tabbar/icon03.png" alt="">
          <div slot="item-text">购物车</div>
      </tab-bar-item >

      <tab-bar-item path="/profile">
          <img slot="item-active" class="item-active-icon"  src="~assets/img/tabbar/icon04_active.png" alt="">
          <img slot="item-noactive" class="item-icon" src="~assets/img/tabbar/icon04.png" alt="">
          <div slot="item-text">我的</div>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>

<script>
import tabBarItem from "components/common/tabbar/tab-bar-item"
import tabBar from "components/common/tabbar/tab-bar"

  export default {
    name:'MainTabBar',
    components:{
      tabBar,
      tabBarItem
    },
  }
</script>

<style scoped>

</style>
