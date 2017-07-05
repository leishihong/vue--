<template lang="html">
<div id="ping">
	<div class="sum">共{{this.$route.query.sumId}}条评价</div>
	<div class="topReviews_buyer" v-for="lis in list_reviewID">
		<div class="topReviews_top">
			<dl>
				<dt>
					<img v-lazy="lis.Buyer.Avatar" alt="">
				</dt>
				<dd class="_names">{{lis.Buyer.NickName}}</dd>
				<dd>{{lis.CreateTime}}</dd>
			</dl>
		</div>
		<p>{{lis.BuyerNote}}</p>
		<ul v-if="list_reviewID.BuyerPicturesWebp==null">
			<li><img v-lazy="lis.BuyerPicturesWebp" alt=""></li>
		</ul>
	</div>
</div>
</template>
<script lang="babel">
	export default({
		data(){
			return{
				list_reviewID:[]
			}
		},
		created(){
			const productId = this.$route.query.productId
			console.log(productId)
			this._reviewID(productId)
		},
		methods:{
			_reviewID(productId){
				const sref = this
				this.$http.jsonp("http://m.haimi.com/api/review-product/list?page=1&pageSize=20&ProductID="+productId+"&platform=WAP",{jsonp:"_callback"})
				.then(function(res){
					sref.list_reviewID = res.body.data
					console.log(res.body.data)
				})
				.catch(function(err){
					console.log(err)
				})
			}
		}
		
	})
</script>
<style lang="sass">
#ping
	font-size: .16rem
.sum
	padding-left: .1rem
	height: .45rem
	line-height: .45rem
	color: #999
	font-size: .14rem
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

</style>