<template>
	<div>

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<a href="../../../item">项目</a>
				<span> &gt; </span>
				<a href="402001">JavaWeb项目</a>
				<span> &gt; </span>
				<a href="402001">登录校验</a>
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
							<catalog402></catalog402>
						</div>
					</el-drawer>

					<div class="catalog">
						<p class="text">目 &nbsp; 录</p>
						<catalog402></catalog402>
					</div>

				</div>

				<div class="data-classify-right">

					<div class="skip-top">
						<!-- <div class="nextPage"><a href="402002.php"><span class="span-txt">可编辑的通讯录</span> <img src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png" alt="右箭头"> </a></div> -->
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2021-3-12</span></p>
						<h1>登录/注册功能</h1>
						<p><strong>演示过程，请查看动图。</strong></p>
						<p><a href="https://gitee.com/ZRX001/gallery/raw/master/gallery/GIF%202021-3-12%2018-39-03.gif"
							  target="_blank" class="url">https://gitee.com/ZRX001/gallery/raw/master/gallery/GIF%202021-3-12%2018-39-03.gif</a>
						</p>
						<p><img src="https://gitee.com/ZRX001/gallery/raw/master/gallery/GIF%202021-3-12%2018-39-03.gif"
								referrerpolicy="no-referrer" alt="登录/注册动图演示"></p>
						<p>&nbsp;</p>
						<p>实现简述：</p>
						<p><strong>String，SringBuffer和 StringBuilder</strong></p>
						<p>当对字符串进行修改的时候，需要使用 StringBuffer 和 StringBuilder 类。</p>
						<p>和 String 类不同的是，StringBuffer 和 StringBuilder 类的对象能够被多次的修改，并且不产生新的未使用对象。</p>
						<p>在使用 StringBuffer 类时，每次都会对 StringBuffer 对象本身进行操作，而不是生成新的对象，所以如果需要对字符串进行修改推荐使用
							StringBuffer。</p>
						<p>StringBuilder 类在 Java 5 中被提出，它和 StringBuffer 之间的最大不同在于 StringBuilder 的方法不是线程安全的（不能同步访问）。</p>
						<p>由于 StringBuilder 相较于 StringBuffer 有速度优势，所以多数情况下建议使用 StringBuilder 类。</p>
						<p>&nbsp;</p>
						<p><strong>服务器端的重定向</strong>可以有两种方式，一是使用HttpServletResponse的sendRedirect()方法，一是使用RequestDispatcher的forward()方法
						</p>
						<p><strong>HttpServletResponse的sendRedirect()：</strong>将
							响应定向到参数location指定的、新的URL。location可以是一个绝对的URL，如 response.sendRedirect(&quot;<a
								href="http://java.sun.com" target="_blank" class="url">http://java.sun.com</a>&quot;)也可以使用相对的URL。如果location以“/”开
							头，则容器认为相对于当前Web应用的根，否则，容器将解析为相对于当前请求的URL。这种重定向的方法，将导致客户端浏览器的请求URL跳转。从浏览器
							中的地址栏中可以看到新的URL地址，作用类似于上面设置HTTP响应头信息的实现。</p>
						<p><strong>RequestDispatcher.forward()：</strong>将
							当前的request和response重定向到该RequestDispacher指定的资源。这在实际项目中大量使用，因为完成一个业务操作往往需要
							跨越多个步骤，每一步骤完成相应的处理后，转向到下一个步骤。比如，通常业务处理在Servlet中处理，处理的结果转向到一个JSP页面进行显示。这样
							看起来类似于Servlet链的功能，但是还有一些区别。一个RequestDispatcher对象可以把请求发送到任意一个服务器资源，而不仅仅是另
							外一个Servlet。</p>
						<p>&nbsp;</p>
						<p><strong>区别：</strong></p>
						<p><strong>forward()</strong>方法在服务器端工作；它只能在服务器内工作。因为它是在服务器内工作，故<strong>速度快</strong>。</p>
						<p>
							sendRedirect()方法在客户端工作；它可以在服务器内外使用。它可以将响应重定向到另一个资源，这个资源可以是servlet，jsp，或html文件。它接受相对和绝对的url.也因为它是接受url，所以，它可以再服务器内外工作。缺点：<strong>速度慢</strong>。
						</p>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<p>验证码使用会话来传递。</p>
						<p>&nbsp;</p>
						<h3>配置好xml文件</h3>
						<p>&nbsp;</p>
						<h3>ltCode（验证码的产生、传递）</h3>
						<pre><code class="language-java" lang="java">package com.web.login;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;

public class ItCode extends HttpServlet {
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1、确定要生成的验证码的宽高
		int weight = 120;
		int height = 30;


		// 2、创建一个对象，在内存中，代表一个图片（图片验证码对象）
		BufferedImage image = new BufferedImage(weight, height, BufferedImage.TYPE_INT_BGR);


		// 3、美化图片
		// 3.1、填充背景颜色
		// 获取画笔
		Graphics graphics = image.getGraphics();
		graphics.setColor(Color.pink);
		graphics.fillRect(0,0,weight,height);

		// 3.2、画边框
		// 边框颜色
		// 区域
		graphics.drawRect(0,0,weight,height);

		// 3.3、写验证码
		String str = &quot;abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789&quot;;
		// 创建随机数对象
		Random random = new Random();

		// 随机从str字符串中取出4个字符
		// 把这四个字符组成为字符串
		StringBuilder itCodeStr = new StringBuilder();
		for (int i = 1; i &lt;= 4; i++) {
			int index = random.nextInt(str.length());
			// 获取字符
			char ch = str.charAt(index);
			char c = ch;
			String s = Character.toString(c);
			itCodeStr.append(s);
			// 设置字符大小
//		设计字体显示效果 Font mf = new Font(String 字体，int 风格，int 字号);
			graphics.setFont(new Font(&quot;宋体&quot;,Font.PLAIN,20));
			// 设置字符颜色
			graphics.setColor(Color.red);
			// 写验证码，字的坐标
			graphics.drawString(ch+&quot;&quot;,weight/5*i,20);
		}

		// 3.4、画干扰线
		// 干扰线的颜色
		graphics.setColor(Color.green);
		// 干扰线的随机坐标，线的两端坐标不能超出自身的画板
		for (int i = 0; i &lt; 10; i++) {
			int x1 = random.nextInt(weight);
			int x2 = random.nextInt(weight);
			int y1 = random.nextInt(height);
			int y2 = random.nextInt(height);
			graphics.drawLine(x1,x2,y1,y2);
		}


		// 验证码
//		System.out.println(&quot;本地验证码：&quot;+itCodeStr);
		String itCode = itCodeStr.toString();
		// 将生成的验证码code放入session中
		request.getSession().setAttribute(&quot;code&quot;, itCode);


		// 4、把图片输出到页面上
		ImageIO.write(image, &quot;jpg&quot;, response.getOutputStream());


	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}
}

