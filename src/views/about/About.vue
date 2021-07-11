<template>
	<div id="About" >
		<div class="main" v-bind:style="{height:BodyHeight}">
			<div class="about">

				<div class="conceive">
					<p>Conceive：</p>
					<ol>
						<li>资料模块的资料分类，鼠标移上在有省略号代替的区域时，全显示出来(置于顶层)。</li>
					</ol>
				</div>

				<div class="update">
					<p>Update：</p>
					<ol>
						<li>正式使用vue；</li>
						<li>引入语法高亮框架(prism.css、prism.js)，官网：<a href="https://prismjs.com/" target="_blank">https://prismjs.com/</a>。
						</li>
					</ol>

				</div>

				<div class="point">
					<p>Bug/Fixed：</p>

					<ol>
						<li>兼容性问题：没有考虑过兼容性问题，所以浏览器可能会出现部分兼容性问题导致无法正常显示某些样式等。</li>
						<li>travel页面地图的footer样式小bug有待修复：已修复。</li>
						<li>切换至暗夜模式时，图片底部会出现图片区域外黑色长条：已修复；</li>
						<li>点击资料模块的（1，0）小模块，该模块会挤动整个大模块向下延伸：已修复。</li>
						<li>原生H5视频播放器存在适配问题，暂不进行优化。</li>
						<li>文本溢出，省略号代替。简单的css写法存在兼容性问题。待后期修复。</li>
						<li>bulid页面的右标签资料模块存在溢出问题，已修复。</li>
						<li>目前发现>>>360浏览器存在严重的兼容性问题。<<<</li>
					</ol>
				</div>

				<br>
				<p>网站将不定期更新内容、升级优化代码。</p>
				<p>联系方式①在经典位置。</p>
			</div>
		</div>


		<my-footer></my-footer>

	</div>
</template>


<script>
export default {
	name: "About",
	data() {
		return {
			BodyHeight: ''
		}
	},
	created() {
		this.BodyFun();
	},
	methods: {
		BodyFun() {
			// 127：nav 47和footer 80的高度和
			let aboutHeight = document.getElementById("About").clientHeight;
			let appHeight = document.documentElement.clientHeight;

			if (aboutHeight < appHeight) {
				this.BodyHeight = (appHeight - 127) + 'px';
			} else {
				this.BodyHeight = ''
			}

			// this.BodyHeight = (document.documentElement.clientHeight -127) + 'px';
			// this.BodyHeight = (document.documentElement.clientHeight) + 'px';

			// alert(this.BodyHeight);
		}

	}

}
</script>

<style scoped>@import "../../assets/css/about.css";</style>
