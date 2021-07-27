<template>
	<div id="D302001">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">CMD执行Java程序</router-link>
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
						<div class="nextPage">
							<router-link :to="{name: 'D302001'}">
								<span class="span-txt">Java规则</span>
								<img class="img-r"
									 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									 alt="右箭头">
							</router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<h1>CMD执行java程序</h1>
						<h2>cmd简单切换</h2>
						<ol>
							<li>
								<p><strong>win+ r</strong>：打开cmd命令台，cmd打开默认进入C盘。&quot; E: &quot;,进入E盘根目录。</p>
								<pre><code class="language-cmd" lang="cmd">C:\Users\10119&gt;E:

E:\&gt;
</code></pre>
								<p>&nbsp;</p>
							</li>

						</ol>
						<ol start="2">
							<li>dir 打开当前目录下的文件夹(在知道文件夹的位置情况下可忽略)。</li>

						</ol>
						<ol start="3">
							<li>
								<p>选择你要的文件夹，比如：cd E:\XXX 进入程序xxx目录。</p>
								<pre><code class="language-cmd" lang="cmd">E:\&gt;cd E:\Java\2020-11-19\1

E:\Java\2020-11-19\1&gt;
</code></pre>
								<p>&nbsp;</p>
							</li>

						</ol>
						<p>&nbsp;</p>
						<h2>编译java程序</h2>
						<p><strong>java区分大小写</strong></p>
						<p>javac -encoding UTF-8 HelloWorld.java ，-encoding UTF-8：编译格式（“ 例如：UTF-8 ”）根据需要填写，<strong>要求要与系统的编码一致</strong>。</p>
						<p><strong>建议使用，可以避免更改掉系统的编码格式：</strong></p>
						<div class="dark-img"><img class="zooming" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201119170124425.png" referrerpolicy="no-referrer" alt="image-20201119170124425"></div>
						<pre><code class="language-cmd" lang="cmd">E:\Java\2020-11-19\1&gt;javac HelloWorld.java

E:\Java\2020-11-19\1&gt;
</code></pre>
						<p>&nbsp;</p>
						<h2>运行java程序</h2>
						<p>java HelloWorld</p>
						<pre><code class="language-cmd" lang="cmd">E:\Java\2020-11-19\1&gt;java HelloWorld
hello world

E:\Java\2020-11-19\1&gt;
</code></pre>


						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="skip-top">
							<div class="nextPage">
								<router-link :to="{name: 'D302001'}">
									<span class="span-txt">Java规则</span>
									<img class="img-r"
										 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
										 alt="右箭头">
								</router-link>
							</div>
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

// import Prism from 'prismjs';
import Prism from '../../../assets/js/prism';

export default {
	name: "302001",
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

