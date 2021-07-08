<template>
	<div>

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<a href="../../../item/item">项目</a>
				<span> &gt; </span>
				<a href="401001">Web项目</a>
				<span> &gt; </span>
				<a href="401001">仿美团外卖页面</a>
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
						<div class="nextPage"><a href="401002"><span class="span-txt">可编辑的通讯录</span> <img src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png" alt="右箭头"> </a></div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->


						<p><span class="published">发布于：2021-1-1-1</span></p>
						<h1>仿美团页面</h1>
						<p style="text-align: left;">项目地址：<a href="http://1.15.142.19/item/web/project/1/demo/index.html" target="_blank" class="url">http://1.15.142.19/item/web/project/1/demo/index.html</a></p>
						<p>项目下载：<a href="http://1.15.142.19/item/web/project/1/美团外卖页面.zip">美团外卖页面.zip</a></p>
						<p>介绍</p>
						<ul>
							<li>
								<p>本网页支持自适应设备的宽度。</p>
							</li>
							<li>
								<p>纯静态网页，仅使用了html、css。</p>
								<ul>
									<li>导航栏：一共采用了三种情况 &gt;&gt; (max-width: 840px) and (min-width: 760px)、min-width: 761px、max-width：670px ；</li>
									<li>输入框：一共采用了三种情况 &gt;&gt; min-width: 761px、(max-width: 960px) and (min-width: 761px)、max-width: 760px；</li>
									<li>店铺信息：一共采用了三种情况 &gt;&gt; min-width: 761px、max-width: 760px、max-width: 549.9px。</li>

								</ul>
							</li>
							<li>
								<p>自适应设备宽度切换PC、H5页面；</p>
							</li>
							<li>
								<p>店铺信息使用div、grid进行布局。</p>
							</li>

						</ul>
						<p>&nbsp;</p>
						<p>说明：</p>
						<p> 之所以使用gird布局，是因为中间这一整个部分的内容类型都是一样的、gird支持二维布局。那么为何不让它们都是用同一样式来进行分布呢。</p>
						<p>&nbsp;</p>
						<p>bug：</p>
						<p> 现存bug很多......</p>
						<p>&nbsp;</p>
						<p>项目部分截图：</p>
						<p>1、</p>
						<p>
						<div class="dark-img"><img class="zooming" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20210101192142112.png" referrerpolicy="no-referrer" alt="image-20210101192142112"></div>
						<p>2、</p>
						<p>
						<div class="dark-img"><img class="zooming" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20210101193255168.png" referrerpolicy="no-referrer" alt="image-20210101193255168"></div>
						<p>3、</p>
						<p>
						<div class="dark-img"><img class="zooming" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20210101193552516.png" referrerpolicy="no-referrer" alt="image-20210101193552516"></div>
						<p>4、</p>
						<p>
						<div class="dark-img"><img class="zooming" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/image-20210101193614009.png" referrerpolicy="no-referrer" alt="image-20210101193614009"></div>
						<p>&nbsp;</p>
						<p>&nbsp;</p>
						<p><strong>总结</strong>：</p>
						<p> 想要快速地开发一款产品，一定、必须得要提前构思好思路，以及，提前设计好UI是真非常的必要。在本次开发仿美团页面的过程中，已经不记得自己反复的调试了多少次了。</p>
						<p>&nbsp;</p>
						<h3>源代码</h3>
						<p><strong>index.html</strong></p>
						<pre><code class="language-html" lang="html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;css/css.css&quot;&gt;
    &lt;title&gt;仿美团外卖页面&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;a href=&quot;../../../data/306/306001&quot; style=&quot;text-decoration:none&quot;&gt;
        &lt;div style=&quot;width: 100%; height: 30px; line-height: 30px; background-color: white; border-bottom: 3px double red; text-align: center;&quot;&gt;
            返回项目介绍页&lt;/div&gt;
    &lt;/a&gt;
    &lt;!-- 头部 --&gt;
    &lt;header class=&quot;header&quot;&gt;
        &lt;div class=&quot;h-center&quot;&gt;
            &lt;div class=&quot;h-logo&quot;&gt;
                &lt;img style=&quot;height: 40px&quot; src=&quot;img/header-logo-black-64a1f182be.png&quot; alt=&quot;&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;h-nav&quot;&gt;
                &lt;div&gt;首页&lt;/div&gt;
                &lt;div&gt;入驻加盟&lt;/div&gt;
                &lt;div&gt;开放平台&lt;/div&gt;
                &lt;div&gt;社会责任&lt;/div&gt;
                &lt;div&gt;点外卖&lt;/div&gt;
                &lt;div&gt;下载手机版&lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;h-f-nav&quot;&gt;
            &lt;div&gt;
                &lt;div&gt;
                    &lt;i class=&quot;h-f-nav-index&quot;&gt;&lt;/i&gt;
                    &lt;span&gt;首页&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div&gt;
                &lt;div&gt;
                    &lt;i class=&quot;h-f-nav-order&quot;&gt;&lt;/i&gt;
                    &lt;span&gt;订单&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div&gt;
                &lt;div&gt;
                    &lt;i class=&quot;h-f-nav-my&quot;&gt;&lt;/i&gt;
                    &lt;span&gt;我的&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/header&gt;
    &lt;!-- 中间内容部分 --&gt;
    &lt;div class=&quot;main&quot;&gt;
        &lt;div class=&quot;show&quot;&gt;

            &lt;!-- 左部分 --&gt;
            &lt;div class=&quot;showLeft&quot;&gt;
                &lt;div class=&quot;addr&quot;&gt;
                    &lt;img style=&quot;margin-top: 6px;&quot; src=&quot;img/location.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;建邺区&lt;/div&gt;
                &lt;div&gt;黄焖鸡米饭重庆小面（素文店）&lt;/div&gt;
                &lt;div class=&quot;yLine&quot;&gt;|&amp;nbsp;&lt;/div&gt;
                &lt;div class=&quot;showLeftSwitch&quot;&gt;
                    &lt;div&gt;切换地址&lt;/div&gt;
                    &lt;div&gt;&lt;img style=&quot;margin-top: 6px; height:16px;&quot; src=&quot;img/addrDown.png&quot;&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;!-- 右部分 --&gt;
            &lt;div class=&quot;showRight&quot;&gt;
                &lt;div&gt;注册&lt;/div&gt;
                &lt;div&gt;登录&lt;/div&gt;
                &lt;div class=&quot;showRightOrder&quot;&gt;
                    &lt;div&gt;
                        &lt;img style=&quot;margin-top: 6px; height:16px;&quot; src=&quot;img/order.png&quot;&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        我的订单
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

        &lt;/div&gt;

        &lt;!-- 商家分类 --&gt;
        &lt;div class=&quot;classify&quot;&gt;
            &lt;div class=&quot;classifySear2&quot;&gt;
                &lt;!-- 搜索 --&gt;
                &lt;div class=&quot;classifySearch2&quot;&gt;
                    &lt;div&gt;
                        &lt;input type=&quot;text&quot; placeholder=&quot;搜索商家、美食&quot;&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;classifySearchIcon2&quot;&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;classifyInfo&quot;&gt;
                &lt;!-- 图标 --&gt;
                &lt;div class=&quot;shopClassify&quot;&gt;
                    &lt;div&gt;
                        &lt;img src=&quot;img/shops.png&quot; alt=&quot;&quot;&gt;&amp;nbsp;
                    &lt;/div&gt;
                    &lt;div&gt;商家分类&amp;nbsp;&lt;/div&gt;
                &lt;/div&gt;

                &lt;div class=&quot;yLine&quot;&gt;|&amp;nbsp;&lt;/div&gt;

                &lt;!-- 类别 --&gt;
                &lt;div style=&quot;color: #ffcb52;&quot;&gt;全部&lt;/div&gt;
                &lt;div class=&quot;classifyMenu&quot;&gt;
                    &lt;div class=&quot;options&quot;&gt;美食&lt;/div&gt;
                    &lt;div class=&quot;options&quot;&gt;正餐优选&lt;/div&gt;
                    &lt;div class=&quot;options&quot;&gt;超市&lt;/div&gt;
                    &lt;div class=&quot;options&quot;&gt;精选小吃&lt;/div&gt;
                    &lt;div class=&quot;options&quot;&gt;鲜果购&lt;/div&gt;
                    &lt;div class=&quot;options&quot;&gt;下午茶&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;classifySear&quot;&gt;
                &lt;!-- 搜索 --&gt;
                &lt;div class=&quot;classifySearch&quot;&gt;
                    &lt;div&gt;
                        &lt;input type=&quot;text&quot; placeholder=&quot;搜索商家、美食&quot;&gt;
                    &lt;/div&gt;
                    &lt;div class=&quot;classifySearchIcon&quot;&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- 公示 --&gt;
        &lt;div class=&quot;publicity&quot;&gt;
            &lt;div class=&quot;publicityIcon&quot;&gt;
                &lt;img src=&quot;img/publicity.png&quot; alt=&quot;&quot;&gt;
            &lt;/div&gt;
            &lt;div&gt;
                &lt;span class=&quot;publicityText&quot;&gt;美团外卖向消费者郑重承诺：&lt;/span&gt;&lt;span&gt;&lt;a class=&quot;publicityLink&quot; href=&quot;&quot;&gt;平台公示&lt;/a&gt;&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- 店家上架菜品 --&gt;
        &lt;div class=&quot;shops&quot;&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food1.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;巴奴毛肚火锅（人广来福士店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/noneStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4分&lt;/span&gt;
                        &lt;/span&gt;

                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;20&amp;emsp;配送费:&amp;#65509;4&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food2.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;炭香园烤肉海鲜自助餐（人民北路店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/noneStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.1分&lt;/span&gt;
                        &lt;/span&gt;

                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;20&amp;emsp;配送费:&amp;#65509;3&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;

            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food3.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;汉贝村烤肉（轿行路店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/noneStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.2分&lt;/span&gt;
                        &lt;/span&gt;

                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;10&amp;emsp;配送费:&amp;#65509;3&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food4.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;绍东家·百草园（新世界店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/noneStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.3分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;20&amp;emsp;配送费:&amp;#65509;4&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;


            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food5.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;烤友社&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/noneStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.3分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;5&amp;emsp;配送费:&amp;#65509;0&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food6.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;乐凯普精品烘焙（富民店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/noneStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.3分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;10&amp;emsp;配送费:&amp;#65509;2&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;15分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food7.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;锅中涮&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            暂无评分
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;10&amp;emsp;配送费:&amp;#65509;0&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;15分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food8.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;圣火营自助烤肉（松江路店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/noneStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.2分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;30&amp;emsp;配送费:&amp;#65509;3&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;40分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;


            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food9.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;灵盛河鲜（松东路店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/noneStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.2分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;5&amp;emsp;配送费:&amp;#65509;0&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food10.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;岚山鮨活物料理&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.9分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;70&amp;emsp;配送费:&amp;#65509;10&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;50分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food11.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;BreadTime烘培时光（育秀路店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/halfStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.4分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;10&amp;emsp;配送费:&amp;#65509;0&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;15分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food12.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;渝利火锅（开元地中海店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;5分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;80&amp;emsp;配送费:&amp;#65509;15&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;40分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;


            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food13.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;日月赤虎&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            暂无评分
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;100&amp;emsp;配送费:&amp;#65509;20&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;50分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food14.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;老朴家铁锅炖&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/halfStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.2分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;50&amp;emsp;配送费:&amp;#65509;5&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food15.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;牛仔街区时尚自助餐厅（江桥万达店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/halfStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.1分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;15&amp;emsp;配送费:&amp;#65509;2&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food16.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;玖樂火鍋（香港广场店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/halfStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.5分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;200&amp;emsp;配送费:&amp;#65509;20&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;60分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;


            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food17.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;壹泰东南亚主题餐厅（州桥店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;5分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;70&amp;emsp;配送费:&amp;#65509;10&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;40分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food18.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;无限量自助烤肉火锅（海湾店）&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4.7分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;50&amp;emsp;配送费:&amp;#65509;10&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food19.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;莉雅西点LIYA烘焙坊CAKES&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/halfStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;4分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;15&amp;emsp;配送费:&amp;#65509;0&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;div class=&quot;a&quot;&gt;
                &lt;!-- 菜品图片 --&gt;
                &lt;div&gt;
                    &lt;img class=&quot;foodImg&quot; src=&quot;img/food20.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p class=&quot;shopsName&quot;&gt;水雲閣柴火饭&lt;/p&gt;
                    &lt;!-- 评价 --&gt;
                    &lt;div&gt;
                        &lt;span&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;img src=&quot;img/allStar.png&quot; alt=&quot;&quot;&gt;
                            &lt;span&gt;5分&lt;/span&gt;
                        &lt;/span&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;span&gt;起送:&amp;#65509;40&amp;emsp;配送费:&amp;#65509;10&amp;emsp;&amp;emsp;&lt;img src=&quot;img/time.png&quot; alt=&quot;&quot;&gt;30分钟&lt;/span&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;


        &lt;/div&gt;
    &lt;/div&gt;
    &lt;a href=&quot;#top&quot; title=&quot;返回顶部&quot;&gt;
        &lt;div class=&quot;backToTop&quot;&gt;&lt;/div&gt;
    &lt;/a&gt;
    &lt;div class=&quot;nbsp&quot;&gt;&lt;/div&gt;
    &lt;!-- 页脚 --&gt;
    &lt;footer&gt;
        &lt;div class=&quot;footerCenterText&quot;&gt;
            &lt;div class=&quot;footerLeft&quot;&gt;
                &lt;div&gt;
                    &lt;p&gt;&lt;span&gt;开放平台&lt;/span&gt;&lt;span&gt;常见问题&lt;/span&gt;&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;媒体报道&lt;/span&gt;&lt;span&gt;用户反馈&lt;/span&gt;&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;资质规则&lt;/span&gt;&lt;span&gt;诚信举报&lt;/span&gt;&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;入驻加盟&lt;/span&gt;&lt;span&gt;加入我们&lt;/span&gt;&lt;/p&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;p&gt;品牌合作&lt;/p&gt;
                    &lt;p&gt;wpbg.marketing@meituan.com&lt;/p&gt;
                    &lt;p&gt;客服&amp;nbsp;1010-9777&lt;/p&gt;
                    &lt;p&gt;周一至周日&amp;nbsp;9:00~23:00&lt;/p&gt;
                    &lt;p&gt;客服不受理商务合作&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;footerRight&quot;&gt;
                &lt;p&gt;更多商家，更多优惠&lt;/p&gt;
                &lt;div&gt;
                    &lt;img src=&quot;img/qrcode-app-83d17aeff8.png&quot; alt=&quot;&quot;&gt;
                    &lt;img src=&quot;img/qrcode-wxapp-c4639d9def.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;hr&gt;
        &lt;div class=&quot;records&quot;&gt;
            &lt;span&gt;
                &lt;span class=&quot;recordsText&quot;&gt;&lt;img src=&quot;img/business-license.png&quot;&gt;北京三快在线科技有限公司&amp;emsp;&lt;/span&gt;
            &lt;span class=&quot;recordsText&quot;&gt;&amp;copy;meituan.com&amp;nbsp;京ICP证XXXX号&amp;emsp;&lt;/span&gt;
            &lt;span class=&quot;recordsText&quot;&gt;
                    &lt;img src=&quot;img/record.png&quot;&gt;&amp;nbsp;京公网安备XXXX号
            &lt;/span&gt;
            &lt;/span&gt;
        &lt;/div&gt;
    &lt;/footer&gt;
