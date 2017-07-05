<template lang="html">
	<div id="detail">
		<div class="detail_top">
			<p><router-link to="" tag="span">分类</router-link><router-link to="" tag="span">品牌</router-link></p>
		</div>
		<section class="datail_content">
			<div class="datail_banner">
				 
			</div>
		</section>	
		<Foot></Foot>	
	</div>
</template>
<script lang="babel">
import Foot from '../public/Foot'
	export default ({
		components: {
			Foot
		}
	})
</script>
<style lang="sass">
	#detail
		position: absolute
		width: 100%
		top: 0
		bottom: 0
		display: -webkit-flex
		flex-direction: column
		font-size: .16rem
		background: #f6f6f6
		.detail_top
			height: .45rem
			line-height: .43rem
			text-align: center
			border-bottom: 1px solid #ccc
			background: #fff
			p span
				display: inline-block
				font-size: .14rem
				margin: 0 .1rem
			.router-link-exact-active
				border-bottom: 2px solid #000
		.datail_content
			flex: 1
			overflow-y: auto
			height: auto
</style>