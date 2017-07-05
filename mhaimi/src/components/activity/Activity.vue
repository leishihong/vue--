<template lang="html">
	<div id="activity">
		<div class="activity_top">
			<img v-lazy="list_activityDetail.Banner" alt="">
		</div>
		<div class="activity_datas">
			<dl v-for="i in list_specials">
				<dt>
					<img v-lazy="i.PicturesThumb" alt="">
					
				</dt>
				<dd class="_icons">用劵</br>减10</dd>
				<dd>
					<h3 class="text-nobr">{{i.Subject}}</h3>
					<p>{{i.SecondSubject}}</p>
					<div class="activity_info">
						<i class="xiang"></i><div><span>￥</span><b>{{i.FinalPrice}}</b></div>
					</div>
				</dd>
			</dl>
		</div>
	</div>
</template>
<script lang="babel">
	export default({
		data(){
			return{
				list_activityDetail:[],
				list_specials:[]
			}
		},
		created(){
			const ActivityID = this.$route.query.ActivityID
			console.log(ActivityID)
			this._activity(ActivityID)
		},
		methods:{
			_activity(ActivityID){
				const sref = this
				this.$http.jsonp("http://www.haimi.com/api/promotion/activity-products-cdn?_callback=doSuccess2&ActivityID=1077&pageSize=40",{jsonp:"_callback"})
				.then(function(res){
					sref.list_activityDetail = res.body.data.activityDetail
					sref.list_specials = res.body.data.Specials[0].Products
				})
				.catch(function(err){
					console.log(err)
				})
			}
		}
	})
</script>
<style lang="sass">
	#activity
		font-size: .16rem
		background: #f6f6f6
	.activity_top
		width: auto
		height: auto
		img
			width: 100%
			height: 100%
	.activity_datas
		padding: .14rem .1rem
		box-sizing: border-box
		dl
			width: 100%
			margin-bottom: .12rem
			background: #fff
			border: 1px solid #eee
			border-radius: 10px
			display: -webkit-flex
			padding: .1rem
			box-sizing: border-box
			position: relative
			dt
				flex: 0 0 1.2rem
				width: 1.2rem
				height: 1.2rem
				
				img
					width: 100%
					height: 100%
			
			dd
				flex: 1
				padding-left: .12rem
				box-sizing: border-box
				h3
					width: 200px
					font-size: .16rem
					height: .35rem
					line-height: .35rem
					white-space: nowrap
					overflow: hidden
					text-overflow: ellipsis
				p
					width: 150px
					color: #999
					font-size: .12rem
					padding-top: .05rem
					white-space: nowrap
					overflow: hidden
					text-overflow: ellipsis
				.activity_info
					padding-top: .25rem
					text-align: right
					display: -webkit-flex
					justify-content: space-between
					align-items: center
					b
						font-size: .24rem
					span
						font-size: 16px

					.xiang
						background: url("http://img.haimi.com/Fodwf3ZSFlsKKWphQD4P_BCJvyw0") left bottom no-repeat
						background-size: 100% 100%
						display: inline-block
						width: .8rem
						height: .24rem

				    
			._icons
			   	display: inline-block
			    background: url(http://img.haimi.com/FptCz4tH4XADfCSIEMzEQwCaZWUT) no-repeat
			    background-size: 100%
			    font-size: .1rem
			    color: #fff
			    text-align: left
			    font-style: normal
			    position: absolute
			    width: .4rem
			    height: .6rem
			    top: 0
			    left: .1rem
</style>