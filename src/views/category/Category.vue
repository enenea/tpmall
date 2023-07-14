<template>
  <div>
    <MainNavBar :title="title" />
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar"

export default {
  name:'Category',
  data() {
    return {
      title:"分类",
    }
  },
  components:{
    MainNavBar
  },
}
</script>

<style>
</style>
