<template>
	<div id="D302023">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302023'}">序列化</router-link>
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
								<router-link :to="{name:'D302022'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">二进制文件的读取</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302024'}"><span class="span-txt">多线程</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-9-2</span></p>
						<h1>序列化</h1>
						<p>
							Serializable：用于实现java类的序列化操作，而提供的一个语义级别的接口。这接口没有任何的方法或者字段，只是用于表示可序列化的语音。实现了此接口的类，才可以被ObjectOutputStram转换成为字节流。同时也可以通过ObjectInputStream再将其解析为对象。所以说，如果想使用类对象写入文件，或者读取文件的对象内容，必须要实现序列化，也就是实现Serializable接口。</p>
						<p>&nbsp;</p>
						<p><strong>作用</strong>：在传递和保存对象的时候，可以保证对象的完整性和可传递性。</p>
						<p>&nbsp;</p>
						<p><strong>序列化和反序列化的定义</strong></p>
						<p><strong>序列化</strong>：指把java对象转换为字节序列的过程，方便持久化到磁盘或者网络传输；</p>
						<p><strong>反序列化</strong>：把字节序列回复为java对象的过程。</p>
						<p>&nbsp;</p>
						<p>序列化的示例</p>
						<p><strong>源代码</strong></p>
						<pre><code class="language-java" lang="java">package test2;

import java.io.Serializable;

/**
 * 序列化
 * Serializable：用于实现java类的序列化操作，而提供的一个语义级别的接口
 * 这接口没有任何的方法或者字段，只是用于表示可序列化的语音
 * 实现了此接口的类，才可以被ObjectOutputStram转换成为字节流
 * 同时也可以通过ObjectInputStream再将其解析为对象。所以说，如果想使用类对象写入文件，或者读取文件的对象内容，必须要实现序列化，也就是实现Serializable接口。
 *
 * 序列化 和 反序列化 的定义
 * 序列化：指把java对象转换为字节序列的过程，方便持久化到磁盘或者网络传输
 * 反序列化：把字节序列恢复为java对象的过程
 *
 * 序列化的作用：在传递和保存对象的时候，可以保证对象的完整性和可传递性
 */
public class Student implements Serializable {
    private String nama;
    private int age;
    private String gender;

    public Student() {
    }

    public Student(String nama, int age, String gender) {
        this.nama = nama;
        this.age = age;
        this.gender = gender;
    }

    public String getNama() {
        return nama;
    }

    public void setNama(String nama) {
        this.nama = nama;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}

</code></pre>
						<pre><code class="language-java" lang="java">package test2;

import java.io.*;

public class SerializableObj {
    public static void main(String[] args) {
        ObjectOutputStream oos = null;
        ObjectInputStream ois = null;

        try {
            // 创建ObjectOutputStream输出流
            oos = new ObjectOutputStream(new FileOutputStream(&quot;e:\\Java\\student.txt&quot;));
            // 实例化学生对象
            Student stu = new Student(&quot;jack&quot;, 20, &quot;男&quot;);
            System.out.println(&quot;学生姓名为：&quot; + stu.getNama());
            System.out.println(&quot;学生年龄为：&quot; + stu.getAge());
            System.out.println(&quot;学生性别为：&quot; + stu.getGender());
            // 对象序列化，写入输出流
            oos.writeObject(stu);
            System.out.println(&quot;写入成功！&quot;);

            // 创建ObjectInputStream输入流，读取文档中的对象内容
            ois = new ObjectInputStream(new FileInputStream(&quot;e:\\Java\\student.txt&quot;));

            // 反序列化，反序列化过来的文件类型是Object类型，需要强制类型转换
            Student stu1 = (Student) ois.readObject();

            // 输出反序列化后的对象信息
            System.out.println(&quot;学生姓名为：&quot; + stu1.getNama());
            System.out.println(&quot;学生年龄为：&quot; + stu1.getAge());
            System.out.println(&quot;学生性别为：&quot; + stu1.getGender());

        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            try {
                assert oos != null;
                assert ois != null;
                oos.close();
                ois.close();
            } catch (IOException e) {
                e.printStackTrace();
            }

        }

    }
}

</code></pre>
						<p><strong>运行结果</strong></p>
						<pre><code class="language-cmd" lang="cmd">学生姓名为：jack
学生年龄为：20
学生性别为：男
写入成功！
学生姓名为：jack
学生年龄为：20
学生性别为：男

Process finished with exit code 0
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302022'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">二进制文件的读取</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302024'}"><span class="span-txt">多线程</span> <img
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
	name: "302023",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



