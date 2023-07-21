<template>
  <div v-show="showBackTop" @click="backTop">
    <div class="backtop">
      <img src="~assets/img/home/back-top.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:"BackTop",
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    methods:{
      backTop(){
        /* document.documentElement.scrollTop= 0 */
        //设置一个定时器
        let timer = setInterval(function(){
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            if(osTop == 0){
                clearInterval(timer);
            }
        }, 20);
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

      // 监听滚动事件
      handleScroll() {

        let ScrollInfo = this.getScrollInfo()

        //滚动条距离页面顶部的距离大于1100的时候显示返回顶层否则隐藏
        this.showBackTop = ScrollInfo.scrollTop >= 1100 ? true : false
      },
    },
    
    data() {
      return {
        showBackTop:false
      }
    }
  }
</script>

<style>
  .backtop{
    z-index: 99;
    position: fixed;
    right: 1.5rem;
    bottom: 4rem;
    background: rgba(230, 230, 230, 0.4);
    border-radius: 100%;
  }
  .backtop img{
    width: 3rem;
  }
</style>
