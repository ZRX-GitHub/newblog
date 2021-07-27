<template>
	<div id="D305001">

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305001'}">Oracle</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305001'}">数据表的增删改命令</router-link>
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
						<div class="nextPage">
							<router-link :to="{name:'D305002'}"><span class="span-txt">常用函数</span> <img
								src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png" alt="右箭头">
							</router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->


						<h2>创建表</h2>
						<pre><code class="language-sql" lang="sql">
/*
create table table_name ( 参数 ) ： 参数和参数之间使用 逗号隔开
参数： 列名 类型
*/
-- 创建一个用户表： id ( 主键：唯一非空 ) 、account 、password 、create_time 、height 、phone

-- 创建表
create table tb_user(
	   id int primary key,
	   account varchar2(6),
	   password varchar2(8),
	   height number(3,2),
	   phone char(11),
	   birth data,
	   create_time timestamp
);

-- 插入全部数据： 完整插入插入所有字段
insert into tb_user values
(1,&#39;admin&#39;,&#39;123456&#39;,1.99,&#39;15899998888&#39;,to_data(&#39;1990-10-10&#39;,&#39;yyyy-mm-dd&#39;),sysdata);
commit;

insert into tb_user values
(2,&#39;admin&#39;,&#39;123456&#39;,1.99,&#39;1589999&#39;,to_data(&#39;1990-10-10&#39;,&#39;yyyy-mm-dd&#39;),sysdata);
commit;

-- 插入部分字段
insert into tb_user
(id,account,password,height,phone,create_time)
values
(3,&#39;user&#39;,&#39;user&#39;,1.88,&#39;131312312&#39;,sysdata);
commit;

-- 验证可变长度字符串
select length(password),length(phone) from tb_user;
</code></pre>
						<p>&nbsp;</p>
						<h2>修改表</h2>
						<pre><code class="language-sql" lang="sql">alter table tb_user add  addr varchar2(100);  -- 添加 新的 属性列
alter table tb_user modify height number(5,2);  -- 修改 属性列的属性定义
alter table tb_user drop column addr;  -- 删除 属性列
alter table tb_user rename addr to addr_new;  -- 重命名 属性列 的名称
</code></pre>
						<p>&nbsp;</p>
						<h2>删除表</h2>
						<pre><code class="language-sql" lang="sql">drop table tb_user;
</code></pre>
						<p>&nbsp;</p>
						<h2>修改属性列里的属性</h2>
						<p>根据<strong>主键</strong>修改，不建议根据其他属性修改，不建议范围修改。</p>
						<pre><code class="language-sql" lang="sql">updata tb_user set phone = &#39;888&#39; where id = 2;
commit;
</code></pre>
						<p>&nbsp;</p>
						<h2>删除属性列</h2>
						<p>根据<strong>主键</strong>删除，不建议根据其他属性删除，不建议范围删除。</p>
						<pre><code class="language-sql" lang="sql">delete tb_user where id = 3;
commit;
</code></pre>


						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="nextPage">
							<router-link :to="{name:'D305002'}"><span class="span-txt">常用函数</span> <img
								src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png" alt="右箭头">
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
	name: "305001",
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
