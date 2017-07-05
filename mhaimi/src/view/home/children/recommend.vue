<template lang="html">
	<div class="_content">
		<m-banner :banner="banner"></m-banner>
		<m-list :list="list"></m-list>
		<m-img :img1="img1" :img2="img2"></m-img>
		<!-- <m-brands :brands="brands" :brands1="brands1"></m-brands> -->
		<m-things :things="things" :things1="things1"></m-things>
		<m-follow :follow="follow" :follow1="follow1"></m-follow>
	</div>
</template>
<script>
import Banner from '@/view/home/component/banner/banner'
import List from '@/view/home/component/list/list'
import Img from '@/view/home/component/img/img'
import Brands from '@/view/home/component/brands/brands'
import Things from '@/view/home/component/things/things'
import Follow from '@/view/home/component/follow/follow'
	export default {
		data(){
			return {
				product: [],
				banner: [],
				list: [],
				img1:[],
				img2:[],
				brands: [],
				brands1: [],
				things: [],
				things1: [],
				follow: [],
				follow1: [],
				fashion: [],
				fashion1: [],
				product1: []
			}
		},
		components:{
			"m-banner":Banner,
			"m-list":List,
			"m-img":Img,
			"m-brands":Brands,
			"m-things":Things,
			"m-follow":Follow
		},
		created(){
			const id = this.$route.query.NavID
			this._banner(id)
		},
		
		methods:{
			
			_banner (id) {
				const sref = this
				this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=index_"+id+"&platform=WAP",{jsonp:"_callback"})
				.then(function(res){
					 
					 
						if(res.body.data!=null || res.body.data.length>0){
							sref.banner = res.body.data[0].Records
						}else{
							sref.banner = []
						}
						
						sref.list = res.body.data[1].Records
						sref.img1 = res.body.data[2].Records
						sref.img2 = res.body.data[3].Records
						sref.brands = res.body.data[4].Channel
						sref.brands1 = res.body.data[4].Records
						sref.things = res.body.data[5].Channel
						sref.things1 = res.body.data[5].Records
						sref.follow = res.body.data[6].Records
						sref.follow1 = res.body.data[7].Records
						// sref.fashion = res.body.data[8].Records
						// sref.fashion1 = res.body.data[9].Records
					 
				})
				.catch(function(err){
					console.log(err)
				})
			}
		}
	}
</script>
<style lang="sass">
._content
	background: #f6f6f6
	font-size: 16px
.brand,.things,.follow
	margin-top: 14px
	background: #fff
	border-bottom: 1px solid #eee
	h3
		height: .4rem
		line-height: .4rem
		text-align: center
		font-size: .14rem
	p img
		width: 100%
		height: 100%	
	.brand_list
		display: -webkit-flex
		justify-content: space-between
		p img
			width: 100%
			height: 100%
	.things_list
		ul 
			display: -webkit-flex
			justify-content: space-between
			flex-wrap: wrap
			li
				width: 50%
				height: auto
				img
					width: 100%
					height: 100%
	.follow_list
		dl
			margin-right: .05rem
			box-sizing: border-box
			text-align: center
			padding-bottom: .12rem
			dt
				width: 1rem
				height: 1rem
				margin: auto
				img
					width: 100%
					height: 100%
			dd
				h3
					font-size: .14rem
					height: .16rem
					line-height: .16rem
					color: #000
				span
					font-size: .12rem
					color: #333
</style>