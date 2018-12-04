<template>
  <div>
    <!--首页头部-->
    <div class="head">
        <section class="search">
          <a href="/" class="logo"></a>
          <div class="search_form">
              <a href="/">
                <i class="icon"></i>
                搜索商品, 共19899款好物
              </a>
          </div>
          <button class="btn">登录</button>
        </section>
      <!--导航栏-->
      <div class="tap">
        <div></div>
        <div></div>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>

  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.head
  height 148px
  background-color: #fff;
  border-bottom: 1px solid #d9d9d9;
  .search
    position relative
    z-index: 2;
    display: flex;
    justify-content:space-around;
    .logo
      width: 72px
      height: 19px
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
      display: inline-block;
      background-size: cover;
      background-position: center;
      margin:15px 10px
    .search_form
      width 220px
      height: 30px
      font-size: 14px
      background-color: #ededed;
      border-radius: 5%
      display flex
      justify-content:center;
      align-items:center
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
  .btn
    width: 38px
    height: 23px
    line-height: 20px
    text-align: center;
    font-size 12px
    color: #b4282d;
    border: 1px solid #b4282d;
    border-radius: 10%
    margin: 15px 0 0 0
    background-color white


</style>
