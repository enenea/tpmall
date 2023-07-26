<template>
  <div>
    <NavBar :mystyle="{background:'#fff'}">
      <div slot="left-box" class="back" @click="goBack">
          <img src="~assets/img/detail/back.svg" alt="">
      </div>

      <div slot="center-box" class="titlies">
        <span @click="jump(index)" :class="{active:currentIndex == index+1}" v-for="(item, index) in titles">
          {{item}}
        </span>
      </div>

      <div slot="right-box">
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/nav-bar"

  export default {
    name:'GoodsNavBar',
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    methods:{


      jump(index){
        //获取滚动条的滚动高度
        // [0, 917, 1158]
        let domOffset = this.getOffset(true)
         // - domOffset[index-1]
        let scrollInfo = this.getScrollInfo()
        let osTop = scrollInfo.scrollTop + domOffset[index]
        //用于设置速度差，产生缓动的效果

        let speed = Math.floor(-osTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop = domOffset[index]
        
      },

      goBack(){
        this.$router.back()
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

        // 商品信息元素对象
      getOffset(hasgoods = false){
        let infomation = this.$parent.$refs.infomation.$el
        let comment = this.$parent.$refs.comment.$el
        let goods = this.$parent.$refs.goods.$el

        let data = [
          infomation.clientHeight+infomation.offsetTop,
          comment.clientHeight+comment.offsetTop,
        ]

        if ( hasgoods == true) {
          data.unshift(0)
        }

        return data
      },

      // 监听滚动事件
      handleScroll() {

        // 商品信息元素对象高度与偏移
        let compOffset = this.getOffset()

        // 每到一个区间切换顶部标题active类
        let {scrollTop} = this.getScrollInfo()
        // console.log(scrollTop)
        if ((scrollTop < compOffset[0]) && (this.currentIndex != 1)) {
          this.currentIndex = 1
        }

        if ((scrollTop >= compOffset[0]) && (scrollTop <= compOffset[1]) && (this.currentIndex != 2)) {
          this.currentIndex = 2
        }

        if ((scrollTop >= compOffset[1]) && (this.currentIndex != 3)) {
          this.currentIndex = 3
        }

      },



    },

    data() {
      return {
        currentIndex:1,
        titles:[
          "商品",
          "评论",
          "推荐",
        ]
      }
    },
    components:{
      NavBar
    },
  }
</script>

<style scoped>
.titlies{
  display: flex;
}
.titlies span{
  flex: 1;
}
.back{
  display: inline-block;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
}
.back img{
  width: 1.5rem;

}
</style>
