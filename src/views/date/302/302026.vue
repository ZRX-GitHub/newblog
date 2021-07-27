<template>
	<div id="D302026">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302026'}">线程的状态</router-link>
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
									class="span-txt">线程的状态</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302027'}"><span class="span-txt">线程池</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-10-2</span></p>
						<h2>线程同步（重点）</h2>
						<p><strong>并发</strong>：同一个对象被多个线程同时操作。比如抢票、秒杀、同时取钱（线下+线上）</p>
						<p><strong>同步</strong>：解决并发问题引起的不安全线程的问题，队列+锁。现实生活中会经常遇到同一个资源想使用，比如排队上卫生间、食堂排队打饭。处理多线程问题的时候，多个线程访问一个对象，并且某些线程还想修改对象，这个时候就需要线程同步。
						</p>
						<p>线程同步形成的条件：队列+锁。</p>
						<ol start="">
							<li>
								同一个进程多个线程共享一块存储空间，在带来方便的同时，也带来了访问冲突。为了保证数据在方法中被访问的正确性，在访问的时候加入锁机制（synchronized）。当一个线程获得锁，这个时候就会独占资源，其他线程必须等待；
							</li>
							<li>一个线程持有锁，会导致其他需要此锁的线程挂起；</li>
							<li>在多线程的竞争下，加锁、释放锁都会导致比较多的上下文切换，调度的延迟，会引起性能问题；</li>
							<li>如果一个优先级高的线程等待一个优先级低的线程释放锁，会导致优先级倒置，也会引起性能问题。</li>

						</ol>
						<p>&nbsp;</p>
						<h3>使用synchronized的方法</h3>
						<p>1、修饰方法</p>
						<pre><code class="language-java" lang="java">public synchronized void method(int a) {方法体}
</code></pre>
						<p>修饰方法会控制对”对象“的访问，每个对象都对应一把锁，每个synchronized方法都必须获得调用该方法的对象的锁，才能执行，否则线程会堵塞。</p>
						<p>方法一旦运行，就独占该锁，直到该方法返回才释放锁，后面等待的线程才能获得这把锁，继续执行。</p>
						<p>2、修饰代码块</p>
						<pre><code class="language-java" lang="java">synchronized(参数) {代码块}
</code></pre>
						<p>修饰代码块，存入的参数被称为同步监视器。参数可以是任何对象，但是推荐使用共享资源作为监视器。同步方法是不需要指定同步监视器的，因为同步方法的同步监视器就是this。</p>
						<p><strong>监视器的执行过程</strong>：</p>
						<ol start="">
							<li>第一个线程访问，锁定同步监视器，执行代码；</li>
							<li>第二个线程访问，发现同步监视器被锁定，无法访问；</li>
							<li>第一个线程访问完了，解锁了监视器；</li>
							<li>第二个线程访问，发现同步监视器没有锁，进入锁定并访问。</li>

						</ol>
						<h3>同步会带来死锁</h3>
						<p>
							多个线程各自占有一些共享资源，并且相互等待其他线程占有的资源才能运行，而导致两个或者多个线程都在等待对方释放资源，都停止执行的情性，某一个同步块同时拥有2个以上对象的锁的时候，都可能发生死锁。出现死锁后，不会出现异常，不会出现提示，只是所有的线程处于阻塞状态，无法继续运行。使用的多线程的时候，要避免死锁。</p>
						<p>&nbsp;</p>
						<h5>示例1（抢票）</h5>
						<p>源代码</p>
						<pre><code class="language-java" lang="java">package threadSync;

/**
 * 线程同步问题1，线程不安全的买票问题
 * @author 10119
 */
public class UnsafeBuyTicket implements Runnable {
    /**
     * 需要票数，10张票
     */
    private int ticketNums = 10;

    // 标志位
    private boolean flag = true;

