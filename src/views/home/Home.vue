<template>
  <div>
    <MainNavBar :title="title" />

    <Banner :banner="banner" ></Banner>

    <Recommend :recommend="recommend"></Recommend>

    <tab-control :title="tab" @clickTab="clickCate"></tab-control>

    <goods @loadData="handleLoadData" :goods="goods" :currentCate="getCurrentCate"></goods>

    <IsLoadEnd v-if="this.tab[this.currentCate -1].isEnd"></IsLoadEnd>

    <BackTop></BackTop>

  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar"
import Banner from "./HomeCommon/banner"
import Recommend from "./HomeCommon/recommend"
import TabControl from "./HomeCommon/tabControl"
import {getMultiData, getGoodsData} from "network/Home"
import Goods from "./HomeCommon/goods"
import IsLoadEnd from "./HomeCommon/isLoadEnd"
import BackTop from "components/common/backtop/backTop"

export default {
  name:'Home',
  components:{
    MainNavBar,
    Banner,
    Recommend,
    TabControl,
    Goods,
    IsLoadEnd,
    BackTop
  },
  computed: {

  },
  created() {
    getMultiData().then( res =>{
      this.banner = res.data.banner
      this.recommend = res.data.recommend
      this.goods = this.tab[this.currentCate -1].list = res.data.goods

      // 页码+1
      this.tab[this.currentCate -1].page++
      // 如果返回数据条数不足30则代表该分类的商品已经请求完毕
      this.tab[this.currentCate -1].isEnd = res.data.goods.length < this.pageLimit
    }).catch( err => {
      console.log(err);
    })
  },


  methods: {
    // 处理goods组件scroll触底之后触发的函数，加载更多数据
    handleLoadData(id){
      // 加载更多
      this.getGoods(id, true)
    },
    //获取商品列表
    getGoods(id, isLoad=false){
      if (this.tab[id -1].isEnd){
        return null
      }

      let params = {
        id,
        page: this.tab[id -1].page
      }

      getGoodsData(params).then( res =>{
        // console.log(res);

        // 有数据则追加
        if (res.data.length > 0) {
          if (isLoad == true) {
             this.tab[id -1].list.push(...res.data)
             this.goods.push(...res.data)
          } else{
            this.goods = this.tab[id -1].list = res.data
          }
        }
        // 页码+1
        this.tab[id -1].page++
        // 如果返回数据条数不足30则代表该分类的商品已经请求完毕
        this.tab[id -1].isEnd = res.data.length < this.pageLimit

      }).catch( err => {
        // console.log(err);
      })
    },
    // 切换栏目分类&加载商品列表
    clickCate(id){
      // console.log("当前点击的分类id是:"+ id);
      if (id != this.currentCate) {
        this.currentCate = id
        if ( this.tab[this.currentCate -1].list.length == 0) {
          this.getGoods(this.currentCate)
        }else{
          this.goods = this.tab[this.currentCate -1].list
        }
      }
    },
    // 获取scrollTop ,documentScrollHeight ,getWindowHeight
    getScrollInfo(){
      //滚动条在y轴上的滚动距离
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      //文档的总高度
      var documentScrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      //浏览器窗口的高度
      var getWindowHeight = document.documentElement.clientHeight || document.body.clientHeight;

      return {scrollTop, documentScrollHeight, getWindowHeight}
    },

  },
  computed:{
    getCurrentCate(){
      return this.tab[this.currentCate-1]
    }
  },

  data() {
    return {
      title:'首页',
      banner:[],
      recommend:[],
      goods:[],
      currentCate:1,
      pageLimit: 30,
      tab:[
        { id: 1, name: "热卖", page: 1, isEnd: false, list:[] },
        { id: 2, name: "新款", page: 1, isEnd: false, list:[] },
        { id: 3, name: "精选", page: 1, isEnd: false, list:[] },
      ]
    }
  }

}
</script>

<style>
</style>
