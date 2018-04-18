<template>
    <div class="classifybox">
      <!--左边商品分类-->
      <div class="classify_left" ref="left" >
        <ul class="leftbox">
          <li v-for="(classify,index) in classifys" :key="index"
          @click="showImg(index)" :class="{on:currentIndex==index}">
            {{classify.name}}
          </li>
          <li>鸡鸭鱼肉</li>
          <li>鸡鸭鱼肉</li>
          <li>猫猫狗狗</li>
        </ul>
      </div>
      <!--右边商品列表-->
      <div class="classify_right" ref="right" v-if="classifys.length">
        <!--v-for="(classify,index) in classifys" :key="index"-->
           <div class="classify_container">
              <!--全部商品link-->
              <div class="right_title_link">
                <a class="title_style" href="###">
                  {{computedCurrent[0].title}}
                <!--<span class="right_title"></span>-->
                  <img  src="./allgoods.png">
                </a>
              </div>
              <!--分类图片link-->
              <ul class="right_list">
                <li class="list_img_title" v-for="(listImg,index) in computedCurrent[0].list" :key="index">
                  <img class="list_img" :src="listImg.photo">
                  <p class="list_title">{{listImg.name}}</p>
                </li>
              </ul>
            </div>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default{
        data(){
            return{
              currentIndex:0
            }
        },
        mounted(){
          /*this.$nextTick(()=>{
            if(!this.scrollleft){
              this.scrollleft= new BScroll(this.$refs.left,{
                click:true
              })
            }else {
              this.scrollleft.refresh()
            }

            if(!this.scrollright){
              this.scrollright= new BScroll(this.$refs.right,{
                click:true
              })
            }else {
              this.scrollright.refresh()
            }
          })*/
        },
        computed:{
          ...mapState(['classifys']),

          computedCurrent(){
              const {currentIndex}=this
              return this.classifys[currentIndex].cate_list
          }

        },
        methods: {
          showImg(index){
              this.currentIndex=index
          }
        },

        watch:{
            classifys(){
              this.$nextTick(()=>{
                new BScroll('.classify_left',{
                  scrollY: true,
                  click: true
                })
                new BScroll('.classify_right',{
                  scrollY: true,
                  click: true
                })
              })
            }
        }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.classifybox
  position absolute
  height 100%
  width 100%
  /*padding-top 5px*/
  display flex
  /*左边商品类型列表项*/
  .classify_left
    position fixed
    width 20%
    min-width 20%
    height 600px
    overflow hidden
    .leftbox
      height 704px
      display block
      text-align center
      .on
        background #f3f4f5
        color #ed4044
      li
        padding 15px 0
        font-size 13px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        border-bottom  1px solid #999
        border-right 1px solid #999
   /*右边商品列表*/
  .classify_right
    width 80%
    margin-left 20%
    background-color #fff
    .classify_container
      padding 5px 5px 20px 5px
      border-top 1px solid #999
    /*全部商品link*/
    .right_title_link
      width 100%
      .title_style
        font-size 12px
        display block
        color #999
        padding-left 5px
        margin-top 10px
      img
        width 46px
        height 10px
        margin-top 5px
        float right
        vertical-align middle
        border 0
     /*商品图片列表*/
    .right_list
      width 100%
      text-align center
      font-size 13px
      .list_img_title
        width 33.33%
        float left
        margin-top 10px
        padding 0 5px
        box-sizing border-box
        display list-item
        .show
          display block
        .hide
          display none
        .list_img
          display block
          width 100%
          vertical-align middle
        .list_title
          padding 10px 0
</style>
