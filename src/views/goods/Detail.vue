<template>
  <div>
    <div class="detail">

      <GoodsNavBar></GoodsNavBar>

      <BannerVant
      v-if="goodsInfo.goods_banner"
      :banner="goodsInfo.goods_banner"
      :totalBanner="goodsInfo.goods_banner.length"
      />

      <Infomation ref="infomation" :goods="goodsInfo"></Infomation>

      <Comment ref="comment" :comment="goodsInfo.comment"></Comment>
      <div class="separate spe3"></div>

      <goods ref="goods" @loadData="handleLoadData" :goods="goods" :currentCate="tab[2]"></goods>

      <bottom-bar></bottom-bar>

      <BackTop ref="backTop"></BackTop>
    </div>
  </div>
</template>

<script>
  import GoodsNavBar from "./goodsCommon/goodsNavBar"
  import BannerVant from "./goodsCommon/banner-vant"
  import Infomation from "./goodsCommon/info"
  import Comment from "./goodsCommon/comment"
  import {getGoodsDetail} from "network/Goods"
  import Goods from 'views/home/HomeCommon/goods'
  import {getGoodsData} from "network/Home"
  import BackTop from "components/common/backtop/backTop"
  import BottomBar from './goodsCommon/bottomBar'

  export default {
    name:"Detail",
    components:{
      GoodsNavBar,
      BannerVant,
      Infomation,
      Comment,
      Goods,
      BackTop,
      BottomBar,
    },
    methods:{
      handleLoadData(id){

        // 加载更多
        // this.getGoods(id, true)

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
    },

    created(){

      console.log("created detail");
      getGoodsDetail({id:this.id}).then(res => {
        this.goodsInfo = res.data
      }).catch(err =>{
        console.log(err)
      })
      this.getGoods(3)
    },
    activated() {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    },

    data() {
      return {
        id : this.$route.params.id,
        goodsInfo:{},
        goods:{},
        tab:[
          { id: 1, name: "热卖", page: 1, isEnd: false, list:[] },
          { id: 2, name: "新款", page: 1, isEnd: false, list:[] },
          { id: 3, name: "精选", page: 1, isEnd: false, list:[] },
        ]
      }
    }

  }
</script>

<style scoped>
  .detail{
  }
  .separate{
    background: #eee;
    height: 0.05rem;
    margin-top: 0.5rem;
  }

  .spe3{
    margin-top: 1rem;
    height: 0.25rem;
  }
</style>
