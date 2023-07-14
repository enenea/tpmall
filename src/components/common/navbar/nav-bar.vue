<template>
  <div class="height">
    <div class="nav-bar">
      <div class="left-box"><slot name="left-box"></slot></div>
      <div class="center-box"><slot name="center-box"></slot></div>
      <div class="right-box"><slot name="right-box"></slot></div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'NavBar',
  }
</script>

<style scoped>
  .height {
    height: 3.0625rem;
  }
  .nav-bar {
    display: flex;
    height: 3.0625rem;
    background: #c82519;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    color: aliceblue;
    position:fixed;
    z-index: 15;
  }
  .left-box {
    width: 25%;
    display: inline-block;
    line-height: 3.0625rem;
  }
  .center-box {
    flex: 1;
    display: inline-block;
    text-align: center;
    line-height: 3.0625rem;
  }
  .right-box {
    width: 25%;
    text-align: right;
    display: inline-block;
    line-height: 3.0625rem;
    float: right;
  }

</style>
