<template lang="html">
	<div id="Products">
		<section class="product_content">
			<!-- 产品的详情页 -->
			<div class="swiper-container detail_banners">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="i in list_banner">
						<div class="detail_banner">
							<img v-lazy="i.picture" alt="">
						</div>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<!-- 产品的信息页 -->
			<div class="detail_info">
				<div class="title text-nobr">{{list_tittle.Subject}}</div>
				<div class="prices"><i class="c_color">￥{{list_tittle.FinalPrice}}</i><span>月销{{list_tittle.MonthSalesNum}}件</span></div>
				<div class="other">邮费{{list_tittle.BatchNumber}}元</div>
			</div>
			<!-- 商品具体选择信息 -->
			<div class="detail_info2">
			<!-- 年度促销活动 -->
				<div class="other one">
					<ul>
						<li>
							<p v-for="ps in list_promises">
								<i class="iconfont icon-yuanxingxuanzhong  c_color f22"></i><span >{{ps}}</span>
							</p>
						</li>
						<li v-for='item in list_promotions' v-if="list_promotions.length>0">
							{{item.Subject}}<i class="iconfont icon-arrowright f22 right"></i>
						</li>
					</ul>
				</div>
				<!-- 请选择颜色 -->
				<div class="other" v-if="list_propertySku.length>0" @click="flags">
					<ul>
						<li><b>请选择：</b> <span v-for="at in list_propertySku">{{at.AttrName}} </span><i class="iconfont icon-arrowright f22 right"></i></li>
					</ul>
				</div>
				<!-- <div class="dialog" v-show="flag">
					<div class="mark" @click="dialog"></div>
					<div class="dialog_info">
						<div class="dialog_top">
							<dl>
								<dt>
									<img src="" alt="">
								</dt>
								<dd>
									<h3>erf</h3>
									<p>efef</p>
									<div class="color"><b>请选择：</b><span v-for="at in list_propertySku">{{at.AttrName}}</span></div>
								</dd>
							</dl>
						</div>
						<div class="xuan">
							<div class="size"  v-if="list_propertySku.length>0">
								<h3>颜色分类</h3>
								<ul >
									<li v-for="item in list_type">{{item}}</li>
								</ul>
							</div>
							 <div class="size" v-if="list_chi.length>0">
								<h3>尺寸大小</h3>
								<ul >
									<li v-for="item in list_chi">{{item}}</li>
								</ul>
							</div>
						</div>
						<div class="gou">
							<span class="mai">购买数量</span>
							<div class="shu">
								<span>-</span>
								<span>1</span>
								<span>+</span>
							</div>
						</div>
						<div class="foot footers">
							<span>加入购物车</span><span>立即购买</span>
						</div>
					</div>
				</div> -->
			</div>
			<!-- 评价得分的 -->
			<div class="detail_info3" v-if="list_tittle.ProductScore>0 && list_topReviews.length>0 && list_topReviews[0].BuyerPicturesWebp!=null && list_topReviews[1].BuyerPicturesWebp!=null">
				<div class="topReviews">
					<p>宝贝评分</p><p class="_icon"></p><span class="c_color">{{list_tittle.ProductScore}}分</span>
				</div>
				<div class="topReviews_buyer" v-for="tt in list_topReviews">
					<div class="topReviews_top">
						<dl>
							<dt>
								<img v-lazy="tt.Buyer.Avatar" alt="">
							</dt>
							<dd class="_names">{{tt.Buyer.NickName}}</dd>
							<dd>{{tt.CreateTime}}</dd>
						</dl>
					</div>
					<p>{{tt.BuyerNote}}</p>
					<ul>
						<li><img v-lazy="tt.BuyerPicturesWebp"></li>
					</ul>
				</div>
				<router-link :to="{path:'/product/contentList',query:{productId:list_tittle.ProductID,sumId:list_tittle.ReviewCount}}" class="ping" tag="div">全部评价<span>({{list_tittle.ReviewCount}})</span></router-link>
			</div>
			<!-- 海蜜严选区域 -->
			<div class="detail_info4">
				<dl>
					<dt>
						<img v-lazy="list_mall.LogoSrc" alt="">
					</dt>
					<dd>
						<h3>{{list_tittle.NickName}}</h3>
						<p>{{list_mall.Introduction}}</p>
					</dd>
				</dl>
			</div>
			<!-- 发现更多区域 -->
			<div class="detail_info5">
				<p>发现更多<span class="c_color">{{list_tittle.BrandName}}</span>良品 <i class="iconfont icon-arrowright f22 right"></i></p>
			</div>
			<!-- 商品详情页展示 -->
			<div class="detail_info6">
				<h3 class="shop">商品详情</h3>
				<div class="weixin">
					<img v-lazy="list_mall.WeixinQRCode" alt="">
				</div>
				<!-- 所有的信息展示的一个区域 -->
				<div class="descriptioin" v-html="list_descriptioin"></div>
			</div>
			<!-- 商品推荐 -->
			<div class="detail_info7">
				<div class="detail_img">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAABiCAIAAACAksEXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjM2I1MGM5OC1mOWFiLTQ0NDYtOWY3Mi03NDliNTY4NmU4ZGYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzQ2QjA2NjU4NDgyMTFFNkI2M0RDQkI5RDlBMkVGREYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzQ2QjA2NjQ4NDgyMTFFNkI2M0RDQkI5RDlBMkVGREYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmVjOTlkZjhiLWI3MTAtNDViNS1hYmE4LWM5YzlhYjY0NzhiMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjM2I1MGM5OC1mOWFiLTQ0NDYtOWY3Mi03NDliNTY4NmU4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" alt="">
				</div>
				<div class="detail_datas">
					<dl v-for="(item,key) in list_Recommend" @click="product(item)" :key="key" >
						<dt>
							<img v-lazy="item.PicturesWebp" alt="">
						</dt>
						<dd>
							<h3 class="text-nobr">{{item.Subject}}</h3>
							<p>￥{{item.FinalPrice}}</p>
						</dd>
					</dl>
				</div>
			</div>
		</section>

		<!-- 页脚 -->
		 <footer class="foot">
		 	<p>
			 	<i class="iconfont icon-xiazai f22"></i>
			 	<i class="iconfont icon-shoucang f22"></i>
			 	<i class="iconfont icon-gouwuche f22"></i>
			</p>
			<span>加入购物车</span><span>立即购买</span>
		 </footer>
	</div>
