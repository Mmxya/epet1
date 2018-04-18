<template>
    <div>
        <div class="classify_header">
          <div class="title">
            <router-link to="/shopList/classify"><span class="on">分类</span></router-link>
            <router-link to="/shopList/brands"><span>品牌</span></router-link>
          </div>
          <router-view :classifys="classifys" :brands="brands"></router-view>
        </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default{
        mounted(){
            this.$store.dispatch('getClassifys')
            this.$store.dispatch('getBrands')
        },
        computed:{
          ...mapState(['classifys','brands'])
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.classify_header
  position relative
  top 0
  width 100%
  height 100%
  background-color pink
  margin-bottom 40px
  .title
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index 333
    height 40px
    line-height 40px
    background-color #fff
    display flex
    justify-content center
    border-bottom: 2px solid #666
    span
      margin-left 16px
      margin-right 16px
      cursor pointer
      font-size 13px
      font-weight 700
      &.on
        color red
</style>
