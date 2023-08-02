<template>
  <div class="mainBar">
    <NavBar :mystyle="{background:'rgb(201,22,35)'}">
      <div slot="left-box">
      </div>

      <div slot="center-box">
      {{title}}
      <span v-if="showNum">({{num}})</span>
      </div>

      <div slot="right-box">
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/nav-bar"

  export default {
    name:'MainNavBar',
    data() {
      return {
      }
    },
    props:{
      title:{
        Type:String,
        default:"标题",
      },
      num:{
        Type:Number,
        default:-1,
      },
    },
    computed:{
      showNum(){
        return this.num > -1
      }
    },
    components:{
      NavBar
    },
  }
</script>

<style scoped>
  .mainBar{
    color: aliceblue;
  }
</style>
