<template>
	<div id="D302030">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302030'}">反射</router-link>
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
								<router-link :to="{name:'D302029'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">员工信息管理项目</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302031'}"><span class="span-txt">注解</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-23-1</span></p>
						<h1>反射</h1>
						<p>
							反射可以说是框架设计的灵魂。很多优秀的开源框架都是通过反射完成的，比如<strong>SpringMVC</strong>、<strong>Spring</strong>、<strong>Redis</strong>、MybatisDubbo、Maven、RabbitMQ、Log4j、Ehcache、Shiro等。
						</p>
						<p>框架：半成品软件，可以在框架的基础上进行软件开发，简化代码。
							概念：将类的各个组成部分封装为其它对象，这就是反射机制。</p>
						<p>&nbsp;</p>
						<h5>java在计算机中经历的三个阶段</h5>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/QQ%E6%88%AA%E5%9B%BE20201223232851.png"
												   referrerpolicy="no-referrer" alt="QQ截图20201223232851"></div>
						</p>
						<p>第一个阶段（<strong>源代码阶段</strong>）：</p>
						<p>先从<strong>java文件</strong>按成员变量、构造方法、成员方法通过<strong>javac</strong>编译成<strong>class文件</strong>。如上图Person.java--&gt;Person.class
						</p>
						<p>第二个阶段（<strong>Class类对象阶段</strong>）：</p>
						<p>通过<strong>类加载器</strong>把class文件中的成员变量、构造方法、成员方法加载到<strong>内存</strong>中。</p>
						<p>第三个阶段（<strong>Runtime运行时阶段</strong>）：</p>
						<p>该阶段就可以创建对象和调用对象里的方法了。</p>
						<p>&nbsp;</p>
						<p><strong>好处</strong>：</p>
						<ol start="">
							<li>可以在程序运行过程中，操作这些对象。
								比如定义一个字符串，通过字符串可以调用各种方法，其实这些方法是从String类的字节码中，通过反射机制，加载进内存，把所有方法封抽取出来，放入到method数组中。
							</li>
							<li>可以解耦，提高程序的可扩展性。</li>

						</ol>
						<p>&nbsp;</p>
						<p>获取class对象的方式：</p>
						<ol start="">
							<li>第一阶段，还没有加载的时候
								Class.forName(&quot;全类名&quot;)：将字节码文件加载进内存，返回class对象。一般用于配置文件，将类定义在配置文件中，读取文件。
							</li>
							<li>加载进内存以后
								类名.class：通过类名的class属性获取。
								用于参数的传递
							</li>
							<li>实列化对象以后
								通过对象.getClass()：getClass()方法定义在Object类中，多用于对象的获取字节码的方式。
							</li>

						</ol>
						<p>&nbsp;</p>
						<p>类对象的获取功能：</p>
						<ol start="">
							<li>
								<p>获取成员变量们</p>
								<ul>
									<li>Field getField(String name)</li>

								</ul>
								<ul>
									<li>Field[] getFields()</li>

								</ul>
								<ul>
									<li>Field getDeclaredField(String name)</li>

								</ul>
								<ul>
									<li>Field[] getDeclaredFields()</li>

								</ul>
								<p>&nbsp;</p>
							</li>
							<li>
								<p>获取构造方法们</p>
								<ul>
									<li>Constructor
										<T> getDeclaredConstructor(类&lt;?&gt;... parameterTypes)</T>
									</li>

								</ul>
								<ul>
									<li>Constructor&lt;?&gt;[] getDeclaredConstructors()</li>

								</ul>
								<ul>
									<li>Constructor
										<T> getConstructor(类&lt;?&gt;... parameterTypes)</T>
									</li>

								</ul>
								<ul>
									<li>Constructor&lt;?&gt;[] getConstructors()</li>

								</ul>
							</li>
							<li>
								<p>获取成员方法们</p>
								<ul>
									<li>Method getDeclaredMethod(String name, 类&lt;?&gt;... parameterTypes)</li>

								</ul>
								<ul>
									<li>Method[] getDeclaredMethods()</li>

								</ul>
								<ul>
									<li>Method getMethod(String name, 类&lt;?&gt;... parameterTypes)</li>

								</ul>
								<ul>
									<li>Method[] getMethods()</li>

								</ul>
							</li>
							<li>
								<p>获取类名</p>
								<ul>
									<li>String getName()</li>

								</ul>
							</li>

						</ol>
						<p>&nbsp;</p>
						<p><a id="Person.java"><strong>此类用于refflact包内使用</strong></a></p>
						<pre><code class="language-java" lang="java">package reflact;

