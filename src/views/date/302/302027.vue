<template>
	<div id="D302027">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302027'}">线程池</router-link>
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
								<router-link :to="{name:'D302025'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">线程同步</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302027'}"><span class="span-txt">JDBC</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-14-1</span></p>
						<h1>线程池</h1>
						<p>线程池其实就是开辟一块内存区域，里面存放了很多(未死亡)的线程，池中的线程执行调度，是由池来管理的。</p>
						<p>当有线程任务的时候，从池中取一个，执行完成后线程对象归池，（<strong>好处：</strong>）这样可以避免反复创建线程对象所带来的性能开销，节省系统资源。</p>
						<p>在jdk5线程中，线程分为2种：固定尺寸的线程池、可变尺寸的线程池。</p>
						<p>相关的类：Excutors和ExcutorService。</p>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h3>线程交互</h3>
						<p>线程的五种状态，点击跳转。</p>
						<p>wait()、notify()、notifyAll()，这三个方法都是Object的方法，并不是线程方法。</p>
						<ul>
							<li>
								<p>
									wait()：释放占有的对象锁，线程进入等待池，释放CPU，而其他的等待的线程可以抢占此锁，获得锁的线程可以运行程序。和sleep()的不同：线程调用会休眠一段时间，会释放CPU，但是并不释放对象锁。也就是说，在休眠期间，其他线程依然无法进入此代码的内部。休眠结束，线程重新获得CPU，换行代码。</p>
								<p>两者最大的<strong>区别</strong>：wait()会释放对象锁，而sleep()不会释放对象锁。</p>
							</li>
							<li>
								<p>
									notify()：该方法会唤醒因为调用对象的wait()方法而等待的线程。其实是对对象锁的唤醒，从而是的wait()的线程可以有机会获得对象锁。调用notify()后，不会立即释放锁，先继续执行当前代码，直到synchronized中的代码执行完毕，才会释放对象锁。</p>
								<p>注意：wait()和notify()方法必须在synchronized代码块中调用。</p>
							</li>
							<li>
								<p>notifyAll()：是唤醒所有等待的线程。</p>
							</li>

						</ul>
						<p>&nbsp;</p>
						<p><strong>使用synchronized同步锁</strong></p>
						<p>测试</p>
						<pre><code class="language-java" lang="java">public class ThreadDemoTest {
    // 声明一个Object的静态对象，方便调用
    public static final Object obj = new Object();

    public static void main(String[] args) {
        // 打印A的子线程
        new Thread(new Produce()).start();

        // 打印B的子线程
        new Thread(new Consumer()).start();

        /**
         * 此示例中使用了static obj作为锁的对象，当线程A启动的时候（假如A线程先获得锁，这个时候B线程就会等待），
         * 打印了A以后，会先主动释放锁，然后阻塞自己。
         * B线程获得对象锁，打印B，然后释放锁，阻塞自己。A又获得锁。...
         * 直到count=0，通过synchronized和wait()以及notify()就可以达到线程同步交互的目的
         */
    }
}
</code></pre>
						<pre><code class="language-java" lang="java">new Thread(new Produce()).start();  // 写法上更加简洁
</code></pre>
						<p><strong>等于</strong></p>
						<pre><code class="language-java" lang="java">Thread t = new Thread(new Produce());
t.start();
</code></pre>
						<p>A</p>
						<pre><code class="language-java" lang="java">package thread3;

/**
 * 打印A
 */
public class Produce implements Runnable {
    @Override
    public void run() {
        int count = 10;
        while (count &gt; 0) {
            synchronized (ThreadDemoTest.obj) {
                System.out.println(&quot;A&quot;);
                count--;

                // 唤醒，调用notify()方法
                ThreadDemoTest.obj.notify();
                try {
                    // 调用wait()方法
                    ThreadDemoTest.obj.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }


        }
    }
}
</code></pre>
						<p>B</p>
						<pre><code class="language-java" lang="java">package thread3;

/**
 * 打印B
 */
public class Consumer implements Runnable {
    @Override
    public void run() {
        int count = 10;
        while (count &gt; 0) {
            synchronized (ThreadDemoTest.obj) {
                System.out.println(&quot;B&quot;);
                count--;

                // 唤醒，调用notify()方法
                ThreadDemoTest.obj.notify();
                try {
                    // 调用wait()方法
                    ThreadDemoTest.obj.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }


        }
    }
}
</code></pre>
						<p>结果</p>
						<pre><code class="language-cmd" lang="cmd">A
B
A
B
A
B
A
B
A
B
A
B
A
B
A
B
A
B
A
B
</code></pre>
						<p>&nbsp;</p>
						<p><strong>使用Lock锁</strong></p>
						<p>测试类</p>
						<pre><code class="language-java" lang="java">package thread3.lockwait;

/**
 * RentranLock和synchronized，有相同的并发性、内存语义，还包含了中断锁等候和定时锁等候，也就是说，线程A先获得了对象obj的锁，
 * 那么线程B可以在等待时间内依然无法获取锁，所以就会放弃该锁。
 *
 * 由于synchronized是在JVM层面实现的，因此系统可以监控锁是否释放，
 * 但是RentranLock使用代码实现的，系统无法自动释放锁，所以需要在最后finally子句中显示的释放锁， lock.unlock()。
 */


import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

/**
 * 示例Lock的使用：返回两个线程，一次打印AB，共打印10次
 */
public class ThreadDemoTest {

