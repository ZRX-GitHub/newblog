<template>
	<div id="D305009">

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305001'}">Oracle</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305009'}">基本编程</router-link>
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
							<router-link :to="{name:'D305008'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">索引</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305010'}"><span class="span-txt">事务</span> <img class="img-r"
																									  src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
																									  alt="右箭头">
							</router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->


						<h1>Oracle的基本编程</h1>
						<p>&nbsp;</p>
						<h2>声明、变量的定义</h2>
						<pre><code class="language-sql" lang="sql">
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
end;
</code></pre>
						<p>&nbsp;</p>
						<h2>实例</h2>
						<pre><code class="language-sql" lang="sql">DECLARE

	eno emp.empno%TYPE ;
	en emp.ename%TYPE ;
	mn emp.ename%TYPE ;
	dn dept.dname%TYPE ;
	dept dept %rowtype ;

BEGIN
-- 输入的信息保存在 eno 里
	eno := &amp;no ;
	-- 之后根据 eno 的值，对数据库进行查询操作
	SELECT e.ename,m.ename,d.dname INTO en,mn,dn FROM emp e,dept d,emp m WHERE e.empno=7369 AND e.mgr=m.empno AND e.deptno=d.deptno ;

	DBMS_OUTPUT.put_line(&#39;编号为：&#39;||eno||&#39;雇员的姓名为：&#39;||en) ;
	DBMS_OUTPUT.put_line(&#39;编号为：&#39;||eno||&#39;雇员的上级姓名为：&#39;||mn) ;
	DBMS_OUTPUT.put_line(&#39;编号为：&#39;||eno||&#39;雇员所在的部门：&#39;||dn) ;
	DBMS_OUTPUT.put_line(dept.deptno) ;

EXCEPTION

	WHEN no_data_found THEN

	DBMS_OUTPUT.put_line(&#39;没有此雇员&#39;) ;

END ;
</code></pre>
						<p><strong>说明：</strong></p>
						<p>• emp.empno%TYPE：表示以 emp 表中的 empno 字段的类型定义变量。</p>
						<p>• e.ename,m.ename,d.dname INTO en,mn,dn：一次可以同时放进去多个值。</p>
						<p>dept dept %rowtype ：表示 dept 是一行数据，类似于 Hibernate 的 PO。</p>
						<p>&nbsp;</p>
						<h2>三种循环</h2>
						<p>for、while、do while。</p>
						<p><strong>条件：例如 1..10 or i &lt; 10 ，等价为 1 到 10 ，等方法</strong></p>
						<p>for的格式为：</p>
						<pre><code class="language-sql" lang="sql">for 变量 in 条件 loop
	语句；
end loop;
</code></pre>
						<p>while的格式为：</p>
						<pre><code class="language-sql" lang="sql">while 条件 loop
	语句；
end loop;
</code></pre>
						<p>do while的格式为：</p>
						<pre><code class="language-sql" lang="sql">loop
	条件；
	exit [when 条件];
end loop;
</code></pre>
						<p>&nbsp;</p>
						<h2>条件判断</h2>
						<pre><code class="language-sql" lang="sql">-- 使用一
if 条件 then
	语句;
end if;

-- 使用二

if 条件 then
	语句;
elseif 条件 then
	语句;
else
	语句;
end if;
</code></pre>


						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D305008'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">索引</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305010'}"><span class="span-txt">事务</span> <img class="img-r"
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
	name: "305009",
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