/**
 * 实体类
 */
public class Person {
    private String name;
    private int age;
    private String a;
    protected String b;
    String c;
    public String d;

    public void eat() {
        System.out.println(&quot;eat&gt;&gt;&gt;&gt;&gt;&gt;&quot;);
    }

    public void eat(String str) {
        System.out.println(&quot;eat&gt;&gt;&gt;&gt;&gt;&gt;&quot; + str);
    }

    public void sleep() {
        System.out.println(&quot;sleep&gt;&gt;&gt;&gt;&gt;&gt;&quot;);
    }

    @Override
    public String toString() {
        return &quot;Person{&quot; +
                &quot;name=&#39;&quot; + name + &#39;\&#39;&#39; +
                &quot;, age=&quot; + age +
                &quot;, a=&#39;&quot; + a + &#39;\&#39;&#39; +
                &quot;, b=&#39;&quot; + b + &#39;\&#39;&#39; +
                &quot;, c=&#39;&quot; + c + &#39;\&#39;&#39; +
                &quot;, d=&#39;&quot; + d + &#39;\&#39;&#39; +
                &#39;}&#39;;
    }

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

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Person() {
    }
}
</code></pre>
						<p>
							<strong>Class.forName(&quot;全类名&quot;)：将字节码文件加载进内存，返回class对象。一般用于配置文件，将类定义在配置文件中，读取文件。</strong>
						</p>
						<pre><code class="language-java" lang="java">className=reflact.Person
#className=annotation.Person
methodName=sleep
</code></pre>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224084704211.png"
												   referrerpolicy="no-referrer" alt="image-20201224084704211"></div>
						</p>
						<p>&nbsp;</p>
						<h3>获取class对象的方式</h3>
						<ol start="">
							<li>第一阶段，还没有加载的时候
								Class.forName(&quot;全类名&quot;)：将字节码文件加载进内存，返回class对象。一般用于配置文件，将类定义在配置文件中，读取文件。
							</li>
							<li>加载进内存以后
								类名.class：通过类名的class属性获取。用于参数的传递
							</li>
							<li>实列化对象以后
								通过对象.getClass()：getClass()方法定义在Object类中，多用于对象的获取字节码的方式。
							</li>

						</ol>
						<p>&nbsp;</p>
						<h5>示例一</h5>
						<pre><code class="language-java" lang="java">package reflact;

/**
 * 测试类
 *
 */
public class PersonTest {
    public static void main(String[] args) throws Exception {
        // Class.forName(&quot;全类名&quot;)
        Class cls1 = Class.forName(&quot;reflact.Person&quot;);
        System.out.println(cls1);

        // 类名.Class
        Class cls2 = Person.class;  // 2、加载进内存以后，类名.class：通过类名的class属性获取。用于参数的传递。
        System.out.println(cls2);
        // 对象.getClass()
        Person p = new Person();
        Class cls3 = p.getClass();
        System.out.println(cls3);
        // 比较三个对象是否相等
        System.out.println(cls1 == cls2);  // true
        System.out.println(cls1 == cls3);  // true
        System.out.println(cls2 == cls3);  // true
        // 同一个字节码文件，在同一个程序运行过程中，只会被加载一次
        // 那不管通过哪一种方式获取到的对象，都是同一个
    }

}
</code></pre>
						<p><a href="#Person.java"><strong>结果，</strong>点击跳转Person.java。</a></p>
						<pre><code class="language-cmd" lang="cmd">class reflact.Person
class reflact.Person
class reflact.Person
true
true
true

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h3>类对象的获取</h3>
						<ol start="">
							<li>
								<p>获取成员变量们</p>
								<ul>
									<li>Field getField(String name)</li>
									<li>Field[] getFields()</li>
									<li>Field getDeclaredField(String name)</li>
									<li>Field[] getDeclaredFields()</li>

