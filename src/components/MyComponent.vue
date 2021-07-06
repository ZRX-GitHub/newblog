<template>
	<div>
		<div id="myBackTop" class="myBackTop el-icon-caret-top"
			 v-on:click="myBackTop"
			 ></div>
	</div>
</template>

<script>
// 大于当前滚动条长度大于400，出现返回顶部的按钮
// window.onscroll = function () {
// 	document.getElementById("myBackTop").style.display = (document.body.scrollTop || document.documentElement.scrollTop) > 400 ? "block" : "none";
// };

export default {


	mounted() {
		this.nowMyBackTop();
	},

	methods: {
		nowMyBackTop() {
			window.onscroll = function () {
				if (document.getElementById("myBackTop")) {
					document.getElementById("myBackTop").style.display = (document.body.scrollTop || document.documentElement.scrollTop) > 400 ? "block" : "none";
				}
			};
			// document.getElementById("myBackTop").style.display = (document.body.scrollTop || document.documentElement.scrollTop) > 400 ? "block" : "none";
		},

		myBackTop() {
			// 监测鼠标滚轮状态，tag为true时为滚轮向下滚动，中断回到顶部
			let tag = false;
			document.addEventListener('wheel', moveWheel, false);

			function moveWheel(e) {
				let timerWheel = null;
				e = window.event;
				if (e.wheelDelta < 0) {
					// console.log('鼠标滚轮向下滚动');
					tag = true;
				}
				// 滚轮停止不动200ms后tag为false，变回默认状态
				clearTimeout(timerWheel);
				setTimeout(() => {
					tag = false;
				}, 200);
			};

			let timer = setInterval(function () {
				//获取滚动条的滚动高度
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				//用于设置速度差，产生缓动的效果
				var speed = Math.floor(-scrollTop / 8);
				document.documentElement.scrollTop = document.body.scrollTop = scrollTop + speed;//用纯数字赋值
				// isTop = true;  //用于阻止滚动事件清除定时器
				if (scrollTop === 0 || tag) {
					clearInterval(timer);
				}
			}, 20);
		}
	}

}

</script>

<style scoped>
.myBackTop {
	width: 40px;
	height: 40px;
	border-radius: 10px;
	float: right;
	cursor: pointer;
	text-align: center;
	line-height: 40px;
	background-color: #f2f5f6;
	color: #FFBA14;
	box-shadow: 0 0 6px gray;
	position: fixed;
	bottom: 60px;
	right: 20px;
	z-index: 99;
	display: none;
}

.myBackTop:hover {
	background-color: #FFBA14;
	color: #f2f5f6;
}
</style>
