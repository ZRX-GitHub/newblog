<template>
	<div id="D302005">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302005'}">流程控制</router-link>
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
							<catalog302></catalog302>
						</div>
					</el-drawer>

					<div class="catalog">
						<p class="text">目 &nbsp; 录</p>
						<catalog302></catalog302>
					</div>

				</div>


				<div class="data-classify-right">

					<div class="skip-top">

						<div class="previouPage">
							<div class="previouPage">
								<router-link :to="{name:'D302004'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">方法</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302006'}"><span class="span-txt">数组</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布时间：2020-11-20-3</span></p>
						<h1>流程控制</h1>
						<div>[TOC]</div>
						<h2>1、顺序结构</h2>
						<p>按顺序一步一步向下执行。</p>
						<p>&nbsp;</p>
						<h2>2、选择结构</h2>
						<p>按一定的条件进行执行（不重复执行）。</p>
						<h3>if</h3>
						<pre><code class="language-java" lang="java">if (条件) {
	语句;
}
else if (条件) {
    语句;
}
...
else {

}
</code></pre>
						<p>条件：true、a&gt;2、a==2……</p>
						<p>其中，if 后面的语句可根据需要曾减。</p>
						<h3>switch</h3>
						<pre><code class="language-java" lang="java">switch(条件) {
	case 常量1: 语句；break；
	case 常量2: 语句；break；
	case 常量3: 语句；break；
	...
	default: 语句;break;
}
</code></pre>
						<p>条件：true、a&gt;2、a==2……；</p>
						<blockquote>
							<p>条件：如a；</p>
							<p>常量1：如1；</p>
						</blockquote>
						<p>其中，case的顺序不是必须按顺序的，但建议按顺序；</p>
						<p>break根据需要增减。</p>
						<h2>3、循环结构</h2>
						<p>按一定的条件进行执行（重复执行）。</p>
						<p>&nbsp;</p>
						<h3>for</h3>
						<pre><code>for (表达式1;表达式2;表达式3) {
	表达式4;
}
</code></pre>
						<p><strong>PS：表达式4为语句。</strong></p>
						<p>表达式1、2、3的执行顺序：</p>
						<p><strong>表达式1&gt;&gt;表达式2&gt;&gt;表达式3</strong></p>
						<p>表达式1&gt;&gt;表达式4&gt;&gt;表达式2&gt;&gt;(满足：执行表达式3 -&gt; 产生<strong>新</strong> -&gt;
							表达式4。不满足：退出for循环)</p>
						<p>满足：表达式4&gt;&gt;表达式2&gt;&gt;(满足：执行表达式3 -&gt; 产生<strong>新</strong>-&gt; 表达式4。不满足：退出for循环)</p>
						<p>……</p>
						<p>&nbsp;</p>
						<h3>while</h3>
						<pre><code>while (条件) {
	语句;
}
</code></pre>
						<p>条件：true、a&gt;2、a==2……；<strong>条件</strong>为退出循环的要求。</p>
						<p>while 与 do while的区别，while循环次数&gt;=0（先判断条件，不满足要求，则无法进入循环），do
							while循环次数&gt;0（先进入循环，再进行条件判断）。</p>
						<h3>do while</h3>
						<pre><code>do {
	语句;
}while (条件);
</code></pre>
						<p>条件：true、a&gt;2、a==2……；<strong>条件</strong>为退出循环的要求。</p>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302004'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">方法</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302006'}"><span class="span-txt">数组</span> <img
								class="img-r"
								src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
								alt="右箭头">
							</router-link>
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

// import '../../../assets/utils/prism'

export default {
	name: "302005",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