</code></pre>
						<p>&nbsp;</p>
						<h3>Login（登录验证等功能）</h3>
						<pre><code class="language-java" lang="java">package com.web.login;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.Properties;

public class Login extends HttpServlet {
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 避免乱码的情况
		req.setCharacterEncoding(&quot;UTF-8&quot;);
		resp.setHeader(&quot;content-type&quot;,&quot;text/html;charset=utf-8&quot;);


		// 获取存放在session中的验证码
		String itCode = (String) req.getSession().getAttribute(&quot;code&quot;);
//		System.out.println(&quot;session中的验证码：&quot;+itCode);


		// 读取login.properties
		// 1、获取context对象
		ServletContext context = this.getServletContext();
		// 信息表
		String realPath = context.getRealPath(&quot;/login.properties&quot;);
		// 通过真实路径的方式
		File file = new File(realPath);
		InputStream is = new FileInputStream(file);
		// 声明Properties
		Properties properties = new Properties();
		properties.load(is);


		// 获取内置数据中内容
		// 账号
		String user = properties.getProperty(&quot;user&quot;);
		// 密码
		String password = properties.getProperty(&quot;password&quot;);


		// 验证数据
		Map&lt;String, String[]&gt; parameterMap = req.getParameterMap();
		// 遍历map，使用keySet来访问
		parameterMap.keySet();

		int index = 0;
		String userId = null, passwordId = null, itCodeId =null;
		// 遍历name
		for (String name : parameterMap.keySet()) {
			// 根据key键获取值
			String[] values = parameterMap.get(name);
			// 遍历数组
			for (String value : values) {

				if (index == 0) {
					userId = value;
					index++;
				} else if (index == 1) {
					passwordId = value;
					index++;
				} else if (index == 2){
					itCodeId = value;
					index++;
				} else {
					System.out.println(&quot;请查找bug，数据存在异常！！！&quot;);
				}

			}
		}
//		System.out.println(&quot;验证码：&quot;+itCodeId);
//		System.out.println(userId+&quot;--------&quot;+passwordId);



		// 验证码比较，不区分大小写，使用：equalsIgnoreCase
		if (!(itCodeId.equalsIgnoreCase(itCode))) {  // 1、优先判断验证码的情况：错误
			resp.getWriter().write(&quot;验证码错误，请重新输入&quot;);
		} else if (!(userId.equals(user) &amp;&amp; passwordId.equals(password))) {  // 2、账号、密码：||错误
			resp.getWriter().write(&quot;账号或密码错误，请重新输入&quot;);
		} else if (userId.equals(user) &amp;&amp; passwordId.equals(password) &amp;&amp; itCodeId.equalsIgnoreCase(itCode)){  // 3、验证码、账号、密码：都正确
			// 跳转到成功的页面
			resp.sendRedirect(&quot;/demo/index.html&quot;);
		} else {  // 4、系统bug
			System.out.println(&quot;系统bug，请修复！！！&quot;);
		}

	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		this.doPost(req, resp);
	}
}

