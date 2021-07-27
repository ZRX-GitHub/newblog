<template>
	<div id="D305007">

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305001'}">Oracle</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305007'}">性能优化</router-link>
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
							<router-link :to="{name:'D305006'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">数据字典之约束</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305008'}"><span class="span-txt">索引</span> <img class="img-r"
																										src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
																										alt="右箭头">
							</router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->


						<h1>Oracle的性能优化准则</h1>
						<h2>表使用别名</h2>
						<p>命名要一致. 减少表的解析。如，select * from emp e;</p>
						<p>&nbsp;</p>
						<h2>like 查询 </h2>
						<p>尽量不用通配符 “%” 或者 “_” 作为查询字符串的第一个字符；当通配符 “%” 或者 “_” 作为查询字符串的第一个字符时，索引不会被使用。比如用 T 表中Column1 LIKE ，%5400%‟ 这个条件会产生全表扫描，如果改成 Column1 ‟X5400%‟ OR Column1 LIKE ‟B5400%‟ 则会利用 Column1 的索引进行两个范围的查询，性能肯定大提高。</p>
						<p><strong>PS：“%”、“_”的位置可任意。</strong></p>
						<p>“%”：匹配所有字符；</p>
						<p>“_”：匹配单个字符。</p>
						<pre><code class="language-sql" lang="sql">select * from tb_user where uname like &#39;%43F9A48540E01B9E05011AC02000247&#39;;  -- 不建议，在知道首字的前提下
select * from tb_user where uname like &#39;B_3F9A48540E01B9E05011AC02000247&#39;;  -- 建议，在知道首字的前提下
</code></pre>
						<p>&nbsp;</p>
						<h2>精确匹配搜索</h2>
						<pre><code class="language-sql" lang="sql">select * from tb_user where upper(uname) = (&#39;B43F9A48540E01B9E05011AC02000247&#39;);  -- 不 建议查询的方法
select * from tb_user where uname = upper(&#39;B43F9A48540E01B9E05011AC02000247&#39;);  -- 建议查询的方法

insert into tb_user values (11000007,&#39;TTTT&#39;,1000,20,sysdata);
insert into tb_user values (11000008,&#39;TTTT&#39;,1000,20,sysdata);
commit;
create index idx_phone on tb_user(phone);
select * from user_ind_columns where table_name = &#39;TB_USER&#39;;

select * from tb_user order by phone;

-- 搜索 phone 为 1000的
select * from tb_user where phone = &#39;1000&#39;;  -- 应该采用这个，原因，表中定义的是varchar2 类型
select * from tb_user where phone = 1000;  -- 严重不建议，原因，表中定义的是varchar2 类型

-- 三者性能相同
select count(1) from tb_user;
select count(1) from TB_USER;
select count(1) from scott.tb_user;


select * from tb_user u where user_id &gt;= 101 and user_id &lt;=200;

select * from tb_user where user_id &lt;=200 and user_id &gt;= 101;
</code></pre>
						<p>&nbsp;</p>
						<h2>尽量不用“&lt;&gt;”或者“!=”操作符</h2>
						<p>不等于操作符是永远不会用到索引的，因此对它的处理只会产生全表扫描。比如：a&lt;&gt;0，改为 a&gt;0 or a&lt;0。</p>
						<pre><code class="language-sql" lang="sql">select * from tb_user where user_id &gt;= 101 and user_id &lt;= 200;  -- 两者性能相同
select * from tb_user where user_id &lt;= 200 and user_id &gt;= 101;  -- 两者性能相同
</code></pre>
						<p>&nbsp;</p>
						<h2><strong>尽量少用</strong> <strong>IN</strong> 操作符</h2>
						<p>基本上所有的 IN 操作符都可以用 EXISTS 代替，在选择 IN 或 EXIST 操作时，要根据主、子表数据量大小来具体考虑。</p>
						<p>&nbsp;</p>
						<h2><strong>尽量用</strong> <strong>NOT EXISTS</strong> <strong>或者外连接替代</strong> <strong>NOT IN</strong> 操作符</h2>
						<p>因为 NOT IN 不能应用表的索引。</p>
						<p>&nbsp;</p>
						<h2><strong>在设计表时，把索引列设置为</strong> NOT NULL</h2>
						<p>判断字段是否为空一般是不会应用索引的，因为 B 树索引是不索引空值的。</p>
						<p>&nbsp;</p>
						<h2><strong>Where</strong> 子句中避免在索引列上使用计算</h2>
						<p>如果索引不是基于函数的，那么当在 where 子句中对索引列使用函数时，索引不再起作用。因此 where 子句中避免在索引列上使用计算。 </p>
						<p>比如：</p>
						<pre><code class="language-sql" lang="sql">select * from where sal + 10 &gt;= 100;  -- 错误的写法，虽然依旧可以得出我们想要的结果，但是性能差
--100-10，即90
select * from where sal &gt;= 90;  -- 正确的高性能的写法
</code></pre>
						<p>&nbsp;</p>
						<h2>用 “&gt;=” 替代 “&gt;”</h2>
						<p>大于或小于操作符一般情况下是不用调整的，因为它有索引就会采用索引查找，但有的情况下可以对它进行优化。</p>
						<p>如一个表有 100 万记录，一个数值型字段 A， 30 万记录的 A=0，30 万记录的 A=1，39 万记录的 A=2，1 万记录的 A=3。那么执行 A &gt; 2 与 A &gt;= 3 的效果就有很大的区别了，因为 A &gt; 2 时 ORACLE 会先找出为 2 的记录索引再进行比较，而 A &gt;= 3 时 ORACLE 则直接找到=3 的记录索引。</p>


						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D305006'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">数据字典之约束</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305008'}"><span class="span-txt">索引</span> <img class="img-r"
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
	name: "305007",
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
