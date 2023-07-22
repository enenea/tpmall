<template>
  <div>
    <div class="detail">

      <GoodsNavBar></GoodsNavBar>

      <Banner :banner="goodsInfo.goods_banner" ></Banner>

      <Info></Info>
    </div>
  </div>
</template>

<script>
  import GoodsNavBar from "./goodsCommon/goodsNavBar"
  import Banner from "./goodsCommon/banner"
  import Info from "./goodsCommon/info"
  import {getGoodsDetail} from "network/Goods"

  export default {
    name:"Detail",
    components:{
      GoodsNavBar,
      Banner,
      Info,
    },
    created(){
      getGoodsDetail({id:this.id}).then(res => {
        this.goodsInfo = res.data
      }).catch(err =>{
        console.log(err)
      })
    },
    data() {
      return {
        id : this.$route.params.id,
        goodsInfo:{}
      }
    }

  }
</script>

<style>
</style>
