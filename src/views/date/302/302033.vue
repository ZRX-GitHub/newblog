<template>
	<div id="D302033">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302033'}">函数式接口</router-link>
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
								<router-link :to="{name:'D302032'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">JDK8</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302034'}"><span class="span-txt">不同排序的执行时间</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-28-1</span></p>
						<h1>函数式接口</h1>
						<p>lambda表达式是接口的匿名内部类的简写形式 接口必须满足：有且仅有一个抽象方法 这种类型的接口称之为函数式接口，比如Runnable、Consumer、Comparator...
						</p>
						<p>语法：</p>
						<pre><code class="language-java" lang="java">修饰符 interface 接口名称 {
         public abstract  返回值类型 方法名称(可选的参数信息)
}
</code></pre>
						<p>@FunctionalInterface：用来修饰函数式接口的。当接口中出现多个抽象方法的时候，就会报错，符合函数式接口的语法，可以不用写此注解， 但是如果出现其它方法，就会报错。
						</p>
						<p>&nbsp;</p>
						<h3>4个内置的核心函数式接口</h3>
						<ol start="">
							<li>
								<a href="#Supplier">Supplier接口</a>
								<p>翻译过来就是供应者的意思，只产出，不获取，不接受任何参数，返回T类型的结果。用来获取一个泛型参数指定类型的对象数据。</p>
							</li>
							<li>
								<a href="#Consumer">Consumer接口</a>
								<p>和Supplier接口相反，消费一个数据，而不是生产一个数据，数据类型由泛型决定。</p>
							</li>
							<li>
								<a href="#Predicate">Predicate接口</a>
								<p>使用此接口来对某种类型的数据进行判断，从而得到一个boolean值。</p>
							</li>
							<li>
								<a href="#Function">Function接口</a>
								<p>用来根据一个类型的数据得到另一个类型的数据，前者称为前置条件，后者称为后置条件。</p>
							</li>

						</ol>
						<p>&nbsp;</p>
						<h5 id="Supplier">1、Supplier接口</h5>
						<p>翻译过来就是供应者的意思，只产出，不获取，不接受任何参数，返回T类型的结果。用来获取一个泛型参数指定类型的对象数据。</p>
						<p>需求一：定义一个方法，产生指定个数的整数，并放入到集合中，在测试方法中遍历该集合。</p>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Supplier;

/**
 * Supplier示例
 * 定义一个方法，产生指定个数的整数，并放入到集合中，在测试方法中遍历该集合
 */
public class SupplierTest {
    // 产生指定个数的整数，并放入集合
    private static List&lt;Integer&gt; getNumList(int num, Supplier&lt;Integer&gt; sup) {
        List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; num; i++) {
            list.add(sup.get());
        }
        return list;
    }

    public static void main(String[] args) {
        List&lt;Integer&gt; list = getNumList(5, () -&gt; (int)(Math.random()*100));  // 获取100以内的随机数，并强转为int型
//        for (Integer i : list) {
//            System.out.println(i);
//        }

        // 或者这样输出
        list.forEach(System.out::println);
    }
}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">16
9
40
95
33

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<p>需求二：求数组的最大值。</p>
						<p>使用Supplier接口作为参数类型，通过lambda表达式求出 int数组中的最大值。</p>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.function.Supplier;

/**
 * 求数组的最大值
 * 使用Supplier接口作为参数类型，通过lambda表达式求出 int数组中的最大值
 */
public class SupplierTest2 {
    // 定义一个方法，方法的参数传递Supplier，泛型使用的是Integer
    private static int getMax(Supplier&lt;Integer&gt; sup) {
        return sup.get();
    }

    public static void main(String[] args) {
        int[] arr = {2, 6, 81, 35, 35, 91, 44};
        // 调用getMax方法，参数传递lambda
        int maxNum = getMax(() -&gt; {
            int max = arr[0];
            for (int i : arr) {
                if (i &gt; max) {
                    max = i;
                }
            }
            return max;
        });
        System.out.println(maxNum);
    }
}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">91

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h5 id="Consumer">2、Consumer接口</h5>
						<p>和Supplier接口相反，消费一个数据，而不是生产一个数据，数据类型由泛型决定。</p>
						<p>Consumer示例，accept方法的使用。</p>
						<pre><code class="language-java" lang="java">// Consumer接口中的定义
