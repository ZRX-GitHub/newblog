<template>
	<div id="D302021">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302021'}">流的处理</router-link>
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
							<catalog302></catalog302>
						</div>
					</el-drawer>

					<div class="catalog">
						<p class="text">目 &nbsp; 录</p>
						<catalog302></catalog302>
					</div>

				</div>


				<div class="data-classify-right">

					<div class="skip-top">

						<div class="previouPage">
							<div class="previouPage">
								<router-link :to="{name:'D302012'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">-- 预留12~20 --</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302022'}"><span class="span-txt">二进制文件的读取</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-7-1</span></p>
						<h1>流的处理 </h1>
						<p>
							在java中，所有的数据都是使用流读写的。流是一组有序的数据序列，将数据从一个地方带到另一个地方。根据数据流向的不同，可以分为<strong>输入流</strong>（input）和<strong>输出流</strong>（output）。
						</p>
						<p>&nbsp;</p>
						<ul>
							<li>输入：将数据从各种输入设备（如键盘、文件）中读取到内存中；</li>
							<li>输出：将数据写入到各种输出设备（如文件、显示器、磁盘）。</li>

						</ul>
						<p>&nbsp;</p>
						<p>数据量是java中进行 I/O 操作对象，可以分为一下几类。</p>
						<ol start="">
							<li>按照流的方向，主要分为输入流和输出流两大类；</li>
							<li>按照数据单位的不同，可以分为字节流和字符流；</li>
							<li>按照功能可以划分为节点流和处理流。</li>

						</ol>
						<p>&nbsp;</p>
						<h3>File类</h3>
						<p>常用方法</p>
						<figure>
							<table>
								<thead>
								<tr>
									<th>类型</th>
									<th>方法</th>
									<th>功能</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>boolean</td>
									<td>exists()</td>
									<td>判断文件或目录是否存在</td>
								</tr>
								<tr>
									<td>boolean</td>
									<td>isFile()</td>
									<td>判断是否是普通文件</td>
								</tr>
								<tr>
									<td>boolean</td>
									<td>isDirectory()</td>
									<td>判断是否为目录</td>
								</tr>
								<tr>
									<td>String</td>
									<td>getPath()</td>
									<td>返回对象文件的相对路径</td>
								</tr>
								<tr>
									<td>String</td>
									<td>getAbsoluePath()</td>
									<td>返回对象文件的绝对路径</td>
								</tr>
								<tr>
									<td>String</td>
									<td>getName()</td>
									<td>返回对象表示的文件或目录，输出名字、类型</td>
								</tr>
								<tr>
									<td>String</td>
									<td>delete()</td>
									<td>删除对象表示的文件或目录</td>
								</tr>
								<tr>
									<td>String</td>
									<td>createNewFile()</td>
									<td>创建空文件，不创建目录</td>
								</tr>
								<tr>
									<td>long</td>
									<td>length()</td>
									<td>返回文件的长度，单位是字节，不存在则返回 0L</td>
								</tr>
								</tbody>
							</table>
						</figure>
						<p>&nbsp;</p>
						<h3>通过流来读写文件</h3>
						<p>以先进先出的方式发送信息。</p>
						<ul>
							<li>
								<p>流的分类</p>
								<ul>
									<li>
										<p>按照流向的分类</p>
										<ol start="">
											<li>输入流，InputStream、Reader；</li>
											<li>输出流，OutputStram、Writer。</li>

										</ol>
									</li>
									<li>
										<p>按照处理数据单位区分</p>
										<ol start="">
											<li>字节流，InputStream、Reader；</li>
											<li>字符流，Reader、Writer。</li>

										</ol>
									</li>

								</ul>
							</li>

						</ul>
						<p>&nbsp;</p>
						<h5>InputStream</h5>
						<p>表示类及子类对象为字节输入流。</p>
						<p>常用子类： </p>
						<p>ByteArrayInputStream：将字节数字转换为字节输入流，从中读取字节；</p>
						<p>FileInputStream：从文件中读取数据；</p>
						<p>ObjectInputStream：将对象反序列化；</p>
						<p> PipedInputStream：连接到一个popedOutputStream（管道输出流）；</p>
						<p>SequenceInputStream：将多个字节输入流串联成一个字节输入流。</p>
						<p>&nbsp;</p>
						<h5>FileInputStream</h5>
						<p>是java中比较常用的一种，通常用来访问文件中的一个字节，或者整个文件，或者一批字节。</p>
						<p>&nbsp;</p>
						<h5>OutputStream</h5>
						<p>常用子类：</p>
						<p>ByteArrayOutputStream：向内存的缓冲区的字节数组中写入数据 ；</p>
						<p>FileOutputStream：向文件中写入数据；</p>
						<p>ObjectOutputStream：将对象序列化；</p>
						<p>PipedOutputStream：连接到一个pipedInoutStram（管道输入流）。</p>
						<p>&nbsp;</p>
						<p>FileOutputStram，文件输出流，使用的比较多。</p>
						<p>在创建FileOutputStram对象时，如果指定为的文件不存在，则自动创建一个文件。如果该文件已经存在，则清清除该文件中的全部数据并重新写入数据。</p>
						<p>&nbsp;</p>
						<h5>Reader</h5>
						<p>是所有字符流输入流类的父类。</p>
						<p>常用子类：</p>
						<p>BufferedReader：为其他字符输入流提供的缓冲区； </p>
						<p>CharArrayReader：将字符数组转换为字符输入流；</p>
						<p>InputStreamReader：将字节输入流转换为字符输入流，可以指定字符编码；</p>
						<p>PipedReader：连接到一个pipedWriter；</p>
						<p>StringReader：将字符串转换为字符输入流，从中读取字符。</p>
						<p>&nbsp;</p>
						<h5>Writer</h5>
						<p>是所有字符输出流的父类。</p>
						<p>常用子类：</p>
						<p>BufferedWriter：为其他的输出流提供写的缓冲区；</p>
						<p>CharArrayWriter：向内存缓冲区的字符数组写数据；</p>
						<p>OutputStreamWriter：将字节输出流转换为字符输出流，可以指定字符编码；</p>
						<p>PipedWriter：连接到一个pipedReader；</p>
						<p>StringWriter ：向内存缓冲区的字符串（StringBuffer）写入数据。</p>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302012'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">-- 预留12~20 --</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302022'}"><span class="span-txt">二进制文件的读取</span> <img
								class="img-r"
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

// import '../../../assets/utils/prism'

export default {
	name: "302021",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



