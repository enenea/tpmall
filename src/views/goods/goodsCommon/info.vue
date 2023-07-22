<template>
  <div class="detail-info">

    <div class="goods_title">
      {{goods.name}}
    </div>

    <div class="price-box">
      <span class="price">￥{{goods.goods_price.toFixed(2)}}</span>
      <span>￥{{goods.goods_old_price.toFixed(2)}}</span>
      <i v-if="goods.goods_discount > 0">{{goods.goods_discount}}折</i>
    </div>

    <div class="other-info">
      <span>销量 {{goods.goods_sale}}</span>
      <span>收藏{{goods.goods_favorite}}</span>
      <span>{{goods.goods_delivery}}小时发货</span>
    </div>

    <div class="separate"></div>

    <div class="goods_service">
      <span v-for="item in goods.goods_service">
        <img src="~assets/img/detail/checked.svg" alt="">{{item}}
      </span>
    </div>

    <div class="separate spe2"></div>

    <div class="store-box">
      <div class="store-top">
        <div class="store-logo">
          <div class="store-logo-img">
            <img src="~assets/img/detail/icon02.png" alt="">
          </div>
        </div>
          <div class="store-name">{{goods.store.name}}</div>
      </div>

      <div class="store-center">
        <div class="left-store">
          <div class="left-store-left">
            <p>{{goods.store.sale_count.toFixed(1)}}万</p>
            <p>总销量</p>
          </div>
          <div class="left-store-right">
            <p>{{goods.store.total_goods}}</p>
            <p>全部宝贝</p>
          </div>
        </div>
        <div class="right-store">
          <div>
            <p>
              描述相符
              <span :style="scoreColor(goods.store.desc_star)">
                {{getFixed(goods.store.desc_star)}}
              </span>
              <i :class="score(goods.store.desc_star)">{{scoreText(goods.store.desc_star)}}</i>
            </p>

            <p>
              价格合理
              <span :style="scoreColor(goods.store.price_star)">{{getFixed(goods.store.price_star)}} </span>
              <i :class="score(goods.store.price_star)">{{scoreText(goods.store.price_star)}}</i>
            </p>

            <p>
              质量满意
              <span :style="scoreColor(goods.storequality_stardesc_star)">{{getFixed(goods.store.quality_star)}} </span>
              <i :class="score(goods.store.quality_star)">{{scoreText(goods.store.quality_star)}}</i>
            </p>
          </div>
        </div>
      </div>

      <div class="store-bottom" @click="clickStroe">
        <p>
          <span>进店逛逛</span>
        </p>
      </div>

    </div>

    <div class="separate spe3"></div>
  </div>
</template>

<script>
  export default {
    name:"Info",
    components:{

    },
    computed:{
      score : () =>{
        return function (score){
          return score >= this.studio ? "high": "low"
        }
      },
      scoreText : () =>{
        return function (score){
          return score >= 4.8 ? "高": "低"
        }
      },
      scoreColor : () =>{
        return function(score){
          return score >= 4.8 ? {color:"red"} : {color:"green"}
        }
      },

    },
    methods:{
      getFixed(value, num=2){
        return value.toFixed(num)
      },
      clickStroe(){
        console.log("进店");
      },

    },
    mounted() {

    },

    data() {
      return {
        // 评分标准
        studio:4.8,
        goods:{
          name:"名字名字名字名字名字名字名字名字名字名字名字名字名字名字",
          goods_price:88.90,
          goods_old_price:188.90,
          goods_discount:7,
          goods_sale:2146,
          goods_favorite:12,
          goods_delivery:72,
          // 富文本
          goods_desc:{
            desc:"123aopwjfaiowrj1o2j4shiajsqajgq"
          },
          goods_options:{
              // 规格参数对象 需遍历
            options:{

            }
          },
          goods_service:[
            "延误必赔",
            "退货补运费",
            "全国包邮",
            "7天无理由退货"
          ],
          // 店铺相关
          store:{
            name:"杂货铺",
            logo:"123123",
            desc_star:4.62,
            price_star:4.8,
            quality_star:4.12,
            total_goods:86,
            sale_count:58
          },
        }
      }
    }
  }
  // localhost:8080
</script>

<style scoped>
.detail-info{
  padding: 0 0.4rem 20rem 0.4rem;
}
.goods_title{
    font-size: 1.2rem;
    height: 2.4rem;
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
  }
.price-box{

}
.price-box span:first-child{
  color: red;
  font-size: 1.2rem;
}
.price-box span:nth-child(2){
  font-size: 0.8rem;
  text-decoration: line-through;
  margin-left: 0.5rem;
  color:#999;
}
.price-box i{
  font-size: 0.8rem;
  margin-left: 0.5rem;
  background: crimson;
  display: inline-block;
  width: 1.8rem;
  text-align: center;
  height: 1.2rem;
  line-height: 1.2rem;
  border-radius: 35%;
  color: aliceblue;
  font-weight: bold;
}
.other-info{
  margin-top: 0.5rem;
  color:#999;
  display: flex;
  font-size: 0.9rem;
}
.other-info span{
  flex: 1;
}
.other-info span:first-child{

}
.other-info span:nth-child(2){
  text-align:center;
}
.other-info span:nth-child(3){
  text-align: right;
}

.separate{
  background: #eee;
  height: 0.05rem;
  margin-top: 0.5rem;
}
.spe2{
  margin-top: unset;
  height: 0.25rem;
}
.spe3{
  margin-top: 1rem;
  height: 0.25rem;
}

.goods_service{
}
.goods_service img{
  height: 0.8rem;
  line-height: 1rem;
}
.goods_service span{
  font-size: 0.9rem;
  display: inline-block;
  width:33.3%;
  line-height: 1.5rem;
  height: 1.5rem;
  margin: 1rem 0;
}
.goods_service span:nth-child(2),.goods_service span:nth-child(5){
  text-align: center;
}
.goods_service span:nth-child(4),.goods_service span:nth-child(5),.goods_service span:nth-child(6){
  margin-top: unset;
}

.goods_service span:nth-child(3n+3){
  text-align: right;
}


.store-box{

}
.store-top{
  position: relative;
  margin: 1rem 0;
}
.store-top>div{
  display: inline-block;
}
.store-top .store-logo-img{
  display: flex;
  background: #eee;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  justify-content: center;
  align-items: center;
}
.store-logo-img img{
  height: 2rem;
}
.store-name{
  color: #888;
  font-size: 1.2rem;
  position:absolute;
  top: 0.8125rem;
  left: 3.5rem;
}
.store-center{
  position: relative;
  width: 100%;
}
.store-center>div{
  display: inline-block;
}
.left-store{
  /* background: blanchedalmond; */
  position: inherit;
  bottom: 0.3rem;
  width: 50%;
  font-size: 1.1rem;
  border-right: 0.1rem solid #eee;

}
.left-store>div{
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
}

.left-store-left{

}
.left-store-right{
}
.left-store-left p:first-child, .left-store-right p:first-child{
}
.left-store-left p:last-child, .left-store-right p:last-child{
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.right-store{
  width: 49%;
  font-size: 0.8rem;
}
.right-store>div{
  text-align: center;
}
.right-store div p{
  line-height: 1.25rem;
}
.high, .low{
  background: red;
  color: #fff
}

.store-bottom{
  margin-top: 0.8rem;
  width: 100%;
  text-align: center;
}
.store-bottom p{
  display: inline-block;
  background: #eef;
  width: 8rem;
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  color: #777;
}

/* localhost:8080 */
</style>
