<template>
	<div id="D302009">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302009'}">抽象类</router-link>
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
								<router-link :to="{name:'D302008'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">封装类</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302010'}"><span class="span-txt">接口类</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-11-27-1</span></p>
						<h1>抽象类</h1>
						<p>在面向对象的概念中，所有的对象都是通过类来描绘的，但是反过来，并不是所有的类都是用来描绘对象的，如果一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。</p>
						<p>抽象类除了不能实例化对象之外，类的其它功能依然存在，成员变量、成员方法和构造方法的访问方式和普通类一样。</p>
						<p>由于抽象类不能实例化对象，所以抽象类必须被继承，才能被使用。也是因为这个原因，通常在设计阶段决定要不要设计抽象类。</p>
						<p>父类包含了子类集合的常见的方法，但是由于父类本身是抽象的，所以不能使用这些方法。</p>
						<p>在Java中抽象类表示的是一种继承关系，一个类只能继承一个抽象类，而一个类却可以实现多个接口。</p>
						<p>&nbsp;</p>
						<p>
							抽象<strong>abstract</strong>，仅可以使用在方法和类中，其中①类可以单独加上，方法可以不使用。②如果是方法使用了抽象<strong>abstract</strong>
							，类也必须加上（在使用了抽象的类中）。</p>
						<p>①</p>
						<pre><code class="language-java" lang="java">public abstract class Test1 {

}
</code></pre>
						<p>②</p>
						<pre><code class="language-java" lang="java">package Test1;

public abstract class Test1 {  // 类上也必须加上

    public abstract void dog();  // 使用了abstract
    // 1、父类无法通过行为来描述
    // 2、为了让子类去重写该方法（必须），否则子类也必须抽象化
}
</code></pre>
						<p>&nbsp;</p>
						<h3><strong>使用了抽象类</strong></h3>
						<p>不能和以往一样正常使用，可以通过 #1 来使用</p>
						<blockquote>
							<p>父类：不能创建对象（不能实例化），编译器会提示错误。</p>
							<p>子类：可以创建对象。</p>
						</blockquote>
						<p>&nbsp;</p>
						<h3><strong>main方法中调用</strong> #1</h3>
						<p>可以通过<strong>匿名内部类</strong>来调用，注意分号。</p>
						<ol start="">
							<li>创建抽象类对象的时候；</li>
							<li>创建接口的实现类对象的时候。</li>

						</ol>
						<pre><code class="language-java" lang="java">// 只允许使用一次
Test1 test = new Test1() {
	@Override
	public void cat() {

	}
};
</code></pre>
						<p>&nbsp;</p>
						<h3>总结</h3>
						<ol>
							<li>抽象类不能被实例化(初学者很容易犯的错)，如果被实例化，就会报错，编译无法通过。只有抽象类的非抽象子类可以创建对象；</li>
							<li>抽象类中不一定包含抽象方法，但是有抽象方法的类必定是抽象类；</li>
							<li>抽象类中的抽象方法只是声明，不包含方法体，就是不给出方法的具体实现也就是方法的具体功能；</li>
							<li>构造方法，类方法（用 static 修饰的方法）不能声明为抽象方法；</li>
							<li>抽象类的子类必须给出抽象类中的抽象方法的具体实现，除非该子类也是抽象类。</li>
						</ol>
						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302008'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">封装类</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302010'}"><span class="span-txt">接口类</span> <img
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
	name: "302009",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



