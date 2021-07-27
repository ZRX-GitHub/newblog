<template>
	<div id="D302025">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302025'}">线程的状态</router-link>
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
								<router-link :to="{name:'D302024'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">多线程</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302026'}"><span class="span-txt">线程的状态</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-10-1</span></p>
						<h1>线程的状态</h1>
						<h3>线程的生命周期</h3>
						<p><strong>新生状态</strong>：使用new关键字建立一个线程对象后，这个线程就处于新生状态了，处于新生状态的线程拥有字节的内存空间，通过调用start()方法进入就绪状态；
						</p>
						<p><strong>就绪状态</strong>：处于就绪状态的线程，具备了运行条件，但是还没有分到CPU，处于线程就绪队列，等待系统为其分配CPU。当系统选定了一个等待执行的线程后，它就会从就绪状态进入到执行状态，这个动作称为“CPU调度”；
						</p>
						<p><strong>运行状态</strong>：运行状态的线程执行自己的run()方法中的代码，直到等待某个资源而阻塞或者完成任务后死亡。运行状态下失去CPU资源，会导致回到就绪状态；
						</p>
						<p><strong>阻塞状态</strong>：处于运行状态的线程，在某些情况下，如果执行了sleep()方法，或者等待IO设备的资源，它将让出CPU，并且停止自己的运行，进入阻塞状态。在阻塞状态的线程，不能进入就绪队列，只能当引起阻塞的原因消除了（比如睡眠时间到了、IO设备空闲了），线程这个时候又进入了就绪状态，重新到就绪队列排队，等待被系统选中运行；
						</p>
						<p><strong>死亡状态</strong>：死亡是线程生命周期的最后一个阶段。</p>
						<p>死亡原因有：</p>
						<ol start="">
							<li>正常运行的线程完成工作了；</li>
							<li>线程被强行终止了；</li>
							<li>线程抛出了未捕获的异常。</li>

						</ol>
						<p>&nbsp;</p>
						<p><strong>状态之间的关系图</strong></p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/%E7%BA%BF%E7%A8%8B%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png"
												   referrerpolicy="no-referrer" alt="线程的生命周期"></div>
						</p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/201410311002063.png"
												   referrerpolicy="no-referrer" alt="201410311002063"></div>
						</p>
						<p>&nbsp;</p>
						<p>示例</p>
						<pre><code class="language-java" lang="java">public class ThreadDemo implements Runnable {
    @Override
    public void run() {
        try {
            System.out.println(&quot;线程t在运行！&quot;);
            Thread.sleep(2000);  // 设置阻塞状态
            System.out.println(&quot;线程t在短时间的睡眠后重新运行！&quot;);
        } catch (InterruptedException e) {
            System.out.println(&quot;线程被中断！&quot;);
        }
    }

    public static void main(String[] args) {
        Thread t = new Thread(new ThreadDemo());
        System.out.println(&quot;线程t创建好了，进入了新生状态！&quot;);
        t.start();
        System.out.println(&quot;start()方法被调用，线程t进入就绪状态！&quot;);
    }

}
</code></pre>
						<p>&nbsp;</p>
						<h3>线程的调度</h3>
						<p>常用方法</p>
						<ul>
							<li>void setPriority(int newPriority)，设置线程的优先级，由1~10表示，默认优先级为5，优先级越高，获得CPU的资源概率越大；</li>
							<li>static void sleep(long millis)，在指定的毫秒数内（1000ms = 1s），让当前正在执行的线程休眠，进入阻塞状态，不会释放CPU的执行权；
							</li>
							<li>void join()，阻塞指定的线程等到另外一个线程执行完成以后，再继续执行。类似于插队；</li>
							<li>static void yield()，暂停当前正在执行的线程对象，转入就绪状态，再次公平竞争CPU资源。</li>

						</ul>
						<p>&nbsp;</p>
						<h5>设置优先级</h5>
						<pre><code class="language-java" lang="java">package thread2;