    @Override
    public void run() {
        // 买票
        while (flag) {
            // 买票方法
            try {
                Thread.sleep(200);
                buyTicket();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * 买票方法
     * 解决方法，使用synchronized修饰买票方法
     */
    public synchronized void buyTicket() {
        // 判断票数小于0，买票结束
        if (ticketNums &lt;= 0) {
            flag = false;
            return;
        }
        System.out.println(Thread.currentThread().getName() + &quot;买到了第&quot; + ticketNums-- + &quot;张票&quot;);
    }

    public static void main(String[] args) {
        // 实现多线程抢票
        UnsafeBuyTicket byTickets = new UnsafeBuyTicket();
        new Thread(byTickets, &quot;小红&quot;).start();
        new Thread(byTickets, &quot;小明&quot;).start();
        new Thread(byTickets, &quot;黄牛&quot;).start();

    }

}
</code></pre>
						<p>结果</p>
						<pre><code class="language-cmd" lang="cmd">小明买到了第10张票
黄牛买到了第9张票
小红买到了第8张票
黄牛买到了第7张票
小红买到了第6张票
小明买到了第5张票
小红买到了第4张票
黄牛买到了第3张票
小明买到了第2张票
小红买到了第1张票

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h5>示例2</h5>
						<p>源代码</p>
						<pre><code class="language-java" lang="java">package threadSync;

import java.util.ArrayList;
import java.util.List;

/**
 * 线程不安全问题2，集合的操作
 */
public class UnsafeList {
    public static void main(String[] args) {
        // 新建一个list对象
        List&lt;String&gt; list = new ArrayList&lt;String&gt;();
        for (int i = 0; i &lt; 20000; i++) {
            new Thread(() -&gt; {  // 使用表达式来往List中添加数据
                // 同步代码块，解决list不安全问题
                synchronized (list) {
                    list.add(Thread.currentThread().getName());
                }
            }).start();
        }
        for (int i = 0; i &lt; 5; i++) {
            try {
                Thread.sleep(1000);
                System.out.println(&quot;倒计时：&quot; + i);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        System.out.println(list.size());  // 查看集合中存放了多少内容

    }
}
</code></pre>
						<p>结果</p>
						<pre><code class="language-cmd" lang="cmd">倒计时：0
倒计时：1
倒计时：2
倒计时：3
倒计时：4
20000

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h5>示例3（银行取钱）</h5>
						<p>源代码</p>
						<pre><code class="language-java" lang="java">package threadSync;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

/**
 * 线程不安全的银行取钱操作
 */
public class UnsafeTakeMoney {
    public static void main(String[] args) {
        // 实例化一个账户
        Account account = new Account(10000, &quot;建设银行&quot;);
        Bank you = new Bank(&quot;小明&quot;, account, 5000);
        Bank me = new Bank(&quot;小红&quot;, account, 10000);
        you.start();
        me.start();
    }
}

// 账户类
class Account {
    int money;  // 余额
    String name;  // 卡名

    public Account() {
    }

    public Account(int money, String name) {
        this.money = money;
        this.name = name;
    }
}

// 银行类
class Bank extends Thread {
    Account account;  // 银行账户
    int takeMoney;  // 取钱操作
    int nowMoney;  // 现在的余额
    Lock lock = new ReentrantLock();

    public Bank() {
    }

    public Bank(String name, Account account, int takeMoney) {
        super(name);
        this.account = account;
        this.takeMoney = takeMoney;
    }

    // 重写run方法
    @Override
    public void run() {
        takeMoney();
    }

    // 单独写一个takeMoney方法
    public void takeMoney() {
//        account.lock.
        // 判断是否可以取钱，余额的钱小于了想取的钱，就结束（非法操作）
        if (account.money &lt;= 0) {
            return;
        }
        // 加一个synchronized代码块
        // 怎么判断锁加在谁身上，谁需要实现增删改就去锁定它
        synchronized (account) {

            if ((account.money - takeMoney) &lt; 0) {
                System.out.println(Thread.currentThread().getName() + &quot;来晚了，钱没了&quot;);
                return;
            }
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            // 新余额 = 原本余额 - 取出的钱
            account.money = account.money - takeMoney;
            // 你的钱 = 你原有的钱 + 你取走的钱
            nowMoney = nowMoney + takeMoney;
            System.out.println(this.account.name + &quot;账户余额：&quot; + account.money);
            System.out.println(this.getName() + &quot;取到的钱：&quot; + nowMoney);
        }

    }

}
</code></pre>
						<p>&nbsp;</p>
						<h3>死锁的演示</h3>
						<p><strong>死锁产生的4个必要条件</strong></p>
						<ol start="">
							<li>互斥条件：一个资源每次只能被一个进程使用；</li>
							<li>请求与保存条件：一个进程因请求资源而阻塞，对已获得的资源保持不放；</li>
							<li>不剥夺条件：进程已获得的资源，在未使用完之前，不能强行剥夺；</li>
							<li>循环等待条件：若干个进程之间形成了一种头尾相接循环等待资源关系。</li>

						</ol>
						<p>以上的4个条件，只要想办法去掉其中一个，或者多个条件就可以避免锁的发生。</p>
						<p>取镜子、口红</p>
						<p>源代码</p>
						<pre><code class="language-java" lang="java">package threadSync;

public class DeadLock {
    public static void main(String[] args) {
        Test hz1 = new Test(0, &quot;你&quot;);
        Test hz2 = new Test(1, &quot;我&quot;);
        new Thread(hz1).start();
        new Thread(hz2).start();
    }
}

class Test implements Runnable {
    int choice;  // 选择
    String name;  // 谁

    // 需要口红和镜子对象
    static kouHong kouHong = new kouHong();
    static Mirror mirror = new Mirror();

    public Test (int choice, String name) {
        this.choice = choice;
        this.name = name;
    }

    @Override
    public void run() {
        // 执行化妆的操作
        try {
            huazhuang();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    // 化妆方法
    public void huazhuang() throws InterruptedException {
        if (choice == 0) {  // 先拿口红，再拿镜子
            synchronized (kouHong) {
                System.out.println(Thread.currentThread().getName() + &quot;拿到了口红！&quot;);
                Thread.sleep(1000);
                // 等待拿到镜子的人，释放镜子
            }
            synchronized (mirror) {
                System.out.println(Thread.currentThread().getName() + &quot;拿到镜子！&quot;);
            }

        } else { // 拿到镜子了，再拿口红
            synchronized (mirror) {
                System.out.println(Thread.currentThread().getName() + &quot;拿到了镜子！&quot;);
                Thread.sleep(1000);
                // 等待拿口红的人释放
            }
            synchronized (kouHong) {
                System.out.println(Thread.currentThread().getName() + &quot;拿到口红！&quot;);
            }
        }
    }

}

// 口红对象
class kouHong {
}

// 镜子
class Mirror {
}
</code></pre>
						<p>结果</p>
						<pre><code class="language-cmd" lang="cmd">Thread-0拿到了口红！
Thread-1拿到了镜子！
Thread-1拿到口红！
Thread-0拿到镜子！

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h5>同步锁的使用Lock对象充当</h5>
						<ul>
							<li>锁提供了共享资源的独占访问，每次只能有一个线程对Lock对象加锁；</li>
							<li>线程开始访问共享资源之前，应该先获得Lock对象；</li>
							<li>ReentrantLock类实现了Lock，拥有和synchronized相同的并性和内存语义在实现线程安全控制中，比较常用ReentrantLock用来显示加锁、释放锁。
							</li>

						</ul>
						<h5>Lock和synchronized的区别</h5>
						<ul>
							<li>Lock是显示锁 （需要手动开启和关闭锁）、synchronized是隐示的锁；</li>
							<li>Lock只有代码块锁，synchronized有方法锁和代码块锁；</li>
							<li>Lock，使用的时候JVM会花费较少的时间来调度线程，性能更好，具有更好的扩展性。</li>

						</ul>
						<p>&nbsp;</p>
						<p>优先使用Lock-》同步代码块-》同步方法</p>
						<pre><code class="language-java" lang="java">class A {
private final ReentrantLock lock = new ReentrantLock();

public void method() {}
	ock.lock();
	try {
    // 代码
    } finally {
   	 	lock.unlock();
    }
}
</code></pre>
						<p>&nbsp;</p>
						<h5>示例1</h5>
						<p>源代码</p>
						<pre><code class="language-java" lang="java">package threadSync;

import java.util.concurrent.locks.ReentrantLock;

public class TestLock {
    public static void main(String[] args) {
        LockDemo lockDemo = new LockDemo();
        new Thread(lockDemo, &quot;小明&quot;).start();
        new Thread(lockDemo, &quot;小红&quot;).start();

    }
}

class LockDemo implements Runnable {
    int ticketNums = 100;  // 票数
    private final ReentrantLock lock = new ReentrantLock();  // 声明可重入锁
//    private String name;
//
//    public LockDemo() {

//    }

    @Override
    public void run() {

        while (true) {
            try {
                lock.lock(); // lock对象调用类的lock方法
                if (ticketNums &gt; 0) {
                    try {
                        Thread.sleep(1000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    System.out.println(Thread.currentThread().getName() + &quot;抢到了第&quot; + ticketNums-- + &quot;张票！&quot;);
                } else {
                    break;
                }
            } finally {
                lock.unlock();  // 解锁
            }

        }
    }
}
</code></pre>
						<p>结果（提前终止）</p>
						<pre><code class="language-cmd" lang="cmd">小明抢到了第100张票！
小红抢到了第99张票！
小红抢到了第98张票！
小红抢到了第97张票！
小红抢到了第96张票！
小红抢到了第95张票！
小红抢到了第94张票！

Process finished with exit code -1
</code></pre>
						<p>&nbsp;</p>
						<h5>示例2（取银行取钱）</h5>
						<p>源代码</p>
						<pre><code class="language-java" lang="java">package threadSync;

/**
 * 有银行卡和存折，分别去取账户里的钱，银行卡每次取 2 元，存折每次取 1 元，现账户卡里有 1000 元，怎么样才能
 * 保证卡和存折去取钱，每次的交易是正确的？
 * • 1）每次交易打印出谁来取，取了多少？
 * • 2）每次交易后打印余额还剩多少？
 * • 3）余额不够时，提示用户：“余额不足”
 */
public class GoToBankTakeMoney {
    public static void main(String[] args) {
        Account2 account2 = new Account2(1000, &quot;中国银行&quot;);
        Bank2 userBankBook = new Bank2(&quot;小红&quot;, &quot;存折&quot;, account2, 50);
        Bank2 userBankCard = new Bank2(&quot;小明&quot;, &quot;银行卡&quot;, account2, 100);
        userBankCard.start();
        userBankBook.start();
    }
}

// 账户
class Account2 {
    int money;  // 账上存款数目
    String name; // 哪家银行

    public Account2() {
    }

    // 取款
    public Account2(int money, String name) {
        this.money = money;
        this.name = name;
    }

}

// 银行类
class Bank2 extends Thread {
    Account2 account;  // 银行账户
    int takeMoney;  // 取钱操作
    int nowMoney;  // 现在的余额
    String takeWay;  // 取款方式
    boolean flag = true;  // 循环取款

    public Bank2() {

    }

    public Bank2(String name, String takeWay, Account2 account, int takeMoney) {
        super(name);
        this.takeWay = takeWay;
        this.account = account;
        this.takeMoney = takeMoney;

    }

    @Override
    public void run() {
        while (flag) {
            try {
                takeMoney2();
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }

    // 取钱操作
    public void takeMoney2() {
        // 判断账户上的存款是否可以满足本次取款操作
        if (account.money &lt;= 0) {
            return;
        }

        synchronized (account) {
            if ((account.money-takeMoney) &lt; 0) {
                System.out.println(&quot;账上余额为：&quot; + account.money + &quot;，&quot; + Thread.currentThread().getName() + &quot;无法取款！&quot;);
                flag = false;
                return;
            }

            // 新余额 = 原余额 - 取出的钱
            account.money = account.money - takeMoney;
            // 你的钱 = 原有的钱 + 取走的钱
            nowMoney = nowMoney + takeMoney;
            System.out.println(this.getName() + &quot;使用&quot; + this.takeWay + &quot;取到的钱：&quot; + takeMoney);
            System.out.println(this.account.name + &quot;账户余额：&quot; + account.money);
        }
    }

}
</code></pre>
						<p>结果</p>
						<pre><code class="language-cmd" lang="cmd">小明使用银行卡取到的钱：100
中国银行账户余额：900
小红使用存折取到的钱：50
中国银行账户余额：850
小明使用银行卡取到的钱：100
中国银行账户余额：750
小红使用存折取到的钱：50
中国银行账户余额：700
小红使用存折取到的钱：50
中国银行账户余额：650
小明使用银行卡取到的钱：100
中国银行账户余额：550
小红使用存折取到的钱：50
中国银行账户余额：500
小明使用银行卡取到的钱：100
中国银行账户余额：400
小红使用存折取到的钱：50
中国银行账户余额：350
小明使用银行卡取到的钱：100
中国银行账户余额：250
小红使用存折取到的钱：50
中国银行账户余额：200
小明使用银行卡取到的钱：100
中国银行账户余额：100
小红使用存折取到的钱：50
中国银行账户余额：50
账上余额为：50，小明无法取款！
小红使用存折取到的钱：50
中国银行账户余额：0
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302025'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">线程的状态</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302027'}"><span class="span-txt">线程池</span> <img
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
	name: "302026",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



