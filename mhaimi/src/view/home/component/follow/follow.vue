<template>
	<div class="follow">
		<p v-for='f in follow'><img v-lazy="f.PictureWebp" alt=""></p>
		<div id="iscroller1">
			<div class="follow_list">
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
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		props:[
			"follow",
			"follow1"
			]
	}
</script>
<style lang="sass">
#iscroller1
	width: 100%
	overflow-x: auto
	.follow_list
		width: 100%
		height: 100%	
		display: -webkit-box
		justify-content: space-between	
</style>