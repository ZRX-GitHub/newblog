<template>
	<div id="D305006">

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305001'}">Oracle</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305006'}">数据字典之约束</router-link>
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
							<router-link :to="{name:'D305005'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">高级查询</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305007'}"><span class="span-txt">性能优化</span> <img class="img-r"
																										src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
																										alt="右箭头">
							</router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->


						<h2>数据字典之约束</h2>
						<pre><code class="language-sql" lang="sql">-- 数据字典 ： Oracle 是通过很多数据字典来进行维护的 本质上就是一张表
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
);

select * from tb_user;
insert into tb_user
(user_id,uname,phone,age)
values
(2,&#39;tom&#39;,&#39;888&#39;,80);
commit;


-- 创建表之后添加约束
create table tb_student(
sid int,
sname varchar2(12),
phone varchar2(12),
age int,
create_time timestamp
);

-- 添加主键约束
alter table tb_student add constraint pk_001 primary key(sid);
-- 非空： 不能为空
alter table tb_student modify sname not null;
-- 唯一约束 : 唯一可以为null
alter table tb_student add constraint un_001 unique(sname);
-- 检查约束
alter table tb_student add constraint ck_002 check(age &gt;=0 and age &lt;=100);
-- 默认值: 不设定时间的时候 默认为 系统当前时间
alter table tb_student modify create_time default sysdata;

-- 删除约束
alter table tb_student drop constraint pk_001;
alter table tb_student modify sname;
alter table tb_student modify create_time default null;


-- 外键约束
-- 分类表
create table tb_categroy(
cid int primary key ,
name varchar2(10)
);
-- 商品表
create table tb_good(
gid int primary key ,
name varchar2(100),
cid int
);
select * from tb_good;、
-- 在没有外键约束之前，我们可以不按照逻辑来插入数据
insert into tb_good values (1,&#39;电脑&#39;,1);
insert into tb_categroy values (1,&#39;数码&#39;);
commit;

-- cid  添加外键约束
alter table tb_good
add constraint fk_001 foreign key (cid) references tb_categroy(cid)
on delete cascade; -- 级联删除 : 非常危险，不设置

alter table tb_good drop constraint fk_001;

insert into tb_categroy values (2,&#39;化妆品&#39;);
insert into tb_good values (2,&#39;口红&#39;,2);
commit;

delete from  tb_categroy where cid = 2;

select * from tb_good;
</code></pre>
						<p>&nbsp;</p>
						<h2>约束使用的规则and视图</h2>
						<pre><code class="language-sql" lang="sql">-- 约束使用的规则：
-- 主键约束必须要加上（除了关系表看情况） 其他约束都不设置。 业务测试后设置

-- 视图（了解）
-- 1. 什么视图 ： 是一个复杂查询的预查询，我们可以直接查询视图得到结果
-- 2. 如何创建视图 create view
-- 3. 视图和表的区别 : 视图是表的预查询， 性能没有表好，但是安全性比表高。

-- 查询 员工的姓名，工资

select ename,sal from emp;

-- 授权（使用主机来进行授权）
SQL&gt; show user;
USER is &quot;SYS&quot;
SQL&gt; grant create view to scott;

-- 创建 v_emp 视图
create view v_emp as select ename,sal from emp;

-- 查看用户视图
select * from user_views;

-- 查询视图
select * from v_emp;
</code></pre>
						<p>&nbsp;</p>
						<h2>练习</h2>
						<pre><code class="language-sql" lang="sql">/*
 1. 删除一张表重复记录
 id name age
1 louis 20
2 louis 20
3 jimmy 30
4 louis 20
*/
create table test_a (
       t_id int primary key,
       t_name varchar(10),
       t_age int
);
commit;

insert into test_a values (1, &#39;louis&#39;, 20);
insert into test_a values (2, &#39;louis&#39;, 20);
insert into test_a values (3, &#39;jimmy&#39;, 30);
insert into test_a values (4, &#39;louis&#39;, 20);
commit;

select * from test_a;

delete test_a where t_id in (2,4)
commit

select * from test_a;

/*
2. 用一条 SQL 语句 查询出每门课都大于 80 分的学生姓名
name kecheng fenshu
张三 语文 81
张三 数学 75
李四 语文 76
李四 数学 90
王五 语文 81
王五 数学 100
王五 英语 90
*/
create table test_b (
       b_id int primary key,
       b_name varchar(10),
       b_kecheng varchar(10),
       b_fenshu float(10)
);
commit;

insert into test_b values (1, &#39;张三&#39;， &#39;语文&#39;, 81);
insert into test_b values (2, &#39;张三&#39;， &#39;数学&#39;, 75);
insert into test_b values (3, &#39;李四&#39;， &#39;语文&#39;, 76);
insert into test_b values (4, &#39;李四&#39;， &#39;数学&#39;, 90);
insert into test_b values (5, &#39;王五&#39;， &#39;语文&#39;, 81);
insert into test_b values (6, &#39;王五&#39;， &#39;数学&#39;, 100);
insert into test_b values (7, &#39;王五&#39;， &#39;英语&#39;, 90);
commit;

select * from test_b;

select * from test_b where b_fenshu &gt; 80;

-- 1.往 emp 表中插入 empno,ename,sal 数据（111,&#39;1&#39;,1000)(222,&#39;2&#39;,2000)
select * from emp;
insert into emp (empno, ename, sal) values (111,&#39;1&#39;,1000);
insert into emp (empno, ename, sal) values (222,&#39;2&#39;,2000);
commit;

-- 2.把 empno=111 的员工 comm 改成 100
updata emp set comm = 100 where empno = 111;
commit;
select * from emp where empno = 111;

-- 3.往 dept 表中插入 dept 表中 deptno=100 的数据
alter table dept modify deptno number(3);
insert into dept (deptno) values (100);
commit;

select * from dept;

-- 4.删除 empno=111 的数据
delete emp where empno=111;
delete emp where empno=222;
commit;

select * from emp where empno =111;

-- 5.给所有人涨工资，标准是：10 部门涨 10%；20 部门涨 15%；30 部门涨 20%，其他部门长18%（要求用 DECODE 函数）
updata emp set sal  =decode(deptno,10, (sal * 1.1), 20, (sal * 1.15), 30, (sal * 1.2), (sal * 1.18)) as new_sal where sal is not null;
select * from emp;

-- 6.根据工作年限长工资，标准是：为公司工作了几个月就长几个百分点。
select * from emp;
select a.*, round(months_between(sysdata, hiredata)) as word_ms,
( (round(months_between(sysdata, hiredata))) * (0.01)) as ename_per
from emp a;

-- 查询按部门工资前 2 的员工
-- 相关子查询  ： 父表的每条数据都会到子表中进行遍历，性能特别差
select deptno, ename, sal from emp e1
where
(select count(1)  from emp e2
where e2.deptno=e1.deptno and e2.ename!=e1.ename and e2.sal &gt; e1.sal)  &lt;2
order by deptno, sal desc;

/*
1.创建一张表 student
id number
name varchar2(10)
age number(10)
tel varchar2 （10 ）

给 id 字段添加主键约束
给 name 字段添加非空约束
给 age 字段添加 check 约束（age 必须大于 18 岁)
给 tel 添加唯一 非空 约束
*/
drop table s_student
create table s_student (
       id number primary key,
       name varchar2(10) not null,
       age number(10) check(age &gt; 18),
       tel varchar2(10）not null
);
commit;

insert into s_student values (1, &#39;小明&#39;, 20, 1111);
commit;
select * from s_student;

/*
2.创建一张学员兴趣爱好表 hobby
id number(10)
hobby_namevarchar2(10)
sid number --学生 id
给 sid 字段添加外键约束，并且要带级联删除
*/
create table hobby (
       id number(10) primary key,
       hobby_name varchar2(10),
       sid number
);
commit;

select * from hobby;

insert into hobby values (1, &#39;小明test&#39;, 1);
commit;

alter table hobby add constraint fk_001 foreign key(sid) references s_student(id)
on delete cascade;
commit;

delete s_student where id=1;
commit;

select * from s_student;
select * from hobby;
</code></pre>


						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D305005'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">高级查询</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305007'}"><span class="span-txt">性能优化</span> <img class="img-r"
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
export default {
	name: "305006",
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
