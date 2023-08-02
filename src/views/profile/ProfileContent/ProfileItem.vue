<template>
  <div>
    <div class="item-box" @click="itemClick(item)">
      <div class="icon-box">
        <img :src="item.icon" alt="">
      </div>

      <div class="icon-text">
        {{item.title}}
      </div>

      <div class="right">
        <img src="~assets/img/profile/right.png" alt="">
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name:'ProfileItem',
  props:{
    item:{
/*    path:String,
      icon:String,
      title:String, */
    }
  },
  components:{

  },

  methods:{
    itemClick({ path }){
      this.$router.push(path)
    }
  },

  data() {
    return {
    }
  }
}
</script>

<style scoped>
  img{
    width: 1rem;
  }
.icon-box{
  position: relative;
}
.icon-box img{
  position: inherit;
  top: 1px;
}
.item-box{
  font-size: 1.2rem;
  padding: 0.6rem 1rem;
  border-bottom: 1px  solid #eee;
}
.item-box>div{
  display: inline-block;
}
.icon-text{
  margin-left: 0.3125rem;
}
.right{
  float: right;
}
</style>
