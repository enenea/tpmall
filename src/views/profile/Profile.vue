<template>
  <div>
    <MainNavBar :title="title" />
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar"
  
export default {
  name:'Profile',
  components:{
    MainNavBar
  },
  data() {
    return {
      title:'我的',
    }
  }
}
</script>

<style>
</style>
