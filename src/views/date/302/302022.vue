<template>
	<div id="D302022">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302022'}">二进制文件的读取</router-link>
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
								<router-link :to="{name:'D302021'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">流的处理</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302023'}"><span class="span-txt">序列化</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-9-1</span></p>
						<h1>二进制文件的读取</h1>
						<p>二进制文件：图片、音频、视频...</p>
						<p>java中利用DataInputStream和DataOutputStream可实现二进制文件的读取功能。</p>
						<p>&nbsp;</p>
						<p>DataInputStream：数据输入流，让应用程序读取原始java数据类型从底层输入流中的一个独立于机器的方式。一个应用程序使用一个数据输出流来写数据，以后可以通过数据输入流读取。（<strong>不一定安全的多线程访问</strong>）
						</p>
						<p>DataOutputStream：数据输出流可以让一个应用java写的原始数据类型在一个便携式的方式输出流。一个应用程序可以使用一个数据输入流来读取数据。</p>
						<p>&nbsp;</p>
						<p>示例</p>
						<pre><code class="language-java" lang="java">package test2;

import java.io.*;

/**
 * 二进制文件（图片、音频、视频）读取
 * DataInputStream
 * DataOutputStream
 */
public class IOTest {
    public static void main(String[] args) {
        DataInputStream dis = null;
        DataOutputStream dos = null;
        FileInputStream fis = null;
        FileOutputStream fos = null;

        try {
            // 创建输入流对象
            fis = new FileInputStream(&quot;e:\\Java\\img.jpg&quot;);
            // 创建二进制输入流对象
            dis = new DataInputStream(fis);
            // 创建输出流对象
            fos = new FileOutputStream(&quot;e:\\Java\\newimg.jpg&quot;);
            dos = new DataOutputStream(fos);

            // 读取文件，并写入文件
            int tmp;
            while ((tmp = dis.read()) != -1) {
                dos.write(tmp);
//                System.out.println(tmp);
            }
            System.out.println(&quot;写入成功！&quot;);

        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                assert dis != null;
                assert dos != null;
                dis.close();
                dos.close();
                fis.close();
                fos.close();
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
    }
}

</code></pre>
						<p>运行结果</p>
						<pre><code class="language-cmd" lang="cmd">写入成功！

Process finished with exit code 0
</code></pre>
						<p><img src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201209213628061.png"
								referrerpolicy="no-referrer" alt="image-20201209213628061"></p>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302021'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">流的处理</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302023'}"><span class="span-txt">序列化</span> <img
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
	name: "302022",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



