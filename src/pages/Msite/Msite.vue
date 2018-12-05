<template>
  <div>
    <!--首页-->
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
      <nav class="wrap">
        <ul class="list">
          <li class="tap">
            <a href="/" class="txt">推荐</a>
          </li>
          <li class="tap">
            <a href="/" class="txt">居家</a>
          </li>
          <li class="tap">
            <a href="/" class="txt">鞋包配饰</a>
          </li>
          <li class="tap">
            <a href="/" class="txt">服装</a>
          </li>
          <li class="tap">
            <a href="/" class="txt">电器</a>
          </li>
          <li class="tap">
            <a href="/" class="txt">洗护</a>
          </li>
          <li class="tap">
            <a href="/" class="txt">饮食</a>
          </li>
          <li class="tap">
            <a href="/" class="txt">餐厨</a>
          </li>
          <li class="tap">
            <a href="/" class="txt">文体</a>
          </li>
          <li class="tap">
            <a href="/" class="txt">特色区</a>
          </li>
        </ul>
        <div class="inner"></div>
        <div class="toggle">
          <a href="/" class="txt1"></a>
        </div>
      </nav>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./img/850c005113e5becbfd98d797b8a2101a.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./img/fda101d5e6beeb56d0ff8245139ff30b.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="./img/03d8a81e7be4bb1a8d44dc2118f944a4.jpg" alt="">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="welfare">
        <ul class="grow">
          <li class="item">
            <a href="'/">
              <img src="./img/xz.png" class="ico">
              <span class="text">网易自营品牌</span>
            </a>
          </li>
          <li class="item">
            <a href="'/">
              <img src="./img/xz.png" class="ico">
              <span class="text">30天无忧退货</span>
            </a>
          </li>
          <li class="item">
            <a href="'/">
              <img src="./img/xz.png" class="ico">
              <span class="text">48小时快速退款</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="spdh">
        <ul class="navigate">
          <li class="single">
            <div>
            <a href="/">
              <span class="imgs"><img src="https://yanxuan.nosdn.127.net/98b6a6fc32f1fea861934816729e2cf5.png" alt=""></span>
              <p>居家</p>
            </a>
            </div>
          </li>
          <li class="single">
            <div>
              <a href="/">
                <span class="imgs"><img src="https://yanxuan.nosdn.127.net/46d33b9a9fbb659fcbac37ec58d51e62.png" alt=""></span>
                <p>箱包</p>
              </a>
            </div>
          </li>
          <li class="single">
            <div>
              <a href="/">
                <span class="imgs"><img src="https://yanxuan.nosdn.127.net/31831ada59dc10319cba195620ed9ed0.png" alt=""></span>
                <p>服装</p>
              </a>
            </div>
          </li>
          <li class="single">
            <div>
              <a href="/">
                <span class="imgs"><img src="https://yanxuan.nosdn.127.net/793bca13bb931475ea7f0c00299362bb.png" alt=""></span>
                <p>洗护</p>
              </a>
            </div>
          </li>
          <li class="single">
            <div>
              <a href="/">
                <span class="imgs"><img src="https://yanxuan.nosdn.127.net/45833c71d4b0d0de0755a20f893fa25f.png" alt=""></span>
                <p>电器</p>
              </a>
            </div>
          </li>
          <li class="single">
            <div>
              <a href="/">
                <span class="imgs"><img src="https://yanxuan.nosdn.127.net/2fde77529e90a26427d1c02faa3bfbf6.png" alt=""></span>
                <p>婴童</p>
              </a>
            </div>
          </li>
          <li class="single">
            <div>
              <a href="/">
                <span class="imgs"><img src="https://yanxuan.nosdn.127.net/97eb6fd2c7ea76a3a42b9dafa3bd6543.png" alt=""></span>
                <p>文体</p>
              </a>
            </div>
          </li>
          <li class="single">
          <div>
            <a href="/">
              <span class="imgs"><img src="https://yanxuan.nosdn.127.net/fc3e359da08577228354da61ea912c99.png" alt=""></span>
              <p>餐厨</p>
            </a>
          </div>
        </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'

  export default {
    mounted() {
      new Swiper('.swiper-container', {

        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .head
    height 44px
    background-color: #fff;
    border-bottom: 1px solid #d9d9d9;
    .search
      position relative
      z-index: 2;
      display: flex;
      justify-content: space-around;
      .logo
        width: 72px
        height: 19px
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display: inline-block;
        background-size: cover;
        background-position: center;
        margin: 15px 10px
      .search_form
        width 220px
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

    .wrap
      position relative
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
      height: 30px
      padding: 5px 0 0 0;
      margin-top: -7px;
      .list
        display: inline-block;
        white-space: nowrap;
        margin-top -22px
        background-color white
        height: 45px
        .tap
          display: inline-block;
          height: 12px;
          font-size: 26px;
          padding: 0 0.8px;
          line-height: 12px;
        .txt
          display: inline-block;
          padding: 12px
          line-height: 4px;
          font-size: 14px
          text-align: center;
          margin 12px 0 0 8px
      .inner
        position absolute
        width: 18px
        height: 18px
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0, #fff 100%);
      .toggle
        width: 20px;
        height: 42px;
        text-align: center;
        background: #fff;
        .txt1
          margin: 18px 5px 0 0;
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: 18px
          height: 24px

    .swiper-container
      width: 100%
      height: 160px
      img
        width: 100%
        height: 100%

    .welfare
      background: #FFEDDB;
      .grow
        width: 100%;
        height: 40px
        padding: 0 .4rem;
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        .item
          a
            display: inline-block;
            vertical-align: middle;
            .ico
              display: inline-block;
              vertical-align: middle;
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: 15px
              height: 15px
            .text
              font-size: 12px;
              color: #B4282D;
              margin-left: -17px
              padding 20px

    .spdh
      width: 100%;
      height: 800px
      .navigate
        width 100%
        height 170px
        background-color #FFEDDB;k
        .single
          width: 80px
          height: 80px
          float: left
          margin: 6px;
          padding-left: 17px;
          img
            width: 50px
            height: 50px
          p
            font-size 13px
            margin-left 12px

</style>
