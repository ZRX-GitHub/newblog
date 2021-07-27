<template>
	<div id="D305004">

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305001'}">Oracle</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305004'}">where和having的区别</router-link>
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
							<router-link :to="{name:'D305003'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">多表查询</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305005'}"><span class="span-txt">高级查询</span> <img class="img-r"
																												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
																												   alt="右箭头">
							</router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->


						<h1>where和having的区别</h1>
						<p style="text-align: left;">转载自：
							<a href="https://blog.csdn.net/qq_41587243/article/details/83022883" target="_blank" class="url">https://blog.csdn.net/qq_41587243/article/details/83022883</a>
						</p>
						<h2><strong>类型</strong></h2>
						<p>“where”是一个约束声明，在查询数据库的结果返回之前对数据库中的查询条件进行约束，即在结果返回之前起作用，且“where”后面不能写“<strong style="font-size: 16px;">聚合函数</strong>”。</p>
						<p>“having”是一个过滤声明，是在查询数据库结果返回之后进行过滤，即在结果返回值后起作用，并且“having”后面可以写“<strong style="font-size: 16px;">聚合函数</strong>”。</p>
						<p>where、聚合函数、having在from后面的执行顺序：</p>
						<pre><code class="language-sql" lang="sql">where&gt;聚合函数(sum,min,max,avg,count)&gt;having
</code></pre>
						<p>实例：用group by来比较二者</p>
						<p>若须引入聚合函数来对group by 结果进行过滤 则只能用having。</p>
						<pre><code class="language-sql" lang="sql">select sum(score) from student where sex=&quot;man&quot; group by name having sum(score)&gt;90;
</code></pre>
						<p>注意事项 ：
							1、where 后不能跟聚合函数，因为where执行顺序大于聚合函数。
							2、where 子句的作用是在对查询结果进行分组前，将不符合where条件的行去掉，即在分组之前过滤数据，条件中不能包含聚组函数，使用where条件显示特定的行。
							3、having 子句的作用是筛选满足条件的组，即在分组之后过滤数据，条件中经常包含聚组函数，使用having 条件显示特定的组，也可以使用多个分组标准进行分组。</p>
						<p>&nbsp;</p>
						<h2>使用角度</h2>
						<p>where后面不能使用聚合函数的原因是where的执行顺序在聚合函数之前。</p>
						<p>&nbsp;</p>
						<h2>实例</h2>
						<ol>
							<li>
								<p>where和having均可使用：</p>
								<pre><code class="language-sql" lang="sql">select score name from student where score&gt;60;
select score name from student having score&gt;60;
</code></pre>
								<p>可用having的原因是已经筛选出score字段，在这种情况下是和where等效的。</p>
							</li>
							<li>
								<p>只能用where、不能用having</p>
								<pre><code class="language-sql" lang="sql">select score name from student where sex=&quot;man&quot;;  -- 正确的
select score name from student having sex=&quot;man&quot;;  -- 错误的，因为前面没有筛选sex。
</code></pre>
								<p>&nbsp;</p>
							</li>
							<li>
								<p>只能用having、不能用where</p>
								<pre><code class="language-sql" lang="sql">select  goods_category_id,avg(goods_price) as ag from goods_table group by goods_category having ag&gt;100; -- 正确的
select goods_category_id,avg(goods_price) as ag from goods_table where ag&gt;100 group by goods_category;  -- 错误的
</code></pre>
								<p>注意:where 后面要跟的是数据表里的字段，如果我把ag换成avg(goods_price)也是错误的！因为表里没有该字段。而having只是根据前面查询出来的是什么就可以后面接什么。</p>
							</li>

						</ol>


						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D305003'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">多表查询</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305005'}"><span class="span-txt">高级查询</span> <img class="img-r"
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
	name: "305004",
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