void accept(T t);  // 对给定参数执行此操作
</code></pre>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.function.Consumer;

/**
 * Consumer示例，accept方法的使用
 */
public class ConsumerTest {
    // 写一个花钱的方法
    private static void conMoney(double money, Consumer&lt;Double&gt; con) {
        con.accept(money);
    }

    public static void main(String[] args) {
        conMoney(100, money -&gt; System.out.println(&quot;消费了&quot; + money + &quot;元&quot;));
    }

}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">消费了100.0元

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p>Consumer的默认方法，andthen。</p>
						<p>此方法可以实现效果：消费一个数据的时候，首先做一个操作，然后再做一个操作，实现组合。</p>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.function.Consumer;

/**
 * Consumer的默认方法，andThen
 * 此方法可以实现效果：消费一个数据的时候，首先做一个操作，然后再做一个操作，实现组合。
 * 要想实现组合，需要两个或者多个lambda表达式
 */
public class ConsumerTest2 {
//    public static void main(String[] args) {
//        consumerStr(  // 有多个参数，就得实现多少个
//                s -&gt; System.out.println(s.toUpperCase()),
//                s -&gt; System.out.println(s.toLowerCase())
//        );
//    }

    public static void main(String[] args) {
        consumerStr2(  // 有多个参数，就得实现多少个
                s -&gt; System.out.println(s.toLowerCase()),
                s -&gt; System.out.println(s.toUpperCase()),
                s -&gt; System.out.println(s.substring(2, 8))
        );
    }

    // andthen连接参数，消费指定的字符串
    // 两个参数，必须要全部实现
    private static void consumerStr(Consumer&lt;String&gt; con1, Consumer&lt;String&gt; con2) {
        con1.andThen(con2).accept(&quot;hello&quot;);
    }

    // 三个参数，必须要全部实现
    private static void consumerStr2(Consumer&lt;String&gt; con1, Consumer&lt;String&gt; con2, Consumer&lt;String&gt; con3) {
        con1.andThen(con2).andThen(con3).accept(&quot;dsfsfsfsf&quot;);
    }

}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">ddddfsfsfsf
DDDDFSFSFSF
DDfsfs

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p>
							Consumer示例：定义一串字符串数组，存放了多个学生的成绩信息。请按照格式：姓名、分数。将信息打印处理，要求：将打印姓名的动作作为Consumer接口的lambda实例，将打印分数动作作为第二个Consumer接口的实例，将两个接口动作按顺序拼接到一起。
						</p>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.function.Consumer;

/**
 * Consumer示例
 * 定义一串字符串数组，存放了多个学生的成绩信息。请按照格式：姓名、分数
 * 将信息打印处理
 * 要求：将打印姓名的动作作为Consumer接口的lambda实例，将打印分数动作作为第二个Consumer接口的实例，将两个接口动作按顺序拼接到一起
 */
public class ConsumerTest3 {

    // 写一个打印的方法，打印数组内容
    private static void printScore(Consumer&lt;String&gt; one, Consumer&lt;String&gt; two, String[] arrScore) {
        for (String s : arrScore) {
            one.andThen(two).accept(s);
        }
    }

    public static void main(String[] args) {
        String[] scores = {&quot;孙悟空,100&quot;, &quot;唐僧,90&quot;, &quot;八戒,80&quot;};

        printScore(
                s -&gt; System.out.print(&quot;姓名：&quot; + s.split(&quot;,&quot;)[0]),
                s -&gt; System.out.println(&quot;，分数：&quot; + s.split(&quot;,&quot;)[1]),
                scores
        );
    }

}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">姓名：孙悟空，分数：100
姓名：唐僧，分数：90
姓名：八戒，分数：80

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h5 id="Predicate">3、Predicate接口</h5>
						<p>使用此接口来对某种类型的数据进行判断，从而得到一个boolean值。</p>
						<p>&nbsp;</p>
						<p><strong>demo1</strong></p>
						<p>把长度大于3的字符串，过滤出来，并输出。</p>
						<p><strong>过滤方法</strong></p>
						<pre><code class="language-java" lang="java">private static List&lt;String&gt; filStr(List&lt;String&gt; list, Predicate&lt;String&gt; pre)
