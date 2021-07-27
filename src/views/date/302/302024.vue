<template>
	<div id="D302024">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302024'}">多线程</router-link>
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
								<router-link :to="{name:'D302023'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">序列化</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302025'}"><span class="span-txt">线程的状态</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-9-3</span></p>
						<h1>多线程</h1>
						<p>线程的简介</p>
						<p>1、什么是程序、进程、线程</p>
						<p><strong>程序</strong>：指令和数据的有序集合，本身没有任何运行的含义，是一个静态的概念</p>
						<p><strong>进程</strong>：执行程序的一次执行过程，他是一个动态的概念</p>
						<p><strong>线程</strong>：通常一个进程可用包含若干个线程，当然一个进程，至少有一个线程，不然就没存在的意义了。进程是CPU调度和执行的单位</p>
						<p>&nbsp;</p>
						<p>核心概念：</p>
						<ol>
							<li>线程就是独立执行的路径；</li>
							<li>在程序运行的时候，即使没有字节创建线程，后台也会有多个线程，如主线程；</li>
							<li>main() 称为主线程，是程序执行的入口，用于执行整个程序；</li>
							<li>在一个进程中，如果开辟了多个线程，线程的运行是由调度器安排调度的；</li>
							<li>对于同一份资源操作的时候，会存在抢夺资源问题，这时候就需要加入并发控制；</li>
							<li>线程会带来额外的开销，比如CPU调度问题，并发控制开销。</li>

						</ol>
						<p>&nbsp;</p>
						<h3>线程的创建与启动</h3>
						<p>class Thread --&gt; 继承 Thread（掌握）</p>
						<p>Runable 接口 --&gt; 实现 Runable接口（重点）</p>
						<p>callable 接口 --&gt; 实现callable接口（了解）</p>
						<p>&nbsp;</p>
						<h3>线程的实现（重点）</h3>
						<p>Thread类的常用方法：</p>
						<figure>
							<table>
								<thead>
								<tr>
									<th>类型/添加</th>
									<th>方法名</th>
									<th>功能</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>static Thread +</td>
									<td>currentThread()</td>
									<td>得到当前线程</td>
								</tr>
								<tr>
									<td>String</td>
									<td>getName()</td>
									<td>返回线程的名称</td>
								</tr>
								<tr>
									<td>void</td>
									<td>setName(String name)</td>
									<td>设置线程的名称</td>
								</tr>
								<tr>
									<td>int</td>
									<td>getPriority()</td>
									<td>设置线程的优先级</td>
								</tr>
								<tr>
									<td>void</td>
									<td>start()</td>
									<td>调用run() 的方法启动线程，开启线程的执行</td>
								</tr>
								<tr>
									<td>void</td>
									<td>run()</td>
									<td>存放线程的代码</td>
								</tr>
								<tr>
									<td>boolean</td>
									<td>isAlive()</td>
									<td>判断线程是否还活着</td>
								</tr>
								</tbody>
							</table>
						</figure>
						<p></p>
						<h5>继承Thread类，创建线程</h5>
						<ol>
							<li>自定义线程类，继承Thread类；</li>
							<li>重写run()方法，编写线程执行的代码；</li>
							<li>创建线程对象，编写start()方法启动线程。</li>

						</ol>
						<p>通过创建Thread类的对象调用start() 方法，调用后，由JVM去调用run()方法；</p>
						<p>直接调用run()和调用star()方法的区别；</p>
						<p>直接调用run()方表示只有mian主线程在运行，不会创建子线程；</p>
						<p>调用start()方法才会去创建一个子线程。</p>
						<p>&nbsp;</p>
						<h5>Runnable接口创建多线程</h5>
						<ol>
							<li>定义一个类去实现Runnable接口；</li>
							<li>实现run()方法，在run()方法中写执行代码；</li>
							<li>创建线程对象，调用start()方法启动线程。</li>

						</ol>
						<p><strong>总结</strong></p>
						<p><strong>继承Thread类</strong></p>
						<ul>
							<li>子类继承实现多线程能力；</li>
							<li>通过子类对象.strat()启动线程；</li>
							<li>继承只能单继承，有局限性，一般不建议使用。</li>

						</ul>
						<p><strong>实现Runnable接口</strong></p>
						<ul>
							<li>通过实现Runnable计科具备多线程能力；</li>
							<li>传入目标对象 + Thread对象.start()来启动线程；</li>
							<li>避免单继承的局限性，灵活方便，方便同一个对象被对多个线程使用。</li>

						</ul>


						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302023'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">序列化</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302025'}"><span class="span-txt">线程的状态</span> <img
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
	name: "302024",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



