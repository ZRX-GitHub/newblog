<template>
	<div id="D302029">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302029'}">员工信息管理项目</router-link>
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
								<router-link :to="{name:'D302028'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">JDBC</span></router-link>
							</div>
							<div class="nextPage">
								<router-link :to="{name:'D302030'}"><span class="span-txt">反射</span> <img
									class="img-r"
									src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
									alt="右箭头">
								</router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p>-发布于：2020-12-18-1</span></p>
						<h1>员工信息管理项目</h1>
						<p>编写实体类</p>
						<p>要求：</p>
						<ol start="">
							<li>成员变量私有；</li>
							<li>公开的setXXX、getXXX方法；</li>
							<li>至少提供一个无参的构造函数；</li>
							<li>重写equals、hashcode方法；</li>
							<li>重写toString方法；</li>
							<li>实现序列化接口。</li>

						</ol>
						<p>&nbsp;</p>
						<h5>员工表(emp)类</h5>
						<pre><code class="language-java" lang="java">package jdbcpro.bean;

import java.io.Serializable;
import java.util.Objects;

/**
 * 编写实体类
 * 要求：
 *      1、成员变量私有；
 *      2、公开的setXXX、getXXX方法；
 *      3、至少提供一个无参的构造函数；
 *      4、重写equals、hashcode方法；
 *      5、重写toString方法；
 *      6、实现序列化接口。
 */
public class Emp implements Serializable {  // 实现序列化接口
    // 成员变量
    private int empno;  // 雇员编号
    private String ename;  // 雇员姓名
    private String job;  // 雇员工作
    private int mgr;  // 雇员对应的领导的编号
    private String hiredate;  // 雇员的雇佣日期
    private double sal;  // 雇员的基本工资
    private double comm;  // 雇员的奖金
    private int deptno;  // 所在部门

    public Emp() {
    }

    public Emp(int empno, String ename, String job, int mgr, String hiredate, Double sal, Double comm, int deptno) {
        this.empno = empno;
        this.ename = ename;
        this.job = job;
        this.mgr = mgr;
        this.hiredate = hiredate;
        this.sal = sal;
        this.comm = comm;
        this.deptno = deptno;
    }

    public int getEmpno() {
        return empno;
    }

    public void setEmpno(int empno) {
        this.empno = empno;
    }

    public String getEname() {
        return ename;
    }

