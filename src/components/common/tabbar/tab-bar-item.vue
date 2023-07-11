<template>

    <div class="tab-bar-item" :class="isActive ?'active':'' " @click="btnClick">

      <!-- 激活状态的图标 -->
      <div v-if="isActive">
        <slot name="item-active"></slot>
      </div>

      <!-- 非激活状态的图标 -->
      <div v-else>
        <slot name="item-noactive"></slot>
      </div>

      <!-- 文字 -->
      <slot name="item-text"></slot>

    </div>

</template>

<script>
  export default {
    name:'tabBarItem',
    data(){
      return {
        // path:'/home',
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      }
    },
    props:{
      path:{
        type:String,
        required:true,
      },

    },
    methods: {
      btnClick(){
        this.$router.push(this.path)
      },
    }
  }
</script>

<style>
.tab-bar-item {
    text-align: center;
    flex: 1;
    height: 49px;
    /* line-height: 49px; */
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .tab-bar-item div{

  }

  .active{
    color: red;
  }
</style>
