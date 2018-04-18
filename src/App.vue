<template>
  <div>
    <router-view></router-view>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooderGuide/FooderGuide.vue'
export default {
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