								</ul>
							</li>
							<li>
								<p>获取构造方法们</p>
								<ul>
									<li>Constructor
										<T> getDeclaredConstructor(类&lt;?&gt;... parameterTypes)</T>
									</li>
									<li>Constructor&lt;?&gt;[] getDeclaredConstructors()</li>
									<li>Constructor
										<T> getConstructor(类&lt;?&gt;... parameterTypes)</T>
									</li>
									<li>Constructor&lt;?&gt;[] getConstructors()</li>

								</ul>
							</li>
							<li>
								<p>获取成员方法们</p>
								<ul>
									<li>Method getDeclaredMethod(String name, 类&lt;?&gt;... parameterTypes)</li>
									<li>Method[] getDeclaredMethods()</li>
									<li>Method getMethod(String name, 类&lt;?&gt;... parameterTypes)</li>
									<li>Method[] getMethods()</li>

								</ul>
							</li>
							<li>
								<p>获取类名</p>
								<ul>
									<li>String getName()</li>

								</ul>
							</li>

						</ol>
						<p>&nbsp;</p>
						<h5>示例一</h5>
						<pre><code class="language-java" lang="java">package reflact;

import java.lang.reflect.Field;

/**
 * 1，获取成员变量们
 *      Field    getField(String name)  获取指定的成员变量,只能是public
 *      Field[]  getFields()    获取所有public修饰的成员变量
 *      Field    getDeclaredField(String name)  获取指定的成员变量，不考虑修饰符
 *      Field[]  getDeclaredFields()  获取所有成员变量，不考虑修饰符
 */
public class TestFiled {
    public static void main(String[] args) throws Exception {
        // 获取Person的class对象
        Class personClass = Person.class;
        // 获取成员变量
        // Field[]
        System.out.println(&quot;获取所有public修饰的成员变量&quot;);
        Field[] fields = personClass.getFields();  // 获取所有public修饰的成员变量
        // 遍历获取到的成员变量
        for (Field field : fields) {
            System.out.println(field);
        }
        System.out.println(&quot;************************&quot;);
        // 2、Field getField
        System.out.println(&quot;获取指定的成员变量,只能是public&quot;);
        Field a = personClass.getField(&quot;d&quot;);  // 获取指定的成员变量,只能是public
        Person p = new Person();
        Object o = a.get(p);
        System.out.println(o);
        // 设置成员变量的值
        a.set(p, &quot;张三&quot;);
        System.out.println(p);
        System.out.println(&quot;************************&quot;);
        System.out.println(&quot;获取所有成员变量，不考虑修饰符&quot;);
        // 3、Field[] getDe
        Field[] declaredFields = personClass.getDeclaredFields();  // 获取所有成员变量，不考虑修饰符
        // 遍历获取到的成员变量的值
        for (Field declaredField : declaredFields) {
            System.out.println(declaredField);
        }
        System.out.println(&quot;************************&quot;);
        System.out.println(&quot;取指定的成员变量，不考虑修饰符&quot;);
        // 4、Field getDe
        Field name = personClass.getDeclaredField(&quot;name&quot;);  // 获取指定的成员变量，不考虑修饰符
        // 忽略访问权限修饰符的安全检查
        name.setAccessible(true);  // 暴力反射
        Object o1 = name.get(p);
        System.out.println(o1);

    }
}
</code></pre>
						<p>暴力反射：忽略访问权限修饰符的安全检查。name.setAccessible(true); </p>
						<p><a href="#Person.java"><strong>结果，</strong>点击跳转Person.java。</a></p>
						<pre><code class="language-cmd" lang="cmd">获取所有public修饰的成员变量
public java.lang.String reflact.Person.d
************************
获取指定的成员变量,只能是public
null
Person{name=&#39;null&#39;, age=0, a=&#39;null&#39;, b=&#39;null&#39;, c=&#39;null&#39;, d=&#39;张三&#39;}
************************
获取所有成员变量，不考虑修饰符
private java.lang.String reflact.Person.name
private int reflact.Person.age
private java.lang.String reflact.Person.a
protected java.lang.String reflact.Person.b
java.lang.String reflact.Person.c
public java.lang.String reflact.Person.d
************************
取指定的成员变量，不考虑修饰符
null

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h5>示例二</h5>
						<pre><code class="language-java" lang="java">package reflact;

import java.lang.reflect.Constructor;

/**
 * 2，获取构造方法们
 *   Constructor&lt;T&gt;    getDeclaredConstructor(类&lt;?&gt;... parameterTypes)
 *   Constructor&lt;?&gt;[]  getDeclaredConstructors()
 *   Constructor&lt;T&gt;    getConstructor(类&lt;?&gt;... parameterTypes)
 *   Constructor&lt;?&gt;[]  getConstructors()
 */
public class TestConstructor {
    public static void main(String[] args) throws Exception {
        // 获取Person的Class对象
        Class personClass = Person.class;
        System.out.println(&quot;**********************************&quot;);
        System.out.println(&quot;Constructor&lt;T&gt;    getDeclaredConstructor(类&lt;?&gt;... parameterTypes)&quot;);
        // 1、Constructor&lt;T&gt;    getDeclaredConstructor(类&lt;?&gt;... parameterTypes)
        Constructor constructor = personClass.getConstructor(String.class, int.class);
        System.out.println(constructor);
        // 创建对象
        Object person = constructor.newInstance(&quot;张三&quot;, 20);
        System.out.println(person);
        System.out.println(&quot;**********************************&quot;);
        System.out.println(&quot;Constructor&lt;T&gt;    getConstructor(类&lt;?&gt;... parameterTypes)&quot;);
        // 2、Constructor&lt;T&gt;    getConstructor(类&lt;?&gt;... parameterTypes)
        Constructor constructor1 = personClass.getConstructor();
        System.out.println(constructor1);
        // 创建对象
        Object person1 = constructor1.newInstance();
        System.out.println(person1);
        // 通过Class类来new
        Object o = personClass.newInstance();
        System.out.println(o);


    }
}
</code></pre>
						<p><a href="#Person.java"><strong>结果，</strong>点击跳转Person.java。</a></p>
						<pre><code class="language-cmd" lang="cmd">**********************************
Constructor&lt;T&gt;    getDeclaredConstructor(类&lt;?&gt;... parameterTypes)
public reflact.Person(java.lang.String,int)
Person{name=&#39;张三&#39;, age=20, a=&#39;null&#39;, b=&#39;null&#39;, c=&#39;null&#39;, d=&#39;null&#39;}
**********************************
Constructor&lt;T&gt;    getConstructor(类&lt;?&gt;... parameterTypes)
public reflact.Person()
Person{name=&#39;null&#39;, age=0, a=&#39;null&#39;, b=&#39;null&#39;, c=&#39;null&#39;, d=&#39;null&#39;}
Person{name=&#39;null&#39;, age=0, a=&#39;null&#39;, b=&#39;null&#39;, c=&#39;null&#39;, d=&#39;null&#39;}

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h5>示例三</h5>
						<pre><code class="language-java" lang="java">package reflact;

import java.lang.reflect.Method;

/**
 * 3，获取成员方法们
 *  Method    getDeclaredMethod(String name, 类&lt;?&gt;... parameterTypes)
 *  Method[]  getDeclaredMethods()
 *  Method    getMethod(String name, 类&lt;?&gt;... parameterTypes)
 *  Method[]  getMethods()
 */
public class TestMethod {
    public static void main(String[] args) throws Exception {
        // 获取Person的Class对象
        Class personClass = Person.class;
        // 获取指定的方法
        System.out.println(&quot;***********无参***********&quot;);
        Method eat = personClass.getMethod(&quot;eat&quot;);
        // 创建对象
        Person p = new Person();
        // 指定方法
        eat.invoke(p);

        // 获取含参的方法
        System.out.println(&quot;***********有参***********&quot;);
        Method eat1 = personClass.getMethod(&quot;eat&quot;, String.class);
        eat1.invoke(p, &quot;饭&quot;);
        // 获取所有public修饰方法
        System.out.println(&quot;***********获取所有public修饰方法***********&quot;);
        Method[] methods = personClass.getMethods();
        for (Method method : methods) {
//            System.out.println(method);
            // 获取方法名
            String name = method.getName();
            System.out.println(name);
        }
        // 获取类名
        System.out.println(&quot;***************获取类名***************&quot;);
        String className = personClass.getName();
        System.out.println(className);

    }
}
</code></pre>
						<p><a href="#Person.java"><strong>结果，</strong>点击跳转Person.java。</a></p>
						<pre><code class="language-cmd" lang="cmd">***********无参***********
eat&gt;&gt;&gt;&gt;&gt;&gt;
***********有参***********
eat&gt;&gt;&gt;&gt;&gt;&gt;饭
***********获取所有public修饰方法***********
toString
getName
setName
sleep
eat
eat
setAge
getAge
wait
wait
wait
equals
hashCode
getClass
notify
notifyAll
***************获取类名***************
reflact.Person

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h3>简易版框架</h3>
						<p>要求，写一个简易版的框架，在不改变代码的情况下，可以帮助我们创建任意的类对象，并且执行其中的任意方法。</p>
						<p>步骤：</p>
						<ol start="">
							<li>将需要创建的对象的全类名和需要执行的方法定义在配置文件中；</li>
							<li>在程序中加载读取的配置文件；</li>
							<li>使用反射技术来加载类文件进内存；</li>
							<li>创建对象；</li>
							<li>执行方法。</li>

						</ol>
						<p>&nbsp;</p>
						<h5>获取无参</h5>
						<pre><code class="language-java" lang="java">package reflact;

import java.io.InputStream;
import java.lang.reflect.Method;
import java.util.Properties;

/**
 * 要求，写一个简易版的框架，在不改变代码的情况下，可以帮助我们创建任意的类对象，并且执行其中的任意方法。
 *
 * 步骤：
 *      1、将需要创建的对象的全类名和需要执行的方法定义在配置文件中；
 *      2、在程序中加载读取的配置文件；
 *      3、使用反射技术来加载类文件进内存；
 *      4、创建对象；
 *      5、执行方法。
 */
public class TestReflact {
    public static void main(String[] args) throws Exception {
        // 可以创建任意类的对象，可以执行任意的方法
        // 以前的做法
        /*Person p = new Person();
        p.eat();*/
        /*Student stu = new Student();
        stu.study();*/

        // 1、配置文件
        // 1.1、创建Properties()
        Properties pro = new Properties();
        // 1.2、加载配置文件
        // 1.2.1、获取class目录下的配置文件
        ClassLoader classLoader = TestReflact.class.getClassLoader();
        // 读取配置文件内容
        InputStream is = classLoader.getResourceAsStream(&quot;pro.properties&quot;);
        // 通过pro加载
        pro.load(is);
        // 2、获取配置文件中的数据
        String className = pro.getProperty(&quot;className&quot;);
        String methodName = pro.getProperty(&quot;methodName&quot;);
        // 3、加载类进内存，通过类对象
        Class cls = Class.forName(className);
        // 4、通过反射创建对象
        Object obj = cls.newInstance();
        // 5、获取方法对象
        Method method = cls.getMethod(methodName);
        // 6、执行方法
        method.invoke(obj);

    }
}
</code></pre>
						<p><a href="#Person.java"><strong>结果，</strong>点击跳转Person.java。</a></p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224092859320.png"
												   referrerpolicy="no-referrer" alt="image-20201224092859320"></div>
						</p>
						<pre><code class="language-cmd" lang="cmd">eat&gt;&gt;&gt;&gt;&gt;&gt;

Process finished with exit code 0
</code></pre>
						<p>&nbsp;</p>
						<h5>获取有参</h5>
						<pre><code class="language-java" lang="java">// 2、获取配置文件中的数据
        String className = pro.getProperty(&quot;className&quot;);
        String methodName = pro.getProperty(&quot;methodName&quot;);
        String parameter = pro.getProperty(&quot;parameter&quot;);
        // 3、加载类进内存，通过类对象
        Class cls = Class.forName(className);
        // 4、通过反射创建对象
        Object obj = cls.newInstance();
        // 5、获取方法对象
        Method method = cls.getMethod(methodName, String.class);
        // 6、执行方法
        method.invoke(obj, parameter);
</code></pre>
						<p><a href="#Person.java"><strong>结果，</strong>点击跳转Person.java。</a></p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224092859320.png"
												   referrerpolicy="no-referrer" alt="image-20201224092859320"></div>
						</p>
						<pre><code class="language-cmd" lang="cmd">eat&gt;&gt;&gt;&gt;&gt;&gt;parameter

Process finished with exit code 0
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302029'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">员工信息管理项目</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302031'}"><span class="span-txt">注解</span> <img
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
	name: "302030",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



