<template>
  <div class="tab-control">
    <div @click="tabClick({index:index,id:item.id})" :class="{active:currentIndex == index}" v-for="(item, index)  in title">{{item.name}}
    <span></span>
    </div>
  </div>

</template>

<script>

  export default {
    name:"TabControl",
    components:{
    },

    props:{
      title:{
        type:Array,
        default:[],
      },
     
    },
    methods:{
      tabClick(info){
        this.currentIndex = info.index
        this.$emit("clickTab",info.id)
      },
    },
    data() {
      return {
        currentIndex:0,
        currentId:1
      }
    }

  }

</script>

<style>
.tab-control{
  display: flex;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  background: #fff;
  position: sticky;
  top: 3.0625rem;
  z-index: 99;
}
.tab-control div {
  flex: 1;
}
.tab-control div span{
  width: 5rem;
  display: block;
  margin: -0.2rem auto; /* 水平居中 */
}
.active span{
  border-bottom: red solid;
}
</style>
