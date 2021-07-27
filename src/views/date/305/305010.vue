<template>
	<div id="D305010">

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305001'}">Oracle</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305010'}">事务</router-link>
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
							<catalog305></catalog305>
						</div>
					</el-drawer>

					<div class="catalog">
						<p class="text">目 &nbsp; 录</p>
						<catalog305></catalog305>
					</div>

				</div>


				<div class="data-classify-right">

					<div class="skip-top">
						<div class="previouPage">
							<router-link :to="{name:'D305009'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">基本编程</span></router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于2020-12-21-1</span></p>
						<h1>事务</h1>
						<h3>四大特性</h3>
						<ul>
							<li>原子性 ： 要么不执行，要么一起执行。
								事务是一系列的DML操作，放在一起的步骤，只要事务中间没有执行其它操作，事务操作完以后，再执行commit，或者rollback的时候，要么一起提交，要么一起回滚，从中间某一个步骤不会不执行;
							</li>
							<li>隔离性 ： 两个用户再同时开启事务的时候，互不干扰。
								当一个用户开启了事务以后，另一个用户在执行DML操作，只要前一个用户数据没有提交，那么此用户获取到的信息仍然是原来的数据;
							</li>
							<li>一致性 ： 事务开始之前，数据库处于一致性的状态，事务结束之后，数据库仍然需要一致性的状态;</li>
							<li>持久性 ： 一个已经完成的事务对数据做的任何改动在系统中都是永久有效的。</li>

						</ul>
						<p>&nbsp;</p>
						<p>rollback ： 回滚.
							commit ： 提交。
							savepoint ： 保存点：保存了保存点之前的操作，回滚的是保存点之后的所有操作。</p>
						<p>&nbsp;</p>
						<p>在oracle中，怎么开启事务？
							事务其实就是对表做的增删改（DML）的操作，在oracle中，事务就是自动开启的，从你开始做第一个DML语句开启。</p>
						<p>&nbsp;</p>
						<pre><code class="language-sql" lang="sql">-- 1、增加操作
