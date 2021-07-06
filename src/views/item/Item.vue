<template>
	<div id="Item">

		<div class="main" >

			<span class="item-title">前端Web项目</span>
			<div class="items">
				<a class="item-web items-classify" href="./web/401/401001">仿美团外卖页面</a>
				<a class="item-web items-classify" href="./web/401/401002">可编辑的通讯录</a>
				<a class="item-web items-classify" href="./web/401/401003">仿项目官网</a>
				<a class="item-web items-classify" href="./web/401/401004">Vue实现记事本</a>
			</div>

			<span class="item-title">JavaWeb项目</span>
			<div class="items">
				<a class="item-java items-classify" href="./web/402/402001">登录校验</a>
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
			// BodyHeight: ''
		}
	}
	// created() {
	// 	this.BodyFun();
	// },
	// methods: {
	// 	BodyFun() {
	// 		// 127：nav 47和footer 80的高度和
	//
	// 		let clientHeight = document.documentElement.clientHeight - 127;
	// 		let mainHeight = document.getElementsByClassName('main')[0].clientHeight;
	//
	// 		if (this.BodyHeight < clientHeight) {
	// 			this.BodyHeight = clientHeight + 'px';
	//
	// 		} else {
	// 			this.BodyHeight = mainHeight + 'px';
	// 		}
	// 		// alert(this.BodyHeight)
	//
	// 	}
	// }

}
</script>

<style scoped src="../../assets/css/item.css"></style>
<style scoped src="../../assets/css/item-auto.css"></style>
