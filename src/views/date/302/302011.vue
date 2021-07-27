<template>
	<div id="D302011">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302011'}">多态类</router-link>
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
								<router-link :to="{name:'D302010'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">接口类</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302012'}"><span class="span-txt">-- 预留12~20 --</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-11-27-3</span></p>
						<h1>多态</h1>
						<p>Java的三大特性（什么时候用）：<strong>封装</strong>是 Java 类的编写规范、<strong>继承</strong>是类与类之间联系的一种形式、而<strong>多态</strong>为系统组件或模块之间解耦提供了解决方案。
						</p>
						<p>&nbsp;</p>
						<p><strong>定义</strong></p>
						<p>多态是同一个行为具有多个不同表现形式或形态的能力。</p>
						<p>&nbsp;</p>
						<p><strong>优点</strong></p>
						<ol>
							<li>消除类型之间的耦合关系</li>

						</ol>
						<ol start="2">
							<li>可替换性</li>

						</ol>
						<ol start="3">
							<li>可扩充性</li>

						</ol>
						<ol start="4">
							<li>接口性</li>

						</ol>
						<ol start="5">
							<li>灵活性</li>

						</ol>
						<ol start="6">
							<li>简化性</li>

						</ol>
						<h3>多态存在的三个必要条件</h3>
						<ul>
							<li>
								<p>继承</p>
							</li>
							<li>
								<p>重写</p>
							</li>
							<li>
								<p>父类引用指向子类对象：Parent p = new Child();</p>
								<p>&nbsp;</p>
							</li>

						</ul>
						<p>当使用多态方式调用方法时，首先检查父类中是否有该方法，如果没有，则编译错误；如果有，再去调用子类的同名方法。</p>
						<p><strong>好处</strong>：可以使程序有良好的扩展，并可以对所有类的对象进行通用处理。</p>
						<p>&nbsp;</p>
						<h3>转型</h3>
						<p>向下、向上转型，请参考以下链接。</p>
						<p><a href="https://www.cnblogs.com/lifexy/p/10812841.php" target="_blank" class="url">https://www.cnblogs.com/lifexy/p/10812841.php</a>
						</p>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302008'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">抽象类</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302010'}"><span class="span-txt">多态类</span> <img
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
	name: "302011",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



