<template>
  <div>
    <div class="detail">

      <GoodsNavBar></GoodsNavBar>

      <Banner :banner="goodsInfo.goods_banner" ></Banner>


    </div>
  </div>
</template>

<script>
  import GoodsNavBar from "./goodsCommon/goodsNavBar"
  import Banner from "./goodsCommon/banner"
  import {getGoodsDetail} from "network/Goods"

  export default {
    name:"Detail",
    components:{
      GoodsNavBar,
      Banner
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
