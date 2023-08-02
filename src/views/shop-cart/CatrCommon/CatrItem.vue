<template>
  <div>
    <div class="cart-item">

      <div class="store">
        <span>{{store}}</span>
        <img src="~assets/img/profile/right.png" class="right" alt="">
      </div>

      <div class="cart-center">
        <div class="left-box">
          <div>
            <div>
              <van-checkbox  v-model="checked" checked-color="#ee0a24"></van-checkbox>
            </div>
            <img :src="thumb" @click="jumpDetail(id)" alt="" class="thumb">
          </div>
        </div>
        <div class="right-box">

            <div class="title">{{title}}</div>
            <div class="option">{{option}}</div>
            <div class="price-box">
              <div class="price">价格: <span>{{getPrice}}</span></div>
              <div class="step">
                <van-stepper
                @change="step"
                @overlimit="overLimit"
                v-model="num"
                :min="getMin"
                :max="getMax" />
              </div>
            </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import VanCheckbox from 'vant/lib/checkbox';
import VanStepper from 'vant/lib/stepper';
import 'vant/lib/checkbox/style';
import 'vant/lib/stepper/style';
export default {
  name:'CatrItem',
  components:{
    VanCheckbox,
    VanStepper,
  },
  methods:{
    step(value){

    },
    overLimit(){
      this.$toast.fail("已不可点击")
    },
    jumpDetail(id){
      this.$router.push(`/detail/${id}`)
    },

  },
  computed:{
    getMin (){
      return this.min > 0 ? this.min : 1
    },
    getMax (){
      return this.max > 0 ? this.max : "-"
    },
    getPrice (){
      return (this.num * this.price).toFixed(2)
    },

  },
  watch:{
    getPrice (){
      
    }
  },

  data() {
    return {
      id:1,
      title:'产品产品产品产品产品产品产品产品产品产品产品',
      option:"深空灰  m码 可机洗",
      checked:false,
      price:95.50,
      num:1,
      store:"海澜之家",
      min:1,
      max:10,
      thumb:"http://www.tp6.com/static/head/cat2.jpg",
    }
  }
}
</script>

<style scoped>
  .cart-item{
    background: #fff;
    margin-top: 1rem;
    border-radius: 0.75rem;
    padding: 1rem 0.5rem;
    color: black;
  }
  .store{
    position: relative;
    margin-bottom: 0.625rem;
  }
  .right{
    height: 1rem;
    position: inherit;
    top: 0.1rem;
  }
  .cart-center{
    display: flex;
    width: 100%;
  }
  .cart-center > div{
  }

  .left-box div:first-child{
    display: flex;
  }
  .left-box>div{
    display: flex;
  }
  .left-box>div>div{
    margin-right: 0.625rem;
  }
  .left-box img{
    width: 6rem;
    border-radius: 0.5rem;
  }
  .right-box{
    flex: 1;
    padding: 0 0.5rem;
    width: calc(100vw - 56%);
  }
  .right-box{
    display: flex;
    flex-direction: column;
  }
  .option,.title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 0.125rem;
  }
  .price span{
    color: red;
  }
  .option{
    background: #eee;
    color: #666;
    display: inline-block;
    padding: 0.25rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 2rem;
    max-width:min-content;
  }
  .price-box{
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .price,.step{
    display: inline-block;
  }
  .price{
    font-size: 1.2rem;
  }
  .step{
  }
</style>
