<template>
  <div class="recommend-list">
    <a class="recommend" v-for="item in recommend" :href="item.link">
      <img :src="item.icon" :alt="item.alt">
      <span>{{item.text}}</span>
    </a>
  </div>
</template>

<script>
  export default {
    name:"Recommend",
    props:["recommend"],
    data() {
      return {
      }
    }

  }
</script>

<style scoped>
.recommend-list{
  /* margin-top: 9.5rem */
}
.recommend{
  width: 20%;
  display: inline-block;
  text-align: center;
}
.recommend img{
  width: 70%;
  flex: 1;
}

.recommend span{
  display: inline-block;
  font-size: 0.7em;
  color: #666666;
}
</style>
