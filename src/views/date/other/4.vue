<template>
	<div id="Dother4">

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'Dother1'}">其它资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'Dother4'}">原码、反码、补码三者之间的关系</router-link>
			</div>

			<div class="main-content">

				<div class="data-classify-left">

					<el-button @click="drawer = true" type="primary" style="margin-left: 16px;background: #66B1FF"
							   id="app-catalog">
						目<br>录
					</el-button>

					<el-drawer
						title="目录"
						:visible.sync="drawer"
						:direction="direction"
						:size="widthSize"
						:show-close="false"
						id="app-catalog-text">
						<div class="catalog">
							<!--							<p class="text">目 &nbsp; 录</p>-->
							<catalogother></catalogother>
						</div>
					</el-drawer>

					<div class="catalog">
						<p class="text">目 &nbsp; 录</p>
						<catalogother></catalogother>
					</div>

				</div>


				<div class="data-classify-right">

					<div class="skip-top">
						<div class="previouPage">
							<router-link :to="{name:'Dother3'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span class="span-txt">树</span>
							</router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'Dother5'}"><span class="span-txt">idea快捷键</span> <img
								class="img-r" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
								alt="右箭头"></router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布时间：2020-11-20-4</span></p>
						<h1>原码、反码、补码三者之间的关系</h1>
						<p>在说明它们三者之间的关系之前，让我们先来了解一下怎么定义进制的表示。</p>
						<p>&nbsp;</p>
						<figure>
							<table>
								<thead>
								<tr>
									<th>常用</th>
									<th>二进制</th>
									<th>八进制</th>
									<th>十进制</th>
									<th>十六进制</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>范围</td>
									<td>0-1</td>
									<td>0-7</td>
									<td>0-9</td>
									<td>0-9，A-F</td>
								</tr>
								<tr>
									<td>前缀</td>
									<td>0b</td>
									<td>0o</td>
									<td>null</td>
									<td>0x</td>
								</tr>
								<tr>
									<td>后缀</td>
									<td>b</td>
									<td>o</td>
									<td>d</td>
									<td>h</td>
								</tr>
								</tbody>
							</table>
						</figure>
						<p>PS：不限制大小写。</p>
						<p>&nbsp;</p>
						<p>正数：[+1] = [0000 0001]原= [0000 0001]反= [0000 0001]补
							负数：[-1 ] = [10000001] 原= [11111110] 反= [11111111] 补</p>
						<h2>原码</h2>
						<p><strong>原码就是符号位加上真值的绝对值，</strong>即用第一位表示符号，其余位表示值。比如：<strong>8位二进制</strong>，第一位是符号位，因为第一位是符号位，所以8位二进制数的取值范围就是：即第一位不表示值，只表示正负。
						</p>
						<p>正数：[+1] = [0000 0001]原</p>
						<p>负数：[-1 ] = [1000 0001]原</p>
						<p>&nbsp;</p>
						<h2>反码</h2>
						<p>正数的反码是其本身；</p>
						<p>负数的反码是在其原码的基础上，符号位不变，其余各个位取反。</p>
						<p>正数：[+1] = [0000 0001]原= [0000 0001]反</p>
						<p>负数：[-1 ] = [1000 0001]原= [1111 1110]反</p>
						<p>&nbsp;</p>
						<h2>补码</h2>
						<p><strong>PS:负数在计算机内部是以补码形式存放的。</strong></p>
						<p>正数的补码就是其本身；</p>
						<p>负数的补码是在其原码的基础上，符号位不变，其余各位取反，最后+1。(也即在反码的基础上+1)</p>
						<p>正数：[+1] = [0000 0001]原= [0000 0001]反= [0000 0001]补</p>
						<p>负数：[-1 ] = [10000001] 原= [11111110] 反= [11111111] 补</p>
						<p>&nbsp;</p>
						<p>原码、反码、补码参考，转载自：<a href="https://zhuanlan.zhihu.com/p/91967268" target="_blank" class="url">https://zhuanlan.zhihu.com/p/91967268</a>
						</p>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'Dother3'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span class="span-txt">树</span>
							</router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'Dother5'}"><span class="span-txt">idea快捷键</span> <img
								class="img-r" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
								alt="右箭头"></router-link>
						</div>
					</div>

				</div>
			</div>
		</div>

	</div>
</template>


<style scoped src="../../../assets/css/data-classify-auto.css"></style>
<style scoped src="../../../assets/css/markdownpad-github.css"></style>
<style scoped src="../../../assets/css/prism.css"></style>
<style scoped src="../../../assets/css/prism-dark.css"></style>


<script>
export default {
	name: "4",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	},
	mounted() {
		Prism.highlightAll();
	}
}
</script>

<style scoped>

</style>