insert into emp (empno,ename,job) values (1234,&#39;tom&#39;,&#39;teacher&#39;);
-- 2、修改操作
update emp set sal = 6000 where empno = 7499;
-- 3、删除操作
delete from emp where empno = 7788;
</code></pre>
						<p>发现删除了，可进行回滚操作</p>
						<pre><code class="language-sql" lang="sql">-- 发现删错了
rollback;
</code></pre>
						<p>保存点的使用。例如，rollback to a，回滚到a、b保存点之间的操作。</p>
						<pre><code class="language-sql" lang="sql">insert into emp (empno,ename,job) values (2345,&#39;jack&#39;,&#39;teacher&#39;);
savepoint a
update emp set sal = 3000 where empno =7499
savepoint b
delete from emp where empno = 7900
rollback to a
</code></pre>
						<p>&nbsp;</p>
						<h3>数据库设计</h3>
						<p>数据表的设计</p>
						<p>多表之间的关系：
							一对一：比如人和身份证的关系；
							一对多：部门和员工；
							多对多：学生和课程。</p>
						<p>关系的实现
							一对一：把数据放在一张表；
							一对多：部门和员工，在多的一方建立外键指向一方；
							多对多：学生和课程，需要借助第三张中间表，中间表最少含有2 个字段，这两个字段分别指向两张表的主键。</p>
						<p>&nbsp;</p>
						<pre><code class="language-sql" lang="sql">-- 旅游线路表 设计
用户表  旅游路线表  旅游路线分类表  中间表
</code></pre>
						<pre><code class="language-sql" lang="sql">-- 旅游分类表
cid  -- 旅游线路分类的主键
cname  -- 旅游线路分类的名称   非空、唯一

create table tab_type (
       cid number(10) primary key,
       cname varchar(20) not null unique
);
</code></pre>
						<pre><code class="language-sql" lang="sql">-- 旅游线路表
rid  线路主键
rname -- 旅游线路名称  非空、唯一
price  -- 价格
rdate  -- 上线时间
cid  -- 外键，指向分类表

create table tab_route (
       rid number(10) primary key,
       rname varchar(20) not null unique,
       price number(10),
       rdate date,
       cid number(10),
       constraint k_key foreign key (cid) references tab_type(cid)
);
</code></pre>
						<pre><code class="language-sql" lang="sql">-- 用户表
uid 用户的主键
username  用户名，唯一、非空
password  密码，非空
name  真实密码
tel  电话

create table tab_user (
       uid1 number(10) primary key,
       username varchar(10) unique not null,
       password varchar(20) not null,
       name varchar(20),
       tel varchar(11)
);
</code></pre>
						<pre><code class="language-sql" lang="sql">-- 中间表，收藏表，关联用户和旅游线路
uid1  -- 用户id  外键
rid  -- 旅游线路id  外键
rdate  -- 收藏日期
uid1和rid不能重复，设置复合主键，同一个用户不能收藏同一个线路两次

create table tab_shoucang (
       rid number(10),
       uid1 number(10),
       rdate date,
       primary key (rid,uid1),
       constraint r_key2 foreign key (rid) references tab_route(rid),
       constraint r_key3 foreign key (uid1) references tab_user(uid1)
);
</code></pre>
						<p>&nbsp;</p>
						<h3>设计范式</h3>
						<p>三大范式</p>
						<ul>
							<li>第一范式 ： 字段要设计的不可再分。
								name字段 ： 可拆分成 firstname + lastname
								联系方式 ： tel 、 email
							</li>
							<li>第二范式 ： 多对多的关系需要在第三张表中体现。消除主键和数据之间的不依赖关系；</li>
							<li>第三范式 ： 多张表中，只存关系，不存在具体信息，消除数据的传递依赖。</li>

						</ul>
						<p>&nbsp;</p>
						<h3>oracle中的用户管理</h3>
						<p>normal ： 普通用户 scott；
							sysoper ： 数据库操作员权限；
							sysdba ： 数据库管理员。</p>
						<p>&nbsp;</p>
						<pre><code class="language-sql" lang="sql"> -- 查看所有用户
 select * from all_users
</code></pre>
						<pre><code class="language-sql" lang="sql"> --创建用户
        语法：create user 用户名 identified by &quot;密码&quot;;
create user tang identified by &quot;123456&quot;;
</code></pre>
						<pre><code class="language-sql" lang="sql">-- 删除用户
   drop user 用户名 cascade;
</code></pre>
						<pre><code class="language-sql" lang="sql">-- 解锁用户
   alter user 用户名 account unlock/lock;
</code></pre>
						<pre><code class="language-sql" lang="sql">-- 修改用户密码
   alter user 用户名 identified by &quot;新密码&quot;;
</code></pre>
						<p>&nbsp;</p>
						<p><strong>授权 / 回收权限</strong></p>
						<pre><code class="language-sql" lang="sql">权限：
          系统权限：数据库管理相关的权限
                  登录 create session
                  创建表 create table
                  创建索引 create index
                  创建视图 create view
                  ...
          对象权限：用户操作数据对象相关的权限
                  增 insert
                  删 delete
                  改 update
                  查 select

授予权限：
      grant  授权权限  grant 权限/角色  to 用户
      revoke  回收权限  revoke 权限/角色 from 用户

      权限有对用户、对象等权限，而角色是将预定义的权限赋予给一个角色。当将一个角色授权给一个用户，那该用户就拥有了这个角色的权限
      语法：grant select,insert,update,... on 表 to 用户名1，用户名2
      grant select,insert,update on student to tang;

      删除权限：
            语法：revoke select,insert,update,... on 表 from 用户名1，用户名2


      oracle中的三个角色：connect，resource，管理员角色
                                    connect 和 resource 角色给予之后，就有来对于数据库操作的基本权限

                grant connect to 用户名  -- 基本操作权限，通过connect 角色授予
                grant dba to 用户名  -- 管理员权限，通过dba 角色授予

                查看权限
                select * from user_sys_privs;
</code></pre>
						<p>&nbsp;</p>
						<p><strong>触发器</strong></p>
						<p>就是说某个条件成立的时候，触发器里面所定义的语句会被自动执行。触发器不需要人为去调用，也调用不了。触发器的触发条件其实在定义的时候就设定好了。</p>
						<pre><code class="language-sql" lang="sql"> -- 语法：

 create [or replace] trigger 触发器名称 触发时间 触发事件
 on 表名
 [for each row]
 begin
 	pl/sql语句
 end
</code></pre>
						<pre><code class="language-sql" lang="sql"> -- 触发实践指的是触发器什么时候执行，可选以下两个值：
 before：表示在数据库的动作之前触发
 after：表示在数据库的动作之后触发

-- 触发事件：指明哪些数据库动作会触发此触发器
insert、update、delete

-- 表名：触发器触发
-- for each row  对表的每一行触发器执行一次，不加表示对整个表执行一次
</code></pre>
						<p>设置某一天不允许修改表</p>
						<pre><code class="language-sql" lang="sql">create or replace trigger test_trigger
before insert or update or delete on emp
begin
	if(to_char(sysdate,&#39;dy&#39;)=&#39;星期一&#39;) then
		raise_application_error (1024,&#39;不能在星期一对学生表操作&#39;);
	end if;
end;
</code></pre>
						<p>&nbsp;</p>
						<p>写个触发器，当用户对test表执行dml操作的时候，将相关的信息记录到日志表中。</p>
						<pre><code class="language-sql" lang="sql">-- 创建测试表 test3

create table test3 (
	t_id number,
	t_name varchar(20),
	t_age number(2),
	t_sex char(3)
);
</code></pre>
						<pre><code class="language-sql" lang="sql">-- 创建日志表

create table test_log (
	t_user varchar(10),
	t_type varchar(10),
	t_date varchar(20)
);
</code></pre>
						<pre><code class="language-sql" lang="sql">-- 创建触发器
create or replace trigger test1_trigger
after delete or update or insert on test3
declare
v_type varchar2(10);
begin
	if inserting then
		v_type:=&#39;insert&#39;;
		DBMS_OUTPUT.put_line(&#39;插入操作已完成，并记录到日志中&#39;);
	elsif updating then
		v_type:=&#39;update&#39;;
		DBMS_OUTPUT.put_line(&#39;修改操作已完成，并记录到日志中&#39;);
	elsif deleting then
		v_type:=&#39;delete&#39;;
		DBMS_OUTPUT.put_line(&#39;删除操作已完成，并记录到日志中&#39;);
	end if;

	insert into test_log
	values(user,v_type,to_char(sysdate,&#39;yyyy-mm-dd hh24:mi:ss&#39;));
end;
</code></pre>
						<p>执行插入操作</p>
						<pre><code class="language-sql" lang="sql">insert into test3 values(1003,&#39;张三&#39;,20,&#39;男&#39;);
</code></pre>
						<p>触发器总结：</p>
						<ol start="">
							<li>运行/限制对表的修改；</li>
							<li>自动生成派生列，比如自增字段；</li>
							<li>强制数据的一致性；</li>
							<li>提供审计、日志记录；</li>
							<li>防止无效的事务处理；</li>
							<li>启用一些复杂的业务逻辑。</li>

						</ol>
						<p>&nbsp;</p>
						<h3>存储过程</h3>
						<p>通俗的理解就是在数据库服务器中封装一段或者多段sql语句的PL/SQL代码块。在数据中，有一些是系统默认的存储过程，可以直接通过存储过程名称进行调用。</p>
						<p> 优缺点：白皮书p10</p>
						<p>&nbsp;</p>
						<p>使用步骤：</p>
						<ol start="">
							<li>创建语句：create or replace 存储过程名；</li>
							<li>定义存储过程名，包括一个存储过程名和参数列表，参数名和参数类型；</li>
							<li>变量声明块：跟在as后面；</li>
							<li>过程语句块：从begin开始，具体逻辑的实现在这里；</li>
							<li>异常处理块：可选，关键字为exception；</li>
							<li>结束块：由end关键字结束</li>

						</ol>
						<p>&nbsp;</p>
						<pre><code class="language-sql" lang="sql">语法：
create or replace 名称 as
begin
	执行代码;
end;
</code></pre>
						<pre><code class="language-sql" lang="sql"> -- 调用存储过程
 declare
 begin
 	名称;
 end;
</code></pre>
						<p> 存储过程参数的说明，3种形式的参数：</p>
						<ol start="">
							<li>in：定义一个输入参数的变量，用来传递参数给存储过程；</li>
							<li>out：定义一个输出参数变量，用来从存储过程获取数据；</li>
							<li>in out：结合以上两者的功能。</li>

						</ol>
						<p>&nbsp;</p>
						<h4>java调用oracle的存储过程</h4>
						<p>java中连接oracle数据库：jdbc:oracle:thin:@192.168.153.128:1521:orcl</p>
						<h5><strong>oracle中</strong>，无返回值</h5>
						<p>先删除test_pro</p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/oracle1.jpg"
												   referrerpolicy="no-referrer" alt="oracle1"></div>
						</p>
						<pre><code class="language-sql" lang="sql"> create or replace procedure test_pro  (param1 in varchar2, param2 varchar2) as
 begin
   update emp set sal = param1 where empno = param2;
   commit;
   dbms_output.put_line(&#39;工资调整成功！&#39;);
end test_pro;
</code></pre>
						<p><strong>java中</strong></p>
						<pre><code class="language-java" lang="java">package oracleJDBC;

import java.sql.*;

/**
 * 无返回值
 */
public class demo1 {
    public static void main(String[] args) {
        ResultSet rs = null;
        Connection conn = null;
        CallableStatement proc = null;

        try {
            Class.forName(&quot;oracle.jdbc.driver.OracleDriver&quot;);
            conn = DriverManager.getConnection(&quot;jdbc:oracle:thin:@192.168.153.128:1521:orcl&quot;,&quot;scott&quot;, &quot;123456&quot;);
            proc = conn.prepareCall(&quot;{call test_pro(?,?)}&quot;);
            proc.setString(1,&quot;88888&quot;);
            proc.setString(2,&quot;7566&quot;);
            proc.execute();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {

                try {
                    if (rs != null) {
                        rs.close();
                    }
                    if (proc != null) {
                        proc.close();
                    }
                    if (conn != null) {
                        conn.close();
                    }
                } catch (SQLException ex) {
                }


        }

    }
}
</code></pre>
						<p><strong>结果</strong></p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224112020752.png"
												   referrerpolicy="no-referrer" alt="image-20201224112020752"></div>
						</p>
						<p>&nbsp;</p>
						<h5><strong>oracle中</strong>，有返回值的存储过程（返回值非列表）</h5>
						<p>先删除test_pro</p>
						<pre><code class="language-sql" lang="sql">-- 有返回值的存储过程（返回值非列表）
 create or replace procedure test_pro (param1 in varchar2, param2 out varchar2) as
 begin
   select sal into param2 from emp where empno = param1;
   commit;
   dbms_output.put_line(&#39;工资调整成功！&#39;);
end test_pro;

</code></pre>
						<p><strong>java中</strong></p>
						<pre><code class="language-java" lang="java">package oracleJDBC;

import java.sql.*;

/**
 * 有返回值的存储过程（返回值非列表）
 */
public class Demo2 {
    public static void main(String[] args) {
        Connection conn = null;
        CallableStatement proc = null;

        try {
            Class.forName(&quot;oracle.jdbc.driver.OracleDriver&quot;);
            conn = DriverManager.getConnection(&quot;jdbc:oracle:thin:@192.168.153.128:1521:orcl&quot;, &quot;scott&quot;, &quot;123456&quot;);
            proc = conn.prepareCall(&quot;{call test_pro(?,?)}&quot;);
            proc.setString(1, &quot;7566&quot;);
            proc.registerOutParameter(2,Types.VARCHAR);
            proc.execute();
            System.out.println(&quot;output: is&quot; + proc.getString(2));
        } catch (Exception e) {
            e.printStackTrace();
        } finally {

            try {
                if (proc != null) {
                    proc.close();
                }
                if (conn != null) {
                    conn.close();
                }
            } catch (SQLException ex) {
            }


        }
    }
}
</code></pre>
						<p><strong>结果</strong></p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201224112020752.png"
												   referrerpolicy="no-referrer" alt="image-20201224112020752"></div>
						</p>
						<p>输入的数据</p>
						<pre><code class="language-cmd" lang="cmd">output: is88888

Process finished with exit code 0
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D305009'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">基本编程</span></router-link>
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
export default {
	name: "305010",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	},
	mounted() {
		Prism.highlightAll();
	}
}
</script>

<style scoped>

</style>
