<template>
  <div class="wrapper">
    <div class="goods content" >
      <div v-for="(item, index) in goods" class="goods-item" @click="clickGoods(item.id)">

        <img :src="item.goods_img" />

        <div>{{item.goods_name}}</div>

        <span class="goods_price">￥{{item.goods_price}}</span>
        <span class="goods_shop">{{item.goods_shop}}</span>

      </div>
    </div>
  </div>
</template>

<script>
// import BetterScroll from "better-scroll" =>

  export default {
    name:"goods",
    props:["goods","currentCate"],
    data() {
      return {
        bs:null
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods:{
      clickGoods(id){
        this.$router.push('detail/'+ id)
      },
      handleScroll() {
        //滚动条在y轴上的滚动距离
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        //文档的总高度
        var documentScrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        //浏览器窗口的高度
        var getWindowHeight = document.documentElement.clientHeight || document.body.clientHeight;

        if (scrollTop > 10) {

        } else {

        }

        //滚动条距离页面顶部的距离大于一屏时触发该方法
        if (scrollTop + getWindowHeight == documentScrollHeight) {
          this.$emit("loadData",this.currentCate.id)
        }
      },
    },

  }




</script>

<style>
.wrapper{
}
.goods{
  /* padding-bottom: 2.5rem; */
}

.goods-item{
  width: 46%;
  display: inline-block;
  padding: 1% 1%;
  margin: 1% 1%;
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
