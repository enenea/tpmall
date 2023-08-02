<template>
</template>

<script>
  import { mapActions } from "vuex"
export default {
  name:"Logout",
  methods:{
    ...mapActions(["logout"])
  },
  created() {
    let that = this

    this.logout().then( () => {
      that.$toast({
        message:"退出成功!",
        onClose:function(){
          that.$router.push("/login")
        }
      })

    }).catch( err => {
      that.$toast.fail("err")
    })
  }
}
</script>

<style scoped>
</style>
