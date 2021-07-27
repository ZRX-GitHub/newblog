<template>
	<div id="D302034">
		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<router-link :to="{name: '资料'}">资料</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302001'}">Java</router-link>
				<span> &gt; </span>
				<router-link :to="{name: 'D302034'}">不同排序的执行时间</router-link>
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
								<router-link :to="{name:'D302032'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">函数式接口</span></router-link>
							</div>
						</div>

					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class=published>发布于：2021-1-12-1</span></p>
						<h1>不同排序的执行时间</h1>
						<h3>十大经典排序算法动画</h3>
						<p>地址：<a href="http://www.imooc.com/article/266110" target="_blank" class="url">http://www.imooc.com/article/266110</a>
						</p>
						<p><strong>关于稳定性：</strong></p>
						<ol start="">
							<li>稳定的排序算法：冒泡排序、插入排序、归并排序和基数排序。</li>
							<li>不是稳定的排序算法：选择排序、快速排序、希尔排序、堆排序。</li>

						</ol>
						<p>&nbsp;</p>
						<h2>冒泡排序、选择排序、插入排序、快速排序、堆排序</h2>
						<p>&nbsp;</p>
						<h3>最终结果</h3>
						<figure>
							<table>
								<thead>
								<tr>
									<th>排序/数组长度--毫秒</th>
									<th>一万</th>
									<th>一万</th>
									<th>一万</th>
									<th>一万</th>
									<th>百万</th>
									<th>千万</th>
									<th>一亿</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td>冒泡排序</td>
									<td>354</td>
									<td>350</td>
									<td>405</td>
									<td>335</td>
									<td>null</td>
									<td>null</td>
									<td>null</td>
								</tr>
								<tr>
									<td>选择排序</td>
									<td>207</td>
									<td>156</td>
									<td>143</td>
									<td>174</td>
									<td>null</td>
									<td>null</td>
									<td>null</td>
								</tr>
								<tr>
									<td>插入排序</td>
									<td>130</td>
									<td>112</td>
									<td>110</td>
									<td>125</td>
									<td>null</td>
									<td>null</td>
									<td>null</td>
								</tr>
								<tr>
									<td>快速排序</td>
									<td>13</td>
									<td>13</td>
									<td>11</td>
									<td>13</td>
									<td>358</td>
									<td>7436</td>
									<td>117557</td>
								</tr>
								<tr>
									<td>堆排序</td>
									<td>11</td>
									<td>14</td>
									<td>12</td>
									<td>16</td>
									<td>712</td>
									<td>11801</td>
									<td>260984</td>
								</tr>
								</tbody>
							</table>
						</figure>
						<p>说明：</p>
						<ul>
							<li>冒泡排序的百万、千万、一亿跑不动，百万的跑了2个多小时也没跑完。</li>

						</ul>
						<p>&nbsp;</p>
						<h3>冒泡</h3>
						<pre><code class="language-java" lang="java">import java.util.ArrayList;
import java.util.Random;
/*
冒泡排序
比较相邻的元素。如果第一个比第二个大，就交换他们两个。
针对所有的元素重复以上的步骤，除了最后一个。
持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较
*/
public class Demo {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();    //获取开始时间
        long num = 10000;  // 一万
//        long num = 100*10000;  // 百万
//        long num = 1000*10000;  // 千万
//        long num = 10000*10000;  // 一亿
        Random rn = new Random();
        // 生成随机数组
        ArrayList&lt;Integer&gt; arr = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; num; i++) {
            long arrI = rn.nextLong();
            arr.add((int) arrI);
        }
        long len = arr.size();
        sort(arr, len);
        long endTime = System.currentTimeMillis();    //获取结束时间
        long length = len/10000;
        System.out.println(length+&quot;万长度数组运行时间：&quot;+(endTime-startTime)+&quot;毫秒&quot;);
    }

    public static void sort(ArrayList&lt;Integer&gt; arr, long len) {
        for(int i = 0; i &lt; len-1; ++i){
            for(int j = 0; j &lt; len-1-i; ++j){
                if( arr.get(j) &gt; arr.get(j+1) ){
                    Integer team = arr.get(j+1);
                    arr.set(j+1, arr.get(j));
                    arr.set(j, team);
                }
            }
        }
    }

}

</code></pre>
						<h5>结果</h5>
						<pre><code>1万长度数组运行时间：354毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：350毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：405毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：335毫秒
