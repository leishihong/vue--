<template>
	<div>
		<div class="conten">
			<m-header></m-header>
			<m-tab></m-tab>
			<router-view></router-view>
		</div>
		<m-footer class="foots"></m-footer>
	</div>
</template>
<script>
	import Foot from '@/components/public/Foot'
	import Heade from '@/components/public/header'
	import HeadNav from '@/view/home/component/headTab/tab'
	export default {
    name: 'home',
    components: {
      "m-footer": Foot,
      "m-header": Heade,
      "m-tab":HeadNav
    }
  }
</script>
<style lang="sass">

.conten
	overflow-y: auto
div
	width: 100%
.foots
	height: .45rem 
</style>