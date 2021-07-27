<template>
	<div id="D302010">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302010'}">接口类</router-link>
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
								<router-link :to="{name:'D302009'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">抽象类</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302011'}"><span class="span-txt">多态类</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-11-27-2</span></p>
						<h1>接口</h1>
						<p>接口（英文：Interface），在JAVA编程语言中是一个抽象类型，是抽象方法的集合，接口通常以interface来声明。一个类通过继承接口的方式，从而来继承接口的抽象方法。</p>
						<p>接口并不是类，编写接口的方式和类很相似，但是它们属于不同的概念。类描述对象的属性和方法。接口则包含类要实现的方法。</p>
						<p>除非实现接口的类是抽象类，否则该类要定义接口中的所有方法。</p>
						<p>接口无法被实例化，但是可以被实现。一个实现接口的类，必须实现接口内所描述的所有方法，否则就必须声明为抽象类。另外，在 Java
							中，接口类型可用来声明一个变量，他们可以成为一个空指针，或是被绑定在一个以此接口实现的对象。</p>
						<p>&nbsp;</p>
						<h3>接口与类相似点</h3>
						<ul>
							<li>一个接口可以有多个方法；</li>
							<li>接口文件保存在 .java 结尾的文件中，文件名使用接口名；</li>
							<li>接口的字节码文件保存在 .class 结尾的文件中；</li>
							<li>接口相应的字节码文件必须在与包名称相匹配的目录结构中。</li>

						</ul>
						<h3>接口与类的区别</h3>
						<ul>
							<li>接口不能用于实例化对象；</li>
							<li>接口没有构造方法；</li>
							<li>接口中所有的方法必须是抽象方法；</li>
							<li>接口不能包含成员变量，除了 static 和 final 变量；</li>
							<li>接口不是被类继承了，而是要被类实现；</li>
							<li>接口支持多继承。</li>

						</ul>
						<p>&nbsp;</p>
						<p>接口是一个更彻底的抽象化-》点击查看抽象类</p>
						<p><em>方法里面的public可以不写，默认也是public</em></p>
						<pre><code class="language-java" lang="java">package Test1;

public interface IUsb {
}

</code></pre>
						<p>接口类里面不允许定义<strong>私有化(private)</strong>的变量。</p>
						<pre><code class="language-java" lang="java">public static final int AGE = 12；
// 必须一次性初始化，变量为》》常量
// AGE 永远等于12
// 即使不写，也可以，因为默认存在public static final
</code></pre>
						<pre><code class="language-java" lang="java">package Test1;

public interface IUsb {
    public static void mothod() {

    }
}
// 即使不写，也可以，因为默认存在public static
</code></pre>
						<p>&nbsp;</p>
						<h3>接口和接口的关系</h3>
						<p>可以多继承</p>
						<pre><code class="language-java" lang="java">package Test1;

public interface IUpan extends  IUsb, IDdemo {  // 接口继承接口，可以多继承

}
</code></pre>
						<p>&nbsp;</p>
						<h3>类和接口的关系</h3>
						<p>可以多继承</p>
						<pre><code class="language-java" lang="java">package Test1;

public class Dog implements IUsb { // 可以多继承

    @Override
    public int getValue() {
        return 0;
    }
}
</code></pre>
						<p>&nbsp;</p>
						<h3>default关键字</h3>
						<p>没有次数限制</p>
						<pre><code class="language-java" lang="java">public default void fly() {
        System.out.println(&quot;飞行！&quot;);
}
</code></pre>

						<p>也可以参考下面这篇文章，将得很清楚。</p>
						<a href="https://jingyan.baidu.com/article/1e5468f95212a0484961b7ff.php" target="_blank">https://jingyan.baidu.com/article/1e5468f95212a0484961b7ff.php</a>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302009'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">抽象类</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302011'}"><span class="span-txt">多态类</span> <img
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
	name: "302010",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



