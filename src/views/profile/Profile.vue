<template>
  <div class="profile">
    <MainNavBar :title="title" />

    <ProfileTop></ProfileTop>

    <ProfileBottom></ProfileBottom>
  </div>
</template>

<script>
import MainNavBar from "components/content/mainNavBar/MainNavBar"
import ProfileTop from "./ProfileContent/ProfileTop"
import ProfileBottom from "./ProfileContent/ProfileBottom"

export default {
  name:'Profile',
  components:{
    MainNavBar,
    ProfileTop,
    ProfileBottom,
  },
  data() {
    return {
      title:'我的',
    }
  }
}
</script>

<style scoped>
  .profile{
    position: fixed;
    width: 100%;
  }
</style>
