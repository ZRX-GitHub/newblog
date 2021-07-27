<template>
	<div id="D305008">

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305001'}">Oracle</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D305008'}">索引</router-link>
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
							<router-link :to="{name:'D305007'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">性能优化</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305009'}"><span class="span-txt">基本编程</span> <img class="img-r"
																										src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
																										alt="右箭头">
							</router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->


						<h1>索引</h1>
						<h2>查看已在索引</h2>
						<pre><code class="language-sql" lang="sql">-- 索引，用 user_indexes 和 user_ind_columns 系统表查看已经存在的索引
/*
user_indexes ： 系统视图存放是  索引的名称  以及该  索引是否是唯一索引  等信息。
user_ind_column ：系统视图存放的是  索引名称，对应的表和列等。
*/
select * from user_indexes where table_name = &#39;TB_USER&#39;;
select * from user_ind_columns where table_name = &#39;TB_USER&#39;;

select * from tb_user;
</code></pre>
						<p>&nbsp;</p>
						<h2>序列</h2>
						<pre><code class="language-sql" lang="sql">-- 创建一个序列 seq_user_pk ，不能重复取：即取了 序号为1 的，下一次就不可能再取出 序号为 1 的
/*
create sequence seq_user_pk
increment by  1 -- 每次增加 1 个
start with 1  -- 从1 开始计数
maxvalue / nomaxvalue  -- 序列最大值 / 最小值
cache / nocache  -- 开启缓存 / 关闭缓存。开启缓存，效率高，只是如果数据库宕机了，缓存会丢失，出现序列号跳号的情况。
cycle / nocycle  -- 累加，并且循环 / 累加，且不循环
*/
create sequence seq_user_pk
start with 3
increment by 1
nocache nocycle;

-- 获取序列中的数组
select seq_user_pk.nextval from dual;

-- 删除 tb_user 中的 phone 的唯一索引
alter table tb_user drop constraint SYS_C0010825;

-- pl/sql 编程实现插入 100 W 数据

-- user_id  序列
-- name  唯一性   sys_guid()
-- phone 999
-- age  随机数
-- create_time  sysdata

-- select sys_guid() from dual;

-- 修改tb_user的name属性的长度 100

alter table tb_user modify uname varchar2(100);

select ceil(dbms_random.value()*100) from dual;
</code></pre>
						<p>&nbsp;</p>
						<h2>添加一个索引</h2>
						<pre><code class="language-sql" lang="sql">-- 给uname 字段添加一个索引
drop index IDX_UNAME;
create index idx_uname on tb_user(uname);
</code></pre>
						<p>&nbsp;</p>
						<h2>索引建立</h2>
						<pre><code class="language-sql" lang="sql">-- 索引建立：
-- 1. 读多写少


-- 复合索引
-- 1. 删除主键和唯一索引
select * from user_ind_columns where table_name = &#39;TB_USER&#39;;
alter table tb_user drop constraint SYS_C0010804;
drop index IDX_UNAME;

-- 创建一个复合索引  user_id  uname
create index idx_id_name on tb_user(user_id,uname);

select * from user_ind_columns where table_name = &#39;TB_USER&#39;;
drop index idx_id_name;  -- 删除索引

-- 通过id查询   9
select * from tb_user where user_id = 9;

-- 通过 uname  B43F9A48540E01B9E05011AC02000247
select * from tb_user where uname = &#39;B43F9A48540E01B9E05011AC02000247&#39;;
select * from tb_user where user_id = 9 and uname = &#39;B43F9A48540E01B9E05011AC02000247&#39;;  -- 性能更好

-- 复合索引在使用的时候有个规则 最左前缀法则
select * from tb_user where user_id = 9 and phone = &#39;999&#39;;

select * from tb_user where user_id in (1199,1200);

select count(1) from tb_user where user_id != 1199;
select count(1) from tb_user where user_id &lt; 1200;
select count(1) from tb_user where user_id != 1200;
</code></pre>


						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D305007'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">性能优化</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D305009'}"><span class="span-txt">基本编程</span> <img class="img-r"
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
	name: "305008",
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