    public static void main(String[] args) {
        Lock lock = new ReentrantLock();

        new Thread(new Produce(lock)).start();
        new Thread(new Consumer(lock)).start();
    }
}
</code></pre>
						<p>A</p>
						<pre><code class="language-java" lang="java">package thread3.lockwait;

import java.util.concurrent.locks.Lock;

/**
 * 打印A
 */
public class Produce implements Runnable {
    // 声明一个锁
    final private Lock lock;
    // 有参构造方法

    public Produce(Lock lock) {
        this.lock = lock;
    }

    @Override
    public void run() {
        int count = 10;
        while (count &gt; 0) {
            try {
                lock.lock();  // 调用锁
                count--;
                System.out.println(&quot;A&quot;);
            } finally {
                lock.unlock();  // 解锁
                try {
                    Thread.sleep(200);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

}
</code></pre>
						<p>B</p>
						<pre><code class="language-java" lang="java">package thread3.lockwait;


import java.util.concurrent.locks.Lock;

/**
 * 打印B
 */
public class Consumer implements Runnable {
    // 声明一个锁
    private Lock lock;
    // 有参构造方法

    public Consumer(Lock lock) {
        this.lock = lock;
    }

    @Override
    public void run() {
        int count = 10;
        while (count &gt; 0) {
            try {
                lock.lock();  // 调用锁
                count--;
                System.out.println(&quot;B&quot;);
            } finally {
                lock.unlock();  // 解锁
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

}

</code></pre>
						<p>&nbsp;</p>
						<h3>生产消费者模型</h3>
						<p> 准确的说应该是 生产者--消费者--仓库 模型。离开了仓库，这种模型就没有太多的说服力。</p>
						<p>1、生产者仅仅在仓库没满的时候生产，仓库满了则停止生产；</p>
						<p>2、消费者仅仅在仓库有产品的时候才能消费，空仓的时候要等待；</p>
						<p>3、当消费者发现仓库没有产品的时候可以消费的时候，会通知生产者生产；</p>
						<p>4、生产者在生产出消费品的时候，应该通知等待的消费者区消费。</p>
						<p>应用场景：生产者和消费者问题 ---- 管程法</p>
						<p>1、假如仓库中只能存放一件商品的时候，生产者将生产出来的产品放进仓库，消费者取走；</p>
						<p>2、如果仓库中没有产品，生产者将放入仓库，否则停止生产并等待，直到仓库产品被消费者取走；</p>
						<p>3、如果仓库中有产品，则消费者可以取走产品，否则停止消费并等待，直到仓库中再次放入产品。</p>
						<p>&nbsp;</p>
						<p><strong>需要多少个对象？ 需要4个对象</strong></p>
						<p>生产、消费、仓库、产品。</p>
						<p><strong>分工？</strong></p>
						<p>
							生产者负责生产、消费者负责消费、鸡（产品：实体类）、仓库（添加数据，判断是否满仓了，则通知消费者消费；仓库减少数据，判断还有没有数据；没有数据了，则通知生产者进行生产，添加数据）。</p>
						<p>&nbsp;</p>
						<p>测试类</p>
						<pre><code class="language-java" lang="java">public class Demo {
    public static void main(String[] args) {
        Container container = new Container();
        new Productor(container).start();
        new Consumers(container).start();
    }
}
</code></pre>
						<p>仓库</p>
						<pre><code class="language-java" lang="java">package thread3.shengchan;

/**
 * 仓库
 */
public class Container {
    // 仓库中存放的是产品，大小固定的数组
    Chicken[] chickens = new Chicken[10];
    // 仓库的计数器
    int num = 0;
    // 生产者放入产品的方法
    public synchronized void push(Chicken chicken) {
        // 假如容器满了，就不用放了，等待消费
        if (num &gt; chickens.length) {
            try {
                this.wait();  // 等待消费者消费
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        // 假如仓库没满，通知生产者生产
//        System.out.println(&quot;仓库中还有&quot; + num + &quot;个&quot;);
        chickens[num] = chicken;
//        System.out.println(&quot;数组有多个元素&quot; + num);
        num++;
        // 通知消费者消费
        this.notifyAll();
    }

    // 消费者拿走产品
    public synchronized Chicken pop() {
        // 假如仓库是空的，等待
        if (num &lt;= 0) {
            // 等待生产
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        num--;  // 拿走产品以后，产品--
        Chicken chicken = chickens[num];
        // 拿走商品后，通知生产者生产
        this.notifyAll();
        return chicken;
    }


}
</code></pre>
						<p>生产者</p>
						<pre><code class="language-java" lang="java">package thread3.shengchan;

/**
 * 生产者
 */
public class Productor extends Thread {
    // 需要向仓库中添加产品
    Container container;

    public Productor (Container container) {
        this.container = container;
    }
    @Override
    public void run() {
        for (int i = 1; i &lt; 10; i++) {
            // 生产者添加商品到仓库，调用仓库的添加方法
            container.push(new Chicken(i));
            System.out.println(&quot;生产者生产了&quot; + i + &quot;号鸡&quot;);
        }
    }


}
</code></pre>
						<p>产品</p>
						<pre><code class="language-java" lang="java">package thread3.shengchan;

/**
 * 产品
 */
public class Chicken {
    int id;

    public Chicken(int id) {
        this.id = id;
    }
}
</code></pre>
						<p>消费者</p>
						<pre><code class="language-java" lang="java">package thread3.shengchan;

/**
 * 消费者
 */
public class Consumers extends Thread {
    Container container;

    public Consumers(Container container) {
        this.container = container;
    }

    @Override
    public void run() {
        // 消费者需要从仓库中消费商品
        for (int i = 1; i &lt; 100; i++) {
            // 消费者拿走商品，仓库对象调用拿走产品的方法
            Chicken chicken = container.pop();
            System.out.println(&quot;消费者消费了：&quot; + chicken.id + &quot;号鸡&quot;);
        }
    }
}
</code></pre>
						<p>&nbsp;</p>
						<h3>并发协作模型</h3>
						<p>测试类</p>
						<pre><code class="language-java" lang="java">package thread3.shengchan2;

/**
 * 并发协作模型：生产--消费者，信号灯法
 * 生产者--》演员
 * 消费者--》观众
 * 产品：--》声音
 * 信号灯：电视
 */
public class Demo {
    public static void main(String[] args) {
        TV tv = new TV();
        new Player(tv).start();
        new Watcher(tv).start();
    }
}
</code></pre>
						<p>信号灯</p>
						<pre><code class="language-java" lang="java">package thread3.shengchan2;

/**
 * 信号灯
 */
public class TV {
    // 演员说话，观众等待false
    // 观众观看，演员等待true
    boolean flag = true;

    // 说话
    String voice;

    // 表演
    public synchronized void play(String voice) {
        // 演员等待
        if (!flag) {
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println(&quot;表演了&quot; + voice);
        this.voice = voice;
        // 让观众观看
        this.notifyAll();
        this.flag = !this.flag;
    }

    public synchronized void listen() {
        // 如果观众等待
        if (flag) {
            try {
                this.wait();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println(&quot;听到了&quot; + voice);
        // 让演员说话
        this.notifyAll();
        this.flag = !this.flag;
    }

}
</code></pre>
						<p>演员，生产者</p>
						<pre><code class="language-java" lang="java">package thread3.shengchan2;

/**
 * 演员，生产者
 */
public class Player extends Thread {
    TV tv;

    public Player(TV tv) {
        this.tv = tv;
    }

    @Override
    public void run() {
        for (int i = 0; i &lt; 20; i++) {
            tv.play(&quot;节目：快乐大本营播放中&quot; + i);
        }
    }

}
</code></pre>
						<p>观众，消费者</p>
						<pre><code class="language-java" lang="java">package thread3.shengchan2;

/**
 * 观众，消费者
 */
public class Watcher extends Thread {
    TV tv;

    public Watcher(TV tv) {
        this.tv = tv;
    }

    @Override
    public void run() {
        for (int i = 0; i &lt; 20; i++) {
            tv.listen();
        }
    }

}
</code></pre>
						<p>&nbsp;</p>
						<h3>守护线程</h3>
						<p>当程序中运行剩下的都是守护线程，JVM虚拟机退出。</p>
						<p>setDaemon()：如果为true，标志着这个线程为守护线程。此方法必须在开始线程之前调用。</p>
						<p>&nbsp;</p>
						<p>源代码</p>
						<pre><code class="language-java" lang="java">public class DaemonThread extends Thread {
    @Override
    public void run() {
        while (true){
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(&quot;守护线程&quot;);
        }
    }
    public static void main(String[] args) {
        //在这个main主线程中，创建一个子线程，并设置它未守护线程
        System.out.println(&quot;程序开始&quot;);
        DaemonThread d = new DaemonThread();  //实例化守护线程对象
        d.setDaemon(true);  // true，标志着这个线程为守护线程
        d.start();
        try {
            Thread.sleep(5000);  // 决定子线程执行次数终点1~5，4次
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(&quot;程序结束&quot;);
        //上边这句输出，运行完以后，主线程就结束运行了，此程序中只剩下了一个守护线程
        //所以，这里会退出
    }
}

</code></pre>
						<p>结果</p>
						<pre><code class="language-cmd" lang="cmd">程序开始
守护线程
守护线程
守护线程
守护线程
程序结束

Process finished with exit code 0
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302025'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">线程同步</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302027'}"><span class="span-txt">JDBC</span> <img
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
	name: "302027",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