</template>
<script lang="babel">
 
	export default({
		data(){
			return{
				productId: this.$route.query.productId,
				list_banner:[],
				list_tittle:[],
				list_promises:[],
				list_mall:[],
				list_promotions:[],
				list_descriptioin:[],
				list_SkuInfo:[],
				list_topReviews:[],
				list_propertySku:[],
				list_Recommend:[],
				list_type:[],
				list_chi:[],
				flag: false
				
			}
		},
		watch:{
			$route(to){
				this._list()
			}
		},
		created(){
			const productId = this.$route.query.productId
			this._list()
			this.flag = false
			
		},
		mounted(){
			const that = this
			setTimeout(function(){
				that._banners()
			},2000)
		},
		methods:{
			_list(){
				const sref = this
				this.$http.jsonp("http://m.haimi.com/api/product/detail-cdn?ProductID="+sref.productId+"&platform=WAP",{jsonp:"_callback"})
				.then(function(res){
					/*banner图片的展示*/
					sref.list_banner = eval('(' + res.body.data.ProductPictures + ')')

					sref.list_tittle = res.body.data

					/*正品推荐1*/
					sref.list_promises = res.body.data.Promises
					/*海蜜严选区域*/
					sref.list_mall = res.body.data.Mall
					/*具体的详情页*/
					sref.list_descriptioin = res.body.data.Descriptioin
					 
					
					 
					if(res.body.data.AttrInfoArray.length>0){
						sref.list_propertySku = res.body.data.AttrInfoArray
					}else{
						sref.list_propertySku = []
					}
					
					// if(res.body.data.Promotions.length>0){
					// 	sref.list_promotions = res.body.data.Promotions
					// }else{
					// 	sref.list_promotions = []
					// }
					/*正品推荐2*/
					sref.list_promotions = res.body.data.Promotions
					console.log(sref.list_promotions)
					
					/*判断评论区域*/
					if(res.body.data.TopReviews.length>0 && res.body.data.TopReviews[0].BuyerPicturesWebp!=null && res.body.data.TopReviews[1].BuyerPicturesWebp!=null){
						sref.list_topReviews = res.body.data.TopReviews
					}else{
						sref.list_topReviews = []
					}
					sref.list_SkuInfo = res.body.data.SkuInfo
					/*商品推荐*/
					sref.list_Recommend = res.body.data.Recommend
					console.log(res.body.data.Recommend)
					 /*dialog的颜色分类和尺寸大小展示*/
					// sref.list_type = res.body.data.AttrInfoArray[0].AttrValues.split(",")
					// sref.list_chi = res.body.data.AttrInfoArray[1].AttrValues.split(",")

					 
				})
				.catch(function(err){
					console.log("请求错误")
				})
			},
			_banners(){
				new Swiper(".detail_banners",{
					pagination: '.swiper-pagination',
		            paginationClickable: true,
		            autoplayDisableOnInteraction: false,
		            observeParents: true
				})
			},
			product(item){
				this.$router.push({path:'/product',query:{productId:item.ProductID}})
				setTimeout(()=>{
					window.location.reload()
					window.scrollTo(0,0)
				},500)
				
				this._list()
			},
			flags(){
				this.flag = true
			},
			dialog(){
				this.flag = false
			}
		}
	})
