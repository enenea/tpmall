<template>
  <div>
    <div class="info-panel">
      <div class="info-top">

        <div class="avatar">
          <img v-if="info.avatar" :src="info.avatar" alt="">
          <img v-else src="~assets/img/profile/user.png" alt="">
        </div>

        <div class="info-top-center">

          <div v-if="info.phone">
            <div class="center-info-top">{{info.nickname}}</div>
            <div class="center-info-buttom">
              <img src="~assets/img/profile/mobile.png" alt="">
              <span>{{info.phone}}</span>
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


        <div @click="jump" class="right" v-if="!info.phone">
          <img src="~assets/img/profile/right.png" alt="">
        </div>

      </div>

      <div class="info-button">

        <div>
          <span>
            <i>{{info.credit.toFixed(2)}}</i>元
          </span>
          <span>
            我的余额
          </span>
        </div>

        <div>
          <span>
            <i>{{info.coupon}}</i>个
          </span>
          <span>
            我的优惠
          </span>
        </div>

        <div>
          <span>
            <i>{{info.credit_score.toFixed(2)}}</i>分
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
import { mapActions } from "vuex"
export default {
  name:'ProfileTop',
  components:{
  },
  methods:{
    ...mapActions(["getInfo"]),

    jump(){
      this.$router.push("/login")
    }


  },
  created() {
    this.getInfo().then( res => {
      console.log(res);
      this.info = res

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
  /* position: fixed; */
  width: 100%;
}
.info-top {
  background:rgb(201, 22, 35);
  position: relative;
  width: 100%;
  display: flex;
  padding: 1.5rem 0;
}
img{
  width: 2.5rem;
}


.info-top>div{
  display: inline-block;
}

.avatar{
  width: 20%;
  position: relative;
}

.info-top-center{
  width: 33%;
}
.right{
  width: 50%;
}

.avatar img{
  position: inherit;
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
  position: relative;
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
