<template>
<div>
	<div class="_list">
		<router-link v-for="(l,k) in list" :key="k" :to="{path:'/recommend/activity',query:{ActivityID:l}}" tag="dl">
			<dt>
				<img :src="l.PictureWebp" alt="">
			</dt>
			<dd>{{l.SlideName}}</dd>
		</router-link>
	</div>
</div>
</template>
<script lang="babel">
	export default{
		data(){
			return{

			}
		},
		props:["list"]
	}
</script>
<style lang="sass" scoped>
._list
	background: #fff
	display: -webkit-flex
	justify-content: space-around
	margin-top: 14px
	font-size: 16px
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
</style>