</code></pre>
						<p>&nbsp;</p>
						<h3>选择</h3>
						<pre><code class="language-java" lang="java">import java.util.ArrayList;
import java.util.Random;

/*
选择排序
选择排序与冒泡排序有点像，只不过选择排序每次都是在确定了最小数的下标之后再进行交换，大大减少了交换的次数
*/
public class Demo2 {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();    //获取开始时间
        long num = 10000;  // 一万
//        long num = 100*10000;  // 百万
//        long num = 1000*10000;  // 千万
//        long num = 10000*10000;  // 一亿
        Random rn = new Random();
        // 生成随机数组
        ArrayList&lt;Integer&gt; arr = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; num; i++) {
            long arrI = rn.nextLong();
            arr.add((int) arrI);
        }
        long len = arr.size();
        sort(arr, len);
        long endTime = System.currentTimeMillis();    //获取结束时间
        long length = len/10000;
        System.out.println(length+&quot;万长度数组运行时间：&quot;+(endTime-startTime)+&quot;毫秒&quot;);
    }

    public static void sort(ArrayList&lt;Integer&gt; arr, long len){
        for(int i = 0; i &lt; len-1; ++i){
            int minIndex = i;
            for(int j = i; j &lt; len; ++j){
                if(arr.get(j) &lt; arr.get(minIndex)) {
                    minIndex = j;
                }
            }
            if( minIndex != i){
                Integer temp = arr.get(i);
                arr.set(i, arr.get(minIndex));
                arr.set(minIndex, temp);
            }
        }
    }
}

</code></pre>
						<h5>结果</h5>
						<pre><code>1万长度数组运行时间：207毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：156毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：143毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：174毫秒
</code></pre>
						<p>&nbsp;</p>
						<h3>插入</h3>
						<pre><code class="language-java" lang="java">import java.util.ArrayList;
import java.util.Random;

/*
* 插入排序
* 将一个记录插入到已排序的有序表中，从而得到一个新的，记录数增1的有序表
* */
public class Demo3 {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();    //获取开始时间
        long num = 10000;  // 一万
//        long num = 100*10000;  // 百万
//        long num = 1000*10000;  // 千万
//        long num = 10000*10000;  // 一亿
        Random rn = new Random();
        // 生成随机数组
        ArrayList&lt;Integer&gt; arr = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; num; i++) {
            long arrI = rn.nextLong();
            arr.add((int) arrI);
        }
        long len = arr.size();
        sort(arr, len);
        long endTime = System.currentTimeMillis();    //获取结束时间
        long length = len/10000;
        System.out.println(length+&quot;万长度数组运行时间：&quot;+(endTime-startTime)+&quot;毫秒&quot;);
    }

    public static void sort(ArrayList&lt;Integer&gt; arr, long len){
        for(int i = 1; i &lt;= len-1; ++i){
            int key = arr.get(i);
            int j = i-1;
            while( j &gt;= 0 &amp;&amp; arr.get(j) &gt; key ) {
                arr.set(j + 1, arr.get(j));
                j--;
            }
            arr.set(j + 1, key);
        }
    }
}

</code></pre>
						<h5>结果</h5>
						<pre><code>1万长度数组运行时间：130毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：112毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：110毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：125毫秒
</code></pre>
						<p>&nbsp;</p>
						<h3>快速排序</h3>
						<pre><code class="language-java" lang="java">import java.util.ArrayList;
import java.util.Random;

/*
快速排序
通过一趟排序将序列分成左右两部分，其中左半部分的的值均比右半部分的值小，
然后再分别对左右部分的记录进行排序，直到整个序列有序。
*/
public class Demo4 {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();    //获取开始时间
        long num = 10000;  // 一万
//        long num = 100*10000;  // 百万
//        long num = 1000*10000;  // 千万
//        long num = 10000*10000;  // 一亿
        Random rn = new Random();
        // 生成随机数组
        ArrayList&lt;Integer&gt; arr = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; num; i++) {
            long arrI = rn.nextLong();
            arr.add((int) arrI);
        }
        long len = arr.size();
        int low = 0;
        int high =arr.size()-1;
        sort(arr, low, high);
        long endTime = System.currentTimeMillis();    //获取结束时间
        long length = len/10000;
        System.out.println(length+&quot;万长度数组运行时间：&quot;+(endTime-startTime)+&quot;毫秒&quot;);
    }

    public static void sort(ArrayList&lt;Integer&gt; arr, int low, int high){
        if(low &gt;= high) return;
        int keypos = just(arr, low, high);
        sort(arr, low, keypos-1);
        sort(arr, keypos+1, high);
    }

    public static int just(ArrayList&lt;Integer&gt; arr, int low, int high){
        int key = arr.get(low);
        while( low &lt; high ){
            while(low &lt; high &amp;&amp; arr.get(high) &gt;= key) high--;
            arr.set(low, arr.get(high));
            while(low &lt; high &amp;&amp; arr.get(low) &lt;= key) low++;
            arr.set(high, arr.get(low));
        }
        arr.set(low, key);
        return low;
    }

}

