<template lang="html">
<div v-if="banner.length>0 || banner.length==0">
	<div class="swiper-container" ref="banners">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for='(i,k) in banner' :key='k'>
				<div class="icons">
					<img :src="i.PictureWebp">
				</div>
			</div>
		</div>
		<div class="swiper-pagination"></div>
	</div>
	 
	<div class="_list" v-if="list.length>0">
		<router-link v-for="(l,k) in list" :key="k" :to="{path:'/recommend/activity',query:{ActivityID:k}}" tag="dl">
			<dt>
				<img :src="l.PictureWebp" alt="">
			</dt>
			<dd>{{l.SlideName}}</dd>
		</router-link>
	</div>
 
	<div class="imgs" v-if="img1.length>0 && img2.length>0">
		<p v-for="j in img1"><img :src="j.PictureWebp" alt=""></p>
		<p v-for="o in img2"><img :src="o.PictureWebp" alt=""></p>
	</div>
	 
	<div class="brand" v-if="brands.Name!=null">
		<h3>{{brands.Name}}</h3>
		<div class="brand_list" v-if="brands1.length>0">
			<div class="left">
				<p><img :src="brands1[0].PictureWebp" alt=""></p>
				<p><img :src="brands1[1].PictureWebp" alt=""></p>
			</div>
			<div class="right">
				<p><img :src="brands1[2].PictureWebp" alt=""></p>
			</div>
		</div>
	</div>
	 
	<div class="things" v-if="things.Name!=null">
		<h3>{{things.Name}}</h3>
		<div class="things_list" >
			<ul v-if="things1.length>0">
				<li v-for="t in things1">
					<img :src="t.PictureWebp" alt="">
				</li>
			</ul>
		</div>
	</div>
	  
	<div class="follow" v-if="follow.PictureWebp!=null">
		<p v-for='f in follow'><img v-lazy="f.PictureWebp" alt=""></p>
		<div id="iscroller1">
			<div class="follow_list" v-if="follow1.length>0">
				<dl v-for='ff in follow1'>
					<dt>
						<img v-lazy="ff.PictureWebp" alt="">
					</dt>
					<dd>
						<h3>{{ff.SlideName}}</h3><span>{{ff.Description}}</span>
					</dd>
				</dl>
			</div>
		</div>
	</div>
	 
	<div class="follow" v-if="fashion.PictureWebp!=null">
		<p v-for='g in fashion'><img v-lazy="g.PictureWebp" alt=""></p>
		<div id="iscroller1">
			<div class="follow_list" v-if="fashion1.length>0">
				<dl v-for='gg in fashion1'>
					<dt>
						<img v-lazy="gg.PictureWebp" alt="">
					</dt>
					<dd>
						<h3>{{gg.SlideName}}</h3><span>{{gg.Description}}</span>
					</dd>
				</dl>
			</div>
		</div>
	</div>
	 
	<div class="product" v-for="ts in product">
		<h3 >{{ts.Title}}</h3>
		<div class="product_list">
			<router-link v-for="(ps,k) in ts.Products" :key="k" :to="{path:'/product',query:{productId:ps.ProductID}}" tag="dl" @click="detail(ps)">
				<dt>
					<img v-lazy="ps.PicturesWebp">
				</dt>
				<dd>
					<h3 class="text-nobr">{{ps.Subject}}</h3>
					<p><i class="iconfont icon-shoucang f22"></i><span>{{ps.FinalPrice}}</span></p>
				</dd>
			</router-link>
		</div>
	</div>	
</div>
</template>
<script lang="babel">
	export default ({
		data () {
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
		watch:{
			$route(to){	
				var id = this.$route.query.NavID
				this._getproduct(id)
				this._banner(id)
			}
		},
		beforeupdate () {
			const id = this.$route.query.NavID
			this._getproduct(id)
			this._banner(id)
		},
		mounted(){
			const that = this
			setTimeout(function(){
				that._banners()
			},1500)
		},
		methods: {
			_banners(){
				new Swiper(this.$refs.banners,{
			          pagination: '.swiper-pagination',
			          paginationClickable: true,
			          loop:true,
			          autoplay:1500,
			          autoplayDisableOnInteraction: false,
			          observeParents: true
			      })
			},
			_banner (id) {
				const sref = this
				this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=index_"+id+"&platform=WAP",{jsonp:"_callback"})
				.then(function(res){
					this.$nextTick(() => {  
				       this._banners()
			        })
					console.log(res.body.data.length)
					if(res.body.data.length>0){
						sref.banner = res.body.data[0].Records
						if(id==13 || id==9){
							sref.banner = []
							console.log(sref.banner)
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
						sref.fashion = res.body.data[8].Records
						sref.fashion1 = res.body.data[9].Records
					}else{
						sref.banner = []
						sref.list = []
						sref.img1 = []
						sref.img2 = []
						sref.brands = []
						sref.brands1 = []
						sref.things = []
						sref.things1 = [] 
						sref.follow = []
						sref.follow1 = []
						sref.fashion = []
						sref.fashion1 = []
					}
					 // console.log(sref.banner)
				})
				.catch(function(err){
					console.log(err)
				})
			},
			_getproduct (id) {
				const sref = this
				this.$http.jsonp("http://m.haimi.com/api/nav/advert-team-products?NavID="+id+"&page=1&pageSize=100&platform=WAP",{jsonp:"_callback"})
				.then(function(res){
					sref.product = res.body.data
					sref.product1 = res.body.data
					console.log(res.body.data[0].Title)
				})
				.catch(function(err){
					console.log("?????")
				})
			},
			detail(){
				setTimeout(()=>{
					window.location.reload()
				},1500)
			}
		}
	})
</script>
<style lang="sass">

img[lazy=loading]
  width: 100%
  height: 100%
  margin: auto
  background: #ccc
.swiper-container 
    width: 100%
    height: 167px
.icons
	width: auto
	height: auto
	img 
		width: 100%
		height: 100%
._list
	background: #fff
	display: -webkit-flex
	justify-content: space-around
	margin-top: 14px
	dl
		flex: 1
		padding-bottom: .14rem
		text-align: center
		dt
			width: auto
			height: auto
			margin: auto
			padding-bottom: .05rem
			img
				width: 100%
				height: 100%
		dd
			font-size: .14rem
			color: #000
.imgs
	p
		img
			width: 100%
			height: 100%
	p:nth-child(1)
		margin-bottom: 14px
.brand,.things,.follow
	margin-top: 14px
	background: #fff
	border-bottom: 1px solid #ccc
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
#iscroller1
	width: 100%
	overflow-x: auto
	.follow_list
		width: 100%
		height: 100%	
		display: -webkit-box
		justify-content: space-between
.product
	h3
		heigth: .4rem
		line-height: .4rem
		text-align: center
		font-size: .14rem
	.product_list
		display: -webkit-flex
		justify-content: space-between
		flex-wrap: wrap
		width: 100%
		dl
			width: 49%
			margin-bottom: 10px
			background: #fff
			dt img
				width: 100%
				height: 100%
			dd
				padding-left: .06rem
				padding-right: .06rem
				padding-top: .1rem
				h3
					height: .16rem
					line-height: .16rem
					font-size: .14rem
				p
					height: .2rem
					line-height: .2rem
					padding-top: .05rem
					padding-bottom: .05rem
			 	span
					font-size: .12rem
					 
</style>