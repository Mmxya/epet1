<template>
<div style="position: relative">
      <!--下载APP-->
    <div class="main_header">
      <div class="appdowing">
        <a href="###">
          <img src="./images/homeheader.jpg" alt="下载app">
        </a>
      </div>

      <!--搜索和列表导航-->
      <div class="indexheader">
        <!--搜索栏-->
        <div class="epetsearch">
          <div class="buyinfo">
            <span class="dog">狗狗</span>
            <span class="middle">|</span>
            <span class="addr">重庆</span>
          </div>
          <p class="searchtext">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="icon">
                  <i class="iconfont icon-sousuosearch82"></i>
                  </span>
          </p>
          <span class="item_icon">
                  <i class="iconfont icon-sharemessage"></i>
                </span>
        </div>

        <!--导航菜单-->
        <div class="find_nav">
          <ul class="huadong">
            <li v-for="(item,index) in homepage.menus" >
              <span>{{item.menu_name}}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!--整体结构-->
    <div id="indexbox" class="main">


     <!-- 内容区-->
      <div class="allmodule">
        <!--轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper" v-if="lunbotu['1']">
            <div class="swiper-slide" v-for="(a,index) in lunbotu['1'].value" :key="index">
                <img :src="a.image">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

        </div>

        <!--图片导航-->
        <div class="columnnavdiv" v-if="homepage.datas[1]">
          <div>
            <ul>
              <li v-for="(c,index) in homepage.datas[1].menus">
                <a href="##">
                  <img :src="c.image">
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!--新人专享-->
        <div class="banner_item">
          <img :src="lunbotu['2438'].value[0].image" alt="新人专享">
        </div>

        <!--每日疯抢-->
        <div class="surprise_day">
          <div class="surprise">
            <!--标题-->
            <div class="surprise-title">
              <div class="timing"><img :src="lunbotu['3'].surprise_icon.image" alt="每日疯抢"></div>
              <div class="over">{{lunbotu['3'].title}}</div>
              <div class="time">15:00</div>
              <div class="more">
                <a href="###"><img :src="lunbotu['3'].right_image.image" alt="更多"></a>
              </div>
            </div>
            <!--商品-->
            <div class="surprise-pro">
              <ul class="shopList">
                <li  v-for="(good,index) in lunbotu['3'].goods">
                  <div class="crazy">
                    <img :src="good.image.image">
                  </div>
                  <span class="sale">￥{{good.sale_price}}</span>
                  <p class="sheng">{{good.little_price}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!------------上下分割线------------------>
        <div class="xline">
          <div class="page-line"></div>
        </div>

        <!--e宠国际-->
        <div class="epet_biggo">
          <div class="go_left"><img :src="homepage.datas[5].content_images[0][0].image1"></div>
          <div class="go_right">
            <a href="##" v-for="(img,index) in homepage.datas[5].content_images[1]" :key="index">
              <img :src="img.image1">
            </a>
          </div>
        </div>

        <!------------上下分割线------------------>
        <div class="xline">
          <div class="page-line"></div>
        </div>

        <!--E秒团商品预告-->
        <div class="banner_item">
          <img :src="homepage.datas[7].value[0].image" :key="index">
        </div>

        <!------------上下分割线------------------>
        <div class="xline">
          <div class="page-line"></div>
        </div>

        <!--潮品视频-->
        <div class="epet_video epet_title">
          <div class="leftImg"><img :src="homepage.datas[9].value.left.img.image"></div>
          <div class="rightMore">
            <a href="###">
              <img :src="homepage.datas[9].value.right.img.image">
            </a>
          </div>
        </div>
        <!--潮品视频下的内容-->
          <div class="fashino">
            <ul>
              <li>
                <a href="###">
                  <div class="fashion_top"><img :src="homepage.datas[10].value[0].cover.image"></div>
                  <div class="fashion_bottom">
                    <div class="textover">{{homepage.datas[10].value[0].title}}</div>
                    <div class="flex">
                      <img class="eyes" :src="homepage.datas[10].value[0].visit_img.image" alt="">
                      <i>{{homepage.datas[10].value[0].visit}}</i>
                      <span class="line">|</span>{{homepage.datas[10].value[0].time}}
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        <!------------上下分割线------------------>
        <div class="xline">
          <div class="page-line"></div>
        </div>
        <div class="purple_go flex">
          <div class="divimg" v-for="(top,index) in lunbotu['3110'].content_images[0]">
            <a href="##"><img :src="top.image"></a>
          </div>
          <div class="divimg" v-for="(bottom,index) in lunbotu['3110'].content_images[1]">
            <a href="##"><img :src="bottom.image"></a>
          </div>
        </div>

        <!--品牌特卖-->
        <div>
          <div class="epet_sale epet_title">
            <div class="leftImg"><img :src="homepage.datas[14].value.left.img.image"></div>
            <div class="rightMore">
              <a href="###">
                <img :src="homepage.datas[14].value.right.img.image">
              </a>
            </div>
          </div>
          <!--品牌特卖下的商品banner列表-->
          <div>
            <div class="divboximg flex">
              <div  v-for="(data,index) in homepage.datas" :key="index">
                <div class="diving">
                  <a href="###" v-for="(z,index) in data.content_images">
                    <img :src="z[0].image">
                  </a>

                </div>
              </div>

            </div>
            <div class="xline">
              <div class="page-line"></div>
            </div>
          </div>



        </div>

        <!------------上下分割线------------------>
        <div class="xline">
          <div class="page-line"></div>
        </div>

        <!--萌爪联盟-->
        <div class="epet_mengzhua epet_title">
          <div class="leftImg"><img :src="homepage.datas[43].value.left.img.image"></div>
          <div class="rightMore">
            <a href="###">
              <img :src="homepage.datas[9].value.right.img.image">
            </a>
          </div>
        </div>
        <div class="fashino">
          <div class="swiper-container2">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(v,index) in homepage.datas[44].value">
                  <img class="mzlmImg" :src="v.image">
              </div>
            </div>
          </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination2"></div>
        </div>

        <!------------上下分割线------------------>
        <div class="xline">
          <div class="page-line"></div>
        </div>

        <!--萌宠说-->
        <div class="epet_mengchong epet_title">
          <div class="leftImg"><img :src="homepage.datas[46].value.left.img.image"></div>
          <div class="rightMore">
            <a href="###">
              <img :src="homepage.datas[46].value.right.img.image">
            </a>
          </div>
        </div>
        <div class="fashino">
          <ul>
            <li>
              <a href="###">
                <div class="fashion_top"><img :src="homepage.datas[47].value[0].cover.image"></div>
                <div class="fashion_bottom">
                  <div class="textover">{{homepage.datas[47].value[0].title}}</div>
                  <div class="flex">
                    <img class="eyes" :src="homepage.datas[47].value[0].visit_img.image" alt="">
                    <i>{{homepage.datas[47].value[0].visit}}</i>
                    <span class="line">|</span>{{homepage.datas[47].value[0].time}}
                    </div>
                </div>
              </a>
            </li>
          </ul>
        </div>


        <!------------上下分割线------------------>
        <div class="xline">
          <div class="page-line"></div>
        </div>

        <!--小剧场-->
        <div class="epet_juchang epet_title">
          <div class="leftImg"><img :src="homepage.datas[49].value.left.img.image"></div>
          <div class="rightMore">
            <a href="###">
              <img :src="homepage.datas[49].value.right.img.image">
            </a>
          </div>
        </div>
        <div class="fashino">
          <ul>
            <li>
              <a href="###">
                <div class="fashion_top"><img :src="homepage.datas[50].value[0].cover.image"></div>
                <div class="fashion_bottom">
                  <div class="textover">{{homepage.datas[50].value[0].title}}</div>
                  <div class="flex">
                    <img class="eyes" :src="homepage.datas[50].value[0].visit_img.image" alt="">
                    <i>{{homepage.datas[50].value[0].visit}}</i>
                    <span class="line">|</span>{{homepage.datas[50].value[0].time}}
                    </div>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <!------------上下分割线------------------>
        <div class="xline">
          <div class="page-line"></div>
        </div>

        <!--品质养宠-->
        <div class="divboximg flex">
          <div class="diving">
            <a href="###">
              <img style="height: 30.5px;" src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water">
            </a>
          </div>
        </div>

        <!--版权区-->
        <div class="copyright">
          <div class="links">
            <span class="cp" title="触屏版">触屏版</span>
            <span><a href="##">手机客户端</a></span>
            <span><a href="###">关于我们</a></span>
            <span><a href="##">联系我们</a></span>
          </div>
          <div class="company">
            © wap.epet.com 版权：重庆易宠科技有限公司
          </div>
        </div>
      </div>

    </div>
    <div type="dog" class="go-dog pointer dog"></div>
</div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
    export default{

      mounted(){
        //异步获取homepage
        this.$store.dispatch('getHomepage')
        //异步获取轮播图片
        this.$store.dispatch('getLunbotu')



         /*头部文字导航*/
        new BScroll('.find_nav',{
          probeType: 2,
          scrollX: true,
          click: true //响应点击
        });
        /*每日疯抢*/
        new BScroll('.surprise-pro',{
          probeType: 2,
          scrollX: true,
          click: true
        });



      },
      computed:{
        ...mapState(['homepage','lunbotu'])
      },
      watch: {
        lunbotu(value){
          this.$nextTick(()=>{
            //头部轮播
            let mySwiper = new Swiper ('.swiper-container', {
              // direction: 'vertical',
              loop: true,
              autoplay:true,
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              },
            })

            //萌爪联盟轮播
            let mySwiper1 = new Swiper ('.swiper-container2', {
              // direction: 'vertical',
              loop: true,
              autoplay:true,
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination2',
              },
            })
          })
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .main_header
    position fixed
    height 141px
    background-color #fff
    z-index 888
    overflow hidden
    /*搜索栏和列表导航*/
  .indexheader
    width 100%
    height 86px
    .epetsearch
      padding 10px 0
      display flex
      justify-content space-around
      .buyinfo
        position relative
        display flex
        flex-direction row
        span
          font-size 14px
          line-height 25px
          color: #898989;
      .buyinfo::before
        content: '';
        position: absolute;
        border: 5px solid;
        border-color: #898989 transparent transparent;
        top: 10px;
        right: -13px;
      .searchtext
        background #e9e9e9
        height 25px
        border-radius 4px
        input
          background #e9e9e9
          color #bcbcbc
          text-indent 10px
          font-size 13px
          line-height 25px
          border-radius 4px
          outline 0
          width 200px
        .icon
          .iconfont
            font-size 11px
      img
        width: 25px;
        height 25px
  .find_nav
    width 100%
    height 35px
    line-height 35px
    min-width 320px
    ul
      width 120%
      display flex
      flex-direction row
    li
      width 20%
      display inline-block
      text-align center
    .flex
      display flex
  /*下载app*/
  .appdowing
    width 100%
    height 55px
    img
      width 100%
  #indexbox
    width:100%
    position absolute
    top 141px
    margin-bottom 50px
/*轮播以下*/
  .allmodule
    width 100%
      /*新人9.9*/
    .banner_item img
      width 100%
    .swiper-container
      width: 100%
      height: 100%
      img
       width 100%
      /*图片导航*/
    .columnnavdiv
      width 100%
      height 180px
      ul
        display flex
        flex-wrap: wrap;
        li
          width 20%
          img
            width 100%
            height 100%
            vertical-align middle
     /*每日疯抢*/
    .surprise_day
      width 100%
      /*标题*/
      .surprise-title
        position relative
        height 39px
        width 100%
        line-height 39px
        overflow hidden
        .timing
          img
            width 86px
            vertical-align middle
        .over
          position absolute
          top 4px
          left 50%
          font-size 13px
        .time
          position absolute
          top 4px
          left 68%
          font-size 13px
        .more
          position absolute
          top 7px
          right 1%
          img
            width 70px
            z-index 100
       /*商品*/
      .surprise-pro
        width 100%
        height 130px
        min-width 320px
        padding-left 5px
        margin-bottom 10px
        .shopList
          width 110%
          margin 0 7px;
          display flex
          flex-direction row
          li
            width 25%
            display inline-block
            text-align center
            img
              width 85px;
              vertical-align middle
            .sale
              font-size 14px
              color red
              display block
              margin-top 5px
              margin-bottom 2px
            .sheng
              font-size 12px
              color #999
     /*上下分割线*/
    .page-line
      background #666;//f3f4f5
      height 10px
    /*e宠国际*/
    .epet_biggo
      display flex
      img
        display block
        vertical-align middle
      .go_left
        width 50%
        height 250px
        img
          width 100%
      .go_right
        width 50%
        height 250px
        img
          width 100%
    /*潮品视频*/
    .epet_title
      position relative
      padding-bottom 5px
      text-align center
      .leftImg
        img
          display block
          vertical-align middle
          width 188px
          height 72px
          margin: 0 auto 0 10px
      .rightMore
        position absolute
        top 6px
        right 0
        text-align right
        img
          display block
          vertical-align middle
          width 66px
    /*潮品视频下的内容*/
    .fashino
      width 100%
      a
        display block
      .fashion_top
        img
          display block
          vertical-align middle
          width 100%
      .fashion_bottom
        font-size 12px
        color #333
        padding 10px
        text-align center
        .flex
          display flex
          justify-content center
          padding-top 8px
          color #999
          .eyes
            width 16px
            height 15px;
        .cmallViewIco
          display inline-block
          width 10px
          height 9px
          background url(./images/view-black.png) 0 0 no-repeat;
          background-size contain
          margin-right: 3px
        .line
          margin-left 10px
          margin-right 10px
      .swiper-container2
        .mzlmImg
          width 100%
    .purple_go
      width 200%
    .flex
      width 100%
      flex-wrap wrap
      display flex
      .divimg
        width 50%
        img
          height 99.5px
        a
          display block
          overflow hidden
       /*品牌特卖的banner列表*/
    .divboximg
      width 100%
      margin-top: -32px
      .flex
        display flex
       .diving
        a
          display block
          overflow hidden
          img
            width 100%
    .copyright
      .links
        display flex
        justify-content center
        font-size 14px
        padding 15px 0 5px
        span
          padding-right 10px
        .cp
          color red
      .company
        text-align center
        margin 0 10px 0 10px
        padding-bottom 25px
        font-size 12px
  .go-dog
    cursor pointer
    background url("./images/godog.png") no-repeat
    width 41px
    height 46px
    background-size 80px auto
    position fixed
    bottom 15%
    right -1px
    z-index 20
    animation nnh 2.5s step(2) infinite
    @keyframes nnh
      0%
        background-position: 1px;
      100%
        background-position: -81px
</style>