</code></pre>
						<p>调用test方法，判断是否符合条件</p>
						<pre><code class="language-java" lang="java">if (pre.test(str))
</code></pre>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

/**
 * 抽象方法test的使用：主要用于判断的场景 ，返回类型是boolean
 * 示例：将满足要求的字符串放入到集合中（过滤字符串）
 */
public class PredicateTest {
    public static void main(String[] args) {
        List&lt;String&gt; list = Arrays.asList(&quot;hello&quot;, &quot;abcd&quot;, &quot;qwert&quot;, &quot;qaz&quot;, &quot;a&quot;);
        // 把长度大于3的字符串，过滤出来，并输出
        // 调用写好的filStr，并传入之前写好的list，通过lambda表达式传入判断方法，长度大于3
        List&lt;String&gt; strList = filStr(list, s -&gt; s.length() &gt; 3);  // 判断字符串长度大于3
        // 遍历新的集合
        for (String s : strList) {
            System.out.println(s);
        }
    }

    // 写个方法，从一个集合中将满足条件的字符串放入到另一个集合中
    private static List&lt;String&gt; filStr(List&lt;String&gt; list, Predicate&lt;String&gt; pre) {
        // 创建一个新的list，为了把参数传入到list中的符合条件的字符串，加入到新的list中
        List&lt;String&gt; strList = new ArrayList&lt;&gt;();
        // 遍历参数传入的list，通过Predicate的test的方法，返回结果，把符合条件的字符串加入到新的字符串`f
        for (String str : list) {
            if (pre.test(str)) {  // 新集合调用test方法，判断是否符合条件
                strList.add(str);  // 新集合调用add方法，把 符合条件的字符串加入到新集合中
            }
        }
        return strList;  // 返回的是新加入的list
    }
}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">hello
abcd
qwert

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p><strong>demo2</strong></p>
						<p>把长度大于3，且包含 h 的字符串，过滤出来，并输出。</p>
						<p>使用and方法</p>
						<p><strong>过滤方法</strong></p>
						<pre><code class="language-java" lang="java">private static List&lt;String&gt; filStr(List&lt;String&gt; list, Predicate&lt;String&gt; pre, Predicate&lt;String&gt; pre2)
</code></pre>
						<p>两个判断条件，需要使用and方法来进行连接</p>
						<pre><code class="language-java" lang="java">if (pre.and(pre2).test(str))
</code></pre>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

/**
 * 测试Predicate中的方法
 * 既然是条件判断，就会存在与、或、非三种逻辑关系，and方法就是逻辑与的关系的体现
 *
 * and：并且,加上参数
 */
public class PredicteTest1 {
    public static void main(String[] args) {
        List&lt;String&gt; list = Arrays.asList(&quot;hello&quot;, &quot;abcd&quot;, &quot;qwert&quot;, &quot;qaz&quot;, &quot;a&quot;);
        // 把长度大于3，且包含 h 的字符串，过滤出来，并输出
        // 调用写好的filterStr，并传入之前写好的list，通过lambda表达式传入判断方法，长度大于3
        List&lt;String&gt; strList = filStr(list, s -&gt; s.length() &gt; 3,  // 判断字符串长度大于3
                s -&gt; s.contains(&quot;h&quot;));  // 判断字符串包含  h
        // 遍历新的集合
        for (String s : strList) {
            System.out.println(s);
        }
    }

