<template>
  <div id="wrapper">
    
    <section class="content">
    <header class="top rel">
      <i class="iconfont icon-search abs"></i>
      <div class="top-search">
        <input type="text" placeholder="搜索宝贝">
      </div>
      <span class="abs sou">搜索</span>
    </header>
    <!-- 导航菜单 -->
      <Tab></Tab>
     <!--  视图展示区域 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </section>
    <!-- 页脚 -->
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from './public/Foot'
import Tab from './nav/Tab'
export default {
  components: {
    Foot,
    Tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
#wrapper
  position: absolute
  width: 100%
  top: 0
  bottom: 0
  display: -webkit-flex
  flex-direction: column
  background: #f6f6f6
  overflow: hidden
  font-size: 16px
  
.content
  flex: 1
  overflow-y: auto
  height: auto
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
        margin-top: 0
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
