<template>
	<div id="Dother3">

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'Dother1'}">其它资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'Dother3'}">树</router-link>
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
							<catalogother></catalogother>
						</div>
					</el-drawer>

					<div class="catalog">
						<p class="text">目 &nbsp; 录</p>
						<catalogother></catalogother>
					</div>

				</div>

				<div class="data-classify-right">

					<div class="skip-top">
						<div class="previouPage">
							<router-link :to="{name:'Dother2'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span class="span-txt">通信原理期末考试资料</span>
							</router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'Dother4'}"><span class="span-txt">原码、反码、补码三者之间的关系</span> <img
								class="img-r" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
								alt="右箭头"></router-link>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->
						<h1>树</h1>
						<h2>红黑树</h2>
						<p>时间复杂度是O(lgn)；</p>
						<ol start="">
							<li>每个节点都有红色或黑色；</li>
							<li>树的根始终是黑色的 (黑土地孕育黑树根 )；</li>
							<li>没有两个相邻的红色节点（红色节点不能有红色父节点或红色子节点，<strong>并没有说不能出现连续的黑色节点</strong>）；</li>
							<li>从节点（包括根）到其任何后代NULL节点(叶子结点下方挂的两个空节点，并且认为他们是黑色的)的每条路径都具有相同数量的黑色节点。</li>

						</ol>
						<p><strong>转自内容详见：</strong><a
							href="https://zhuanlan.zhihu.com/p/79980618?utm_source=cn.wiz.note" target="_blank"
							class="url">https://zhuanlan.zhihu.com/p/79980618?utm_source=cn.wiz.note</a></p>
						<p>&nbsp;</p>
						<h2>234树</h2>
						<p>2-3-4树是一种阶为4的B树。它是一种自平衡的数据结构，可以保证在O(lgn)的时间内完成查找、插入和删除操作。</p>
						<p>它主要满足以下性质：</p>
						<ol start="">
							<li>每个节点每个节点有1、2或3个key，分别称为2（孩子）节点，3（孩子）节点，4（孩子）节点；</li>
							<li>所有叶子节点到根节点的长度一致（也就是说叶子节点都在同一层）；</li>
							<li>每个节点的key从左到右保持了从小到大的顺序，两个key之间的子树中所有的。</li>

						</ol>
						<p>key一定大于它的父节点的左key，小于父节点的右key。</p>
						<p><img
							src="https://gitee.com/ZRX001/gallery/raw/master/gallery/aHR0cHM6Ly9pbWFnZXMyMDE1LmNuYmxvZ3MuY29tL2Jsb2cvODM0NDY4LzIwMTYxMS84MzQ0NjgtMjAxNjExMjgyMDA4MjYzNjUtMTIzNzY2NDM5MS5wbmc"
							referrerpolicy="no-referrer" alt="img"></p>
						<p><strong>转自内容详见：</strong><a
							href="https://blog.csdn.net/asdfsadfasdfsa/article/details/86500552" target="_blank"
							class="url">https://blog.csdn.net/asdfsadfasdfsa/article/details/86500552</a></p>
						<p>&nbsp;</p>
						<h2>B-树</h2>
						<p>一种适用于外查找的树，它是一种平衡的多叉树，称为B树（或B-树、B_树）。</p>
						<p>1、根结点至少有两个子女；</p>
						<p>2、每个非根节点所包含的关键字个数 j 满足：┌m/2┐(向上取整) - 1 &lt;= j &lt;= m - 1；</p>
						<p>3、除根结点以外的所有结点（不包括叶子结点）的度数正好是关键字总数加1，故内部子树个数 k 满足：┌m/2┐ &lt;= k &lt;= m ；</p>
						<p>4、所有的叶子结点都位于同一层。</p>
						<p>&nbsp;</p>
						<p><strong>转自内容详见：</strong><a href="https://blog.csdn.net/qq_41618510/article/details/83214711"
													  target="_blank" class="url">https://blog.csdn.net/qq_41618510/article/details/83214711</a>
						</p>
						<h2>B+树</h2>
						<p><strong>转自内容详见：</strong><a href="https://blog.csdn.net/qq_41618510/article/details/83214711"
													  target="_blank" class="url">https://blog.csdn.net/qq_41618510/article/details/83214711</a>
						</p>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'Dother2'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span class="span-txt">通信原理期末考试资料</span>
							</router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'Dother4'}"><span class="span-txt">原码、反码、补码三者之间的关系</span> <img
								class="img-r" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
								alt="右箭头"></router-link>
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
	name: "3",
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
