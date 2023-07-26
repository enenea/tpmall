<template>
  <div>
    <div class="comment" v-if="comment">
      <div class="comment-top">
        <span>
          用户评价
        </span>

        <span @click="moreComment">更多</span>
      </div>
      <div class="comment-bottom">

        <div class="comment-userinfo">
          <div>
            <img v-if="comment.avatar" :src="comment.avatar" alt="">
            <img v-else src="~assets/img/detail/user.png" alt="">
          </div>
          <span>{{comment.name}}</span>
        </div>

        <div class="comment-content">
          <div class="">
            {{comment.context}}
          </div>
          <div style="margin: 0.5rem 0;">
            <span v-for="(item,index) in comment.options">{{index}}:{{item}} </span>
          </div>

          <!-- <img  src="~assets/img/detail/eo7k9k.jpg" alt=""> -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"Comment",
    props:["comment"],
    mixins:[],
    methods:{
      moreComment(){

      }

    },
    data() {
      return {

      }
    }

  }
</script>

<style scoped>
.comment{
  padding: 0 0.25rem;
  margin-bottom: 1.5rem;

}
.comment-top{
  border-bottom: 0.1rem solid #eee;

}
.comment-top span{
  height: 3rem;
  line-height: 3rem;
  font-size: 1rem;
}
.comment-top span:first-child{
}
.comment-top span:last-child{
  float: right;
}
.comment-bottom{
  padding-top: 0.5rem;
}
.comment-userinfo{
  position: relative;
}
.comment-userinfo img{
  height: 2.5rem;
}
.comment-userinfo span{
  position: absolute;
  left: 3rem;
  top: 0.9rem;
}
.comment-content img{
  height: 4rem;
}

</style>
