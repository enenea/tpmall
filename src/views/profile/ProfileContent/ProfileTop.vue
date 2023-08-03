<template>
  <div>
    <div class="info-panel">
      <div class="info-top">

        <div class="avatar">
          <img v-if="GET_INFO.avatar" :src="GET_INFO.avatar" alt="">
          <img v-else src="~assets/img/profile/user.png" alt="">
        </div>

        <div class="info-top-center">

          <div v-if="GET_INFO.phone">
            <div class="center-info-top">{{GET_INFO.nickname}}</div>
            <div class="center-info-buttom">
              <img src="~assets/img/profile/mobile.png" alt="">
              <span>{{GET_INFO.phone}}</span>
            </div>
          </div>
          <div v-else>
            <div class="center-info-top">登录 / 注册</div>
            <div class="center-info-buttom">
              <img src="~assets/img/profile/mobile.png" alt="">
              <span>暂无绑定手机号</span>
            </div>
          </div>

        </div>


        <div @click="jump" class="right" v-if="!GET_INFO.phone">
          <img src="~assets/img/profile/right.png" alt="">
        </div>

      </div>

      <div class="info-button">

        <div>
          <span v-if="GET_INFO.credit">
            <i >{{(GET_INFO.credit).toFixed(2)}}</i>元
          </span>

          <span v-else>
            <i >0.00</i>元
          </span>


          <span>
            我的余额
          </span>
        </div>

        <div>
          <span v-if="GET_INFO">
            <i>{{GET_INFO.coupon}}</i>个
          </span>

          <span v-else>
            <i>0</i>个
          </span>

          <span>
            我的优惠
          </span>
        </div>

        <div>
          <span v-if="GET_INFO.credit_score">
            <i>{{GET_INFO.credit_score.toFixed(2)}}</i>分
          </span>

          <span v-else>
            <i>0.00</i>分
          </span>

          <span>
            我的积分
          </span>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  name:'ProfileTop',
  components:{
  },
  computed:{
    ...mapGetters(["GET_INFO"]),
  },
  methods:{
    ...mapActions(["getInfo"]),

    jump(){
      this.$router.push("/login")
    }


  },
  created() {

    this.getInfo().then( res => {

    }).catch( err => {
      // this.$toast(err);
      console.log(err);
    })
  },
  data() {
    return {

      info:{
        nickname:"",
        phone:"",
        credit:0.00,
        credit_score:0.00,
        coupon:0,
      }
    }
  }
}
</script>


<style scoped>
.info-panel{
  width: 100%;
}
.info-top {
  background:rgb(201, 22, 35);
  display: flex;
  padding: 1.5rem 0;
  align-items: center;
}

img{
  width: 2.5rem;
}

.avatar{
  margin: 0 0.5rem;
}

.info-top-center{
  flex: 1;
}
.right{
  width: 50%;
}

.avatar img{
  width: 4rem;
  top: -0.4375rem;
  left: 0.4375rem;
  border-radius: 50%;
}

.info-top-center{
}
.center-info-top{
  font-size: 1.4rem;
}
.center-info-buttom{
  display: flex;
}
.center-info-buttom img{
  position: inherit;
  top: 0.25rem;
}
.right{
  text-align: right;
}

.center-info-buttom img{
  width: 1.2rem;
}

/* button */
.info-button{
  display: flex;
  padding: 1.2rem 0;
}
.info-button>div{
  flex: 1;
  text-align: center;
}

.info-button i{
  color: red;
  font-size: 1.6rem;
}
.info-button span{
  display: block;
}


</style>
