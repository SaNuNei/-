<template>
  <div>
    <div class="top">
      <div class="home">
        <a class="iconfont icon-home" href="/"></a>
        <a href="/">
          <i class="logo"></i>
        </a>
        <div class="right">
          <a class="iconfont icon-sousuo" href="/"></a>
          <a class="iconfont icon-gouwuchekong1" href="/"></a>
        </div>
      </div>
    </div>
    <div class="personage">
      <div class="cont">
        <div class="wrap-logo">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="wrap-btn">
          <div class="btn1">
            <i class="iconfont icon-shouji"></i>
            <span>手机号码登录</span>
          </div>
          <div class="btn2">
            <i class="iconfont icon-mail"></i>
            <span>邮箱账号登录</span>
          </div>
          <div class="btn3">
            <span>手机号快捷注册</span>
            <i class="iconfont icon-you"></i>
          </div>
        </div>
        </div>
      <div class="enter">
        <div class="wrap-item">
          <span class="item">
            <i class="iconfont icon-weixin"></i>
            <span class="name">微信</span>
          </span>
        </div>
        <div class="wrap-item">
          <span class="item">
            <i class="iconfont icon-icon_qq"></i>
            <span class="name">QQ</span>
          </span>
        </div>
        <div class="wrap-item">
          <span class="item">
            <i class="iconfont icon-weibo"></i>
            <span class="name">微博</span>
          </span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.top
  height: 45px
  background-color: #fafafa;
  .home
    width: 100%;
    margin: auto;
    overflow: hidden;
    position: relative;
    height: 45px
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-home
      margin-left 10px
      height 25px
      font-size 28px
    .logo
      width: 72px
      height: 19px
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
      display: inline-block;
      background-size: cover;
      margin-left 20px
    .right
      margin-right: 10px
      .iconfont
        height 25px
        font-size 20px
        padding 5px

.personage
  height:500px
  position: relative;
  background: #F2F5F4;
  .cont
    .wrap-logo
      margin-top 80px
      text-align:center
      height 100px

      img
        width: 134px
        height: 45px
    .wrap-btn
      padding: 10px
      margin-bottom: 20px
      .btn1
        width: 100%
        height: 50px
        font-size: 15px;
        line-height 50px
        text-align: center
        color: #fff;
        border: 1px solid #b4282d;
        border-radius: 3px;
        background-color: #b4282d;
        margin-bottom 15px
      .btn2
        width: 100%
        height: 50px
        font-size: 15px;
        line-height 50px
        text-align: center
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: 3px;
        margin-bottom 15px
      .btn3
        color: #333;
        font-size: 15px;
        text-align: center;
        width: 100%;

  .enter
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 20px
    height: 30px
    text-align: center;
    .wrap-item
      height: 5px;
      border-right: 1px solid #979797;
      display: inline-block;
      text-align: center;
      line-height 5px
      padding: 14px
      .item
        height: 7.53333rem;
        position: relative;
        top: -0.13333rem;
        .iconfont
          background-size: 98%;
        .name
          font-size: 14px;
          color: #7F7F7F;
</style>
