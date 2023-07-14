<template>
  <div>
    <MainNavBar :title="title" />

    <Banner :banner="banner" ></Banner>

    <Recommend :recommend="recommend"></Recommend>

    <tab-control :title='["热卖", "新款", "精选"]'></tab-control>

    <goods></goods>

  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar"
import Banner from "./HomeCommon/banner"
import Recommend from "./HomeCommon/recommend"
import TabControl from "./HomeCommon/tabControl"
import Goods from "./HomeCommon/goods"
import {getMultiData} from "network/Home"



export default {
  name:'Home',
  components:{
    MainNavBar,
    Banner,
    Recommend,
    TabControl,
    Goods,
  },
  created() {
    getMultiData().then( res =>{
      this.banner = res.data.banner
      this.recommend = res.data.recommend
    }).catch( err => {

    })
  },
  
  methods: {
  },

  data() {
    return {
      title:'首页',
      banner:[],
      recommend:[],
    }
  }

}
</script>

<style>
</style>
