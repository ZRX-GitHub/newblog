<template>
	<div>
		<router-link class="chapter" :to="{name: 'Dother1'}">windows系统安装</router-link>
		<router-link class="chapter" :to="{name: 'Dother2'}">通信原理期末考试资料</router-link>
		<router-link class="chapter" :to="{name: 'Dother3'}">树</router-link>
		<router-link class="chapter" :to="{name: 'Dother4'}">原码、反码、补码三者之间的关系</router-link>
		<router-link class="chapter" :to="{name: 'Dother5'}">idea快捷键</router-link>
	</div>
</template>

<script>
export default {
	name: "data-classify-catalog-other"
}
</script>

<style scoped src="../../../assets/css/data-classify-auto.css"></style>