</code></pre>
						<p>&nbsp;</p>
						<h3>loginTest.html</h3>
						<pre><code class="language-html" lang="html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;./css/style.css&quot;&gt;
    &lt;script src=&quot;https://cdn.staticfile.org/vue/2.2.2/vue.min.js&quot;&gt;&lt;/script&gt;

    &lt;title&gt;登录/注册&lt;/title&gt;
&lt;/head&gt;

&lt;body id=&quot;loginHtml&quot;&gt;
    &lt;div id=&quot;loginForm&quot;&gt;
        &lt;form action=&quot;/demo/login&quot; method=&quot;post&quot; onsubmit=&quot;test&quot;&gt;
            &lt;p class=&quot;loginTitle&quot;&gt;欢迎登录/注册&lt;/p&gt;
            &lt;span&gt;&lt;input type=&quot;text&quot; name=&quot;user&quot; placeholder=&quot;手机号/用户名/邮箱&quot; class=&quot;login user&quot;&gt;&lt;/span&gt;
            &lt;span&gt;&lt;input type=&quot;password&quot; name=&quot;password&quot; placeholder=&quot;请输入密码&quot; class=&quot;login password&quot;&gt;&lt;/span&gt;
            &lt;div class=&quot;itCode&quot;&gt;
                &lt;div class=&quot;img&quot;&gt;
                    &lt;img :src=&quot;imgSrc&quot; alt=&quot;&quot;  @click=&quot;changImg&quot;&gt;
                &lt;/div&gt;
                &lt;div class=&quot;input-itCode&quot;&gt;&lt;input type=&quot;text&quot; name=&quot;itCode&quot; placeholder=&quot;请输入验证码&quot;&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;button type=&quot;submit&quot; &gt;登录/注册&lt;/button&gt;
        &lt;/form&gt;

    &lt;/div&gt;
&lt;/body&gt;

&lt;script&gt;
    // 返回上一页，重新加载loginTest.html
    if(window.name!=&quot;hasLoad&quot;){

        location.reload();
        window.name = &quot;hasLoad&quot;;
    } else {
        window.name=&quot;&quot;;
    }

    var loginForm = new Vue({
        el: &quot;#loginForm&quot;,
        data: {
            imgSrc: &quot;/demo/itcode&quot;
        },
        methods: {
            changImg: function () {
                this.imgSrc = &quot;/demo/itcode?&quot;+ new Date().getTime()
            }
        }
    })
&lt;/script&gt;

&lt;/html&gt;
</code></pre>
						<h3>配对css</h3>
						<pre><code class="language-css" lang="css">* {
    border: 0;
    margin: 0;
    padding: 0;
    outline: none;
    list-style-type: none;
}

#loginHtml {
    /* 实现全屏自适应渐进色 */
    background-position: center 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
    background-image: -webkit-linear-gradient(-45deg, rgba(152, 122, 222, 1) 0%, rgba(45, 215, 204, 1) 100%);
    background-image: linear-gradient(135deg, rgba(152, 122, 222, 1) 0%, rgba(45, 215, 204, 1) 100%);
}
/* 登录面板 */

#loginHtml #loginForm {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 360px;
    height: 380px;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 41px 41px 6px #224a61, -41px -41px 6px #88ffff;
}
/* 登录面板的标题字 */

#loginHtml .loginTitle {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
}

#loginHtml form&gt;span {
    display: block;
}
/* 输入框 */

#loginHtml input {
    width: 100%;
    height: 40px;
    font-size: 18px;
    background-color: transparent;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
    padding: 0 10px;
    box-sizing: border-box;
}
#loginHtml .login {
    text-align: center;
}
#loginHtml .login:focus {
    border: 1px solid #55b9f3;
}
/* 账号框 */

#loginHtml .user {
    margin-top: 30px;
}
/* 验证码区域 */

#loginHtml .itCode {
    width: 100%;
    height: 30px;
}
/* 验证码 */

#loginHtml .itCode .img {
    width: 120px;
    height: inherit;
    float: left;
}
/* 验证码框 */

#loginHtml .input-itCode {
    width: 160px;
    height: inherit;
    margin: 0 auto;
    float: right;
}

#loginHtml .input-itCode&gt;input {
    width: inherit;
    height: inherit;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
}

#loginHtml button {
    width: 100%;
    height: 40px;
    margin-top: 50px;
    font-weight: bold;
    border-radius: 10px;
    background-color: #88ffff;
    cursor: pointer;
}

#loginHtml button:hover {
    background-color: #22ffff;
    color: #fff;
}
</code></pre>
						<p>&nbsp;</p>
						<h3>index.html</h3>
						<pre><code class="language-html" lang="html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;./css/style.css&quot;&gt;
    &lt;script src=&quot;https://cdn.staticfile.org/vue/2.2.2/vue.min.js&quot;&gt;&lt;/script&gt;

    &lt;title&gt;测试页面&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;登录成功！！！&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>


						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<!-- <div class="nextPage"><a href="402002.php"><span class="span-txt">可编辑的通讯录</span> <img src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png" alt="右箭头"> </a></div> -->
					</div>

				</div>

			</div>


		</div>

	</div>
</template>

<script>
export default {
	name: "402001",
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