</code></pre>
						<h5>结果</h5>
						<pre><code>1万长度数组运行时间：13毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：13毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：11毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：13毫秒
</code></pre>
						<p>&nbsp;</p>
						<pre><code>100万长度数组运行时间：358毫秒
</code></pre>
						<pre><code>1000万长度数组运行时间：7436毫秒
</code></pre>
						<pre><code>10000万长度数组运行时间：117557毫秒
</code></pre>
						<p>&nbsp;</p>
						<h3>堆排序</h3>
						<pre><code class="language-java" lang="java">import java.util.ArrayList;
import java.util.Random;

/*
* 堆排序
* 假设序列有n个元素,先将这n建成大顶堆，然后取堆顶元素，与序列第n个元素交换，然后调整前n-1元素，使其重新成为堆，
* 然后再取堆顶元素，与第n-1个元素交换，再调整前n-2个元素...直至整个序列有序。
* */



public class Demo5 {
    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();    //获取开始时间
        long num = 10000;  // 一万
//        long num = 100*10000;  // 百万
//        long num = 1000*10000;  // 千万
//        long num = 10000*10000;  // 一亿
        Random rn = new Random();
        // 生成随机数组
        ArrayList&lt;Integer&gt; arr = new ArrayList&lt;&gt;();
        for (int i = 0; i &lt; num; i++) {
            long arrI = rn.nextLong();
            arr.add((int) arrI);
        }
        int len = arr.size();
        sort(arr, len);
        long endTime = System.currentTimeMillis();    //获取结束时间
        long length = len/10000;
        System.out.println(length+&quot;万长度数组运行时间：&quot;+(endTime-startTime)+&quot;毫秒&quot;);
    }

    public static void sort(ArrayList&lt;Integer&gt; arr, int len){
        // 构造初始堆,从第一个非叶子节点开始调整,左右孩子节点中较大的交换到父节点中
        for(int i = len/2-1; i &gt;= 0; --i){
            just(arr, i, len-1);
        }
        // 排序，将最大的节点放在堆尾，然后从根节点重新调整
        for(int i = len-1; i &gt; 0 ; --i){
            Integer temp = arr.get(0);
            arr.set(0, arr.get(i));
            arr.set(i, temp);
            just(arr, 0, i-1);
        }
    }

    public static void just(ArrayList&lt;Integer&gt; arr, int i, int m){
        Integer temp = arr.get(i);
        for(int k = 2*i + 1; k &lt;= m; k = 2*k + 1 ){
            // 选出叶子节点中比自己大的一个交换，如果交换后的叶子节点不满足堆，则继续调整
            if(k &lt; m &amp;&amp; arr.get(k) &lt;= arr.get(k+1)) ++k;
            if( arr.get(k) &lt;= temp) break;
            arr.set(i, arr.get(k));
            i = k;
        }
        arr.set(i, temp);
    }


}

</code></pre>
						<h5>结果</h5>
						<pre><code>1万长度数组运行时间：11毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：14毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：12毫秒
</code></pre>
						<pre><code>1万长度数组运行时间：16毫秒
</code></pre>
						<p>&nbsp;</p>
						<pre><code>100万长度数组运行时间：712毫秒
</code></pre>
						<pre><code>1000万长度数组运行时间：11801毫秒
</code></pre>
						<pre><code>10000万长度数组运行时间：260984毫秒
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage">
							<div class="previouPage">
								<router-link :to="{name:'D302032'}"><img class="img-l"
																		 src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																		 alt="左箭头"> <span
									class="span-txt">函数式接口</span></router-link>
							</div>
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
	name: "302034",
	data() {
		return {
			drawer: false,
			direction: 'ltr',
			widthSize: '70%'
		}
	}
}
</script>



