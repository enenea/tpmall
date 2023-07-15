<template>
  <div>
    <MainNavBar :title="title" />

    <Banner :banner="banner" ></Banner>

    <Recommend :recommend="recommend"></Recommend>

    <tab-control :title="tab" @clickTab="clickCate"></tab-control>

    <goods :goods="goods"></goods>
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar"
import Banner from "./HomeCommon/banner"
import Recommend from "./HomeCommon/recommend"
import TabControl from "./HomeCommon/tabControl"
import {getMultiData, getGoodsData} from "network/Home"
import Goods from "./HomeCommon/goods"


export default {
  name:'Home',
  components:{
    MainNavBar,
    Banner,
    Recommend,
    TabControl,
    Goods
  },
  created() {
    getMultiData().then( res =>{
      this.banner = res.data.banner
      this.recommend = res.data.recommend
      this.goods = this.tab[this.currentCate -1].list = res.data.goods
    }).catch( err => {
      console.log(err);
    })
  },

  methods: {
    getGoods(id){
      getGoodsData(id).then( res =>{
        console.log(res);
        this.goods = this.tab[this.currentCate -1].list = res.data
      }).catch( err => {
        console.log(err);
      })
    },
    clickCate(id){
      console.log("当前点击的分类id是:"+ id);
      // console.log(id == this.currentCate);
      if (id != this.currentCate) {
        this.currentCate = id
        if ( this.tab[this.currentCate -1].list.length == 0) {
          this.getGoods(this.currentCate)
        }else{
          this.goods = this.tab[this.currentCate -1].list
        }
      }
    },

  },

  data() {
    return {
      title:'首页',
      banner:[],
      recommend:[],
      goods:[],
      currentCate:1,
      tab:[
        { id: 1, name: "热卖", page: 1, list:[] },
        { id: 2, name: "新款", page: 1, list:[] },
        { id: 3, name: "精选", page: 1, list:[] },
      ]
    }
  }

}
</script>

<style>
</style>