</script>
<style lang="sass">
@import "../../assets/css/reset.css"
.c_color
	color: #991f33
#Products
	position: absolute
	top: 0
	bottom: 0
	width: 100%
	font-size: 16px
	display: -webkit-flex
	flex-direction: column
	background: #f6f6f6
.product_content
	flex: 1
	overflow-y: auto
	height: auto
	 
	.detail_banner
		width: auto
		height: auto
		 
		img
			width: 100%
			height: 100%
.detail_info
	padding-left: .1rem
	padding-right: .1rem
	background: #fff
	padding-top: .1rem
	.title
		text-align: left
	    padding: 0 .36rem
	    -webkit-line-clamp: 2
	    -webkit-box-orient: vertical
	    display: -webkit-box
	    overflow: hidden
	    font-size: .14rem
	.prices
		border-bottom: 1px solid #eee
		padding: .1rem 0
		i
			font-style: normal
		span
			float: right
			font-size: .12rem
	.other
		color: #999
		padding-top: .05rem
		padding-bottom: .05rem
		font-size: .12rem
		color: #999
.detail_info2
	.other
		padding-left: .1rem
		padding-right: .1rem
		margin-top: .1rem  
		width: 100%
		background: #fff
		box-sizing: border-box
		position: relative
		ul
			li
				font-size: .14rem
				color: #000
				height: .35rem
				line-height: .35rem
				a
					color: #000
				.right
					position: absolute
					right: .1rem
					font-size: .14rem
	.dialog,.mark
		position: absolute
		top: 0
		bottom: 0
		width: 100%
		 
		 
		.mark
			position: absolute
			top: 0
			bottom: 0
			width: 100%
			background: rgba(0,0,0,.5)
			z-index: 9999
		.dialog_info
			position: absolute
			bottom: 0
			width: 100%
			background: #fff
			z-index: 999999
			box-sizing: border-box
			.dialog_top
				border-bottom: 1px solid #eee
				padding-left: .12rem
				padding-right: .12rem
				padding-top: 10px
				padding-bottom: 10px
				dl
					display: -webkit-flex
					dt
						flex: 0 0 0 .8rem
						width: .8rem
						height: 80px
						img
							width: 100%
							height: 100%
					dd
						flex: 1
						padding-left: 10px
						h3
							font-size: 16px
							color: #991f33
						p
							font-sizE: 14px
							color: #999
							margin-top: 8px
						.color
							color: #666
							margin-top: 8px
							font-size: 14px
							b
								font-weight: normal
			.xuan .size
				border-bottom: 1px solid #eee
				padding-left: .12rem
				padding-right: .12rem
				padding-top: 10px
				 
				h3
					font-size: 14px
					margin-bottom: 10px
				ul
					display: -webkit-flex
					flex-wrap: wrap
					li
						width: auto
						height: 30px
						padding-right: 5px
						padding-left: 5px
						margin-bottom: 10px
						line-height: 30px
						border: 1px solid #ccc
						text-align: center
						font-size: 14px
						margin-right: 10px
			.gou
				border-bottom: 1px solid #eee
				padding-left: .12rem
				padding-right: .12rem
				padding-top: 10px
				padding-bottom: 10px
				display: -webkit-flex
				align-items: center
				justify-content: space-between
				.mai
					font-size: 16px
				.shu
					span
						display: inline-block
						border: 1px solid #ccc
						text-align: center
						float: left
						height: 30px
						line-height: 30px
						font-size: 16px
					span:first-child,span:last-child
						width: 30px
					span:nth-child(2)
						width: 40px
						border-right: none
						border-left: none
			.footers
				span
					display: inline-block
					width: 50%			
						 
	.one
		ul li 
			display: -webkit-flex
			height: .35rem
			line-height: .35rem
			border-bottom: 1px solid #eee
			p
				margin-right: .1rem
				i
					margin-right: .1rem
		ul li:first-child
			border-bottom: 1px solid #eee
