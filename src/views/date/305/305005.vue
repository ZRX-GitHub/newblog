<template>
	<div id="D305005">

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305001'}">Oracle</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305005'}">高级查询</router-link>
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
							<router-link :to="{name:'D305004'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">where和having的区别</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305006'}"><span class="span-txt">数据字典之约束</span> <img class="img-r"
																										src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
																										alt="右箭头">
							</router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->


						<h1>高级查询</h1>
						<h2>dbms_random.value() </h2>
						<pre><code class="language-sql" lang="sql">-- dbms_random.value() 返回一个随机数
select dbms_random.value() from dual; -- 返回一个 0 - 1 之间的随机数
-- 随机返回 5 条记录
select a.*,rownum  from
(select e.*,dbms_random.value() as rd from emp e order by rd )  a
where rownum &lt;=5 ;
</code></pre>
						<p>&nbsp;</p>
						<h2>null first/last</h2>
						<pre><code class="language-sql" lang="sql">-- null first ：把comm 为空的排在有数据的上面
-- null last ：把comm 为空的排在有数据的下面
select * from emp order by comm desc nulls first;
select * from emp order by comm desc nulls last;
</code></pre>
						<p>&nbsp;</p>
						<h2>over()</h2>
						<pre><code class="language-sql" lang="sql">/* 分析函数： over(partition by ... order by ...)  ，
小括号内放条件（非必须），如
row_number() over(partition by deptno order by ename)  和
row_number() over(order by ename)  as ena */

select * from
(select deptno,ename,sal,row_number() over (partition by deptno  order by sal desc) rn
from emp)
where rn&lt;3;

-- row_number() over (order by ename)  伪列函数
select * from
(select row_number() over (order by ename) as rn,ename from emp);

-- 查询表中的 奇数 / 偶数 行的数据
select * from
(select row_number() over (order by ename) as rn,ename from emp) a
where mod(a.rn,2)=1;  -- 奇数

select * from
(select row_number() over (order by ename) as rn,ename from emp) a
where mod(a.rn,2)=0;  -- 偶数

--  使用 rownum 明显比 row_number 麻烦
select * from
(select a.*,rownum rn from
(select e.* from emp e order by ename) a) b where mod(rn,2)=0;

-- 查询员工信息与最高和最低的工资
select e.*,(select max(sal) from emp) max_sal,(select min(sal) from emp) min_sal from emp e;
select e.*,max(sal) over(),min(sal) over()  from emp e;

-- 连续 求和
select e.*, sum(sal) over() as total_sal, sum(sal) over(order by sal) as sal_ from emp e;  --  等同

select max(b.empno), sum(a.sal) from
(select e.empno, e.sal, (select sum(sal) from emp) total from emp e order by sal) a,
(select e.empno,e.sal, (select sum(sal) from emp) total from emp e order by sal) b
where a.sal &lt;= b.sal group by b.empno order by sum(a.sal);  -- 等同

-- 分部门连续求和
select deptno,sal ,sum(sal) over(partition by deptno order by ename) as s from emp;  -- 等同

select * from
(select e.empno,e.ename,e.sal,e.deptno from emp e order by deptno,sal asc) a,
(select e.empno,e.ename,e.sal,e.deptno from emp e order by deptno,sal asc) b
where a.sal&lt;=b.sal and a.deptno = b.deptno;  -- 等同


-- 得到当前行上一行或者下一行的数据
select ename,sal,lead(sal) over(order by sal) aaa ,lag(sal) over(order by sal) bbb from emp;

select add_months(trunc(sysdata,&#39;y&#39;),12)-trunc(sysdata,&#39;y&#39;) from dual;
select trunc(sysdata,&#39;y&#39;) from dual;
select trunc(10.999,2) from dual;
</code></pre>


						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D305004'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">where和having的区别</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305006'}"><span class="span-txt">数据字典之约束</span> <img class="img-r"
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
	name: "305005",
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
