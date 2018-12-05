<template>
  <footer class="footer_guide border-1px">
    <!--
      动态class: 什么时候用对象方式? 类名确定, 只是不确定有没有
    -->
    <span class="guide_item" :class="{on: $route.path==='/msite'}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/classify'}" @click="goTo('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-drawer2chouti"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/discern'}" @click="goTo('/discern')">
      <span class="item_icon">
        <i class="iconfont icon-shiwu"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/order'}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuchekong1"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item"  :class="{on: $route.path==='/profile'}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-gerenzhongxinwoderenwubiaozhuntouxianxing"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
    export default {
      methods: {
        goTo (path) {
          // 编程式路由导航
          this.$router.replace(path)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
          color  red
</style>
