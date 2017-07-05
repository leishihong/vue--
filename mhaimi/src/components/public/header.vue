<template>
<div>
	<header class="top rel">
      <i class="iconfont icon-search abs"></i>
      <div class="top-search">
        <input type="text" placeholder="搜索宝贝">
      </div>
      <span class="abs sou">搜索</span>
  </header>
</div>
</template>
<script>
	
</script>
<style lang="sass" scoped>
.top
    background: rgba(0,0,0,.8)
    color: #fff
    height: .45rem
    line-height: .45rem
    .icon-search
      top: 0
      left: .12rem
      font-size: .18rem
      color: #999
    .top-search
      padding-left: .4rem
      padding-right: .44rem
      box-sizing: border-box
      width: 100%
      height: .35rem
      margin-top: .025rem
      font-size: 0
      input
        width: 100%
        height: .4rem
        margin-top: .025rem
        padding-left: .1rem
        padding-right: .1rem
        box-sizing: border-box
        border: none
        background: rgba(0,0,0,.2)
      input::-webkit-input-placeholder
          color: #ccc !important
           
    .sou
      right: .1rem
      top: 0
      font-size: .15rem
</style>