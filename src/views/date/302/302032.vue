<template>
	<div id="D302032">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302032'}">JDK8</router-link>
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
								<router-link :to="{name:'D302031'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">注解</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302033'}"><span class="span-txt">函数式接口</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-23-3</span></p>
						<h1>JDK8</h1>
						<p><strong>目录</strong></p>
						<ol>
							<li><a href="#art1">lambda之线程</a>
							</li>
							<li><a href="#art2">lambda单个参数的使用</a>
							</li>
							<li><a href="#art3">lambda两个参数的使用</a>
								<ol>
									<li><a href="#art3-1">Comparator类中的compareTo()和compare(T o1,T o2)</a></li>

								</ol>
							</li>

						</ol>
						<p>&nbsp;</p>
						<p>JDK8的新特性，Lambda。</p>
						<ul>
							<li>
								<p>函数式的编程思想</p>
								<p>面向对象的思想：必须通过对象的形式做事情
									函数式思想：<strong>忽略了面向对象的复杂语法，强调做什么，而不是以什么形式去做。</strong>（只要能获取到结果，怎么做不重要，只重视结果，不重视过程。）
								</p>
							</li>

						</ul>
						<ol start="">
							<li>Thread类需要Runnable接口作为参数，其中run方法用来指定任务内容的核心；</li>
							<li>为了指定run的方法体，不得不需要Runnable接口的实现类；</li>
							<li>为了省去定义一个RunnableImpl实现类的麻烦，我们不得不使用匿名内部类；</li>
							<li>必须覆盖重写run方法，所以方法名、方法参数、方法返回值不得不重写一编，而且不能写错；</li>
							<li>实际上，只有方法体才是关键所在。</li>

						</ol>
						<p>&nbsp;</p>
						<p><strong>lambda表达式</strong>的标准格式</p>
						<p>三部分组成：一些参数、一个箭头、一段代码。</p>
						<p>格式 （参数列表）-&gt;{一些重写方法的代码}</p>
						<ul>
							<li>( )，接口中抽象方法的参数列表。没有参数就空着，有参数就写参数，多个参数就用逗号隔开；</li>
							<li>-&gt; ：传递的意思，把参数传递给方法体；</li>
							<li>{ } ：重写方法的方法体。</li>

						</ul>
						<p>&nbsp;</p>
						<h3 id="art1">1、lambda之线程</h3>
						<h5>示例一</h5>
						<pre><code class="language-java" lang="java">package jdk8;

import org.junit.jupiter.api.Test;

/**
 * lambda用法示例
 */
public class TestLambda {
    @Test
    public void test1() {
        int num = 0;
        Runnable r = new Runnable() {
            @Override
            public void run() {
                System.out.println(&quot;hello world&quot; + num);
            }
        };
        r.run();
        System.out.println(&quot;************************&quot;);
        Runnable r1 = () -&gt; System.out.println(&quot;hello lambda&quot; + num);
        r1.run();
    }
}
</code></pre>
						<p>运行方法：导入import org.junit.jupiter.api.Test;</p>
						<p>这是是一个测试单元。</p>
						<p><strong>结果</strong></p>
						<p><img src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224103835162.png"
								referrerpolicy="no-referrer" alt="image-20201224103835162"></p>
						<p>&nbsp;</p>
						<h5>示例二</h5>
						<pre><code class="language-java" lang="java">package jdk8;

/**
 * Runnable实现类
 */
public class RunnableImpl implements Runnable {
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + &quot;线程&quot;);
    }
}
</code></pre>
						<p><strong>测试类</strong></p>
						<pre><code class="language-java" lang="java">package jdk8;

/**
 * 测试类
 */
public class TestRunnable {
    public static void main(String[] args) {
        // 创建Runnable的实现类对象
        Runnable run = new RunnableImpl();
        // 创建Thread类对象，传入Runnable对象
        Thread t = new Thread(run);
        // 通过Thread类对象调通start方法
        t.start();

        // 通过匿名内部类，简化代码
        Runnable r = new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName() + &quot;线程Run&quot;);
            }
        };
        new Thread(r).start();


        // 继续简化代码
        new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println(Thread.currentThread().getName() + &quot;线程ttttt&quot;);
            }
        }).start();

        // 继续简化代码
        // 使用lambda表达式，实现多线程
        // lambda主要关注要做什么，而不是怎么做
        new Thread(()-&gt; {
            System.out.println(Thread.currentThread().getName() + &quot;线程yyy&quot;);
        }).start();

    }
}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">Thread-0线程
Thread-1线程Run
Thread-2线程ttttt
Thread-3线程yyy

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p>回顾内部类
							好处：省去了实现类的定义；
							坏处：语法复杂，看不懂。</p>
						<pre><code class="language-java" lang="java">// 通过匿名内部类，简化代码