    // 写个方法，从一个集合中将满足 两个条件 的字符串放入到另一个集合中
    private static List&lt;String&gt; filStr(List&lt;String&gt; list, Predicate&lt;String&gt; pre, Predicate&lt;String&gt; pre2) {
        // 创建一个新的list，为了把参数传入到list中的符合条件的字符串，加入到新的list中
        List&lt;String&gt; strList = new ArrayList&lt;&gt;();
        // 遍历参数传入的list，通过Predicate的test的方法，返回结果，把符合条件的字符串加入到新的字符串
        // 这个时候，两个判断条件，需要使用and方法来进行连接
        for (String str : list) {
            if (pre.and(pre2).test(str)) {  // 新集合调用test方法，判断是否符合条件,加上参数
                strList.add(str);  // 新集合调用add方法，把 符合条件的字符串加入到新集合中
            }
        }
        return strList;  // 返回的是新加入的list
    }
}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">hello
abcd
qwert

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p><strong>demo3</strong></p>
						<p>把长度大于3，或者包含 h 的字符串，过滤出来，并输出。</p>
						<p>使用or方法</p>
						<p><strong>过滤方法</strong></p>
						<pre><code class="language-java" lang="java">private static List&lt;String&gt; filStr(List&lt;String&gt; list, Predicate&lt;String&gt; pre, Predicate&lt;String&gt; pre2)
</code></pre>
						<p>两个判断条件，需要使用or方法来进行连接</p>
						<pre><code class="language-java" lang="java">if (pre.or(pre2).test(str))
</code></pre>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

/**
 * 测试Predicate中的方法
 * 既然是条件判断，就会存在与、或、非三种逻辑关系，and方法就是逻辑与的关系的体现
 *
 * or：或者,加上参数
 */
public class PredicteTest2 {
    public static void main(String[] args) {
        List&lt;String&gt; list = Arrays.asList(&quot;hello&quot;, &quot;abcd&quot;, &quot;qwert&quot;, &quot;qaz&quot;, &quot;ah&quot;);
        // 把长度大于3，或者包含 h 的字符串，过滤出来，并输出
        // 调用写好的filterStr，并传入之前写好的list，通过lambda表达式传入判断方法，长度大于3
        List&lt;String&gt; strList = filStr(list, s -&gt; s.length() &gt; 3,  // 判断字符串长度大于3
                s -&gt; s.contains(&quot;h&quot;));  // 判断字符串包含  h
        // 遍历新的集合
        for (String s : strList) {
            System.out.println(s);
        }
    }

    // 写个方法，从一个集合中将满足 两个条件 的字符串放入到另一个集合中
    private static List&lt;String&gt; filStr(List&lt;String&gt; list, Predicate&lt;String&gt; pre, Predicate&lt;String&gt; pre2) {
        // 创建一个新的list，为了把参数传入到list中的符合条件的字符串，加入到新的list中
        List&lt;String&gt; strList = new ArrayList&lt;&gt;();
        // 遍历参数传入的list，通过Predicate的test的方法，返回结果，把符合条件的字符串加入到新的字符串
        // 这个时候，两个判断条件，需要使用or方法来进行连接
        for (String str : list) {
            if (pre.or(pre2).test(str)) {  // 新集合调用test方法，判断是否符合条件,加上参数
                strList.add(str);  // 新集合调用add方法，把 符合条件的字符串加入到新集合中
            }
        }
        return strList;  // 返回的是新加入的list
    }
}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">hello
abcd
qwert
ah

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p><strong>demo4</strong></p>
						<p>把长度小于等于3，过滤掉，输出大于3的字符串。</p>
						<p>使用negate方法</p>
						<p><strong>过滤方法</strong></p>
						<pre><code class="language-java" lang="java">private static List&lt;String&gt; filStr(List&lt;String&gt; list, Predicate&lt;String&gt; pre)
</code></pre>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

/**
 * 测试Predicate中的方法
 * 既然是条件判断，就会存在与、或、非三种逻辑关系，and方法就是逻辑与的关系的体现
 *
 * negate：非,不用加上参数
 */
