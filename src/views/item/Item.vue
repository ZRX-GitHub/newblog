<template>
	<div id="Item">

		<div class="main">

			<span class="item-title">前端Web项目</span>
			<div class="items">

				<router-link :to="{name: 'I401001'}" class="item-web items-classify">
					<p>仿美团外卖页面</p>
					<el-image :src="itemWebIma1"></el-image>
				</router-link>

				<router-link :to="{name: 'I401002'}" class="item-web items-classify">
					<p>可编辑的通讯录</p>
					<el-image :src="itemWebIma2"></el-image>
				</router-link>

				<router-link :to="{name: 'I401003'}" class="item-web items-classify">
					<p>仿项目官网</p>
					<el-image :src="itemWebIma3"></el-image>
				</router-link>

				<router-link :to="{name: 'I401004'}" class="item-web items-classify">
					<p>Vue实现记事本</p>
					<el-image :src="itemWebIma4"></el-image>
				</router-link>

			</div>

			<span class="item-title">JavaWeb项目</span>
			<div class="items">
				<router-link :to="{name: 'I402001'}" class="item-java items-classify">
					<p>登录校验</p>
					<el-image :src="itemJavaIma4"></el-image>
				</router-link>
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