Runnable r = new Runnable() {
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + &quot;线程Run&quot;);
    }
};
new Thread(r).start();
</code></pre>
						<p><strong>对比</strong></p>
						<pre><code class="language-java" lang="java">// 继续简化代码
new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + &quot;线程ttttt&quot;);
    }
}).start();
</code></pre>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h3 id="art2">2、lambda单个参数的使用</h3>
						<p>一个参数的使用，没有返回值。</p>
						<p>ps：只有一句话的时候，可以省略大括号。</p>
						<pre><code class="language-java" lang="java">package jdk8_2;

import org.junit.jupiter.api.Test;

import java.util.function.Consumer;

/**
 * 有参的lambda表达式
 * 1、一个参数，无返回值
 */
public class Demo2 {
    // 只有一句话的时候，可以省略大括号
    @Test
    public void test2() {
        // lambda表达式其实就是相当于写了一个实现类  String
        // 大括号也可以省略
//        Consumer&lt;String&gt; con = (x) -&gt; System.out.println(x);
//        con.accept(&quot;lambda是jdk1.8的新特性。&quot;);

        // Integer，只有一个参数（自定义）的时候，可以省略小括号
        Consumer&lt;Integer&gt; con = x -&gt; System.out.println(x);
        con.accept(11);
    }


}
</code></pre>
						<p>结果</p>
						<pre><code class="language-cmd" lang="cmd">11

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h3 id="art3">3、lambda两个参数的使用</h3>
						<p>两个参数的使用，有返回值。</p>
						<p>&nbsp;</p>
						<h5 id="art3-1">Comparator类中的compareTo()和compare(T o1,T o2)</h5>
						<p><strong>compareTo</strong>：如果x &lt; y，则返回-1；x = y，则返回0；x &gt; y，则返回1。实现这个方法时同样需要遵循几个规则。</p>
						<ul>
							<li>自反性，如果x &lt;y ，那么x.compareTo(y)返回-1，同理y.compareTo则返回1；</li>
							<li>传递性，如果x.compareTo(y)返回-1，y.compareTo(z)返回-1，则x.compareTo(z)也应该返回-1；</li>
							<li>同一性，如果x.compareTo(y)返回0（x = y），那么若x.compareTo(z)返回-1时，y.compareTo(z)也应该返回-1。</li>

						</ul>
						<p><strong>compare</strong>(T o1, T o2)：</p>
						<pre><code class="language-java" lang="java">有数组String[]str={&quot;aa&quot;,&quot;b&quot;,&quot;cccc&quot;,&quot;ddd&quot;,}

用Comparator中的 int compare(T o1, T o2)方法

输出结果是：

b
aa
ddd
cccc
</code></pre>
						<p>&nbsp;</p>
						<pre><code class="language-java" lang="java">package jdk8_2;

import org.junit.jupiter.api.Test;

import java.util.Comparator;

/**
 * 两个参数的使用，有返回值
 */
public class Demo3 {
    // 只有一句话的时候，可以省略大括号
    @Test
    public void test3() {
        Comparator&lt;Integer&gt; con = (x, y) -&gt; {
            // 此处代码块的内容，是实现接口中方法需要重写的内容
            System.out.println(&quot;函数式接口&quot;);
            if (x &gt; y) {
                System.out.println(x);
                return x;
            } else {
                System.out.println(y);
                return y;
            }
        };
        // 通过con对象调用compara方法，此处的compara方法已经被重写了
        con.compare(12, 20);
    }

}
</code></pre>
						<p>结果</p>
						<pre><code class="language-cmd" lang="cmd">函数式接口
20


Process finished with exit code 0
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302031'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">注解</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302033'}"><span class="span-txt">函数式接口</span> <img
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
	name: "302032",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



