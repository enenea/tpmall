<template>
  <div class="tab-control">
    <div @click="tabClick(index)" :class="{active:currentIndex == index}" v-for="(item, index) in title">{{item}}
    <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"TabControl",
    props:{
      title:{
        type:Array,
        default:[],
      }
    },
    methods:{
      tabClick(index){
        this.currentIndex = index
      },
    },
    data() {
      return {
        currentIndex:0
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
