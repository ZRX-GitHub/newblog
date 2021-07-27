<template>
	<div id="D302004">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302004'}">方法</router-link>
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
								<router-link :to="{name:'D302003'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">运算符</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302005'}"><span class="span-txt">流程控制</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布时间：2020-11-20-2</span></p>
						<h1>方法</h1>
						<div>[TOC]</div>
						<p>&nbsp;</p>
						<h2>1.方法定义</h2>
						<p>访问修饰符 返回值类型（void、int、float、String...）方法名(参数，参数...) {</p>
						<p> 代码...</p>
						<p> return xx；</p>
						<p>}</p>
						<ul>
							<li>访问修饰符 ：public static；</li>
							<li>返回值类型：没有返回值类型，使用void；有返回值类型，就使用 如 int；</li>
							<li>方法名：定义请点击链接<a href="https://zrxsky.top/demo/data/302/302002.php#method">Java规则
								(zrxsky.top)</a>；
							</li>
							<li>参数：可设置无，也可以设置有。</li>
							<li>return xx：根据需要填写，也可能不需要填写return。</li>

						</ul>
						<pre><code class="language-java" lang="java">public class Test {
    public static void main(String[] args) {

    }

    public static int add(int a, int b) {
        return a+b;
    }
}
</code></pre>
						<p>&nbsp;</p>
						<h2>2.方法的调用</h2>
						<h3>2.1.静态方法调用其他方法</h3>
						<h5>2.1.1.静态方法调用静态方法</h5>
						<p>同一类内直接调用，不同类内直接通过类名.方法名（参数表）调用。</p>
						<p>Test1类</p>
						<pre><code class="language-java" lang="java">package zrx.test;

public class Test1 {

    public static void main(String[] args) {
        TestT11();    //静态方法直接 调用类内 的静态方法
        Son.SonS1();  //静态方法通过类名直接 调用Son类 中的静态方法
    }

    public static void TestT11(){  //静态方法
        System.out.println(&quot;调用了，静态方法 TestT11&quot;);
    }

}
</code></pre>
						<p>Son类</p>
						<pre><code class="language-java" lang="java">package zrx.test;

public class Son {
    public static void SonS1() {  //Son类里的静态方法
        System.out.println(&quot;S1调用了，静态方法 SonS1&quot;);
    }

    public void SonS2() {  //Son类里的非静态方法
        System.out.println(&quot;S2调用了，静态方法 SonS2&quot;);
    }

    public static void SonS3() {  //Son类里的静态方法
        System.out.println(&quot;S3调用了，静态方法 SonS3&quot;);
    }

    public void SonS4() {  //Son类里的非静态方法
        System.out.println(&quot;S4调用了，静态方法 SonS4&quot;);
    }
}
</code></pre>
						<p>结果：</p>
						<pre><code class="language-cmd" lang="cmd">调用了，静态方法 TestT11
S1调用了，静态方法 SonS1

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h5>2.1.2.静态方法调用非静态方法</h5>
						<p>无论是否在同一类内，均需要通过对象调用。</p>
						<p>Test2类</p>
						<pre><code class="language-java" lang="java">package zrx.test;

public class Test2 {

    public void TestT21(){  //非静态方法
        System.out.println(&quot;调用了，非静态方法 TestT21&quot;);
    }

    public static void main(String[] args) {
        Test2 son1=new Test2();
        son1.TestT21();     //静态方法通过对象 调用类内 中的非静态方法
        Son son=new Son();  //静态方法通过对象 调用Son类 中的非静态方法
        son.SonS2();
    }

}
</code></pre>
						<p>Son类</p>
						<pre><code class="language-java" lang="java">package zrx.test;

public class Son {
    public static void SonS1() {  //Son类里的静态方法
        System.out.println(&quot;S1调用了，静态方法 SonS1&quot;);
    }

    public void SonS2() {  //Son类里的非静态方法
        System.out.println(&quot;S2调用了，静态方法 SonS2&quot;);
    }

    public static void SonS3() {  //Son类里的静态方法
        System.out.println(&quot;S3调用了，静态方法 SonS3&quot;);
    }

    public void SonS4() {  //Son类里的非静态方法
        System.out.println(&quot;S4调用了，静态方法 SonS4&quot;);
    }
}
</code></pre>
						<p>结果：</p>
						<pre><code class="language-cmd" lang="cmd">调用了，非静态方法 TestT21
S2调用了，静态方法 SonS2

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h3>2.2.非静态方法调用其他方法</h3>
						<h5>2.2.1.非静态方法在同一类内调用其他方法</h5>
						<p>Test3类</p>
						<pre><code class="language-java" lang="java">package zrx.test;

public class Test3 {

    public void TestT31(){  //非静态方法
        System.out.println(&quot;调用了，非静态方法 TestT31&quot;);
    }
    public static void TestT32(){  //静态方法
        System.out.println(&quot;调用了，静态方法 TestT32&quot;);
    }
    public void alloutput(){
        TestT31();  //非静态方法直接 调用类内 的非静态方法
        TestT32();  //非静态方法直接 调用类内 的静态方法
    }
    public static void main(String[] args) {
        Test3 test3 = new Test3();
        test3.alloutput();  //前边已学静态方法通过对象调用非静态方法
    }

}
</code></pre>
						<p>结果：</p>
						<pre><code class="language-cmd" lang="cmd">调用了，非静态方法 TestT31
调用了，静态方法 TestT32

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h5>2.2.2.非静态方法在不同类之间调用其他方法</h5>
						<p>Test4类</p>
						<pre><code class="language-java" lang="java">package zrx.test;

public class Test4 {

    public void output(){
        Son.SonS3();  //通过类名直接 调用Son类 中的静态方法，不建议使用对象调用静态方法
        Son son = new Son();
        son.SonS4();  //通过对象调 用Son类 中的非静态方法
    }

    public static void main(String[] args) {
        //同一类中的静态方法调用非静态方法output，前边已经涉及到
        Test4 test4 = new Test4();
        test4.output();
    }

}
</code></pre>
						<p>Son类</p>
						<pre><code class="language-java" lang="java">package zrx.test;

public class Son {
    public static void SonS1() {  //Son类里的静态方法
        System.out.println(&quot;S1调用了，静态方法 SonS1&quot;);
    }

    public void SonS2() {  //Son类里的非静态方法
        System.out.println(&quot;S2调用了，静态方法 SonS2&quot;);
    }

    public static void SonS3() {  //Son类里的静态方法
        System.out.println(&quot;S3调用了，静态方法 SonS3&quot;);
    }

    public void SonS4() {  //Son类里的非静态方法
        System.out.println(&quot;S4调用了，静态方法 SonS4&quot;);
    }
}
</code></pre>
						<p>结果：</p>
						<pre><code class="language-cmd" lang="cmd">S3调用了，静态方法 SonS3
S4调用了，静态方法 SonS4

Process finished with exit code 0
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302003'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">运算符</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302005'}"><span class="span-txt">流程控制</span> <img class="img-r"
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
	name: "302004",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



