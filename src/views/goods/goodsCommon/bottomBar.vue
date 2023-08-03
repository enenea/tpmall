<template>
  <div class="bottom-bar">
    <div>

      <div id="customer-service" @click="customerServiceClick">
        <img src="~assets/img/detail/icon01.png" alt="">
        <span>客服</span>
      </div>

      <div id="store" @click="storeClick">
        <img src="~assets/img/detail/icon02.png" alt="">
        <span>店铺</span>
      </div>

      <div id="favorite" @click="favoriteClick">
        <img src="~assets/img/detail/icon03.png" alt="">
        <span>收藏</span>
      </div>

    </div>
    <div>

      <div id="cart" @click="addCart">
        加入购物车
      </div>

      <div id="buy" @click="buy">
        购买
      </div>


      <ActionSheet v-model="show" title="选择规格">
        <skuPicker2></skuPicker2>
      </ActionSheet>

    </div>
  </div>
</template>

<script>
  import { ActionSheet } from 'vant';
  import 'vant/lib/action-sheet/style';

  import skuPicker from "./skuPicker"
  import skuPicker2 from "./skuPicker2"

  export default {
    name:"BottomBar",
    components:{
      ActionSheet,
      skuPicker,
      skuPicker2,

    },
    methods:{
      customerServiceClick(){

      },
      storeClick(){

      },
      favoriteClick(){

      },
      addCart(){
        this.show = !this.show
      },
      buy(){
        this.show = !this.show
      },

    },

    data() {
      return {
        show: false,
      }
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    border: 0;
  }
.bottom-bar{
  position: fixed;
  bottom: 0rem;
  background: #fff;
  z-index: 9999;
  width: 100%;
}
.bottom-bar::after{
  content: "";
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}
.bottom-bar>div{
  display: flex;
  float: left;
  width: 50%;
}
.bottom-bar img{
  width: 1.85rem;
}
.bottom-bar span{
  display: inline-block;
  width: 100%;
}

#customer-service, #store, #favorite{
  /* display: inline-block; */
  flex: 1;
  text-align: center;
}
#cart, #buy{
  display: inline-block;
  text-align: center;
  height: 3.25rem;
  line-height: 3.25rem;
  font-weight: bold;
  color: #fff;
}
#cart{
  background-image: linear-gradient(135deg,#ffba0d,#ffc30d 69%,#ffcf0d);
  width: 60%;
}
#buy{
  background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
  width: 40%;
}
#cart span, #buy span{
  /* line-height: 3.25rem; */
}
</style>
