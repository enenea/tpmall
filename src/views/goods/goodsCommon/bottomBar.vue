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

    </div>
  </div>
</template>

<script>
  export default {
    name:"BottomBar",
    methods:{
      customerServiceClick(){

      },
      storeClick(){

      },
      favoriteClick(){
      
      },
      addCart(){
      
      },
      buy(){
      
      },


    },

    data() {
      return {}
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
}
#cart{
  background: #ffe32e;
  width: 60%;
}
#buy{
  background: red;
  width: 40%;
}
#cart span, #buy span{
  /* line-height: 3.25rem; */
}
</style>
