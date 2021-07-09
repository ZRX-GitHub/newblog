<template>
	<div id="D301001">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D301001'}">PHP</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D301001'}">简介</router-link>
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
							<catalog301></catalog301>
						</div>
					</el-drawer>

					<div class="catalog">
						<p class="text">目 &nbsp; 录</p>
						<catalog301></catalog301>
					</div>

				</div>


				<div class="data-classify-right">

					<div class="skip-top">
						<div class="nextPage">
							<router-link :to="{name: 'D301002'}">
								<span class="span-txt">php留言板</span>
								<img class="img-r"
									 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									 alt="右箭头">
							</router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->
						<p style="margin-top: 10px;"></p>
						<span>PHP 是一种创建动态交互性站点的强有力的服务器端脚本语言。</span>
						<span>PHP 是免费的，并且使用广泛。对于像微软 ASP 这样的竞争者来说，PHP 无疑是另一种高效率的选项。</span>
						<div>
							<p><span>php示例代码：</span></p>
							<pre><code class="language-php" lang="php">
&lt!DOCTYPE php>
&ltphp>
&ltbody>

&lt?php
echo "我的第一段 PHP 脚本！";
?>

&lt/body>
&lt/php>
</code></pre>
							<h2><a name="什么是-php-文件" class="md-header-anchor"></a><span>什么是 PHP 文件？</span></h2>
							<ul>
								<li><span>PHP 文件能够包含文本、HTML、CSS 以及 PHP 代码</span></li>
								<li><span>PHP 代码在服务器上执行，而结果以纯文本返回浏览器</span></li>
								<li><span>PHP 文件的后缀是 &quot;&quot;</span></li>
							</ul>
							<p>&nbsp;</p>
							<h2><a name="php-能够做什么" class="md-header-anchor"></a><span>PHP 能够做什么？</span></h2>
							<ul>
								<li><span>PHP 能够生成动态页面内容</span></li>
								<li><span>PHP 能够创建、打开、读取、写入、删除以及关闭服务器上的文件</span></li>
								<li><span>PHP 能够接收表单数据</span></li>
								<li><span>PHP 能够发送并取回 cookies</span></li>
								<li><span>PHP 能够添加、删除、修改数据库中的数据</span></li>
								<li><span>PHP 能够限制用户访问网站中的某些页面</span></li>
								<li><span>PHP 能够对数据进行加密</span></li>
							</ul>
						</div>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="nextPage">
							<router-link :to="{name: 'D301002'}">
								<span class="span-txt">php留言板</span>
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
</template>

<style scoped src="../../../assets/css/data-classify-auto.css"></style>
<style scoped src="../../../assets/css/markdownpad-github.css"></style>
<style scoped src="../../../assets/css/prism.css"></style>
<style scoped src="../../../assets/css/prism-dark.css"></style>


<script>

// import Prism from 'prismjs';
import Prism from '../../../assets/js/prism';

export default {
	name: "301001",
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