public class PredicteTest3 {
    public static void main(String[] args) {
        List&lt;String&gt; list = Arrays.asList(&quot;hello&quot;, &quot;abcd&quot;, &quot;qwert&quot;, &quot;qaz&quot;, &quot;ah&quot;);
        // 把长度小于等于3，过滤掉，输出大于3的字符串
        // 调用写好的filterStr，并传入之前写好的list，通过lambda表达式传入判断方法，长度大于3
        List&lt;String&gt; strList = filStr(list, s -&gt; s.length() &lt;= 3);  // 判断字符串长度小于等于3
        // 遍历新的集合
        for (String s : strList) {
            System.out.println(s);
        }
    }

    // 写个方法，从一个集合中将满足 两个条件 的字符串放入到另一个集合中
    private static List&lt;String&gt; filStr(List&lt;String&gt; list, Predicate&lt;String&gt; pre) {
        // 创建一个新的list，为了把参数传入到list中的符合条件的字符串，加入到新的list中
        List&lt;String&gt; strList = new ArrayList&lt;&gt;();
        // 遍历参数传入的list，通过Predicate的test的方法，返回结果，把符合条件的字符串加入到新的字符串
        for (String str : list) {
            if (pre.negate().test(str)) {  // 新集合调用test方法，判断是否符合条件,去掉参数
                strList.add(str);  // 新集合调用add方法，把 符合条件的字符串加入到新集合中
            }
        }
        return strList;  // 返回的是新加入的list
    }
}
</code></pre>
						<p>&nbsp;</p>
						<p><strong>demo5</strong></p>
						<p>数组中有多条以“姓名+性别+分数”组成的信息，通过Predicate接口拼装一个符合要求的字符串筛选到ArrayList集合中，同时满足两个条件：分数 &gt; 80，性别为女。</p>
						<p>使用and方法</p>
						<p><strong>过滤方法</strong></p>
						<pre><code class="language-java" lang="java">private static List&lt;String&gt; fileScore(String[] arrScore, Predicate&lt;String&gt; pre, Predicate&lt;String&gt; pre2)
</code></pre>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

/**
 * 数组中有多条以&quot;姓名+性别+分数&quot;组成的信息,通过Predicate接口拼装一个符合要求的字符串筛选到ArrayList集合中,同时满足两个条件
 * 分数 &gt; 80,性别为女
 *
 * 数组为:
 *      String[] scores = {&quot;张三,男,100&quot;, &quot;李四,女,95&quot;, &quot;王强,男,90&quot;, &quot;周丽,女,90&quot;, &quot;王五,男,100&quot;}
 */
public class PredicateTest4 {
    private static List&lt;String&gt; fileScore(String[] arrScore, Predicate&lt;String&gt; pre, Predicate&lt;String&gt; pre2) {
        List&lt;String&gt; list = new ArrayList&lt;&gt;();
        for (String s : arrScore) {
            if (pre.and(pre2).test(s)) {
                list.add(s);
            }

        }
        return list;
    }

    public static void main(String[] args) {
        String[] scores = {&quot;张三,男,100&quot;, &quot;李四,女,95&quot;, &quot;王强,男,90&quot;, &quot;周丽,女,90&quot;, &quot;王五,男,100&quot;};

        List&lt;String&gt; list = fileScore(scores,
                s -&gt; Integer.parseInt(s.split(&quot;,&quot;)[2]) &gt; 80,
                s -&gt; &quot;女&quot;.equals(s.split(&quot;,&quot;)[1])
        );

        System.out.println(list);
    }
}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">[李四,女,95, 周丽,女,90]

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h5 id="Function">4、Function接口</h5>
						<p>用来根据一个类型的数据得到另一个类型的数据，前者称为前置条件，后者称为后置条件。</p>
						<p>&nbsp;</p>
						<p><strong>demo1</strong></p>
						<p>apply方法，R apply(T t)； // 根据类型T的参数获取类型R的结果； 使用场景：比如将String类型经过出来以后转换成其他类型。
						</p>
						<pre><code class="language-java" lang="java">private static String strOperar(String str, Function&lt;String, String&gt; fun) {
        return fun.apply(str);
    }
</code></pre>
						<p><strong>对一个字符串，分开操作</strong></p>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.function.Function;

/**
 * apply方法,R apply(T t);  // 根据类型T的参数获取类型R的结果
 * 使用场景:比如将String类型经过出来以后转换成其他类型
 */

