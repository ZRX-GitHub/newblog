<template>
	<div id="Item">

		<div class="main" >

			<span class="item-title">前端Web项目</span>
			<div class="items">
				<a class="item-web items-classify" href="./item/web/401/401001">
					<p>仿美团外卖页面</p>

					<el-image :src="itemWebIma1"></el-image>
				</a>
				<a class="item-web items-classify" href="./item/web/401/401002">
					<p>可编辑的通讯录</p>
					<el-image :src="itemWebIma2"></el-image>
				</a>
				<a class="item-web items-classify" href="./item/web/401/401003">
					<p>仿项目官网</p>
					<el-image :src="itemWebIma3"></el-image>
				</a>
				<a class="item-web items-classify" href="./item/web/401/401004">
					<p>Vue实现记事本</p>
					<el-image :src="itemWebIma4"></el-image>
				</a>
			</div>

			<span class="item-title">JavaWeb项目</span>
			<div class="items">
				<a class="item-java items-classify" href="./item/web/402/402001">
					<p>登录校验</p>
					<el-image :src="itemJavaIma4"></el-image>
				</a>
				<!-- <a class="item-java items-classify">2</a> -->
				<!-- <a class="item-java items-classify">3</a> -->
			</div>

		</div>

		<my-footer></my-footer>

	</div>
</template>

<script>
export default {
	name: "Item",
	data() {
		return {
			itemWebIma1: require('../../assets/images/meituan.png'),
			itemWebIma2: require('../../assets/images/tongxunlv.png'),
			itemWebIma3: require('../../assets/images/fangguanwang.png'),
			itemWebIma4: require('../../assets/images/jishiben.png'),
			itemJavaIma4: require('../../assets/images/denglu.png'),

		}
	}

}
</script>

<style scoped src="../../assets/css/item-auto.css"></style>
