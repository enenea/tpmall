<template>
  <div>
    <Swipe
    @change="onChange"
    autoplay="3000"
    :stop-propagation="false"
    >
      <SwipeItem v-for="item in banner" @click="preview">
        <img :src="item.path" :alt="item.alt">
      </SwipeItem>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{totalBanner}}</div>
      </template>
    </Swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem, ImagePreview  } from 'vant';

import "vant/lib/swipe/style"
import "vant/lib/swipe-item/style"
import "vant/lib/image-preview/style"

export default {
    name: 'Banner',
    props:["banner","totalBanner"],
    components:{
      Swipe,
      SwipeItem,
      [ImagePreview.Component.name]: ImagePreview.Component,
    },
    computed:{
    },
    data() {
      return {
        current:0,
        images:[]
      }
    },
    created() {
      // this.images = this.banner.
      let that = this
      this.banner.forEach(function(value){
        that.images.push(value.path)
      })
    },
    methods:{
      onChange(index) {
        this.current = index;
      },
      preview(){
        ImagePreview({
          images:this.images,
          startPosition:this.current,
          closeable: true,
        });
      },
    }
}

</script>

<style scoped>
.custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
  }
  img{
    width: 100%;
  }
</style>
