<template>
	<div>
		<div class="swiper-container banners" >
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for='(item,k) in banner' :key='k' v-if="banner.length!=1">
					<div class="icons">
        				<img v-if="item.picture" :src="item.picture"  />
        				<img v-else :src="item.PictureWebp"/>
					</div>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
export default {
    name: 'Swiper',
    props: [
    	"banner"
    	],
    data () {
      return {
         
      }
    },
    mounted(){
			const that = this
			 setTimeout(function(){
			 	that._banners()
			 },1000)
		},
	methods:{
		_banners(){
				new Swiper('.swiper-container',{
			          pagination: '.swiper-pagination',
			          paginationClickable: true,
			          loop:true,
			          autoplay:1000,
			          autoplayDisableOnInteraction: false,
			          observeParents: true
			      })
			}
	} 
  }
</script>
<style lang="sass">
.swiper-container 
	width: 100%
	height: 167px
.icons
	width: auto
	height: auto
	img 
		width: 100%
		height: 100%
</style>