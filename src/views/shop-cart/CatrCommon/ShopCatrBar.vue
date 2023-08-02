<template>
  <div>
    <div class="cart-bar">
      <div class="left-box">
        <div class="fullCheck">
          <div>
            <van-checkbox v-model="fullCheck" checked-color="#ee0a24"></van-checkbox>
          </div>
          <div>全选</div>
        </div>

        <div class="total-price">合计:￥<span>0.00</span></div>
      </div>
      <div class="right-box">
        <div class="calculate">
          去结算(<span>0</span>)

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VanCheckbox from 'vant/lib/checkbox';
  import 'vant/lib/checkbox/style';

  export default {
    name:"ShopCatrBar",
    components:{
      VanCheckbox,
    },

    data() {
      return {
        fullCheck:true,

      }
    }

  }
</script>

<style scoped>
  .cart-bar{
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    width: 100%;
    height: 2.5rem;
    bottom: 3rem;
    left: 0;
    display: flex;
    justify-content: space-between;
  }
  .cart-bar>div{
    flex: 1;
  }

  .left-box,.fullCheck{
    display: flex;
    align-items: center;
  }
  .fullCheck div:last-child{
    font-size: 0.8rem;
  }
  .left-box div:first-child{
    margin: 0 0.25rem ;
  }
  /* .left-box span{
    font-size: 0.8rem;
  } */
  .right-box{
    display: flex;
    justify-content: right;
  }
  .calculate{
    background: red;
    width: 6rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 1.5rem;
    text-align: center;
    display: inline-block;
    margin-right: 0.25rem;
  }
  .total-price{

  }

</style>
