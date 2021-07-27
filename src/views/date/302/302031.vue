<template>
	<div id="D302031">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302031'}">注解</router-link>
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
								<router-link :to="{name:'D302030'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">反射</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302032'}"><span class="span-txt">JDK8</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-23-2</span></p>
						<h1>注解</h1>
						<p>来源于：<a href="https://www.cnblogs.com/skywang12345/p/3344137.html" target="_blank"
								  class="url">https://www.cnblogs.com/skywang12345/p/3344137.html</a>。</p>
						<p><a href="https://www.runoob.com/w3cnote/java-annotation.html" target="_blank" class="url">https://www.runoob.com/w3cnote/java-annotation.html</a>，更加详细。
						</p>
						<p>Java 注解（Annotation）又称 Java 标注，是 JDK5.0 引入的一种注释机制。</p>
						<p>Java 语言中的类、方法、变量、参数和包等都可以被标注。和 Javadoc 不同，Java 标注可以通过反射获取标注内容。在编译器生成类文件时，标注可以被嵌入到字节码中。Java
							虚拟机可以保留标注内容，在运行时可以获取到标注内容 。 当然它也支持自定义 Java 标注。</p>
						<p>&nbsp;</p>
						<h3>内置的注解</h3>
						<p>Java 定义了一套注解，共有 7 个，3 个在 java.lang 中，剩下 4 个在 java.lang.annotation 中。</p>
						<p><strong>作用在代码的注解是</strong></p>
						<ul>
							<li>@Override - 检查该方法是否是重写方法。如果发现其父类，或者是引用的接口中并没有该方法时，会报编译错误。</li>
							<li>@Deprecated - 标记过时方法。如果使用该方法，会报编译警告。</li>
							<li>@SuppressWarnings - 指示编译器去忽略注解中声明的警告。</li>

						</ul>
						<p>作用在其他注解的注解(或者说 元注解)是:</p>
						<ul>
							<li>@Retention - 标识这个注解怎么保存，是只在代码中，还是编入class文件中，或者是在运行时可以通过反射访问。</li>
							<li>@Documented - 标记这些注解是否包含在用户文档中。</li>
							<li>@Target - 标记这个注解应该是哪种 Java 成员。</li>
							<li>@Inherited - 标记这个注解是继承于哪个注解类(默认 注解并没有继承于任何子类)</li>

						</ul>
						<p>从 Java 7 开始，额外添加了 3 个注解:</p>
						<ul>
							<li>@SafeVarargs - Java 7 开始支持，忽略任何使用参数为泛型变量的方法或构造函数调用产生的警告。</li>
							<li>@FunctionalInterface - Java 8 开始支持，标识一个匿名函数或函数式接口。</li>
							<li>@Repeatable - Java 8 开始支持，标识某注解可以在同一个声明上使用多次。</li>

						</ul>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<p><strong>本处笔记仅演示部分，详细点击上面的链接进行查看。</strong></p>
						<pre><code>@SuppressWarnings(value = &quot;all&quot;)  // 压制所有警告（消除右侧的黄色图标提示）
</code></pre>
						<p><strong>不压制：</strong></p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224100056416.png"
												   referrerpolicy="no-referrer" alt="image-20201224100056416"></div>
						</p>
						<p><strong>压制：</strong></p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224100118225.png"
												   referrerpolicy="no-referrer" alt="image-20201224100118225"></div>
						</p>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h3>注解的演示</h3>
						<p>文档内容</p>
						<pre><code class="language-java" lang="java">/**
 * 注解的演示
 * @author simple
 * @version 1.0
 * @since 1.5
 */
public class TestDoc {
    /**
     * 计算两个数的和
     * @param a 整数
     * @param b 整数
     * @return 两个数的和
     */
    public int add(int a, int b) {
        return a+b;
    }
}
</code></pre>
						<p><strong>执行1</strong></p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224100535223.png"
												   referrerpolicy="no-referrer" alt="image-20201224100535223">
							<div>
								</p>
								<p><strong>执行2</strong></p>
								<pre><code class="language-cmd" lang="cmd">PS C:\Users\10119\Desktop\新建文件夹&gt; javadoc TestDoc.java
正在加载源文件TestDoc.java...
正在构造 Javadoc 信息...
标准 Doclet 版本 1.8.0_271
正在构建所有程序包和类的树...
正在生成.\TestDoc.html...
正在生成.\package-frame.html...
正在生成.\package-summary.html...
正在生成.\package-tree.html...
正在生成.\constant-values.html...
正在构建所有程序包和类的索引...
正在生成.\overview-tree.html...
正在生成.\index-all.html...
正在生成.\deprecated-list.html...
正在构建所有类的索引...
正在生成.\allclasses-frame.html...
正在生成.\allclasses-noframe.html...
正在生成.\index.html...
正在生成.\help-doc.html...
PS C:\Users\10119\Desktop\新建文件夹&gt;
</code></pre>
								<p><strong>结果</strong></p>
								<p>
								<div class="dark-img"><img class="zooming"
														   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224101640756.png"
														   referrerpolicy="no-referrer" alt="image-20201224101640756">
								</div>
								</p>
								<p>打开<strong>index.html</strong></p>
								<p>
								<div class="dark-img"><img class="zooming"
														   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224101740365.png"
														   referrerpolicy="no-referrer" alt="image-20201224101740365">
								</div>
								</p>
								<p>&nbsp;</p>
								<p>&nbsp;</p>
								<h3>简易版的框架(升级版)</h3>
								<p>步骤：</p>
								<ol start="">
									<li>将需要创建的对象的全类名和需要执行的方法定义在配置文件中；</li>
									<li>在程序中加载读取的配置文件；</li>
									<li>使用反射技术来加载类文件进内存；</li>
									<li>创建对象；</li>
									<li>执行方法。</li>

								</ol>
								<p>&nbsp;</p>
								<pre><code class="language-java" lang="java">package annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 创建注解，描述需要执行的类名、方法名
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface Pro {
    String className();  // 声明一个className属性，用于使用注解的时候使用传入类名
    String methodName();  // 声明一个methodName属性，用于使用注解的时候使用传入方法名
}
</code></pre>
							</div>
						</div>
						<p><strong>获取无参</strong></p>
						<p>测试类的实现</p>
						<pre><code class="language-java" lang="java">package annotation;

import java.lang.reflect.Method;

@Pro(className = &quot;annotation.Person&quot;, methodName = &quot;sleep&quot;)
public class TestReflact {
    public static void main(String[] args) throws Exception {
        //解析注解
        //1,获取类对象文件
        Class test = TestReflact.class;
        //2,获取上面的注解对象
        Pro annotation = (Pro) test.getAnnotation(Pro.class);
        //使用注解对象定义方法，获取返回值
        String className = annotation.className();
        String methodName = annotation.methodName();
        //3加载类进内存，通过类对象
        Class cls = Class.forName(className);
        //4通过反射创建对象
        Object obj = cls.newInstance();
        //5获取方法对象
        Method method = cls.getMethod(methodName);
        //6执行方法
        method.invoke(obj);

    }
}
</code></pre>
						<a href="./302030/#Person.java"><strong>结果，Person.java未发生改变，仅改变了位置，</strong>点击跳转查看Person.java。</a>
						<pre><code class="language-cmd" lang="cmd">eat&gt;&gt;&gt;&gt;&gt;&gt;

Process finished with exit code 0
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302030'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">反射</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302032'}"><span class="span-txt">JDK8</span> <img
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
	name: "302031",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