// 设置优先级，优先级高不代表一定全部执行，只代表资源分配得更多一点
public class ThreadDemo_Priority implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i &lt; 100; i++) {
            System.out.println(Thread.currentThread().getName() + &quot;正在运行&quot; + i);
        }
    }

    public static void main(String[] args) {
        // 通过构造方法指定线程名称
        Thread t1 = new Thread(new ThreadDemo_Priority(), &quot;线程A&quot;);
        Thread t2 = new Thread(new ThreadDemo_Priority(), &quot;线程B&quot;);

        // 设置优先级
        t1.setPriority(Thread.MAX_PRIORITY);  // 把t1设置成最高的优先级
        t1.setPriority(Thread.MIN_PRIORITY);  // 把t2设置成最低的优先级

        System.out.println(&quot;---线程的优先级---&quot;);
        System.out.println(&quot;线程A的优先级为&quot; + t1.getPriority());
        System.out.println(&quot;线程B的优先级为&quot; + t2.getPriority());
        System.out.println(&quot;---------------&quot;);
        // 调用start()方法
        t1.start();
        t2.start();
    }

}
</code></pre>
						<p>&nbsp;</p>
						<h5>线程的强制执行（插队）</h5>
						<pre><code class="language-java" lang="java">package thread2;

/**
 * 线程的强制执行（插队）
 */
public class ThreadDemoJoin implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i &lt; 10; i++) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            // 输出当前的线程信息
            System.out.println(Thread.currentThread().getName() + &quot;子线程运行&quot; + i);
        }
    }

    public static void main(String[] args) {
        System.out.println(&quot;---线程的强制执行---&quot;);
        // 创建子线程，并启动
        Thread thread = new Thread(new ThreadDemoJoin());
        thread.start();
        // 从for循环开始，就是主线程在工作
        for (int i = 0; i &lt; 20; i++) {
            if (i == 5) {
                try {
                    System.out.println(&quot;---阻塞主线程---&quot;);
                    thread.join();  // 阻塞主线程，子线程会强制先于主线程执行
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName() + &quot;主线程运行&quot; + i);
        }
    }
}

</code></pre>
						<p>&nbsp;</p>
						<h5>线程的睡眠</h5>
						<pre><code class="language-java" lang="java">package thread2;

/**
 * 线程的睡眠
 */
public class ThreadDemoSleep {
    public static void main(String[] args) {
        System.out.println(&quot;等待&quot;);
        wait.waitBySec(5);  // 让主线程等待（睡眠5秒），再执行
        System.out.println(&quot;开始&quot;);
    }

}

// 自动一个等待的类
class wait {
    // 写个静态的睡眠方法
    public static void waitBySec(long s) {
        // 写个循环来定义休眠多少秒
        for (long i = 0; i &lt; s; i++) {
            System.out.println(i + 1 + &quot;秒&quot;);
            try {
                Thread.sleep(1000);  // 睡眠一秒
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}
</code></pre>
						<p>&nbsp;</p>
						<h5>线程的礼让</h5>
						<pre><code class="language-java" lang="java">package thread2;

/**
 * 线程的礼让
 */
public class ThreadDemoYield implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i &lt; 10; i++) {
            System.out.println(Thread.currentThread().getName() + &quot;运行&quot; + i);
            // 加入线程礼让
            if (i == 3) {
                System.out.println(&quot;线程礼让&quot;);
                Thread.yield();  // 直接调用yield方法
            }
        }
    }

    public static void main(String[] args) {
        System.out.println(&quot;---线程的礼让---&quot;);
        Thread t1 = new Thread(new ThreadDemoYield(), &quot;线程A&quot;);
        Thread t2 = new Thread(new ThreadDemoYield(), &quot;线程B&quot;);
        t1.start();
        t2.start();

    }

}
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302024'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">多线程</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302026'}"><span class="span-txt">线程的状态</span> <img
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
	name: "302025",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



