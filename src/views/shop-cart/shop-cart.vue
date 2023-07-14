<template>
  <div>
    <MainNavBar :title="title" :num="num" />
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar"
export default {
  name:'ShopCart',
  components: {
    MainNavBar
  },
  data() {
    return {
      title:"购物车",
      num:0
    }
  }
}
</script>

<style>
</style>
