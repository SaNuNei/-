<template>
<div>
  <div>
    <section class="search">
      <div class="search_form">
        <a href="/">
          <i class="icon"></i>
          搜索商品, 共19899款好物
        </a>
      </div>
    </section>
  </div>
  <div>
    <!--<at-menu mode="vertical" active-name="1">-->
      <!--<at-menu-item name="1"><i class="icon"></i>导航菜单一</at-menu-item>-->
      <!--<at-menu-item name="2"><i class="icon"></i>导航菜单二</at-menu-item>-->
      <!--<at-menu-item name="3"><i class="icon"></i>导航菜单二</at-menu-item>-->
      <!--<at-menu-item name="4"><i class="icon"></i>导航菜单四</at-menu-item>-->
    <!--</at-menu>-->
  </div>
  <div></div>
</div>
</template>

<script>
  // import { MenuItem as AtMenuItem,
  //          Menu as atMenu
  // } from 'at-ui'
  //
  // export default {
  //   components: {
  //     AtMenuItem,
  //     atMenu
  //   },
  //   data () {
  //     return {
  //       value: 'O2Team'
  //     }
  //   }
  // }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .search
    position relative
    z-index: 2;
    display: flex;
    justify-content: space-around;
    .search_form
      width 345px
      height: 30px
      font-size: 14px
      background-color: #ededed;
      border-radius: 5%
      display flex
      justify-content: center;
      align-items: center
      margin-top 10px
    .icon
      display: inline-block;
      vertical-align: middle;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 15px
      height: 15px
      margin-right: 6px
</style>