    public void setEname(String ename) {
        this.ename = ename;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public int getMgr() {
        return mgr;
    }

    public void setMgr(int mgr) {
        this.mgr = mgr;
    }

    public String getHiredate() {
        return hiredate;
    }

    public void setHiredate(String hiredate) {
        this.hiredate = hiredate;
    }

    public Double getSal() {
        return sal;
    }

    public void setSal(Double sal) {
        this.sal = sal;
    }

    public Double getComm() {
        return comm;
    }

    public void setComm(Double comm) {
        this.comm = comm;
    }

    public int getDeptno() {
        return deptno;
    }

    public void setDeptno(int deptno) {
        this.deptno = deptno;
    }

    @Override
    public String toString() {
        return &quot;Emp{&quot; +
                &quot;empno=&quot; + empno +
                &quot;, ename=&#39;&quot; + ename + &#39;\&#39;&#39; +
                &quot;, job=&#39;&quot; + job + &#39;\&#39;&#39; +
                &quot;, mgr=&quot; + mgr +
                &quot;, hiredate=&#39;&quot; + hiredate + &#39;\&#39;&#39; +
                &quot;, sal=&quot; + sal +
                &quot;, comm=&quot; + comm +
                &quot;, deptno=&quot; + deptno +
                &#39;}&#39;;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Emp emp = (Emp) o;
        return empno == emp.empno &amp;&amp;
                mgr == emp.mgr &amp;&amp;
                deptno == emp.deptno &amp;&amp;
                Objects.equals(ename, emp.ename) &amp;&amp;
                Objects.equals(job, emp.job) &amp;&amp;
                Objects.equals(hiredate, emp.hiredate) &amp;&amp;
                Objects.equals(sal, emp.sal) &amp;&amp;
                Objects.equals(comm, emp.comm);
    }

    @Override
    public int hashCode() {
        return Objects.hash(empno, ename, job, mgr, hiredate, sal, comm, deptno);
    }

}
</code></pre>
						<h5>工具类（连接）</h5>
						<pre><code class="language-java" lang="java">package jdbcpro.util;

import java.io.IOException;
import java.sql.*;
import java.util.Properties;

/**
 * 工具类
 */
public class DButils {
    private static String url;
    private static String user;
    private static String password;
    private static String driver;

    // 静态代码块
    static {
        try {
            // 创建Properties对象
            Properties prop = new Properties();
            // 加载配置文件
            prop.load(DButils.class.getClassLoader().getResourceAsStream(&quot;threadSync/JDBC.properties&quot;));
            // 读取配置文件中的信息，把成员变量初始化，加上tirm()去除两端空格
            url = prop.getProperty(&quot;url&quot;).trim();
            user = prop.getProperty(&quot;user&quot;).trim();
            password = prop.getProperty(&quot;password&quot;).trim();
            driver = prop.getProperty(&quot;driver&quot;).trim();
            // 注册驱动
            Class.forName(driver);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    // 获取数据库连接方法
    public static Connection getConn() {
        // 创建conn对象
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url, user, password);
        } catch (SQLException throwables) {
//            System.out.println(&quot;连接失败，请检查用户名、密码！&quot;);
            System.out.println(&quot;DButils.getConn(连接失败，请检查[url]:&quot;+url+&quot;, &quot;+
                    &quot; [user]:&quot;+user+&quot;, &quot;+
                    &quot; [password]:&quot;+password+&quot;)&quot;);
        }
        return conn;
    }

    // 获取sql发送器
    public static Statement getStmt(Connection conn) {
        Statement stmt = null;
        try {
            stmt = conn.createStatement();  // 这里的conn是从参数传入的conn
        } catch (SQLException throwables) {
            System.out.println(&quot;获取stmt异常&quot;);
        }
        return stmt;
    }

    // 获取预处理sql发送器
    public static PreparedStatement getPstmt(Connection conn, String sql) {
        PreparedStatement pstmt = null;
        try {
            pstmt = conn.prepareStatement(sql);
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return pstmt;
    }

    // 动态绑定参数，如果sql语句有问号就使用，按顺序匹配
    public static void bindParm(PreparedStatement pstmt, Object...parms) {  // 可变参数，看作数组使用
        for (int i = 1; i &lt;= parms.length; i++) {
            try {
                pstmt.setObject(i, parms[i-1]);
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }
    }

    // close方法，回收
    public static void close(ResultSet rs, Statement st, Connection conn) {
        if (rs != null) {
            try {
                rs.close();
            } catch (SQLException throwables) {
                throwables.printStackTrace();
            }
        }

        if (st != null) {
            try {
                st.close();
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

}
</code></pre>
						<h5>员工表(emp)类的接口</h5>
						<pre><code class="language-java" lang="java">package jdbcpro.dao;

import jdbcpro.bean.Emp;

import java.util.List;

/**
 * 写一个用来操作emp的接口
 */
public interface EmpDao {
    /*
    查询所有员工信息
     */
    List&lt;Emp&gt; selAll();  // 通过list集合来存储emp类型的数据

    /*
    根据员工的编号查询员工信息
     */
    Emp selByEmpno(int empno);

    // 增加员工信息(insert)
    boolean insEmp(Emp emp);

    // 根据员工id来修改工资，update sal by empno
    boolean upsalByEmpno(int empno, double sal);

    // 根据员工编号删除员工，delete by empno
    boolean delEmp(int empno);

}
</code></pre>
						<h5>实现接口中的方法</h5>
						<pre><code class="language-java" lang="java">package jdbcpro.dao;

import jdbcpro.bean.Emp;

import java.util.List;

/**
 * 接口实现类
 */
public class EmpDaoImp extends BaseDao implements EmpDao {
    @Override
    public List&lt;Emp&gt; selAll() {
        String sql = &quot;select * from emp&quot;;
        return QueryAll(sql);
    }

    @Override
    public Emp selByEmpno(int empno) {
        String sql = &quot;select * from emp where empno = ?&quot;;
        return QueryOne(sql, empno);
    }

    @Override
    public boolean insEmp(Emp emp) {
        String sql = &quot;insert into emp values(?,?,?,?,?,?,?,?)&quot;;  // emp表中的8个属性
        // 获取要插入的参数，放在数组中
        Object[] params = {emp.getEmpno(), emp.getEname(), emp.getJob(), emp.getMgr(),
                emp.getHiredate(), emp.getSal(), emp.getComm(),emp.getDeptno()};
        return update(sql, params);
    }

    @Override
    public boolean upsalByEmpno(int empno, double sal) {
        String sql = &quot;update emp set sal = ? where empno = ?&quot;;
        return update(sql, sal, empno);
    }

    @Override
    public boolean delEmp(int empno) {
        String sql = &quot;delete from emp where empno = ?&quot;;
        return update(sql, empno);
    }

}
</code></pre>
						<h5>一些方法的具体实现</h5>
						<h6>导入BeanUtils的jar包</h6>
						<pre><code class="language-java" lang="java">package jdbcpro.dao;

import jdbcpro.bean.Emp;
import jdbcpro.util.DButils;
import org.apache.commons.beanutils.BeanUtils;

import java.lang.reflect.InvocationTargetException;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * 写一些具体方法的实现
 */
public class BaseDao {
    // 写一个update方法
    // protected：可以保证同一个包。以及子类访问
    protected boolean update(String sql, Object...parms) {
        // 调用工具类中的获取conn方法
        Connection conn = DButils.getConn();
        // 获取sql处理对象
        PreparedStatement pstmt = DButils.getPstmt(conn, sql);
        // 调用绑定动态参数的方法
        DButils.bindParm(pstmt, parms);

        try {
            // 调用方法，执行sql
            int num = pstmt.executeUpdate();
            if (num &gt; 0) {  // 如果返回值大于0，表示数据执行成功
                return true;  // 执行成功
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } finally {
            DButils.close(null, pstmt, conn);
        }

        return false;  // 执行失败
    }

    // 写单个条件查询方法，返回一个对象
    protected Emp QueryOne(String sql, Object...params) {
        Connection conn = DButils.getConn();
        PreparedStatement pstmt = DButils.getPstmt(conn, sql);
        DButils.bindParm(pstmt, params);
        ResultSet rs = null;

        try {
            // 执行sql，通过pstmt对象
            rs = pstmt.executeQuery();
            // 创建一个ResultSetMetaData对象，用来存放获取到的数据
            ResultSetMetaData metaData = rs.getMetaData();
            if (rs.next()) {
                Emp emp = new Emp();
                for (int i = 0; i &lt; metaData.getColumnCount(); i++) {
                    // 把获取到的数据返回给对象，通过BeanUtils包中的BeanUtils类来设置获取到的参数
                    BeanUtils.setProperty(emp, metaData.getColumnLabel(i+1).toLowerCase(),
                            rs.getObject(i+1));
                }
                return emp;
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        } finally {
            DButils.close(rs, pstmt, conn);
        }

        return null;
    }

    // 查询多个数据
    protected List&lt;Emp&gt; QueryAll(String sql, Object...params) {
        List&lt;Emp&gt; list = new ArrayList&lt;&gt;();
        Connection conn = DButils.getConn();
        PreparedStatement pstmt = DButils.getPstmt(conn, sql);
        DButils.bindParm(pstmt, params);
        ResultSet rs = null;

        try {
            // 执行sql，通过pstmt对象
            rs = pstmt.executeQuery();
            // 创建一个ResultSetMetaData对象，用来存放获取到的数据
            ResultSetMetaData metaData = rs.getMetaData();
            while (rs.next()) {
                Emp emp = new Emp();
                for (int i = 0; i &lt; metaData.getColumnCount(); i++) {
                    // 把获取到的数据返回给对象，通过BeanUtils包中的BeanUtils类来设置获取到的参数
                    BeanUtils.setProperty(emp, metaData.getColumnLabel(i+1).toLowerCase(),
                            rs.getObject(i+1));
                }
                list.add(emp);
            }
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        } finally {
            DButils.close(rs, pstmt, conn);
        }

        return list;
    }

    // 写一个增加方法

    // 写一个删除方法
}
</code></pre>
						<h5>逻辑控制</h5>
						<pre><code class="language-java" lang="java">package jdbcpro;

import jdbcpro.bean.Emp;
import jdbcpro.dao.EmpDaoImp;
import jdbcpro.dao.EmpDao;

import java.util.List;
import java.util.Scanner;

/**
 * 主体类
 */
public class MenuView {
    Scanner sc = new Scanner(System.in);
    EmpDao dao = new EmpDaoImp();

    public void showMenu() {
        System.out.println(&quot;**********************************&quot;);
        System.out.println(&quot;*********欢迎使用员工管理系统*********&quot;);
        System.out.println(&quot;**********************************&quot;);

        while (true) {
            System.out.println(&quot;***************选项****************&quot;);
            System.out.println(&quot;1、添加员工&quot;);
            System.out.println(&quot;2、查询所有员工&quot;);
            System.out.println(&quot;3、根据编号查询员工&quot;);
            System.out.println(&quot;4、修改员工工资&quot;);
            System.out.println(&quot;5、删除员工&quot;);
            System.out.println(&quot;6、退出&quot;);
            System.out.print(&quot;请输入对应的数字来操作：&quot;);

            int num = sc.nextInt();

            switch (num) {
                case 1:
                    insEmp();
                    continue;

                case 2:
                    selAll();
                    continue;
                case 3:
                    selByEmpno();
                    continue;

                case 4:
                    upsalByEmpno();
                    continue;

                case 5:
                    delEmp();
                    continue;

                case 6:
                    System.out.println(&quot;谢谢使用！&quot;);
                    break;

                default:
                    System.out.println(&quot;输入有误，请重新输入！&quot;);
                    continue;
            }
            break;  // 跳出while循环
        }

    }

    // 删除员工
    public void delEmp() {
        System.out.print(&quot;请输入员工编号：&quot;);
        int empno = sc.nextInt();

        if (dao.delEmp(empno)) {
            System.out.println(&quot;删除成功！&quot;);
        } else {
            System.out.println(&quot;删除失败！&quot;);
        }
    }

    // 修改工资
    public void upsalByEmpno() {
        System.out.print(&quot;请输入员工编号：&quot;);
        int empno = sc.nextInt();
        System.out.print(&quot;请输入新的工资：&quot;);
        double sal = sc.nextDouble();

        if (dao.upsalByEmpno(empno, sal)) {
            System.out.println(&quot;修改成功！&quot;);
        } else {
            System.out.println(&quot;修改失败！&quot;);
        }
    }

    // 单个查询
    public void selByEmpno() {
        System.out.print(&quot;请输入员工编号：&quot;);
        int empno = sc.nextInt();
        Emp emp = dao.selByEmpno(empno);
        System.out.println(emp);
    }

    // 查询所有
    public void selAll() {
        List&lt;Emp&gt; list = dao.selAll();

        for (Emp emp:list) {
            System.out.println(emp);
        }
    }

    // 增加
    public void insEmp() {
        System.out.print(&quot;请输入员工编号：&quot;);
        int empno = sc.nextInt();

        System.out.print(&quot;请输入姓名：&quot;);
        String ename = sc.next();

        System.out.print(&quot;请输入职位：&quot;);
        String job = sc.next();

        System.out.print(&quot;请输入领导编号：&quot;);
        int mgr = sc.nextInt();

        System.out.print(&quot;请输入入职日期：&quot;);
        String hiredate = sc.next();

        System.out.print(&quot;请输入工资：&quot;);
        double sal = sc.nextDouble();

        System.out.print(&quot;请输入奖金：&quot;);
        double comm = sc.nextDouble();

        System.out.print(&quot;请输入部门编号：&quot;);
        int deptno = sc.nextInt();

        Emp emp = new Emp(empno, ename, job, mgr, hiredate, sal, comm, deptno);

        if (dao.insEmp(emp)) {
            System.out.println(&quot;添加成功！&quot;);
        } else {
            System.out.println(&quot;添加失败！&quot;);
        }
    }

}
</code></pre>
						<h5>测试类</h5>
						<pre><code class="language-java" lang="java">package jdbcpro;

public class TestEmp {
    public static void main(String[] args) {
        MenuView mv = new MenuView();
        mv.showMenu();
    }
}
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<router-link :to="{name:'D302028'}"><img class="img-l"
																	 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																	 alt="左箭头"> <span
								class="span-txt">JDBC</span></router-link>
						</div>
						<div class="nextPage">
							<router-link :to="{name:'D302030'}"><span class="span-txt">反射</span> <img
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
	name: "302029",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



