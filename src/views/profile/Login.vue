<template>
<div>
  <div class="my-login-box">
      <h2>登录</h2>
      <form>
        <i v-show="phone.err" class="errmsg">{{phone.msg}}</i>
          <div class="user-box">
              <input @blur="checkPhone" autocomplate="off" type="number" name="phone" v-model="data.phone" required="">
              <label>手机号</label>
          </div>
          <i v-show="password.err" class="errmsg">{{password.msg}}</i>
          <div class="user-box">
              <input @blur="checkPassword" type="password" v-model="data.password" name="password">
              <label>密码</label>
          </div>
          <a href="#" @click="login">
              <span></span>
              <span></span>
              <span></span>
              <span></span>登录
          </a>
          <a href="#" id="register" @click="register">
              <span></span>
              <span></span>
              <span></span>
              <span></span>立即注册
          </a>
      </form>
  </div>
</div>
</template>

<script>
// import { Toast } from 'vant'
  export default {
    name:"Login",
    data() {
      return {
        data:{
          phone:null,
          password:null,
        },
        phone:{
          err:false,
          msg:""
        },
        password:{
          err:false,
          msg:""
        },
        submitted:false,

        constraints: {
          phone: {
            presence: {is:true,message:"^手机号码不能为空"},
            length:{
              is:11,
              message:"^手机号码必须为11位数字"
            }
          },
          password: {
            presence: {is:true, message:"^密码不能为空"},
            length:{
              minimum:6,
              message:"^密码长度不能小于6位数"
            }
          },
        }
      }
    },
    methods:{
      register(){
        this.$router.push('/register')
      },
      login(){
        if (this.phone.err || this.password.err) {
          return
        }

        if (this.submitted) {
          return
        }
        this.submitted = true

        this.$store.dispatch("login",this.data).then(() => {
          this.$toast({
            message:"登录成功!",
            onClose:()=>{
              this.$router.push({ path:"/profile"})
            }
          })

        }).catch(err =>{
          this.$toast.fail(err)
          console.log(err);
          this.submitted = false
        })

      },

      checkPhone(){
        let err = this.$validate.single(this.data.phone, this.constraints.phone);
        if (err) {
          this.phone.err = true
          this.phone.msg = err[0]
          return
        }
        this.phone.err = false
      },

      checkPassword(){
        let err = this.$validate.single(this.data.password, this.constraints.password);

        if (err) {
          this.password.err = true
          this.password.msg = err[0]
          return
        }
        this.password.err = false
      },
    },

  }

</script>

<style scoped>
  .errmsg{
    color: red;
  }
  html {
      height: 100%;
  }
  body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background: linear-gradient(#d0d1e8, #243b55);
  }
  .my-login-box {
      position: fixed;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      padding: 40px;
      transform: translate(-50%, -50%);
      background: rgba(225, 255, 255, .5);
      box-sizing: border-box;
      box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
  }
  .my-login-box h2 {
      margin: 0 0 30px;
      padding: 0;
      color: #03e9f4;
      text-align: center;
  }
  .my-login-box .user-box {
      position: relative;
  }
  .my-login-box .user-box input {
      width: 100%;
      padding: 10px 0;
      font-size: 16px;
      color: #03e9f4;
      margin-bottom: 30px;
      border: none;
      border-bottom: 1px solid #03e9f4;
      outline: none;
      background: transparent;
  }
  .my-login-box .user-box label {
      position: absolute;
      top: 0;
      left: 0;
      padding: 10px 0;
      font-size: 16px;
      color: #03e9f4;
      pointer-events: none;
      transition: .5s;
  }
  .my-login-box .user-box input:focus ~ label,
  .my-login-box .user-box input:valid ~ label {
      top: -30px;
      left: 0;
      color: #03e9f4;
      font-size: 12px;
  }
  .my-login-box form{
    text-align: center;
  }
  .my-login-box form a {
      position: relative;
      display: inline-block;
      padding: 10px 20px;
      width: 80%;
      color: #03e9f4;
      font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      overflow: hidden;
      transition: .5s;
      margin-top: 40px;
      letter-spacing: 4px
  }
  .my-login-box a:hover {
      background: #03e9f4;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
  }
  .my-login-box a span {
      position: absolute;
      display: block;
  }
  .my-login-box a span:nth-child(1) {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, #03e9f4);
      animation: btn-anim1 1s linear infinite;
  }
  @keyframes btn-anim1 {
      0% {
          left: -100%;
      }
      50%,
      100% {
          left: 100%;
      }
  }
  .my-login-box a span:nth-child(2) {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(180deg, transparent, #03e9f4);
      animation: btn-anim2 1s linear infinite;
      animation-delay: .25s
  }
  @keyframes btn-anim2 {
      0% {
          top: -100%;
      }
      50%,
      100% {
          top: 100%;
      }
  }
  .my-login-box a span:nth-child(3) {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(270deg, transparent, #03e9f4);
      animation: btn-anim3 1s linear infinite;
      animation-delay: .5s
  }
  @keyframes btn-anim3 {
      0% {
          right: -100%;
      }
      50%,
      100% {
          right: 100%;
      }
  }
  .my-login-box a span:nth-child(4) {
      bottom: -100%;
      left: 0;
      width: 2px;
      height: 100%;
      background: linear-gradient(360deg, transparent, #03e9f4);
      animation: btn-anim4 1s linear infinite;
      animation-delay: .75s
  }
  @keyframes btn-anim4 {
      0% {
          bottom: -100%;
      }
      50%,
      100% {
          bottom: 100%;
      }
  }
  #register{
    /* margin-left: 3rem; */
  }
</style>
