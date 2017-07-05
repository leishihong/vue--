<template>
	<div class="brand">
		<h3>{{brands.Name}}</h3>
		<div class="brand_list">
			<div class="left">
				<p><img :src="brands1[0].PictureWebp" alt=""></p>
				<p><img :src="brands1[1].PictureWebp" alt=""></p>
			</div>
			<div class="right">
				<p><img :src="brands1[2].PictureWebp" alt=""></p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		props:[
			"brands",
			"brands1"
		]
	}
</script>
<style lang="sass">
	.brand_list
		font-size: 16px
</style>