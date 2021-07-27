<template>
	<div id="D302028">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302028'}">JDBC</router-link>
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
								<router-link :to="{name:'D302027'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">线程池</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302029'}"><span class="span-txt">员工信息管理项目</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2020-12-16-1</span></p>
						<h1>JDBC</h1>
						<h3>什么是JDBC？</h3>
						<p>全称是Java Data Base Connectivity，用来实现Java与数据库的连接，是一种用来执行sql语句的Java
							API,可以为多种关系型的数据库提供统一的访问。由一组Java语言编写的类和接口组成。</p>
						<p><strong>本质</strong>：就是sun公司定义了一套操作所有关系型数据库的规则(接口)，要求每个数据库厂商取实现类接口，提供数据库的jar包，</p>
						<p>我们可以使用这套接口编程。真正执行代码的驱动jar包中的实现类。</p>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h3>JDBC底层是如何连接数据库的？</h3>
						<p>详见：<a href="https://www.toutiao.com/i6910490473211642371/">https://www.toutiao.com/i6910490473211642371/</a>
						</p>
						<p>&nbsp;</p>
						<p><strong>导入mysql的jar包（三个步骤）</strong></p>
						<p>步骤一：</p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201216125631827.png"
												   referrerpolicy="no-referrer" alt="image-20201216125631827"></div>
						</p>
						<p>步骤二：</p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201216125722597.png"
												   referrerpolicy="no-referrer" alt="image-20201216125722597"></div>
						</p>
						<p>步骤三：找到mysql的jar包</p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201216125806805.png"
												   referrerpolicy="no-referrer" alt="image-20201216125806805"></div>
						</p>
						<p>或者在项目根目录下建立一个bin文件夹，并标记文件夹。</p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201216130142194.png"
												   referrerpolicy="no-referrer" alt="image-20201216130142194"></div>
						</p>
						<p>&nbsp;</p>
						<h3>DriverManager：驱动管理对象</h3>
						<p>功能：</p>
						<ol start="">
							<li>注册驱动，告诉程序该使用哪一个数据库驱动jar包。mysql5后，可以省略注册步骤；</li>
							<li>获取数据库连接。</li>

						</ol>
						<p>&nbsp;</p>
						<p>使用方法：static Connection getConnection(String url, String user, String password)</p>
						<p>参数：url 指定连接的路径。</p>
						<p>语法：jdbc://mysql//ip地址(域名):端口号/数据库名称。</p>
						<p>示例：jdbc:mysql://localhost:3306/test。</p>
						<p>如果连接的是本机服务器，端口号是3306，可以简写为jdbc:mysql:///test&quot;。</p>
						<p>user：用户名</p>
						<p>password：密码</p>
						<h3>Connection：数据库连接对象</h3>
						<p>功能：</p>
						<ol start="">
							<li>
								<p>获取执行sql的对象，conn调用createStatement对象，返回statement对象，执行execute对应的sql语句；</p>
							</li>
							<li>
								<p>管理事务</p>
								<ol start="">
									<li>开启事务：setAutoCommit：设置方法的参数为false，就是开启事务；</li>
									<li>提交事务：commit；</li>
									<li>回滚事务：rollback。</li>

								</ol>
							</li>

						</ol>
						<p>&nbsp;</p>
						<h3>Statement(接口)：</h3>
						<p>使用的是接口，执行sql对象的。</p>
						<p>执行sql的常用方法：</p>
						<figure>
							<table>
								<thead>
								<tr>
									<th>类型</th>
									<th>语句</th>
									<th>效果</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>boolean</td>
									<td>execute(String sql)</td>
									<td>可以执行任意的sql语句，可能返回多个结果</td>
								</tr>
								<tr>
									<td>int</td>
									<td>executeUpdate(String sql)</td>
									<td>执行DML(增删改)</td>
								</tr>
								<tr>
									<td>ResultSet</td>
									<td>executeQuery(String sql)</td>
									<td>执行查询(select)语句</td>
								</tr>
								</tbody>
							</table>
						</figure>
						<ul>
							<li>executeUpdate(String sql)：返回值：int表示操作以后，影响的行数，可以通过这个行数判断sql语句是否执行成功。如果&gt;0，则表示执行成功。
							</li>

						</ul>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h3><strong>PreparedStatement</strong>(Statement的子类)：</h3>
						<p>防止sql注入的问题，在拼接sql的时候，有一些sql的特殊关键字参与字符串的拼接，会造成安全问题。</p>
						<p>使用预编译的sql ： 参数使用？作为占位符。</p>
						<p>&nbsp;</p>
						<h3>封装工具类</h3>
						<p><strong>示例（不支持重复使用）</strong></p>
						<pre><code class="language-java" lang="java">package jdbc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class JDBCDemo {
    public static void main(String[] args) throws Exception {
        // 步骤
        // 1、导入jar包
        // 2、注册驱动
        Class.forName(&quot;com.mysql.jdbc.Driver&quot;);
        // 3、获取数据库连接;jdbc:数据库类型://主机地址:端口/数据库
        Connection conn = DriverManager.getConnection(&quot;jdbc:mysql://localhost:3306/test&quot;, &quot;root&quot;, &quot;123456&quot;);
        // 4、定义sql语句
        String sql = &quot;update user set password = &#39;123456&#39; where id = 1 &quot;;
        // 5、获取执行sql的对象
        Statement statement = conn.createStatement();
        // 6、执行sql
        int i = statement.executeUpdate(sql);
        // 7、处理结果
        System.out.println(i);
        // 8、释放资源
        statement.close();

    }

}

</code></pre>
						<p><strong>示例（支持重复使用，只需要稍稍更改一下数据即可）</strong></p>
						<pre><code class="language-java" lang="java">URL resouce = classLoader.getResource(&quot;JDBC.properties&quot;);  // 如果有中文路径，则需要转换一下
            URI uri = resouce.toURI();  // 解决中文乱码问题
            String path = uri.getPath();  // 解决中文乱码问题
</code></pre>
						<pre><code class="language-java" lang="java">package jdbc;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.sql.*;
import java.util.Properties;

/**
 * 封装工具类
 * 目的：简化书写，抽取一些重复的方法
 * 分析要抽取哪些：
 *      1、注册驱动
 *      2、获取连接的对象
 *         解决问题（），不想传递参数 ，还得保证工具类的通用
 *         解决方法：配置文件，properties
 *         配置文件中存放了url和user、password
 *      3、抽取两个释放资源的方法
 *         做增删改的时候，需要多释放一个rs
 */
public class JDBCUtils {
    // 声明成员变量，静态类型的，因为成员变量要被静态代码块访问
    private static String url;
    private static String user;
    private static String password;
    private static String driver;
    // 只需要读取一次文件，就能拿到我们想要的值
    static {

        try {
            // 声明一个properties对象
            Properties pro = new Properties();
            // 获取文件位置的url，加载文件 --》 使用ClassLoader
            // 获取自身类所在的路径
            ClassLoader classLoader = JDBCUtils.class.getClassLoader();
            URL resouce = classLoader.getResource(&quot;JDBC.properties&quot;);  // 如果有中文路径，则需要转换一下
            URI uri = resouce.toURI();  // 解决中文乱码问题
            String path = uri.getPath();  // 解决中文乱码问题
//            String path = resouce.getPath();
//          System.out.println(path);
            // 加载文件，通过流来读取文件，通过properties对象加载文件
            pro.load(new FileReader(path));
            // 获取数据，并赋值
            url = pro.getProperty(&quot;url&quot;);
            user = pro.getProperty(&quot;user&quot;);
            password = pro.getProperty(&quot;password&quot;);
            driver = pro.getProperty(&quot;driver&quot;);

            // 注册驱动
            Class.forName(driver);

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (URISyntaxException e) {
            e.printStackTrace();
        }
    }

    // 先写一个获取连接的对象的方法，不想再往里面传入参数了
    public static Connection getConnection() throws SQLException {
        // DriverManager.getConnection(&quot;jdbc:mysql:///test&quot;, &quot;root&quot;, &quot;123456&quot;);
        return DriverManager.getConnection(url, user, password);
    }
    // 释放资源的方法，增删改使用，传入2个参数
    public static void close(Statement stmt, Connection conn) {
        if (stmt != null) {
            try {
                stmt.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }

    }

    // 释放资源的方法，增删改使用，传入3个参数
    public static void close(Statement stmt, Connection conn, ResultSet rs) {
        if (stmt != null) {
            try {
                stmt.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
        if (conn != null) {
            try {
                conn.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
        if (rs != null) {
            try {
                rs.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }

    }


}

</code></pre>
						<p><strong>JDBC.properties</strong></p>
						<p>
						<div class="dark-img"><img class="zooming"
												   src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20201216223258828.png"
												   referrerpolicy="no-referrer" alt="image-20201216223258828"></div>
						</p>
						<pre><code class="language-java" lang="java">  url=jdbc:mysql:///test
user=root
password=123456
driver=com.mysql.jdbc.Driver
</code></pre>
						<p>&nbsp;</p>
						<p><strong>未使用调用</strong></p>
						<pre><code class="language-java" lang="java">package jdbc;

import java.sql.Connection;
//import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * JDBC操作插入语句
 */
public class JDBCInsertTest {
    public static void main(String[] args) {

        Statement stmt = null;
        Connection conn = null;
        try {
            // 注册驱动
            Class.forName(&quot;com.mysql.jdbc.Driver&quot;);
            // 定义sql
            String sql = &quot;insert into user values(3,&#39;123456&#39;)&quot;;
//             String sql = &quot;delete from user where id = 3 &quot;;
            // 获取connection对象
            conn = DriverManager.getConnection(&quot;jdbc:mysql:///test&quot;, &quot;root&quot;, &quot;123456&quot;);
            // 获取执行sql的对象
            stmt = conn.createStatement();
            // 执行sql，返回一个返回值
            int i = stmt.executeUpdate(sql);
            // 处理结果
            if (i &gt; 0) {
                System.out.println(&quot;数据添加成功！&quot;);
            } else {
                System.out.println(&quot;数据添加失败！&quot;);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            // 不管代码执行的结果，最终都会执行此代码块中的内容。如果不加if判断，开始的时候，声明 stmt = null，
            // 如果代码执行的过程中，没有获取内容，最终结果会是null
            // 这个时候执行close会报空指针异常，所有我们在外面给它加上一个if判断

            try {
                assert stmt != null;
                stmt.close();
                conn.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
          }
           if (stmt != null) {
               try {
                   stmt.close();
               } catch (SQLException throwables) {
                   System.out.println(&quot;222&quot;);

                   throwables.printStackTrace();
               }
           }
           if (conn != null) {
               try {
                   conn.close();
               } catch (SQLException throwables) {
                   System.out.println(&quot;111&quot;);
                   throwables.printStackTrace();
               }
          }
       }
    }
}

</code></pre>
						<p><strong>使用调用</strong></p>
						<pre><code class="language-java" lang="java">package jdbc;

import java.sql.Connection;
//import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * JDBC操作插入语句
 */
public class JDBCInsertTest {
    public static void main(String[] args) {

        Statement stmt = null;
        Connection conn = null;
        try {
            // 获取connection对象
            conn = JDBCUtils.getConnection();
            // 定义sql
//            String sql = &quot;insert into user values(3,&#39;123456&#39;)&quot;;
            String sql = &quot;delete from user where id = 3 &quot;;
            // 获取执行sql的对象
            stmt = conn.createStatement();
            // 执行sql，返回一个返回值
            int i = stmt.executeUpdate(sql);
            // 处理结果
            if (i &gt; 0) {
                System.out.println(&quot;数据添加成功！&quot;);
            } else {
                System.out.println(&quot;数据添加失败！&quot;);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.close(stmt, conn);
       }
    }
}
</code></pre>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h5>JDBC查询练习</h5>
						<p>使用while(rs.next())可以进行循环判断</p>
						<pre><code class="language-java" lang="java">while (rs.next()) {  // rs.next()返回的是boolea类型
//     int id = rs.getInt(&quot;id&quot;);
	int id = rs.getInt(1);
//     String pwd = rs.getString(&quot;password&quot;);
//     String pwd = rs.getString(&quot;password&quot;);
    String pwd = rs.getString(2);
    System.out.println(id + &quot;----&quot; + pwd);
}
</code></pre>
						<pre><code class="language-java" lang="java">package jdbc;

import java.sql.*;

/**
 * JDBC查询练习
 * ResultSet：结果集对象，封装查询结果的
 * 1、next()：游标向下移动一行
 * 2、getXXX(参数)方法：获取数据的方法
 *      用getInt()，还是getString()，取决于你的字段类型
 *      参数：参数类型代表获取数据库表的列或者字段名
 *      1、int：代表列的编号，如果getInt()，代表数据表中的第一列；
 *      2、String：代表列的名称(字段名)，如getString(password)表示获取password的那个字段。
 *
 * 如果不加while循环判断，每次只能返回一行内容，所以，如果想获取所有表的数据，则可以使用while
 * 底层原理：只要这个next方法中的光标向下移动能获取数据，发布会之 就是true，所以当没有数据的时候，返回值false循环就结束了
 */
public class JDBCSelectDemo {
    public static void main(String[] args) {
        // 声明要使用的对象
        Statement stmt = null;
        Connection conn = null;
        ResultSet rs = null;

        try {
            // 注册驱动
            Class.forName(&quot;com.mysql.jdbc.Driver&quot;);
            // 定义sql
            String sql = &quot;select * from user&quot;;
            // 获取connction对象
//            conn = DriverManager.getConnection(&quot;jdbc:mysql:///test&quot;, &quot;root&quot;, &quot;123456&quot;);
            conn = DriverManager.getConnection(&quot;jdbc:mysql:///test&quot;, &quot;root&quot;, &quot;123456&quot;);
            // 获取执行的sql对象
            stmt = conn.createStatement();
            // 执行sql，查询语句使用excuteQuery
            rs = stmt.executeQuery(sql);
            // 处理获取的结果
            while (rs.next()) {  // rs.next()返回的是boolea类型
//                int id = rs.getInt(&quot;id&quot;);
                int id = rs.getInt(1);
//            String pwd = rs.getString(&quot;password&quot;);
//                String pwd = rs.getString(&quot;password&quot;);
                String pwd = rs.getString(2);
                System.out.println(id + &quot;----&quot; + pwd);
            }


        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            if (rs != null) {
                try {
                    rs.close();
                } catch (SQLException throwables) {
                    throwables.printStackTrace();
                }
            }
        }
    }
}
</code></pre>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h5>模仿登录</h5>
						<pre><code class="language-sql" lang="sql">// 不安全写法
SELECT * FROM USER WHERE username = &#39;fdasff&#39; AND PASSWORD = &#39;a&#39; OR &#39;a&#39; = &#39;a&#39;;
用户名随便输入，密码输入 a&#39; or &#39;a&#39; = &#39;a
会导致登录成功
// 安全写法
select * from user where username = ? and password =  ?;
</code></pre>
						<p>&nbsp;</p>
						<pre><code class="language-java" lang="java">package jdbc;

import java.sql.*;
import java.util.Scanner;

/**
 * 写个案列模仿登录
 * 通过键盘输入用户名和密码，判断是否登录成功，成功返回登录成功，失败返回登陆失败
 *
 * PreparedStatement
 * 防止sql注入的问题，在拼接sql的时候，有一些sql的特殊关键字参与字符串的拼接，会造成安全问题
 * 比如，用户名随便输入，密码输入 a&#39; or &#39;a&#39; = &#39;a
 * 带入sql语句后就是如下的代码
 * SELECT * FROM USER WHERE username = &#39;fdasff&#39; AND PASSWORD = &#39;a&#39; OR &#39;a&#39; = &#39;a&#39;;
 * 会返回一个错误的结果.
 * 解决：PreparedStatement
 * 使用预编译的sql ：  参数使用？作为占位符
 */
public class JDBCTestLogin {
    public static void main(String[] args) {
        // 键盘录入，接收用户名和密码
        Scanner sc = new Scanner(System.in);
        System.out.print(&quot;请输入用户名：&quot;);
        String username = sc.nextLine();
        System.out.print(&quot;请输入密码：&quot;);
        String password = sc.nextLine();

        // 调用方法
        boolean flag = new JDBCTestLogin().login(username, password);

        if (flag) {
            System.out.println(&quot;登录成功！&quot;);
        } else {
            System.out.println(&quot;用户名或者密码错误！&quot;);
        }
    }

    // 登录方法
    public boolean login(String username, String password) {
        //如果没有输入用户信息（用户名、密码），则登录失败
         if (username == null || password == null) {
             return false;
         }
        Connection conn = null;
//        Statement stmt = null;
        PreparedStatement pstm = null;
        ResultSet rs = null;
        // 获取连接
        try {
            conn = JDBCUtils.getConnection();
            // 定义sql
            // 不安全写法
//            String sql = &quot;select * from user where username = &#39;&quot;+username+&quot;&#39;  and password = &#39;&quot;+password+&quot;&#39; &quot;;
            // 定义预编译
            String sql = &quot;select * from user where username = ? and password =  ?&quot;;
            // 获取Statement对象
//            stmt = conn.createStatement();
            // 获取pstm对象
            pstm = conn.prepareStatement(sql);
            // 调用sql语句
//            rs = stmt.executeQuery(sql);
            // 给问号赋值
            pstm.setString(1, username);
            pstm.setString(2, password);
            // ppstm执行sql时，不再需要传入参数了
            rs = pstm.executeQuery();
            // 判断
            return rs.next();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            JDBCUtils.close(pstm, conn, rs);
        }
        return false;
    }

}
</code></pre>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<h5>查询student表中的数据</h5>
						<p>查询student表中的数据，并为其封装，放在集合中，返回。</p>
						<p>把查询到的数据，存入到List中去，并通过return返回。</p>
						<pre><code class="language-java" lang="java">package jdbc;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 定义一个方法，查询student表中的数据，并为其封装，放在集合中，返回
 */
public class JDBCTestStudent {
    public static void main(String[] args) {
        List&lt;Student&gt; list = new JDBCTestStudent().findAll();
        System.out.println(list);
    }

    public List&lt;Student&gt; findAll() {
        Connection conn = null;
        Statement stmt = null;
        ResultSet rs = null;
        List&lt;Student&gt; list = null;

        try {
            // 注册驱动
            Class.forName(&quot;com.mysql.jdbc.Driver&quot;);
            // 定义sql语句
            String sql = &quot;select * from student&quot;;
            // 获取数据库连接
            conn = DriverManager.getConnection(&quot;jdbc:mysql:///test&quot;, &quot;root&quot;, &quot;123456&quot;);
            // 获取执行sql对象
            stmt = conn.createStatement();
            // 执行sql
            rs = stmt.executeQuery(sql);
            // 实例化集合list
            list = new ArrayList&lt;&gt;();
            // 遍历结果，封装对象
            while (rs.next()) {
                // 获取数据
                int sid = rs.getInt(&quot;sid&quot;);
                String sname = rs.getString(&quot;sname&quot;);
                int sage = rs.getInt(&quot;sage&quot;);
                String ssex = rs.getString(&quot;ssex&quot;);
                String snativeplace = rs.getString(&quot;snativeplace&quot;);
                String smajor = rs.getString(&quot;smajor&quot;);
                String sclass = rs.getString(&quot;sclass&quot;);
                String snative = rs.getString(&quot;snative&quot;);

                // 获取数据后，需要一个学生对象来存放数据
                Student s = new Student();
                s.setSid(sid);
                s.setSname(sname);
                s.setSsex(ssex);
                s.setSnativeplace(snativeplace);
                s.setSmajor(smajor);
                s.setSclass(sclass);
                s.setSnative(snative);

                // 把带值的对象放入集合
                list.add(s);
            }

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }


        return list;
    }
}
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302027'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">线程池</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302029'}"><span class="span-txt">员工信息管理项目</span> <img
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
	name: "302028",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



