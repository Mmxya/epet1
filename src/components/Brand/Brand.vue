<template>
    <div class="list">
      <div  v-for="(pp,index) in brands.brand" :key="index">
        <div class="list_wrapper">
          <!--品牌标题-->
          <div class="brand_title">
            <span>—— {{pp.title}} ———</span>
          </div>
          <!--品牌商品列表-->
          <div class="brand_list">
            <ul>
              <li class="brand_list_li" v-for="(ppImg,index) in pp.list" :key="index">
                <div class="loading">
                  <img class="list_img" :src="ppImg.logo">
                </div>
                <!--icon荐-->
                <div>
                  <img v-show="ppImg.recommend===1" class="jian" src="./reced.png" alt="推荐">
                </div>
                <span v-show="ppImg.tagongyi===1" class="publicwelfare">TA公益</span>
                <p class="brand_list_li_name">{{ppImg.name}}</p>
                <p class="brand_list_li_naddress">{{ppImg.address}}</p>
              </li>
            </ul>
          </div>
        </div>
        <!--全部-->
        <div>
          <a class="allMenu" href="###">全部</a>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default{
      data(){
          return{
            isShow:false
          }
      },
      computed: {
        ...mapState(['brands']),

      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.list
  position: absolute;
  width: 100%;
  height 100%
  background: #001;
  .list_wrapper
    padding-bottom 15px
    margin-bottom 10px;
    .brand_title
      padding-top 20px
      font-size 12px
      text-align center
      color #999
    .brand_list
      margin-left: 5px
      .brand_list_li
        margin-top 20px
        width 33.33%
        /*padding 0 5px*/
        float left
        position relative
        display list-item
        /*荐icon图标*/
        .jian
          position absolute
          width 13px
          height 13px
          top 0
          left 5px
          display block
        .publicwelfare
          position absolute
          font-size 8px
          padding 0 2px
          top 0
          right 3px
          background #e44b46
          color #fff
        .loading
          height 50px
          border 1px solid #999
          text-align center
          padding 12px 10px
          /*background pink*/
          margin-right: 5px
          /*background url("./timer.gif") no-repeat center center #fff*/
          background-size 80px auto
          .list_img
            max-width 90%
            margin 10px auto 0
            height 40px
            right 0
            vertical-align middle

          /*图片列表商品的名字*/
        .brand_list_li_name
          font-size 13px
          margin-top 5px
          text-align center
          height 20px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .brand_list_li_naddress
          height 20px
          white-space nowrap
          text-overflow ellipsis
          overflow hidden
          font-size 12px
          color #999
          text-align center


  /*全部按钮*/
  .allMenu
    position fixed
    width 40px
    height 40px
    right 6px
    bottom 65px
    z-index 10
    background rgba(0,0,0, .1)
    line-height 40px
    border-radius 50%
    font-size 12px
    color #fff
    text-align center
</style>
