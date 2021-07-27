<template>
	<div id="D302008">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302008'}">封装类</router-link>
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
								<router-link :to="{name:'D302007'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">继承类</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302009'}"><span class="span-txt">抽象类</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">2020-11-26-1</span></p>
						<h1>封装类</h1>
						<p>为什么要使用封装（即作用、优点），封装的意义是什么？</p>
						<p>优点：</p>
						<p>1.提高代码的安全性（外部无法更改ATest1里面定义好的数据，注意，是定义好的）；</p>
						<p>2.提高代码的复用性（可重复调用）；</p>
						<p>3.“高内聚”：封装细节，便于修改内部代码(比如ATest1类里面定义的私有属性可以改为int啊什么其它类型的)，提高可维护性；</p>
						<p>4.“低耦合”：简化外部调用，便于调用者使用，便于扩展和写作。</p>
						<p>&nbsp;</p>
						<p>实例：</p>
						<pre><code class="language-java" lang="java">package Test1;

public class Test1 {
    public static void main(String[] args) {
        ATest1 at = new ATest1();
        // set方法用来定义数据
        at.setName(&quot;小明&quot;);
        at.setAge(11);

        at.show();

    }
}
</code></pre>
						<pre><code class="language-java" lang="java">package Test1;

public class ATest1 {
    // private（私有的）也是封装的一个体现。被private修饰的成员变量只能在 本类 中使用，外部不能直接通过对象属性改变。
    private String name;  //  定义的类型——String类型
    private int age;   //  定义的类型——int类型

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    // 用来输入（静态方法调用非静态方法）
    // get 方法用来获取数据
    public void show() {
        System.out.println(&quot;他的名字是：&quot; + this.getName() + &quot;，他今年&quot; + this.getAge() + &quot;岁~！&quot;);
    }
}
</code></pre>
						<p>方法、继承都是封装的一种体现，<code>private</code>（私有的）也是封装的一个体现。被<code>private</code>修饰的成员变量只能在本类中使用，外部不能直接通过对象属性改变。获取和改变需要提供设置器（访问接口|访问方法）和访问器来进行操作。
						</p>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<blockquote>
							<p>备用思考：</p>
							<p>为什么要用封装：有些属性不能直接赋值（例如，生活中不符合要求的），要保证数据的正确性；</p>
							<p>怎么用封装：1、私有化成员变量 private 2、使用setter、getter（规范化），如 name的格式 setName()、getName</p>
							<p>在我们的setter、getter中加入限制条件：保证数据的完整性和正确性</p>
							<p>封装什么时候使用：书写一个javabean，必须将它的成员变量进行封装</p>
						</blockquote>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302007'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">继承类</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302009'}"><span class="span-txt">抽象类</span> <img
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
	name: "302008",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



