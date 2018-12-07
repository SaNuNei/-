<template>
<div>
  <div class="top">
    <div class="home">
      <a class="iconfont icon-home" href="/"></a>
      <div>
        <a class="find" href="/">发现</a>
        <a class="find2" href="/">甄选家</a>
      </div>
      <div class="right">
        <a class="iconfont icon-sousuo" href="/"></a>
        <a class="iconfont icon-gouwuchekong1" href="/"></a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {

    }
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
      .find
        font-size: 20px;
        color: #b4282d;
        font-weight: bold;
        padding-left 20px
      .find2
        font-size: 12px;
        padding-left 10px
      .right
        margin-right: 10px
        .iconfont
          height 25px
          font-size 20px
          padding 5px

</style>
