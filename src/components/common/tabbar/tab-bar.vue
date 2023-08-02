<template>
    <div id="tab-bar">

      <slot></slot>

    </div>
</template>

<script>
  export default {
    name:'TabBar',
    components:{

    }
  }
</script>

<style>
  #tab-bar {
    display: flex;
    background: rgba(255,255,255,0.9);

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 15;
  }

</style>
