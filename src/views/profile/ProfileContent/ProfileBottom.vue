<template>
  <div>

    <span class="separate"></span>
    <ProfileItem :key="index" :item="item" v-for="(item, index) in items"></ProfileItem>

  </div>
</template>

<script>
  import ProfileItem from "./ProfileItem"

  import itemConfig from "./items"

  export default {
    name:"ProfileBottom",
    components:{
      ProfileItem,

    },
    data() {
      return {
        items:itemConfig
      }
    }
  }
</script>

<style scoped>
  .separate{
    display: block;
    width: 100%;
    height: 0.25rem;
    background: #eee;
  }
</style>
