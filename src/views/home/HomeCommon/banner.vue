<template>
    <div class="swiper-container" ref="swiperContainer">
        <div class="swiper-wrapper">

            <!-- <div class="swiper-slide swiper-slide1">Slide 1</div> -->

					<div class="swiper-slide" v-for="item in banner">
						<a :href="item.link">
							<img :src="item.thumb" :alt="item.alt">
							<span></span>
						</a>
					</div>

        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
    </div>
</template>

<script>
import Swiper from 'swiper'; // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入

export default {
    name: 'Banner',
    props:["banner"],
    data() {
      return {
        mySwiper:null
      }
    },
    mounted() {
      setTimeout(()=>{
        this.mySwiper = new Swiper(".swiper-container", {
          autoplay: {
            delay: 2000, // 每次轮播间隔的ms数，默认3000ms
            stopOnLastSlide: false, // 播放完最后一张图片后是否停留在最后一张图片上，停止继续轮播。默认false
            disableOnInteraction: false, // 用户操作轮播图后，比如点击轮播按钮或小圆点，停止自动轮播
          },
          effect:"coverflow",
          loop:true,
          speed: 500, // 滚动一张或者切换一张图片，需要的时间，单位ms，默认300ms
          pagination: {
            el: '.swiper-pagination',

          },
          // 如果需要前进后退按钮
          // navigation: {
          //   nextEl: '.swiper-button-next', // 右按钮
          //   prevEl: '.swiper-button-prev', // 左按钮
          // },
        })
      }, 500)
    }
}

</script>

<style scoped>
.swiper{
}
.swiper-container {
  width: 100%;
  /* position: fixed; */
  z-index: 14;
}
.swiper-slide {
    text-align: center;
    color: #b0b0b0;
}
.swiper-slide a{
}
.swiper-slide img{
  width: 100%;
}

</style>
