<template>
<div id="foot">
	<div class="foot">
	<router-link v-for="(item,k) in msg" :key='k' :to="item.link" tag="dl">
			<dt>
				<i :class="item.icon"></i>
			</dt>
			<dd><span>{{item.text}}</span></dd>
	</router-link>
	</div>
</div>
</template>
<script>
export default{
	data () {
	    return {
	      msg: [
	        {
	          text: '首页',
	          link: '/home',
	          icon: 'iconfont icon-xiazai'
	        },
	        {
	          text: '分类',
	          link: '/detail',
	          icon: 'iconfont icon-liebiao1'
	        },
	        {
	          text: '购物车',
	          link: '/shop',
	          icon: 'iconfont icon-gouwuche'

	        },
	        {
	          text: '我的',
	          link: '/user',
	          icon: 'iconfont icon-wode'
	        }
	      ]
	    }
  }
}
</script>
<style lang="sass">
	.foot
		position: fixed
		bottom: 0
		left: 0
		font-size: 16px
		width: 100%
		display: -webkit-flex
		justify-content: space-around
		padding-top: .02rem
		padding-bottom: .02rem
		border-top: 1px solid #ccc
		background: #fff
		
		dl
			text-align: center
			color: #999
			dt
			 padding-bottom: .03rem
			 padding-top: .02rem
			dd
				 
				font-size: .14rem
		.router-link-exact-active 
			color: orange
</style>