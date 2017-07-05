<template>
	<div class="things">
		<h3>{{things.Name}}</h3>
		<div class="things_list" >
			<ul>
				<li v-for="t in things1">
					<img :src="t.PictureWebp" alt="">
				</li>
			</ul>
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
			"things",
			"things1"
		]
	}
</script>
<style>
	
</style>