&lt;/body&gt;

&lt;/html&gt;
</code></pre>
						<p><strong>css.css</strong></p>
						<pre><code class="language-css" lang="css">/* 说明
    圆角：3个像素
    美团颜色: #ffcb52;
*/

* {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 16px;
}


/* 通用 */

.yLine {
    color: rgb(160, 160, 160);
}


/* PC页面 */

@media screen and (min-width: 761px) {
    body {
        background-color: rgb(245, 245, 245);
    }
    /* 头部 */
    .header {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        background-color: white;
    }
    .h-center {
        margin: 0 auto;
        width: 80%;
    }
    .h-logo {
        padding-top: 10px;
        float: left;
    }
    .h-nav {
        height: inherit;
        line-height: 60px;
        display: flex;
        flex-wrap: wrap-reverse;
        list-style: none;
        float: right;
    }
    .h-nav div {
        width: auto;
        height: 60px;
        margin-left: 10px;
        padding: 0px 10px;
        box-sizing: border-box;
    }
    .h-nav div:hover {
        cursor: pointer;
        font-weight: bold;
        border-bottom: 4px solid #ffcb52;
    }
    /* 隐藏H5底部导航 */
    .h-f-nav {
        line-height: 0px;
        overflow: hidden;
    }
    /* 中间部分 */
    .main {
        width: 80%;
        height: auto;
        margin: 0 auto;
        box-sizing: border-box;
    }
    /* 展示栏 */
    .show {
        width: 100%;
        height: 30px;
        margin: 0 auto;
        padding-top: 60px;
        padding-bottom: 30px;
    }
    .show div&gt;img {
        margin-top: 4px;
    }
    /* 左展示栏 */
    .show .showLeft,
    .showLeft&gt;div {
        height: inherit;
        line-height: 30px;
        float: left;
    }
    .showLeft .showLeftSwitch&gt;div {
        float: left;
        cursor: pointer;
        color: #ffcb52;
    }
    /* 右展示栏 */
    .show .showRight {
        height: inherit;
        line-height: 30px;
        float: right;
    }
    .showRight&gt;div {
        height: inherit;
        line-height: 30px;
        margin-left: 10px;
        padding: 0px 16px;
        border-radius: 3px;
        background-color: white;
        cursor: pointer;
        float: left;
    }
    .showRight&gt;div:hover {
        color: #ffcb52;
    }
    .showRightOrder&gt;div {
        float: left;
    }
    /* 商家分类 */
    .classify {
        width: 100%;
        height: 80px;
        line-height: 80px;
        margin: 16px auto 0px;
        background-color: white;
        border-radius: 3px;
        padding-left: 20px;
        box-sizing: border-box;
        display: block;
    }
    .classify .classifyInfo&gt;div {
        float: left;
    }
    .classify .shopClassify&gt;div {
        float: left;
    }
    .classify .options {
        height: 80px;
        line-height: 80px;
        padding: 0px 5px;
        text-align: center;
        margin-left: 6px;
    }
    /* 菜单选项横向滑动 */
    .classifyMenu {
        width: auto;
        display: -webkit-box;
        box-sizing: border-box;
        overflow-x: scroll;
        margin-left: 6px;
    }
    /* 隐藏横向滚动条：颜色透明 */
    .classifyMenu::-webkit-scrollbar {
        background-color: transparent;
    }
    .options:hover {
        color: #ffcb52;
        cursor: pointer;
    }
    .classify .classifySearch {
        margin-top: 17px;
        max-width: 260px;
        float: right;
    }
    .classifySear2 {
        display: none;
    }
    .classifySearch&gt;div {
        float: left;
    }
    .shopClassify&gt;div&gt;img {
        margin-top: 22px;
    }
    .classifySearch input {
        height: 30px;
        width: 120px;
        min-width: 120px;
        max-width: 30%;
        border: 1px solid rgb(193, 194, 193);
        padding-left: 10px;
        outline: none;
        border-radius: 3px 0px 0px 3px;
        margin-top: 8px;
        float: right;
    }
    .classifySearch input:focus {
        border: 1px solid #ffcb52;
    }
    /* placehoder兼容性 */
    .classifySearch input::placeholder {
        color: rgb(160, 160, 160);
    }
    .classifySearch input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: rgb(160, 160, 160);
    }
    .classifySearch input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: rgb(160, 160, 160);
    }
    .classifySearch input::-webkit-input-placeholder {
        /* WebKit browsers */
        color: rgb(160, 160, 160);
    }
    .classifySearch input:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: rgb(160, 160, 160);
    }
    .classifySearch .classifySearchIcon {
        height: 30px;
        width: 30px;
        border-top: 1px solid rgb(193, 194, 193);
        border-right: 1px solid rgb(193, 194, 193);
        border-bottom: 1px solid rgb(193, 194, 193);
        background: #ffcb52 url(../img/search.png) center no-repeat;
        background-size: 26px;
        border-radius: 0px 3px 3px 0px;
        cursor: pointer;
        margin-top: 8px;
        margin-right: 16px;
    }
    /* 公示 */
    .publicity {
        width: 100%;
        height: 70px;
        background-color: white;
        border-radius: 3px;
        margin: 0px auto 16px;
        padding-left: 20px;
        box-sizing: border-box;
        float: left;
    }
    .publicity&gt;div {
        float: left;
        line-height: 70px;
    }
    .publicity img {
        margin-top: 23px;
        height: 22px;
    }
    .publicityText {
        color: #ffcb52;
        font-weight: bold;
    }
    .publicityLink {
        font-weight: bold;
        color: blue;
    }
    /* 店家上架菜品 */
    .shops {
        padding: 20px;
        box-sizing: border-box;
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-template-rows: repeat(1, 1fr);
        grid-gap: 20px;
        background-color: white;
    }
    .shops&gt;div {
        box-shadow: 0px 0px 2px #000;
        box-sizing: border-box;
        border-radius: 3px;
    }
    .shops&gt;div:hover {
        box-sizing: border-box;
        cursor: pointer;
        box-shadow: 0px 0px 5px #000;
    }
    .shops .shopsName {
        padding: 8px;
        font-weight: bold;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .shops&gt;div&gt;div&gt;div span {
        font-size: 0.8em;
        padding: 8px;
        color: rgb(160, 160, 160);
    }
    .foodImg {
        display: block;
        width: 100%;
    }
    .shops&gt;div&gt;div:nth-last-child(1) img {
        width: 11px;
    }
    /* 返回顶部 */
    .backToTop {
        width: 40px;
        height: 40px;
        position: fixed;
        right: 50px;
        bottom: 160px;
        background: url(&#39;../img/backToTop.png&#39;) no-repeat;
        background-size: 100%;
    }
    /* 页脚 */
    footer {
        width: 100%;
        height: auto;
        background-color: #333;
        margin-top: 16px;
    }
    .footerCenterText span:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    /* 左 */
    /* 左1 */
    .footerLeft&gt;div:nth-child(1)&gt;p {
        margin-bottom: 10px;
        color: gray;
    }
    /* 左1 */
    .footerLeft&gt;div:nth-child(1)&gt;p&gt;span {
        margin: 30px 20px 90px 30px;
        color: gray;
    }
    /* 左2 */
    .footerLeft&gt;div:nth-child(2) {
        margin-top: -140px;
        float: right;
    }
    /* 左2 */
    .footerLeft&gt;div:nth-child(2) p:nth-child(1),
    .footerLeft&gt;div:nth-child(2) p:nth-child(3) {
        margin: 20px 10px 10px 0px;
        color: white;
        font-size: 20px;
    }
    .footerLeft&gt;div:nth-child(2) p:nth-child(2),
    .footerLeft&gt;div:nth-child(2) p:nth-child(4),
    .footerLeft&gt;div:nth-child(2) p:nth-child(5) {
        margin: 2px 0px;
        color: gray;
    }
    /* 右 */
    .footerRight&gt;p {
        color: white;
        font-size: 20px;
        margin-bottom: 20px;
    }
    /* 隔断线 */
    footer hr {
        height: 1px;
        background-color: gray;
    }
    .records {
        width: 100%;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;
        background-color: inherit;
        color: gray;
        text-align: center;
    }
    .records .recordsText:hover {
        color: white;
        cursor: pointer;
    }
    .records img {
        width: 14px;
    }
}

@media screen and (max-width: 840px) and (min-width: 760px) {
    .h-center {
        margin: 0 auto;
        width: 98%;
    }
    .h-nav div {
        width: auto;
        height: 60px;
        margin-left: 6px;
        padding: 0px 6px;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 960px) and (min-width: 761px) {
    .classifySearch input {
        display: none;
    }
    .classifySearch .classifySearchIcon {
        height: 30px;
        width: 30px;
        margin-top: 8px;
        display: inline-block;
        border-top: 1px solid rgb(193, 194, 193);
        border-right: 1px solid rgb(193, 194, 193);
        border-bottom: 1px solid rgb(193, 194, 193);
        background: #ffcb52 url(../img/search.png) center no-repeat;
        background-size: 26px;
        border-radius: 3px;
        cursor: pointer;
        margin-right: 16px;
    }
}

@media screen and (min-width: 890px) {
    .footerCenterText {
        width: 80%;
        height: 300px;
        margin: 0 auto;
    }
    .footerLeft {
        width: 70%;
        margin-top: 84px;
        float: left;
    }
    .footerRight {
        width: 180px;
        margin-top: 80px;
        float: right;
    }
    /* 右 */
    .footerRight img {
        width: 48%;
    }
}

@media screen and (max-width: 890px) and (min-width: 761px) {
    .footerCenterText {
        width: 80%;
        height: auto;
        margin: 0 auto;
    }
    .footerLeft {
        width: 80%;
        padding-top: 40px;
        margin: 84px auto 0px;
    }
    .footerRight {
        /* width: 20%; */
        width: 190px;
        margin: 80px auto 20px;
        clear: both;
    }
    /* 右 */
    .footerRight img {
        width: 46%;
    }
}


/* H5页面 */


/* border-radius: 10px;为主 */

@media screen and (max-width: 760px) {
    body {
        background-color: #ffcb52 !important;
        padding-bottom: 100px;
        margin-bottom: 100px;
    }
    /* 隐藏PC导航 */
    .h-center&gt;div {
        line-height: 0px;
        overflow: hidden;
    }
    /* 隐藏PC导航的logo */
    .h-center&gt;div img {
        display: none;
    }
    /* 浮动H5底部导航 */
    .h-f-nav {
        width: 100%;
        padding-top: 0px;
        position: fixed;
        bottom: 0;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 58px;
    }
    .h-f-nav&gt;div {
        width: 100%;
        display: block;
        background-color: white;
        text-align: center;
        float: left;
    }
    /* 存在bug，非正常居中 */
    .h-f-nav&gt;div&gt;div {
        width: 60px;
        height: 50px;
        top: 7%;
        left: 33%;
        transform: translate(-10%, 0%);
        padding: 0px 10px;
        position: relative;
    }
    /* 底部导航-主页-Icno */
    .h-f-nav .h-f-nav-index {
        width: 32px;
        height: 32px;
        background: url(&#39;../img/homeNoSl.png&#39;) no-repeat;
        margin: 0 auto;
        display: block;
    }
    .h-f-nav .h-f-nav-index:hover {
        background: url(&#39;../img/homeIsSl.png&#39;) no-repeat;
    }
    /* 底部导航-订单-Icno */
    .h-f-nav .h-f-nav-order {
        width: 32px;
        height: 32px;
        background: url(&#39;../img/orderNoSl.png&#39;) no-repeat;
        margin: 0 auto;
        display: block;
    }
    .h-f-nav .h-f-nav-order:hover {
        background: url(&#39;../img/orderIsSl.png&#39;) no-repeat;
    }
    /* 底部导航-我的-Icno */
    .h-f-nav .h-f-nav-my {
        width: 32px;
        height: 32px;
        background: url(&#39;../img/myNoSl.png&#39;) no-repeat;
        margin: 0 auto;
        display: block;
    }
    .h-f-nav .h-f-nav-my:hover {
        background: url(&#39;../img/myIsSl.png&#39;) no-repeat;
    }
    .h-f-nav&gt;div span {
        font-size: 13px;
        color: gray;
    }
    /* 中间部分 */
    .main {
        width: 100%;
        height: 800px;
    }
    /* 展示栏 */
    .show {
        width: 100%;
        height: 26px;
        line-height: 26px;
        padding-top: 6px;
        padding-bottom: 6px;
        border-radius: 0px 0px 20px 20px;
    }
    .show div&gt;img {
        margin-top: 4px;
    }
    /* 左展示栏 */
    .show .showLeft,
    .showLeft&gt;div {
        height: inherit;
        line-height: 30px;
        float: left;
        overflow: hidden;
    }
    .showLeft .yLine {
        display: none;
    }
    .showLeft&gt;div:nth-child(3),
    .showLeft .showLeftSwitch&gt;div {
        display: none;
    }
    /* 右展示栏 */
    .showRight div,
    .showRight img {
        display: none;
        line-height: 0px;
        overflow: hidden;
    }
    /* 商家分类 */
    .classify {
        width: 100%;
        height: auto;
        margin: 10px auto 0px;
        background-color: rgb(245, 244, 244);
        border-radius: 3px;
        padding: 10px 10px;
        box-sizing: border-box;
        display: block;
        border-radius: 20px 20px 0px 0px;
    }
    .classify .classifySear2 {
        float: left;
        width: 100%;
    }
    .classify .classifyInfo {
        width: 100%;
        height: auto;
        display: inline-block;
        position: relative;
        background-color: white;
        border-radius: 10px;
        margin-top: 10px;
        padding-top: 16px;
    }
    .classify .classifyInfo&gt;div,
    .shopClassify&gt;div {
        float: left;
    }
    .classifySear {
        display: none;
    }
    .shopClassify&gt;div&gt;img {
        margin-left: 10px;
        width: 20px;
    }
    .classify .options {
        height: 22px;
        line-height: 22px;
        padding: 0px 5px;
        text-align: center;
        margin-left: 6px;
    }
    /* 菜单选项横向滑动 */
    .classifyMenu {
        width: auto;
        display: -webkit-box;
        box-sizing: border-box;
        overflow-x: scroll;
        margin-left: 6px;
    }
    /* 隐藏横向滚动条：颜色透明 */
    .classifyMenu::-webkit-scrollbar {
        background-color: transparent;
    }
    .options:hover {
        color: #ffcb52;
        cursor: pointer;
    }
    /* 搜索框 */
    .classifySearch2 input {
        height: 30px;
        min-width: 40px;
        width: 100%;
        position: relative;
        border: 1px solid rgb(193, 194, 193);
        padding-left: 20px;
        outline: none;
        border-radius: 50px;
        box-sizing: border-box;
        background: rgb(235, 235, 235) url(&#39;../img/search.png&#39;) no-repeat left;
        background-size: 16px;
    }
    /* placehoder兼容性 */
    .classifySearch input::placeholder {
        color: rgb(160, 160, 160);
    }
    .classifySearch input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: rgb(160, 160, 160);
    }
    .classifySearch input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: rgb(160, 160, 160);
    }
    .classifySearch input::-webkit-input-placeholder {
        /* WebKit browsers */
        color: rgb(160, 160, 160);
    }
    .classifySearch input:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: rgb(160, 160, 160);
    }
    /* 公示 */
    .publicity {
        width: 100%;
        height: 30px;
        background-color: white;
        border-radius: 3px;
        padding: auto 12px;
        box-sizing: border-box;
        position: relative;
        box-shadow: 0px 0px 6px gray;
        float: left;
    }
    .publicity&gt;div {
        float: left;
        line-height: 30px;
    }
    .publicity img {
        margin-top: 4px;
        margin-left: 12px;
        height: 22px;
    }
    .publicityText {
        color: #ffcb52;
        font-weight: bold;
    }
    .publicityLink {
        font-weight: bold;
        color: blue;
    }
    /* 店家上架菜品 */
    .shops {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-template-rows: repeat(1, 1fr);
        grid-gap: 10px;
        background-color: rgb(245, 244, 244);
    }
    .shops&gt;div&gt;div {
        box-sizing: border-box;
        border-radius: 0px 0px 10px 10px;
        display: block;
        background-color: white;
    }
    .shops&gt;div&gt;div&gt;img {
        border-radius: 10px 10px 0px 0px;
    }
    .shops .shopsName {
        padding: 8px;
        font-weight: bold;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .shops&gt;div&gt;div&gt;div&gt;span {
        font-size: 0.8em;
        padding: 10px;
        color: rgb(160, 160, 160);
    }
    .foodImg {
        display: block;
        width: 100%;
    }
    .shops&gt;div&gt;div:nth-last-child(1) img {
        width: 11px;
    }
    /* 假修复被隐藏的问题(flxed固定底部导航)，例如最后一个div进行延展 */
    .shops&gt;.a {
        margin-bottom: 58px;
    }
}


/* H5店家上架菜品579px */

@media screen and (max-width: 549.9px) {
    /* 店家上架菜品 */
    .shops&gt;div {
        box-sizing: border-box;
        display: grid;
        width: 100%;
        grid-template-columns: 50% 50%;
        grid-template-rows: repeat(1, 1fr);
        background-color: white;
        background-size: 100px;
        border-radius: 10px;
    }
    .shops&gt;div&gt;div:nth-child(2) {
        box-sizing: border-box;
        border-radius: 0px 10px 10px 0px;
    }
    .shops&gt;div&gt;div&gt;img {
        box-sizing: border-box;
        border-radius: 10px 0px 0px 10px;
    }
    .shops .shopsName {
        padding: 8px;
        font-weight: bold;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .shops&gt;div&gt;div&gt;span {
        font-size: 0.8em;
        padding: 8px;
        color: rgb(160, 160, 160);
    }
    .foodImg {
        display: block;
        width: 100%;
    }
    .shops&gt;div&gt;div&gt;div:nth-last-child(1) img {
        width: 11px;
    }
}


/* H5环境下，去除(隐藏)PC底部 */

@media screen and (max-width: 760px) {
    /* 页脚 */
    footer {
        display: none;
        line-height: 0px;
        overflow: hidden;
    }
}
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="nextPage"><a href="401002"><span class="span-txt">可编辑的通讯录</span> <img src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png" alt="右箭头"> </a></div>
					</div>

				</div>

			</div>


		</div>

	</div>
</template>

<script>
export default {
	name: "401001"
}
</script>

<style scoped src="../../../../assets/css/item-auto.css"></style>
<style scoped src="../../../../assets/css/markdownpad-github.css"></style>
<style scoped src="../../../../assets/css/data-classify-auto.css"></style>
