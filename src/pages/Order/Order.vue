<template>
  <div>
    <div class="top">
      <div class="rook">
        <span>购物车</span>
      </div>
      <div class="coupon">
        <a href="/">
          <span>领劵</span>
        </a>
      </div>
    </div>
    <div>
      <ul class="discounts">
        <li>
          <i> 。</i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i> 。</i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i> 。</i>
          <span>满88免邮费</span>
        </li>
      </ul>
    </div>
    <div class="gwc">
      <div class="gwc1">
        <div class="img"></div>
      </div>
      <div>
        <div class="txt">去添加点什么吧</div>
        <a href="/"><div class="btn">登录</div></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .top
    width 100%
    height: 30px;
    padding: 10px;
    line-height: 20px
    text-align: center;
    background-color: #fff;
    position relative
    .rook
      font-size: 20px;
      margin-top 5px
    .coupon
      position: absolute;
      top: 14px;
      right: 45px;
      font-size: 15px;
      span
        color: #B4282D;

  .discounts
    height: 10 pxrem;
    padding: 10px;
    background: #f4f4f4;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    li
      font-size 12px
      color: #666;
      i
        margin-right: 5px;
        position relative
        top: -4px;
        left 12px

  .gwc
    position: fixed;
    top: 100px;
    left: 0;
    bottom: 12px;
    z-index: 0;
    width: 100%;
    background-color: #f4f4f4;
    text-align: center
    .gwc1
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 150px;
      margin: auto;
      .img
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
        display: inline-block;
        vertical-align: middle;
        width: 150px
        height: 150px
        background-size: 100% 100%
    .txt
      font-size: 15px;
      color: #999;
      height 200px
      display: flex
      justify-content:center;
      align-items:flex-end;
      padding-top 165px
    .btn
      margin: 23px 0 0 63px
      width:250px;
      height: 45px;
      font-size: 15px;
      line-height: 40px;
      color: #fff;
      background-color: #b4282d;
      border-radius: 5px;


</style>
