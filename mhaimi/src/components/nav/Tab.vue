<template lang="html">
	<div id="iscroll" class="nav">
			<ul class="datas">
				<router-link v-for='(v,k) in tabs' :key="k" :to="{path:'/home/recommend?NavID=2',query:{NavID:v.NavID}}" tag="li" >{{v.Title}}</router-link>
			</ul>
	</div>
</template>
<script lang="babel">
	import IScroll from '../../../static/public/iscroll.js'
 export default ({
 	data () {
 		return {
 			tabs: []
 		}
 	},
 	created () {
 		this._getTab()
 	},
 	mounted(){
 		// this._IScroll()
 	},
 	methods: {
 		_getTab () {
 			const sref = this
 			this.$http.jsonp("http://m.haimi.com/api/nav/list?platform=WAP",{jsonp:"_callback"})
                .then(function(res){
                	console.log(res)
                 sref.tabs=res.body.data
                })
 		}
 		// _IScroll(){
 		// 	new IScroll("#iscroll",{
 		// 		scrollX:false
 		// 	})
 		// }
 	}
 })
</script>
<style lang="sass" scoped>
.nav
	padding-left: .1rem
	padding-right: .1rem
	background: #fff
	box-sizing: border-box
	border-bottom: 1px solid #ccc
	width: 100%
	overflow-x: auto
	.datas
		width: 100%
		height: 100%
		display: -webkit-box
		li
			font-size: .14rem
			margin: 0 .12rem 0 .12rem
			box-sizing: border-box
			height: .4rem
			line-height: .38rem
		.router-link-exact-active
			border-bottom: 2px solid #000
</style>