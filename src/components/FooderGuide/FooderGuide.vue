<template>
  <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item"
       :class="{on:'/home'===$route.path}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{on:'/shopList'===$route.path}" @click="goto('/shopList')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{on:'/cart'===$route.path}" @click="goto('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-icozhuanhuan"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item"
       :class="{on:'/profile'===$route.path}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-xiaolian"></i>
      </span>
      <span>我的e宠</span>
    </a>
  </div>
</template>
<script>
    export default{
      methods: {
        goto(path) {
          this.$router.replace(path)
        },
        isCurrent(path) {
          // console.log(this.$route.path)
          return this.$route.path === path
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
