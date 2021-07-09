<template>
	<div>

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<a href="../../../item">项目</a>
				<span> &gt; </span>
				<a href="401001">Web项目</a>
				<span> &gt; </span>
				<a href="401002">可编辑的通讯录</a>
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
						<div class="previouPage"><a href="401001"> <img class="img-l"
																			src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																			alt="左箭头"> <span
							class="span-txt">仿美团外卖页面</span></a></div>
						<div class="nextPage"><a href="401003"><span class="span-txt">仿项目官网</span> <img
							class="img-r" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
							alt="右箭头"> </a></div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2021-1-6-1</span></p>
						<h1>可编辑的通讯录</h1>
						<p>项目地址：<a href="http://1.15.142.19/item/web/project/2/index.html" target="_blank" class="url">http://1.15.142.19/item/web/project/2/index.html</a>
						</p>
						<p>项目下载：<a href="http://1.15.142.19/item/web/project/2/可编辑的通讯录.zip">可编辑的通讯录.zip</a></p>
						<p>&nbsp;</p>
						<p>bug：</p>
						<p>序号自增减存在一点小问题。</p>
						<p>&nbsp;</p>
						<p><strong>初始状态</strong></p>
						<p><img src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20210106194921544.png"
								referrerpolicy="no-referrer" alt="image-20210106194921544"></p>
						<p><strong>添加演示</strong></p>
						<p><img src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20210106194959127.png"
								referrerpolicy="no-referrer" alt="image-20210106194959127"></p>
						<p><strong>删除演示</strong></p>
						<p><img src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20210106195027231.png"
								referrerpolicy="no-referrer" alt="image-20210106195027231"></p>
						<p>&nbsp;</p>
						<p><strong>源代码</strong></p>
						<pre><code class="language-html" lang="html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;删除和添加&lt;/title&gt;

    &lt;style&gt;
        #tableTitle {
            text-align: center;
            font-size: 20px;
            font-weight: bold;
        }

        table {
            width: 400px;
            height: auto;
            margin: 0 auto;
            border-collapse: collapse;
        }

        tr {
            height: 30px;
        }

        th,
        td {
            border: 1px solid gray;
        }

        th:nth-of-type(1) {
            width: 16%;
        }

        th:nth-of-type(2) {
            width: 20%;
        }

        th:nth-of-type(3) {
            width: 44%;
        }

        th:nth-of-type(4) {
            width: 20%;
        }

        td {
            text-align: center;
        }

        #add {
            width: 400px;
            height: 30px;
            line-height: 30px;
            background-color: rgb(10, 170, 10);
            margin: 10px auto 0px;
            text-align: center;
            border-radius: 5px;
            font-weight: bold;
        }

        #add:hover {
            color: white;
            font-weight: bold;
            background-color: rgb(19, 187, 19);
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;p id=&quot;tableTitle&quot;&gt;通讯录&lt;/p&gt;
    &lt;table id=&quot;add_table&quot;&gt;
        &lt;tr&gt;
            &lt;th&gt;序号&lt;/th&gt;
            &lt;th&gt;姓名&lt;/th&gt;
            &lt;th&gt;电话&lt;/th&gt;
            &lt;th&gt;操作&lt;/th&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;1&lt;/td&gt;
            &lt;td&gt;测试&lt;/td&gt;
            &lt;td&gt;1111111111&lt;/td&gt;
            &lt;td&gt;&lt;button onclick=&quot;del(this)&quot;&gt;删除&lt;/button&gt;&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;2&lt;/td&gt;
            &lt;td&gt;测试&lt;/td&gt;
            &lt;td&gt;122222222&lt;/td&gt;
            &lt;td&gt;&lt;button onclick=&quot;del(this)&quot;&gt;删除&lt;/button&gt;&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/table&gt;
    &lt;div id=&quot;add&quot; onclick=&quot;add(this)&quot;&gt;添加&lt;/div&gt;
&lt;/body&gt;
&lt;script&gt;
    flag = true;

    // 定义自增的序号
    var i = 3;

    // 执行删除操作
    function del(thisbutton) {
        tr = thisbutton.parentNode.parentNode;
        mytable = tr.parentNode;
        mytable.removeChild(tr);
        i--;
    }

    // 执行添加操作
    function add(thisdiv) {
        add_table = document.getElementById(&#39;add_table&#39;);

        tr = document.createElement(&#39;tr&#39;); // 创建一行
        // 创建td，4列
        for (let j = 0; j &lt;= 3; j++) {
            td = document.createElement(&#39;td&#39;);

            // 每一行的第一列，添加自增的序号
            if (j == 0) {
                no = document.createTextNode(i++);
                td.appendChild(no);
            }

            // 添加button，内包含  删除字样
            if (j == 3) {
                button = document.createElement(&#39;button&#39;);
                button.setAttribute(&#39;onclick&#39;, &#39;del(this)&#39;);
                buttonText = document.createTextNode(&#39;删除&#39;);
                button.appendChild(buttonText);
                td.appendChild(button);
            }

            tr.appendChild(td);

        }

        add_table.appendChild(tr);
    }
&lt;/script&gt;

&lt;/html&gt;
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage"><a href="401001"> <img class="img-l"
																			src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																			alt="左箭头"> <span
							class="span-txt">仿美团外卖页面</span></a></div>
						<div class="nextPage"><a href="401003"><span class="span-txt">仿项目官网</span> <img
							class="img-r" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
							alt="右箭头"> </a></div>
					</div>

				</div>

			</div>


		</div>

	</div>
</template>

<script>
export default {
	name: "401002",
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
