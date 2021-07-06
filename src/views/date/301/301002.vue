<template>
	<div>
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<a href="../../date">资料</a>
				<span> &gt; </span>
				<a href="301001">PHP</a>
				<span> &gt; </span>
				<a href="301002">php留言板</a>
			</div>
			<div class="main-content">

				<div class="data-classify-left">

					<el-button @click="drawer = true" type="primary" style="margin-left: 16px;background: #66B1FF" id="app-catalog">
						目<br>录
					</el-button>

					<el-drawer
						title="目录"
						:visible.sync="drawer"
						:direction="direction"
						:size="widthSize"
						id="app-catalog-text">
						<div class="catalog">
							<!--							<p class="text">目 &nbsp; 录</p>-->
							<catalog301></catalog301>
						</div>
					</el-drawer>

					<div class="catalog">
						<p class="text">目 &nbsp; 录</p>
						<catalog301></catalog301>
					</div>

				</div>


				<div class="data-classify-right">

					<div class="skip-top">
						<div class="previouPage"><a href="301001"> <img class="img-l"
																		src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		alt="左箭头"> <span class="span-txt">简介</span></a>
						</div>
						<div class="nextPage"><a href="301003"><span class="span-txt">xx</span> <img class="img-r"
																									 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
																									 alt="右箭头"> </a>
						</div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->


						<h1>PHP留言板</h1>
						<br>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/20201016132424.png"
												   referrerpolicy="no-referrer" alt="留言板"></div>
						<p>&nbsp;</p>
						<p><strong>主页：</strong></p>
						<pre><code class="language-php" lang="php">&lt;?php include(&#39;db&#39;);
$sql = &quot;SELECT * FROM msg ORDER BY id DESC;&quot;;
$rows = read($pdo, $sql); ?&gt;&lt;html&gt;

&lt;head&gt;
    &lt;title&gt;留言板&lt;/title&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
&lt;/head&gt;
&lt;style&gt;
    * {
        margin: 0px;
        padding: 0px;
    }

    .add {
        width: 800px;
        margin: 0px auto;
    }

    textarea,
    .msg {
        border-radius: 5px;
    }

    textarea {
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
        padding: 5px;
        box-sizing: border-box;
    }

    .username {
        height: 24px;
    }

    .password {
        height: 24px;
        line-height: 24px;
        float: right;
    }

    .msg {
        width: 800px;
        margin: 0px auto;
        margin-top: 10px;
        padding: 5px;
        box-sizing: border-box;
        border: 1px solid gray;
    }
&lt;/style&gt;

&lt;body&gt;
    &lt;div class=&quot;main&quot;&gt;
        &lt;div class=&quot;add&quot;&gt;
            &lt;form action=&quot;save&quot; method=&quot;post&quot;&gt;
                &lt;!-- 文件路径（post：密 文传输，get：明文传输）、文件类型 --&gt; &lt;textarea name=&quot;content&quot; id=&quot;&quot; cols=&quot;30&quot; rows=&quot;10&quot; plac eholder=&quot;请输入内容&quot;&gt;&lt;/textarea&gt; &lt;!-- name:“文件名”，作为 key --&gt; &lt;input class=&quot;username&quot; name=&quot;username&quot; class=&quot;username &quot; type=&quot;text&quot; placeholder=&quot;请输入用户名&quot;&gt; &lt;!-- name:“文件名”， 作为 key --&gt; &lt;input class=&quot;password&quot; type=&quot;submit&quot; value=&quot;提交&quot;&gt;
            &lt;/form&gt;
        &lt;/div&gt;
        &lt;div class=&quot;list&quot;&gt; &lt;?php foreach ($rows as $key =&gt; $msg) { ?&gt;&lt;div class=&quot;msg&quot;&gt;
                    &lt;p&gt;用户：&lt;?php echo $msg[&#39;username&#39;]; ?&gt;&lt;/p&gt;
                    &lt;p&gt;&lt;?php echo $msg[&#39;content&#39;]; ?&gt;&lt;/p&gt;
                &lt;/div&gt; &lt;?php } ?&gt; &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
						<p>&nbsp;</p>
						<p><strong>存储：</strong></p>
						<pre><code class="language-php" lang="php">&lt;?php
$content = $_POST[&#39;content&#39;]; // $_POST 官方特定变量，$_GET
$username = $_POST[&#39;username&#39;];
// var_dump($content, $username);
// 判断用户名、内容输入为空的情况， trim 去除首位的空白字符
while (true) {
    if (trim($username) == &#39;&#39; or trim($content) == &#39;&#39;) {
        // header(&#39;location: index&#39;);
        echo &quot;&lt;script&gt;alert(&#39;用户名、内容不能为空！&#39;);
        window.location.href=&#39;{$_SERVER[&#39;HTTP_REFERER&#39;]}&#39;&lt;/script&gt;&quot;; // {$_SERVER[&#39;HTTP_REFERER&#39;]}，返回上一页面
        exit;
    }break;
};
// 引入文件 include(&#39;db&#39;);
// 连接到数据库
$dsn = &quot;mysql:dbname=abc; host=127.0.0.1&quot;;
// 数据库名，地址
$pdo = new PDO($dsn, &#39;root&#39;, &#39;&#39;);
// 主机的 账号 和 密码
// 编写 sql
$sql = &quot;INSERT INTO msg (username, content) VALUES (&#39;{$username}&#39;, &#39;{$content}&#39;)&quot;;
// 然后可以进行函数调用了,其中因为$pdo（需要用到的变量）是引入的文件中的变量， 所以需要我们自己写入
write($pdo, $sql);
// 跳转回首页
header(&#39;location: index&#39;);
?&gt;
</code></pre>
						<p>&nbsp;</p>
						<p><strong>封装：</strong></p>
						<pre><code class="language-php" lang="php">&lt;?php

/**
 * 1、连接数据库；
 *  2、编写 sql；
 *  执行 sql。 */

/**连接数据库 */
$dsn = &#39;mysql:dbname=abc; host=127.0.0.1&#39;; // 数据库名，地址
$pdo = new PDO($dsn, &#39;root&#39;, &#39;&#39;); // 主机的 账号 和 密码 //
/**编写 sql */
// $sql = &quot;INSERT INTO msg (username, content) VALUES (&#39;魅族&#39;, &#39;内容&#39;)&quot;;
// $sth = $pdo-&gt;prepare($sql);
// // $sql = &quot;select * from test&quot;;
// 查找 msg 表中的数据
// // $sth = $pdo-&gt;prepare($sql);
// // /**执行 sql */
// $sth-&gt;execute();
// // var_dump($sth);
// $date = $sth-&gt;fetchAll();
// var_dump($date);
// //以二维数组形式，获取所有数据，赋值给$rows
// $rows = $sth-&gt;fetchAll();
// //打印一下，看看都得到了什么
// var_dump($rows);
// var_dump($pdo);
// 验证是否连接成功数据库
// 封装函数，全局变量要以参数的形式传递进去才可以使用，比如$pdo
function write($pdo, $sql)
{
    $sth = $pdo-&gt;prepare($sql);
    // 执行 sql
    // 把执行结果返回出去
    return $sth-&gt;execute();
};
// 封装函数，全局变量要以参数的形式传递进去才可以使用，比如$pdo
function read($pdo, $sql)
{
    $sth = $pdo-&gt;prepare($sql);
    $sth-&gt;execute();
    return $rows = $sth-&gt;fetchAll();
    // 也可以写成
    return $rows;
};
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage"><a href="301001"> <img class="img-l"
																		src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		alt="左箭头"> <span class="span-txt">简介</span></a>
						</div>
						<div class="nextPage"><a href="301003"><span class="span-txt">xx</span> <img class="img-r"
																									 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
																									 alt="右箭头"> </a>
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

// import '../../../assets/utils/prism'

export default {
	name: "301002",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