/**
 * 处理字符串后,重新赋值给另一个字符串
 */
public class FunctionTest {

    public static void main(String[] args) {
        String newStr = strOperar(&quot;Hello World&quot;, s -&gt; s.toUpperCase());
        System.out.println(newStr);

        String subStr = strOperar(&quot;Hello World&quot;, s -&gt; s.substring(2));
        System.out.println(subStr);

    }

    /**
     *
     * @param str  需要处理的字符串
     * @param fun  Function接口
     * @return  处理后的字符串
     */
    private static String strOperar(String str, Function&lt;String, String&gt; fun) {
        return fun.apply(str);
    }
}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">HELLO WORLD
llo World

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p><strong>demo2</strong></p>
						<p>andThen方法,用来进行组合操作。</p>
						<p>apply方法，R apply(T t)； // 根据类型T的参数获取类型R的结果； 使用场景：比如将String类型经过出来以后转换成其他类型。
						</p>
						<pre><code class="language-java" lang="java">private static String strOp(String str, Function&lt;String, String&gt; one, Function&lt;String, String&gt; two) {
        return one.andThen(two).apply(str);
    }
</code></pre>
						<p><strong>对一个字符串连续操作</strong></p>
						<pre><code class="language-java" lang="java">package jdk8_2;

/**
 * andThen方法,用来进行组合操作
 *
 * default &lt;V&gt; java.util.function.Function&lt;T, V&gt; andThen(java.util.function.Function&lt;? super R, ? extends V&gt; after) {
 *     Objects.requireNonNull(after);
 *     return (T t) -&gt; after.apply(apply(t));
 * }
 */

import java.util.function.Function;

/**
 * 示例
 *
 * 先转大写,再截取字符串
 */
public class FunctionTest2 {
    private static String strOp(String str, Function&lt;String, String&gt; one, Function&lt;String, String&gt; two) {
        return one.andThen(two).apply(str);
    }

    public static void main(String[] args) {
        String str = strOp(&quot;hello world&quot;,
                s -&gt; s.toUpperCase(),
                s -&gt; s.substring(3)
        );

        System.out.println(str);
    }

}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">LO WORLD

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p><strong>demo3</strong></p>
						<p>使用Function进行函数模型的拼接,按照顺序执行多个函数操作。</p>
						<pre><code class="language-java" lang="java">rivate static int getSal(String str,
                              Function&lt;String, String&gt; one,  // 取值,转换类型
                              Function&lt;String, Integer&gt; two,  // 取值,转换类型
                              Function&lt;Integer, Integer&gt; thr) {  // 取值,转换类型
        return one.andThen(two).andThen(thr).apply(str);
    }
</code></pre>
						<p><strong>对一个字符串进行连续操作</strong></p>
						<pre><code class="language-java" lang="java">package jdk8_2;

import java.util.function.Function;

/**
 * 使用Function进行函数模型的拼接,按照顺序执行多个函数操作
 * String str = &quot;张三,8000&quot;
 * 将字符串截取的数字薪水部分,得到字符串
 * 将上一步的字符串转为int类型的数字
 * 将上一步的int数字加上1000,得到新的结果int数字
 */
public class FunctionDemo7 {
    private static int getSal(String str,
                              Function&lt;String, String&gt; one,  // 取值,转换类型
                              Function&lt;String, Integer&gt; two,  // 取值,转换类型
                              Function&lt;Integer, Integer&gt; thr) {  // 取值,转换类型
        return one.andThen(two).andThen(thr).apply(str);
    }

    public static void main(String[] args) {
        int sal = getSal(&quot;张三,8000&quot;,
                s -&gt; s.split(&quot;,&quot;)[1],
                s -&gt; Integer.parseInt(s),
                s -&gt; s += 1000
        );

        System.out.println(sal);
    }

}
</code></pre>
						<p><strong>结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">9000

Process finished with exit code 0
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302032'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">JDK8</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302034'}"><span class="span-txt">不同排序的执行时间</span> <img
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
	name: "302033",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



