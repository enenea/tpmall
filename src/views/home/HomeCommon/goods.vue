<template>
  <div class="wrapper" ref="wrapper">
    <div class="goods content" >
      <div v-for="(item, index) in goods" class="goods-item">

        <img :src="item.goods_img" />

        <div>{{item.goods_name}}</div>

        <span class="goods_price">￥{{item.goods_price}}</span>
        <span class="goods_shop">{{item.goods_shop}}</span>

      </div>
    </div>
  </div>
</template>

<script>
// import BetterScroll from "better-scroll"

  export default {
    name:"goods",
    props:["goods"],
    data() {
      return {
        bs:null
      }
    },

    mounted() {
      // 接受一下防止函数执行完成之后丢失实例
      // this.bs = new BetterScroll(".wrapper", {})
    },
  }
</script>

<style>
.wrapper{
  /* height: 100rem; */
}
.goods{
  padding-bottom: 2.5rem;
}

.goods-item{
  width: 46%;
  display: inline-block;
  /* padding: 0 1.5rem; */
  padding: 1% 1%;
  margin: 1% 1%;
  /* overflow: hidden; */
}

/* 清除浮动 */
.goods-item:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.goods-item img{
  width: 100%;
  margin-top: 2%;
  border-radius: 0.4rem;
}
.goods-item div{
  font-size: 0.5rem;
  height: 1.7rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

}
.goods-item span{
  font-size: 0.5rem;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  display: inline-block;
  line-height: 1rem;
}
.goods_price{
  color: red;
}
.goods_shop{
  text-align: right;
  margin-left: 0.1rem;
  color: coral;
  width: 70%;
}

</style>
