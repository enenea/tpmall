<template>
  <div>
    <NavBar>
      <div slot="left-box" class="back" @click="goBack">
          <img src="~assets/img/detail/back.svg" alt="">
      </div>

      <div slot="center-box" class="titlies">
        <span v-for="(item, indedx) in titles">
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
    methods:{
      goBack(){
        this.$router.back()
      }
    },

    data() {
      return {
        titles:[
          "商品",
          "参数",
          "评论",
          "推荐",
        ]
      }
    },
    props:{
    },
    computed:{

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
