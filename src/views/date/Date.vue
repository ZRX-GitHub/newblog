<template>
	<div id="Date">

		<div class="main">

			<div class="data-left">
				<div class="itemize">
					<div class="data-text">
						<div class="data-text-content"><img src="../../assets/images/bookmark.svg" alt="">资料分类</div>
					</div>
					<div class="bulid-class">
						<p>自建类</p>

						<router-link :to="{name:'D301001'}">
							<p id="1" class="classify">PHP</p>
						</router-link>
						<router-link :to="{name:'D302001'}">
							<p id="2" class="classify">Java</p>
						</router-link>
						<a href="" title="数据找回中">
							<p id="3" class="classify" style="color: red">JavaWeb</p>
						</a>
						<a href="" title="数据找回中">
							<p id="4" class="classify" style="color: red">HTML\JS\CSS</p>
						</a>
						<router-link :to="{name:'D305001'}">
							<p id="5" class="classify">Oracle</p>
						</router-link>
						<!-- <a href="306/306001">
							<p id="6" class="classify">Web项目</p>
						</a> -->
						<!-- <a href="307/307001">
							<p id="7" class="classify">前端</p>
						</a> -->
						<!-- <a href="307/308001">
							<p id="7" class="classify">Java Web 项目搭建</p>
						</a> -->
						<router-link :to="{name:'Dother1'}">
							<p class="classify">其余资料</p>
						</router-link>
					</div>

					<div class="document-class">
						<p>文档类</p>
						<a href="https://cloud.tencent.com/developer/devdocs" target="_blank">
							<p class="classify">腾讯云开发者手册</p>
						</a>
						<a href="https://www.w3school.com.cn/tags/index.asp" target="_blank">
							<p class="classify">HTML 参考手册</p>
						</a>
						<a href="https://www.w3school.com.cn/html5/html5_reference.asp" target="_blank">
							<p class="classify">HTML5 参考手册</p>
						</a>
						<a href="http://css.doyoe.com/" target="_blank">
							<p class="classify">CSS 参考手册</p>
						</a>
						<a href="https://www.w3school.com.cn/js/index.asp" target="_blank">
							<p class="classify">JavaScript 参考</p>
						</a>
						<a href="https://jquery.cuishifeng.cn/" target="_blank">
							<p class="classify">Jquery API 3.5.1 速查表</p>
						</a>
						<a href="https://cn.vuejs.org/v2/guide/" target="_blank">
							<p class="classify">Vue2 官方文档</p>
						</a>
						<a href="https://www.naiveui.com/zh-CN/light/components/button" target="_blank">
							<p class="classify">Naive UI 官方文档</p>
						</a>
						<a href="https://element.eleme.cn/#/zh-CN/component/installation" target="_blank">
							<p class="classify">Element-UI 官网文档</p>
						</a>
						<a href="https://2x.antdv.com/docs/vue/introduce-cn/" target="_blank">
							<p class="classify">Ant Design of Vue 官方文档</p>
						</a>
						<a href="https://v3.bootcss.com/css/" target="_blank">
							<p class="classify">Bootstrap v3 官方文档</p>
						</a>
						<a href="https://www.kancloud.cn/manual/thinkphp5_1/353946" target="_blank">
							<p class="classify">ThinkPHP5.1 完全开发手册</p>
						</a>
						<a href="https://www.kancloud.cn/logoove/we7/678511" target="_blank">
							<p class="classify">万能Web开发文档笔记</p>
						</a>
						<a href="https://www.docs4dev.com/docs/zh/apache/2.4/reference#toolbar-title" target="_blank">
							<p class="classify">Apache 中文文档</p>
						</a>
						<a href="https://www.runoob.com/servlet/servlet-tutorial.html" target="_blank">
							<p class="classify">Servlet 教程</p>
						</a>
						<a href="https://www.php.cn/mysql/mysql-create-tables.html" target="_blank">
							<p class="classify">MySQL 手册</p>
						</a>
						<a href="http://www.shouce.ren/api/oracle/#" target="_blank">
							<p class="classify">Oracle 手册</p>
						</a>
					</div>

					<div class="tools-class">
						<p>工具类</p>

						<a href="https://tool.lu/coderunner/" target="_blank">
							<p class="classify">在线编程工具</p>
						</a>
						<a href="https://tool.lu/color/" target="_blank">
							<p class="classify">颜色空间转换</p>
						</a>
						<a href="https://tool.oschina.net/encrypt?type=4" target="_blank">
							<p class="classify">在线加解密(/base64图片)</p>
						</a>
						<a href="https://tool.chinaz.com/tools/unicode.aspx" target="_blank">
							<p class="classify">编码转换</p>
						</a>
						<a href="https://tool.oschina.net/jscompress" target="_blank">
							<p class="classify">JS/CSS 代码压缩</p>
						</a>
					</div>

				</div>
			</div>
			<div class="data-right">
				<div class="data-plate">
					<div class="line-left"></div>
					<span>PHP</span>
					<div class="more">
						<router-link :to="{name: 'D301001'}">查看更多</router-link>
					</div>
					<div class="data-plate-line"></div>
					<div class="wrapper3">


						<router-link :to="{name: 'D301001'}" class="information1 informations">
							<span class="informations-title">简介</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									PHP是一种创建动态交互性站点的强有力的服务器端脚本语言。PHP是免费的，并且使用广泛。对于像微软ASP这样的竞争者来说，PHP无疑是另一种高效率的选项。</p>
							</div>
						</router-link>

						<router-link :to="{name: 'D301002'}" class="information2 informations">
							<span class="informations-title">php留言板</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									利用php+mysql+工具&#40;vscode+navicat+xampp&#41;搭建php留言板</p>
							</div>
						</router-link>
						<a href="xx" class="information3 informations" style="pointer-events: none" disabled="true">
							<span class="informations-title">xx</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">xx</p>
							</div>
						</a>

						<!-- 预留位置 -->

					</div>
				</div>

				<div class="data-plate">
					<div class="line-left"></div>
					<span>Java</span>
					<div class="more"><router-link :to="{name:'D302001'}">查看更多</router-link></div>
					<div class="data-plate-line"></div>
					<div class="wrapper9">

						<router-link :to="{name:'D302001'}" class="information1 informations">
							<span class="informations-title">简介</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">CMD执行java程序:cmd简单切换，win+ r：打开cmd命令台，cmd打开默认进入C盘。" E:
									",进入E盘根目录。</p>
							</div>
						</router-link>
						<router-link :to="{name:'D302002'}" class="information2 informations">
							<span class="informations-title">Java规则</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									数据类型分类，
									Java的数据类型分为两大类：
									基本数据类型：包括 整数、浮点数、字符、布尔。
									引用数据类型：包括 类、数组、接口。
								</p>
							</div>
						</router-link>
						<router-link :to="{name:'D302003'}" class="information3 informations">
							<span class="informations-title">运算符</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">类型向下不兼容，如long 转 int，精度会丢失，只运行向上兼容。
									char、short、byte进行运行时，比int小的，都会自动默认转换为int，
									float、int，自动转换float。
									double > float > long > int > short 、char、byte</p>
							</div>
						</router-link>

						<router-link :to="{name:'D302004'}" class="information4 informations">
							<span class="informations-title">方法</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">## 1.方法定义

									访问修饰符 返回值类型（void、int、float、String...）方法名(参数，参数...) {

									​ 代码...

									​ return xx；

									}

									- 访问修饰符 ：public static；
									- 返回值类型：没有返回值类型，使用void；有返回值类型，就使用 如 int；
									- 方法名：定义请点击链接[Java规则 (zrxsky.top)](https://zrxsky.top/demo/date/302/302002#method)；
									- 参数：可设置无，也可以设置有。
									- return xx：根据需要填写，也可能不需要填写return。</p>
							</div>
						</router-link>
						<router-link :to="{name:'D302005'}" class="information5 informations">
							<span class="informations-title">流程控制</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">顺序结构、选择结构、循环结构</p>
							</div>
						</router-link>
						<router-link :to="{name:'D302006'}" class="information6 informations">
							<span class="informations-title">数组</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">## 数值的定义

									类型[] 数组名 = new 类型[]；

									```java
									// 例如：
									int[] arr = new int[5]; // 0~4
									```

									类型要前后一致；

									new：在堆中开辟空间，开辟多大的空间（new后面的 “类型[]”，“[]”中填数字）；

									数组名：存储开辟的内存空间的内存首地址，数值是一个连续的空间。</p>
							</div>
						</router-link>

						<router-link :to="{name:'D302007'}" class="information7 informations">
							<span class="informations-title">继承类</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									子类继承父类的特性、属性和方法被继承的条件、方法重写（也叫方法覆盖）和方法重载有什么区别、super和this关键字+构造方法。</p>
							</div>
						</router-link>
						<router-link :to="{name:'D302008'}" class="information8 informations">
							<span class="informations-title">封装类</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">为什么要使用封装（即作用、优点），封装的意义是什么？

									优点：

									1.提高代码的安全性（外部无法更改ATest1里面定义好的数据，注意，是定义好的）；

									2.提高代码的复用性（可重复调用）；

									3.“高内聚”：封装细节，便于修改内部代码(比如ATest1类里面定义的私有属性可以改为int啊什么其它类型的)，提高可维护性；

									4.“低耦合”：简化外部调用，便于调用者使用，便于扩展和写作。

								</p>
							</div>
						</router-link>
						<router-link :to="{name:'D302009'}" class="information9 informations">
							<span class="informations-title">抽象类</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									在面向对象的概念中，所有的对象都是通过类来描绘的，但是反过来，并不是所有的类都是用来描绘对象的，如果一个类中没有包含足够的信息来描绘一个具体的对象，这样的类就是抽象类。

									抽象类除了不能实例化对象之外，类的其它功能依然存在，成员变量、成员方法和构造方法的访问方式和普通类一样。

									由于抽象类不能实例化对象，所以抽象类必须被继承，才能被使用。也是因为这个原因，通常在设计阶段决定要不要设计抽象类。

									父类包含了子类集合的常见的方法，但是由于父类本身是抽象的，所以不能使用这些方法。

									在Java中抽象类表示的是一种继承关系，一个类只能继承一个抽象类，而一个类却可以实现多个接口。</p>
							</div>
						</router-link>


					</div>
				</div>

				<div class="data-plate"  disabled="true" style="pointer-events: none">
					<div class="line-left"></div>
					<span style="color: red">JavaWeb</span>
					<p style="color: red;text-align: center">数据找回中</p>
					<div class="more"><a href="">查看更多</a></div>
					<div class="data-plate-line"></div>
					<div class="wrapper6">

						<a href="" class="information1 informations">
							<span class="informations-title">JavaWeb</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">软件架构、B/S架构。</p>
							</div>
						</a>
						<a href="" class="information2 informations">
							<span class="informations-title">Tomcat配置</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">网络通信三要素、web服务器、Tomcat服务器的搭建。</p>
							</div>
						</a>
						<a href="" class="information3 informations">
							<span class="informations-title">Tomcat项目部署</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">原生部署三种方式、idea部署项目。</p>
							</div>
						</a>

						<a href="" class="information4 informations">
							<span class="informations-title">Servlet项目部署</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									Servlet是什么?、Servlet任务、Tomcat和Servlet的关系、实现示例-Servlet、实现示例-HttpServlet、实现Servlet接口过程、继承HttpServlet抽象类过程。</p>
							</div>
						</a>
						<a href="" class="information5 informations">
							<span class="informations-title">xxx</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">xxx</p>
							</div>
						</a>
						<a href="" class="information6 informations">
							<span class="informations-title">xxx</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">xxx</p>
							</div>
						</a>

						<!-- 预留位置 -->


					</div>
				</div>

				<div class="data-plate"  disabled="true" style="pointer-events: none">
					<div class="line-left"></div>
					<span style="color: red">HTML\CSS\JS</span>
					<p style="color: red;text-align: center">数据找回中</p>
					<div class="more"><a href="">查看更多</a></div>
					<div class="data-plate-line"></div>
					<div class="wrapper6">

						<a href="" class="information1 informations">
							<span class="informations-title">HTML基础</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									RGB(x,y,z,a)三原色、路径、表格(table)的属性、表单、lable标签、块级元素、行内元素、url。
								</p>
							</div>
						</a>
						<a href="" class="information2 informations">
							<span class="informations-title">CSS基础</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									css引入方式、css选择器、css的层叠特性、定位、flex布局、gird布局、CSS3新增属性、新增的背景属性。
								</p>
							</div>
						</a>
						<a href="" class="information3 informations">
							<span class="informations-title">JS基础1</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									JavaScript 是脚本语言、JavaScript：对事件的反应、JavaScript：改变 HTML 内容、JavaScript：改变 HTML
									图像、JavaScript：改变 HTML 样式、JavaScript：验证输入。
								</p>
							</div>
						</a>

						<a href="" class="information4 informations">
							<span class="informations-title">JS基础2</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									ECMAScript、原始数据类型的声明、数据类型转换、运算符、分支循环、数组、字符串的操作、正则表达式、对象、函数、数学函数、Date函数、定时器函数、BOM、DOM、获取、设置标签的属性值、事件、JQuery、常用事件。
								</p>
							</div>
						</a>
						<a href="" class="information5 informations">
							<span class="informations-title">CSS属性的继承性</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									一、无继承性的属性
									二、有继承性的属性
									三、所有元素可以继承的属性
									四、内联元素可以继承的属性
									五、块级元素可以继承的属性
								</p>
							</div>
						</a>
						<a href="" class="information6 informations">
							<span class="informations-title">轮播图、走马灯</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									轮播图、走马灯。
								</p>
							</div>
						</a>


						<!-- 预留位置 -->


					</div>
				</div>

				<div class="data-plate">
					<div class="line-left"></div>
					<span>Oracle</span>
					<div class="more"><router-link :to="{name:'D305001'}">查看更多</router-link></div>
					<div class="data-plate-line"></div>
					<div class="wrapper9">

						<router-link :to="{name:'D305001'}" class="information1 informations">
							<span class="informations-title">数据表的增删改命令</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									/*
									create table table_name ( 参数 ) ： 参数和参数之间使用 逗号隔开
									参数： 列名 类型
									*/
									-- 创建一个用户表： id ( 主键：唯一非空 ) 、account 、password 、create_time 、height 、phone</p>
							</div>
						</router-link>
						<router-link :to="{name:'D305002'}" class="information2 informations">
							<span class="informations-title">常用函数</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									简单的查询预计：--查询当前用户下的所以对象（表）
									select * from tab;
									-- 查询员工表的所有信息 * 表示表中的所以数据，单独查询用 逗号隔开
									select * from emp;
									-- 查询表中的个别类型的数据
									select ename,sal from emp;</p>
							</div>
						</router-link>
						<router-link :to="{name:'D305003'}" class="information3 informations">
							<span class="informations-title">多表查询</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									多表查询：-- 笛卡尔积、子查询、连接查询（内连、满外连、左连、右连）

									-- 笛卡尔积 --
									--比较简单、性能比较差，因为先会做排列组然后再进行条件过滤
									select * from emp;
									select * from dept;

									-- 查询所有的员工信息包含部门信息
									select e.*, d.* from emp e, dept d where e.deptno = d.deptno;


									-- 子查询 --
									-- 实际开发的时候永远不要用 &quot; * &quot;
									select e.* ,（select d.dname from dept d where d.deptno = e.deptno）as dname from emp
									e;</p>
							</div>
						</router-link>

						<router-link :to="{name:'D305004'}" class="information4 informations">
							<span class="informations-title">where和having的区别</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									类型：“where”是一个约束声明，在查询数据库的结果返回之前对数据库中的查询条件进行约束，即在结果返回之前起作用，且“where”后面不能写“聚合函数”。</p>
							</div>
						</router-link>
						<router-link :to="{name:'D305005'}" class="information5 informations">
							<span class="informations-title">高级查询</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									高级查询、dbms_random.value()、null first/last、over()。</p>
							</div>
						</router-link>
						<router-link :to="{name:'D305006'}" class="information6 informations">
							<span class="informations-title">数据字典之约束</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									-- 数据字典 ： Oracle 是通过很多数据字典来进行维护的 本质上就是一张表
									select * from user_tables;

									-- 约束： 约定一个字段必须要遵守的规则
									-- 约束的写法： 创建表的时候设定约束、 表创建之后设定约束
									drop table tb_user;
									create table tb_user (
									-- 主键约束： 唯一且不为null
									user_id int primary key,
									-- 非空： 不能为空
									uname varchar2(12) not null ,
									-- 唯一约束 : 唯一可以为null
									phone varchar2(12) unique,
									-- 检查约束
									age int check(age &gt;=0 and age &lt;=100),
									-- 默认值: 不设定时间的时候 默认为 系统当前时间
									create_time timestamp default sysdata
									);</p>
							</div>
						</router-link>

						<router-link :to="{name:'D305007'}" class="information7 informations">
							<span class="informations-title">性能优化</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									Oracle的性能优化准则：表使用别名,命名要一致. 减少表的解析。如，select * from emp e;
									like 查询;尽量不用通配符 “%” 或者 “” 作为查询字符串的第一个字符；当通配符 “%” 或者 “” 作为查询字符串的第一个字符时，索引不会被使用。比如用 T
									表中Column1 LIKE ，%5400%‟ 这个条件会产生全表扫描，如果改成 Column1 ‟X5400%‟ OR Column1 LIKE ‟B5400%‟
									则会利用 Column1 的索引进行两个范围的查询，性能肯定大提高。
									PS：“%”、“_”的位置可任意。
								</p>
							</div>
						</router-link>
						<router-link :to="{name:'D305008'}" class="information8 informations">
							<span class="informations-title">索引</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									-- 索引，用 user_indexes 和 user_ind_columns 系统表查看已经存在的索引
									/*
									user_indexes ： 系统视图存放是 索引的名称 以及该 索引是否是唯一索引 等信息。
									user_ind_column ：系统视图存放的是 索引名称，对应的表和列等。
									*/
									select * from user_indexes where table_name = &#39;TB_USER&#39;;
									select * from user_ind_columns where table_name = &#39;TB_USER&#39;;

									select * from tb_user;</p>
							</div>
						</router-link>
						<router-link :to="{name:'D305009'}" class="information9 informations">
							<span class="informations-title">基本编程</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									declare
									-- 声明变量 i = 1
									i int := 1;
									a varchar(100);
									begin
									-- 接收用户输入
									-- i := &amp;test;
									a := &amp;test;
									-- 输出/ 输出一行
									dbms_output.put(&#39;a&#39;);
									-- dbms_output.put_line(&#39;a&#39;);
									逻辑部分...
									end;</p>
							</div>
						</router-link>


					</div>
				</div>


				<!-- <div class="data-plate">
					<div class="line-left"></div><span>Web项目</span>
					<div class="more"><a href="306/306001">查看更多</a></div>
					<div class="data-plate-line"></div>
					<div class="wrapper3">
						<a href="306/306001" class="information1 informations">
							<span class="informations-title">仿美团外卖页面</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">PC、H5页面的自动切换</p>
							</div>
						</a>
						<a href="306/306002" class="information2 informations">
							<span class="informations-title">可编辑的通讯录</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">初始状态、添加演示、源代码。</p>
							</div>
						</a>
						<a href="306/306003" class="information3 informations">
							<span class="informations-title">仿项目官网</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">说明、bug、HTML源代码、index.css源代码、css.css源代码、header.css源代码、utils.js源代码。</p>
							</div>
						</a>
					</div>
				</div> -->


				<!-- <div class="data-plate">
					<div class="line-left"></div><span>前端</span>
					<div class="more"><a href="307/307001">查看更多</a></div>
					<div class="data-plate-line"></div>
					<div class="wrapper3">
						<a href="307/307001" class="information1 informations">
							<span class="informations-title">JavaWeb</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">软件架构、B/S架构、HTML、CSS、定位、flex布局、CSS3新增属性、新增的背景属性、。</p>
							</div>
						</a>
						<a href="307/307002" class="information2 informations">
							<span class="informations-title">JavaScript</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">ECMAScript、原始数据类型的声明、数据类型转换、运算符、分支循环、数组、字符串的操作、正则表达式、对象。</p>
							</div>
						</a>
						<a href="307/307003" class="information3 informations">
							<span class="informations-title">CSS属性的继承性</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">无继承性的属性、有继承性的属性、所有元素可以继承的属性、内联元素可以继承的属性、块级元素可以继承的属性。</p>
							</div>
						</a>
					</div>
				</div> -->


				<div class="data-plate">
					<div class="line-left"></div>
					<span>其余资料</span>
					<div class="more">
						<router-link :to="{name:'Dother1'}">查看更多</router-link>
					</div>
					<div class="data-plate-line"></div>
					<div class="wrapper6">

						<router-link :to="{name: 'Dother1'}" class="information1 informations">
							<span class="informations-title">系统安装</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									windows系统的安装有两种方法，分别是硬盘安装和U盘启动器安装。建议提前下载好想要安装的windows系统。</p>
							</div>
						</router-link>
						<router-link :to="{name:'Dother2'}" class="information2 informations">
							<span class="informations-title">github个人建站+绑定域名</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">github建站、绑定域名。</p>
							</div>
						</router-link>
						<router-link :to="{name:'Dother3'}" class="information3 informations">
							<span class="informations-title">树</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									红黑树：
									时间复杂度是O(lgn)；
									1、每个节点都有红色或黑色；
									2、树的根始终是黑色的 (黑土地孕育黑树根 )；
									3、没有两个相邻的红色节点（红色节点不能有红色父节点或红色子节点，并没有说不能出现连续的黑色节点）；
									4、从节点（包括根）到其任何后代NULL节点(叶子结点下方挂的两个空节点，并且认为他们是黑色的)的每条路径都具有相同数量的黑色节点。
								</p>
							</div>
						</router-link>

						<router-link :to="{name:'Dother4'}" class="information4 informations">
							<span class="informations-title">原码、反码、补码三者之间的关系</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">在说明它们三者之间的关系之前，让我们先来了解一下怎么定义进制的表示。</p>
							</div>
						</router-link>
						<router-link :to="{name:'Dother5'}" class="information5 informations">
							<span class="informations-title">idea快捷键</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									一、Ctrl 快捷键
									Ctrl + F 在当前文件进行文本查找 （必备）
									Ctrl + R 在当前文件进行文本替换 （必备）
									Ctrl + Z 撤销 （必备）
									Ctrl + Y 删除光标所在行 或 删除选中的行 （必备）
									Ctrl + X 剪切光标所在行 或 剪切选择内容
									Ctrl + C 复制光标所在行 或 复制选择内容
									Ctrl + D 复制光标所在行 或 复制选择内容，并把复制内容插入光标位置下面 （必备）
									Ctrl + W 递进式选择代码块。可选中光标所在的单词或段落，连续按会在原有选中的基础上再扩展选中范围（必备）
									Ctrl + E 显示最近打开的文件记录列表 （必备）
									Ctrl + N 根据输入的 名/类名 查找类文件 （必备）
									Ctrl + G 在当前文件跳转到指定行处
									Ctrl + J 插入自定义动态代码模板 （必备）
									Ctrl + P 方法参数提示显示 （必备）
								</p>
							</div>
						</router-link>
						<router-link :to="{}" class="information6 informations"  disabled="true" style="pointer-events: none">
							<span class="informations-title" style="color: red">Oracle配置——数据找回中</span>
							<div class="data-plate-informations-line"></div>
							<div class="informations-div-text">
								<p class="informations-text-sketch">
									什么是数据库？、SQL语言、Oracle的版本、Docker简单入门、docker操作oracle、安装oracle客户端、配置PL/SQL客户端、修改CentOS的镜像站点。
								</p>
							</div>
						</router-link>
						<!--						<a href="date/other/6" class="information6 informations">-->
						<!--							<span class="informations-title">Oracle配置</span>-->
						<!--							<div class="data-plate-informations-line"></div>-->
						<!--							<div class="informations-div-text">-->
						<!--								<p class="informations-text-sketch">-->
						<!--									什么是数据库？、SQL语言、Oracle的版本、Docker简单入门、docker操作oracle、安装oracle客户端、配置PL/SQL客户端、修改CentOS的镜像站点。-->

						<!--								</p>-->
						<!--							</div>-->
						<!--						</a>-->

						<!--						<a href="date/other/7" class="information7 informations">-->
						<!--							<span class="informations-title">Linux面试篇</span>-->
						<!--							<div class="data-plate-informations-line"></div>-->
						<!--							<div class="informations-div-text">-->
						<!--								<p class="informations-text-sketch">-->
						<!--									1. 作系统是什么，他的功能，简单介绍一下linux-->
						<!--									2. 作系统的中断是什么，简述一下软中断和硬中断是什么以及发生后的表现-->
						<!--									3. inux启动过程，是否可以在单片机中开发-->
						<!--									4. 见的linux的指令**-->
						<!--									5. inux系统里怎么查询一个文件底下的指定字符-->
						<!--									6. inux下怎么查看某段时间的日志文件内容-->
						<!--									7. 知道DHCP吗？-->
						<!--									8. 如何查看8080端口是否被占用？-->
						<!--									9. 如何查看内存资源？-->
						<!--								</p>-->
						<!--							</div>-->
						<!--						</a>-->
						<!--						<a href="date/other/8" class="information8 informations">-->
						<!--							<span class="informations-title">网络知识面试篇</span>-->
						<!--							<div class="data-plate-informations-line"></div>-->
						<!--							<div class="informations-div-text">-->
						<!--								<p class="informations-text-sketch">-->
						<!--									网关、网桥、路由器、中继器作用、实现以及对应的osi层？MAC地址是什么？webSocket是什么？常见的协议有哪些？什么是arp协议？FTP依赖于哪种协议？ip和域名分别是什么，计算机上网如何获取ip？http和https是什么，他们的功能以及区别？TCP、UDP区别？UDP怎么确保正确传输？udp传输图片怎么实现，超出大小怎么办？网络通讯中，端口有什么含义。端口的取值范围？-->
						<!--								</p>-->
						<!--							</div>-->
						<!--						</a>-->
						<!--						<a href="xxx" class="information9 informations">-->
						<!--							<span class="informations-title">xxx</span>-->
						<!--							<div class="data-plate-informations-line"></div>-->
						<!--							<div class="informations-div-text">-->
						<!--								<p class="informations-text-sketch">-->
						<!--									xxx-->
						<!--								</p>-->
						<!--							</div>-->
						<!--						</a>-->

					</div>
				</div>


				<!-- <div class="data-plate add-others">
					<div class="line-left"></div><span><a href="https://cn.vuejs.org/v2/guide/" target="_blank" class="document-link">Vue2官方文档</a></span>
					<div class="data-plate-line"></div>
				</div>

				<div class="data-plate add-others">
					<div class="line-left"></div><span><a href="https://element.eleme.cn/#/zh-CN/component/installation" target="_blank" class="document-link">Element-UI官方文档</a></span>
					<div class="data-plate-line"></div>
				</div>

				<div class="data-plate add-others">
					<div class="line-left"></div><span><a href="https://www.w3school.com.cn/tags/index.asp" target="_blank" class="document-link">HTML参考手册</a></span>
					<div class="data-plate-line"></div>
				</div>

				<div class="data-plate add-others">
					<div class="line-left"></div><span><a href="https://www.w3school.com.cn/html5/html5_reference.asp" target="_blank" class="document-link">HTML5参考手册</a></span>
					<div class="data-plate-line"></div>
				</div>

				<div class="data-plate add-others">
					<div class="line-left"></div><span><a href="http://css.doyoe.com/" target="_blank" class="document-link">CSS参考手册</a></span>
					<div class="data-plate-line"></div>
				</div>

				<div class="data-plate add-others">
					<div class="line-left"></div><span><a href="https://jquery.cuishifeng.cn/" target="_blank" class="document-link">Jquery API 3.5.1 速查表</a></span>
					<div class="data-plate-line"></div>
				</div>

				<div class="data-plate add-others">
					<div class="line-left"></div><span><a href="https://www.docs4dev.com/docs/zh/apache/2.4/reference#toolbar-title" target="_blank" class="document-link">Apache 中文文档</a></span>
					<div class="data-plate-line"></div>
				</div> -->


				<!-- 预留位置 -->

			</div>
		</div>

		<my-footer></my-footer>

	</div>
</template>

<!--<script src="src/assets/js/data.js"></script>-->
<script>
export default {
	name: "Date"
}
</script>

<style scoped src="../../assets/css/data-auto.css"></style>