.detail_info3
	background: #fff
	margin-top: .12rem
	.topReviews
		padding-left: .1rem
		padding-left: .1rem
		height: .45rem
		line-height: .45rem
		border-bottom: 1px solid #eee
		display: -webkit-flex
		font-size: .14rem
		span
			font-size: .14rem
		p
			padding-right: .1rem
		._icon
			margin-top: .14rem
			display:inline-block;width:2rem;height:.15rem;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAYAAAAJKR1YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXZJREFUeNrMlzFOwzAUhtOC1KEnKCgTrEWCZECwcwNYYYADQOlMq3YrAlbEEXoDDlBggDNAJS7QDQES/5P+wUKunTh2kid9Suz4KZ9l58lpPMTbkUMc8PqYN/F0/mZ8vuogswImoAFkNr+Rx2g65ByDLdDlfVSlUBuMlPaYfZUJXYI1pd1hXyVC8vK+pr/PZ6ULjZYsT5tLV6qQbOATy0bvlik04eduKgXXPoR0dajF+rIL9niNMxbLOXgGM/ACpAp+5RVaV14sJJRyiZgcsi0yr5R7ouinTegMXEVhosXJCudgCAa2PTTgwNBhlVE3dWipTDL/v7JQUplldJ+9b6lcMsvqkC+p3DKmwlhUyknGVqnvCwg555qEkgJCad2EkroJ7YQQSuu0ZJ2Cp0Dn/GbO5ZJfninYJ1PDb1AaUmgB7sAmOOIxYsZ76bvlmMJ70Cb0AXo848jx4V0zVvouOKbHHO9CP8rsbzSz18WCYzeY++0i9CfAAPXVQoZab75nAAAAAElFTkSuQmCC);background-size:auto .15rem}.all-btn[_v-2b81a29c]{line-height:.45rem;border-top:1px solid #eee;text-align:center;display:block
	.topReviews_buyer
		padding-bottom: .12rem
		border-bottom: 1px solid #eee
		.topReviews_top
			padding-left: .1rem
			padding-right: .1rem
			dl
				display: -webkit-flex
				justify-content: space-between
				align-items: center
				color: #999
				font-size: .12rem
				padding-top: .12rem	
				padding-bottom: .12rem
				dt
					width: .25rem
					height: .25rem
					img
						width: 100%
						height: 100%
				._names
					flex: 1 
					padding-left: .12rem
		p
			padding-left: .2rem
			padding-right: .2rem
			font-size: .14rem
			color: #000
			padding-bottom: .12rem
		ul
			padding-left: .12rem
			li 
				width: .5rem
				height: .5rem
				img
					width: 100%
					height: 100%		 
	.ping
		height: .35rem
		line-height: .35rem
		text-align: center
		font-size: .14rem
.detail_info4
	margin-top: 10px
	padding: .1rem  .1rem
	background: #fff
	dl 
		display: -webkit-flex
		padding-top: .1rem	
		align-items: center
		dt
			width: 50px
			height: 50px
			img
				width: 100%
				height: 100%	
		dd
			flex: 1
			padding-left: .12rem
			h3
				color: #000
				font-size: .14rem
			p
				margin-top: .1rem
				font-size: .13rem
.detail_info5
	padding: .1rem .12rem
	background: #fff
	margin-top: .12rem
	font-size: .14rem
	color: #000
	p
		position: relative
		span
			font-size: .15rem
		.right
			position: absolute
			right: 0
			font-size: .14rem
.detail_info6
	padding: .1rem
	margin-top: .12rem
	background: #fff
	.shop
		height: .35rem
		line-height: .35rem
		text-align: left
		font-size: .14rem
		color: #000
	.weixin
		width: auto
		height: auto
		img
			width: 100%
			height: 100%
	.descriptioin
		padding-top: .1rem
		width: auto
		height: auto
		img
			width: 100%
			height: 100%
.detail_info7
	height: auto
	background: #f6f6f6
	margin-bottom: 40px
	.detail_img
		width: auto
		height: auto
		img
			width: 100%
			height: 100%
	.detail_datas
		display: -webkit-flex
		flex-wrap: wrap
		width: 100%
		justify-content: space-between
		dl
			width: 49%
			background: #fff
			margin-bottom: 12px
			dt
				img
					width: 100%
					heiht: 100%
			dd
				padding-top: 10px
				padding-bottom: 10px
				h3
					font-size: 14px
					color: #999

					padding-left: .16rem
					padding-right: .16rem
					padding-bottom: 10px
				p
					font-size: 12px
					text-align: center
					color: #000


.foot
	height: .45rem
	line-height: .45rem
	display: -webkit-flex
	justify-content: space-between
	border-top: 1px solid #ccc
	 
	width: 100%
	p
		flex: 1
		i
			display: inline-block
			padding: 0 .14rem
			border-right: 1px solid #eee
	span
		width: 26%
		display: block
		text-align: center
		font-size: .14rem
	span:last-child
		background: #801a2a
		color: #fff

			
</style>	