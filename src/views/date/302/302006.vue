<template>
	<div id="D302006">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302006'}">数组</router-link>
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
								<router-link :to="{name:'D302005'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">流程控制</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302007'}"><span class="span-txt">继承类</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布时间：2020-11-23-2</span></p>
						<h1>数组</h1>
						<h2>数值的定义</h2>
						<p>类型[] 数组名 = new 类型[]；</p>
						<pre><code class="language-java" lang="java">// 例如：
int[] arr = new int[5];  // 0~4
</code></pre>
						<p>类型要前后一致；</p>
						<p>new：在堆中开辟空间，开辟多大的空间（new后面的 “类型[]”，“[]”中填数字）；</p>
						<p>数组名：存储开辟的内存空间的内存首地址，数值是一个连续的空间。</p>
						<p>&nbsp;</p>
						<h2>数组下标（索引）</h2>
						<p>从0开始，通过数组名来获取下标（索引）。</p>
						<pre><code class="language-java" lang="java">for (int i=0; i &lt; arr.length; i++) {
	System.out.println(arr[i]);
}
</code></pre>
						<p>等同</p>
						<pre><code>// 简写
for (int i : arr) {
	System.out.println(arr[i]);
}
</code></pre>
						<p>只要在堆中开辟空间，都会有默认值。</p>
						<pre><code class="language-cmd" lang="cmd">0
0
0
0
0

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h2>数组赋值</h2>
						<h5>1.指定空间进行赋值</h5>
						<pre><code>arr[2] = 11;
</code></pre>
						<h5>2.开辟空间进行赋值</h5>
						<pre><code class="language-java" lang="java">int[] arr2 = {11, 22, 33}  // 0：11，1：22，2：33
</code></pre>
						<p>等同</p>
						<pre><code>int[] arr2;
arr2 =new int[]{11, 22, 33};  // 0：11，1：22，2：33
</code></pre>
						<p>等同</p>
						<pre><code class="language-java" lang="java">int[] arr2 = {11, 22, 33}  // 0：11，1：22，2：33
</code></pre>
						<p>&nbsp;</p>
						<h2>排序</h2>
						<h5>冒泡</h5>
						<ol start="">
							<li>比较相邻的元素。如果第一个比第二个大，就交换他们两个；</li>
							<li>对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数；</li>
							<li>针对所有的元素重复以上的步骤，除了最后一个；</li>
							<li>持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。</li>

						</ol>
						<p>&nbsp;</p>
						<h5>插入排序</h5>
						<ol start="">
							<li>从数组的第二个数据开始往前比较，即一开始用第二个数和他前面的一个比较，如果符合条件（比前面的大或者小，自定义），则让他们交换位置；</li>
							<li>然后再用第三个数和第二个比较，符合则交换，但是此处还得继续往前比较，比如有5个数<code>8，15，20，45, 17</code>,17比45小，需要交换，但是17也比20小，也要交换，当不需要和15交换以后，说明也不需要和15前面的数据比较了，肯定不需要交换，因为前
								面的数据都是有序的；
							</li>
							<li>重复步骤二，一直到数据全都排完。</li>

						</ol>
						<p>&nbsp;</p>
						<h5>选择排序</h5>
						<p>选择排序是不稳定的排序方法。</p>
						<ol start="">
							<li>第一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置；</li>
							<li>再从剩余的未排序元素中寻找到最小（大）元素，然后放到已排序的序列的末尾；</li>
							<li>以此类推，直到全部待排序的数据元素的个数为零。</li>
						</ol>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302005'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">流程控制</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302007'}"><span class="span-txt">继承类</span> <img
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
	name: "302006",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



