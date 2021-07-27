<template>
	<div id="D302002">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302002'}">Java规则</router-link>
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
								<router-link :to="{name:'D302001'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">CMD执行Java程序</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302003'}"><span class="span-txt">运算符</span> <img class="img-r"
																										   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
																										   alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<h1>Java规则</h1>
						<h2>数据类型分类</h2>
						<p>Java的数据类型分为两大类：</p>
						<ul>
							<li><strong>基本数据类型</strong>：包括 整数、浮点数、字符、布尔。</li>
							<li><strong>引用数据类型</strong>：包括 类、数组、接口。</li>

						</ul>
						<h2>基本数据类型</h2>
						<p>四类八种基本数据类型：</p>
						<figure>
							<table>
								<thead>
								<tr>
									<th>数据类型</th>
									<th>关键字</th>
									<th>内存占用</th>
									<th>取值范围</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>字节型</td>
									<td>byte</td>
									<td>1个字节</td>
									<td>-128~127</td>
								</tr>
								<tr>
									<td>短整型</td>
									<td>short</td>
									<td>2个字节</td>
									<td>-32768~32767</td>
								</tr>
								<tr>
									<td>整型</td>
									<td>int(默认)</td>
									<td>4个字节</td>
									<td>-2的31次方~2的31次方-1</td>
								</tr>
								<tr>
									<td>长整型</td>
									<td>long</td>
									<td>8个字节</td>
									<td>-2的63次方~2的63次方-1</td>
								</tr>
								<tr>
									<td>单精度浮点型</td>
									<td>float</td>
									<td>4个字节</td>
									<td>1.4013E-45~3.4028E+38</td>
								</tr>
								<tr>
									<td>双精度浮点型</td>
									<td>double(默认)</td>
									<td>8个字节</td>
									<td>4.9E-324~1.7977E+308</td>
								</tr>
								<tr>
									<td>字符型</td>
									<td>char</td>
									<td>2个字节</td>
									<td>0-65535</td>
								</tr>
								<tr>
									<td>布尔类型</td>
									<td>boolean</td>
									<td>1个字节</td>
									<td>true，false</td>
								</tr>
								</tbody>
							</table>
						</figure>
						<blockquote>
							<p>Java中的默认类型：整数类型是<code>int</code> 、浮点类型是<code>double</code>。</p>
						</blockquote>
						<p>数值：</p>
						<ol start="">
							<li>整数类型(4种)：长整型（long 8字节）、整型（int 4字节）、短整型（short 2字节）、字节整型（byte 1字节）；</li>
							<li>浮点类型(2种)：double（8 字节）、float（4字节）。</li>

						</ol>
						<p>非数值：</p>
						<ol start="">
							<li>基本类型：布尔类型（boolean）、字符类型（char）；</li>
							<li>引用类型：字符串（String，用于面向对象）。</li>

						</ol>
						<p>&nbsp;</p>
						<h2>关键字</h2>
						<ul>
							<li>数据类型：boolean、int、long、short、byte、float、double、char、class、interface。</li>
							<li>流程控制：if、else、do、while、for、switch、case、default、break、continue、return、try、catch、finally。
							</li>
							<li>
								修饰符：public、protected、private、final、void、static、strict、abstract、transient、synchronized、volatile、native。
							</li>
							<li>动作：package、import、throw、throws、extends、implements、this、supper、instanceof、new。</li>
							<li>保留字：true、false、null、goto、const。</li>

						</ul>
						<p>&nbsp;</p>
						<h2>标识符</h2>
						<p><strong>（区分大小写）</strong></p>
						<p>命名规则：</p>
						<ul>
							<li>不能是关键字；</li>
							<li>标识符由数字（0~9）和字母（A~Z 和 a~z）、美元符号（$）、下划线（_）；</li>
							<li>标识符的<strong>第一个符号只能是</strong>字母、下划线和美元符号，后面可以是任何字母、数字、美元符号或下划线。</li>

						</ul>
						<p>命名规范：</p>
						<ul>
							<li><strong>类名</strong>规范：首字母大写，后面每个单词首字母大写（大驼峰式）-&gt; HelloWorld；</li>

						</ul>
						<pre><code class="language-java" lang="java">public class HelloWorld {
	public static void main(String[] args) {

	}
}
</code></pre>
						<p>&nbsp;</p>
						<ul>
							<li><strong id="method">方法名</strong>规范：首字母小写，后面每个单词首字母大写（小驼峰式）-&gt; helloWold；</li>

						</ul>
						<pre><code class="language-java" lang="java">static int helloWold (int x, int y) {
	b = x * y;
	return a;
}
</code></pre>
						<p>&nbsp;</p>
						<ul>
							<li><strong>变量名</strong>规范：全部小写。</li>

						</ul>
						<pre><code class="language-java" lang="java">int a;
float b;
double c;
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">

						<div class="previouPage">
							<div class="previouPage">
								<router-link :to="{name:'D302001'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">CMD执行Java程序</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302003'}"><span class="span-txt">运算符</span> <img class="img-r"
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

// import '../../../assets/utils/prism'

export default {
	name: "302002",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



