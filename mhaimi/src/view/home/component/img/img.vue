<template>
	<div>
		<div class="imgs" v-if="img1.length>0 && img2.length>0">
			<p v-for="j in img1"><img :src="j.PictureWebp" alt=""></p>
			<p v-for="o in img2"><img :src="o.PictureWebp" alt=""></p>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		props:[
			"img1",
			"img2"
		]
	}
</script>
<style lang="sass">
.imgs
	font-size: 16px
	p
		img
			width: 100%
			height: 100%
	p:nth-child(1)
		margin-bottom: 14px
</style>