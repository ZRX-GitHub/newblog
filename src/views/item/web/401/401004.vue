<template>
	<div>

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '项目'}">项目</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'I401001'}">Web项目</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'I401004'}">Vue实现记事本</router-link>
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
							<catalog401></catalog401>
						</div>
					</el-drawer>

					<div class="catalog">
						<p class="text">目 &nbsp; 录</p>
						<catalog401></catalog401>
					</div>

				</div>

				<div class="data-classify-right">

					<div class="skip-top">

						<div class="previouPage">
							<router-link :to="{name: 'I401003'}">
								<img class="img-l"
									 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
									 alt="左箭头">
								<span class="span-txt">仿项目官网</span>
							</router-link>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2021-2-28-1</span></p>
						<h1>Vue实现记事本</h1>
						<p>项目地址：<a href="http://zrx001.gitee.io/blog/web/project/4/demo/index.html" target="_blank"
								   class="url">http://zrx001.gitee.io/blog/web/project/4/demo/index.html</a></p>
						<p>项目下载：<a href="http://1.15.142.19/item/web/project/4/Vue实现记事本.zip">Vue实现记事本.zip</a></p>
						<h4>源代码</h4>
						<pre><code class="language-html" lang="html">&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;title&gt;记事本&lt;/title&gt;
    &lt;script src=&quot;js/vue.js&quot; type=&quot;text/javascript&quot; charset=&quot;utf-8&quot;&gt;&lt;/script&gt;

    &lt;style type=&quot;text/css&quot;&gt;
        * {
            padding: 0;
            margin: 0;
            outline: none;
            list-style: none;
        }

        .main {
            width: 400px;
            margin: 40px auto 0px;
        }

        h1 {
            text-align: center;
            margin-bottom: 40px;
        }

        #noteApp {
            background-color: #ffffff;
            box-shadow: 0px 0px 5px 5px #d5d5d5;
            color: #989898;
        }

        section {
            width: 100%;
        }

        header {
            border-bottom: 1px solid rgb(207, 207, 207);
        }

        header&gt;input {
            width: 100%;
            padding: 10px;
            border: none;
            font-size: 16px;
            background-color: #ffffff;
            box-sizing: border-box;
            color: #989898;
        }

        .content&gt;ul&gt;li {
            border-bottom: 1px solid rgb(207, 207, 207);
            font-size: 16px;
            padding: 10px;
        }

        .view&gt;button {
            color: red;
            float: right;
            border: none;
            background-color: transparent;
            display: none;
        }

        .note:hover .view&gt;button {
            display: block;
        }

        footer {
            font-size: 14px;
            padding: 4px 10px;
            min-height: 20px;
        }

        footer&gt;button {
            color: #989898;
            float: right;
            border: none;
            padding: 2px 0px;
            background-color: transparent;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div class=&quot;main&quot;&gt;
        &lt;h1&gt;记事本&lt;/h1&gt;
        &lt;!-- 主体区域 --&gt;
        &lt;section id=&quot;noteApp&quot;&gt;
            &lt;!-- 输入框 --&gt;
            &lt;header&gt;
                &lt;input type=&quot;text&quot; id=&quot;new-note&quot; v-model=&quot;inputValue&quot; @keyup.enter=&quot;add&quot; placeholder=&quot;请输入信息&quot; /&gt;
            &lt;/header&gt;

            &lt;!-- 主体区域 --&gt;
            &lt;section class=&quot;content&quot;&gt;
                &lt;ul class=&quot;note-list&quot;&gt;
                    &lt;li v-for=&quot;(item, index) in list&quot; class=&quot;note&quot;&gt;
                        &lt;div class=&quot;view&quot;&gt;
                            &lt;span class=&quot;index&quot;&gt;{{ index + 1 }}.&lt;/span&gt;
                            &lt;label&gt;{{ item }}&lt;/label&gt;
                            &lt;button type=&quot;button&quot; class=&quot;list-clear&quot; @click=&quot;remove&quot;&gt;
								X
							&lt;/button&gt;
                        &lt;/div&gt;
                    &lt;/li&gt;
                &lt;/ul&gt;
            &lt;/section&gt;

            &lt;!-- 统计情况区域 --&gt;
            &lt;footer&gt;
                &lt;span class=&quot;note-count&quot; v-if=&quot;list.length&quot;&gt;
					&lt;strong&gt;{{ 'list.length  去除引号' }}&lt;/strong&gt;item left
				&lt;/span&gt;
                &lt;button type=&quot;button&quot; class=&quot;&quot; @click=&quot;clear&quot;&gt;Clear&lt;/button&gt;
            &lt;/footer&gt;

        &lt;/section&gt;

    &lt;/div&gt;
&lt;/body&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
    var noteApp = new Vue({
        el: &quot;#noteApp&quot;,
        data: {
            list: [&quot;写代码&quot;, &quot;睡觉&quot;, &quot;吃法&quot;],
            inputValue: &quot;&quot;
        },
        methods: {
            // 在input框内输入数据
            add: function() {
                this.list.push(this.inputValue)
            },
            // 删除单条数据
            remove: function(index) {
                this.list.splice(index, 1)
            },
            // 清除全部数据
            clear: function() {
                this.list = []
            }
        }
    })
&lt;/script&gt;

&lt;/html&gt;
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">

						<div class="previouPage">
							<router-link :to="{name: 'I401003'}">
								<img class="img-l"
									 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
									 alt="左箭头">
								<span class="span-txt">仿项目官网</span>
							</router-link>
						</div>

					</div>

				</div>

			</div>


		</div>

	</div>
</template>

<script>
export default {
	name: "401004",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>

<style scoped src="../../../../assets/css/item-auto.css"></style>
<style scoped src="../../../../assets/css/markdownpad-github.css"></style>
<style scoped src="../../../../assets/css/data-classify-auto.css"></style>
