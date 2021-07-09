<template>
	<div>

		<div id="main">
			<div class="nav-article">
				<span>当前所在位置：</span>
				<a href="../../../item">项目</a>
				<span> &gt; </span>
				<a href="401001">Web项目</a>
				<span> &gt; </span>
				<a href="401003">仿项目官网</a>
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
						<div class="previouPage"><a href="401002"> <img class="img-l"
																			src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																			alt="左箭头"> <span
							class="span-txt">可编辑的通讯录</span></a></div>
						<div class="nextPage"><a href="401004"><span class="span-txt">Vue实现记事本</span> <img
							class="img-r" src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-right.png"
							alt="右箭头"> </a></div>
					</div>

					<div class="article">
						<!-- ↓  博客输入  ↓ -->

						<p><span class="published">发布于：2021-1-11-1</span></p>
						<h1>仿项目官网</h1>
						<p>项目地址：<a href="http://1.15.142.19/item/web/project/3/demo/index.html" target="_blank"
								   class="url">http://1.15.142.19/item/web/project/3/demo/index.html</a></p>
						<p>项目下载：<a href="http://1.15.142.19/item/web/project/3/仿项目官网.zip">仿项目官网.zip</a></p>
						<h3>说明</h3>
						<ol start="">
							<li>适配PC、H5端；</li>
							<li>flex布局头部菜单(一维布局)；</li>
							<li>高内存图片使用智图进行压缩；</li>
							<li>Element-UI搭建走马灯；</li>
							<li>gird布局其余模块(二维布局)；</li>
							<li>图片放缩使用zooming图片放缩库；</li>
							<li>动画使用css原生动画；</li>
							<li>存在兼容性问题。</li>

						</ol>
						<p>PS：Element(走马灯--部分)官网文档地址：<a href="https://element.eleme.cn/#/zh-CN/component/carousel"
														target="_blank" class="url">https://element.eleme.cn/#/zh-CN/component/carousel</a>
						</p>
						<p>&nbsp;</p>
						<p>走马灯的搭建，<a href="http://121.4.89.33/demo/data/307/307004#基础用法" target="_blank">点击跳转</a>。
						</p>
						<p>&nbsp;</p>
						<h3>bug</h3>
						<ol start="">
							<li>头部导航模块：login模块在H5模式下，位置无法按设置定位；</li>
							<li>信息模块：后加红点位置会产生偏移</li>
							<li>技能培训板块：div:hover占位冲突，叠层无效；</li>
							<li>……</li>

						</ol>
						<p>&nbsp;</p>
						<h3>HTML源代码</h3>
						<pre><code class="language-html" lang="html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;css/css.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;css/haeder.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;css/index.css&quot;&gt;
    &lt;script src=&quot;js/jquery-3.3.1.js&quot;&gt;&lt;/script&gt;
    &lt;!-- 引入ElementUI  CDN --&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/element-ui/lib/theme-chalk/index.css&quot;&gt;

    &lt;title&gt;仿项目官网&lt;/title&gt;

&lt;/head&gt;

&lt;body&gt;

    &lt;a href=&quot;https://121.4.89.33/demo/data/306/306003&quot; style=&quot;text-decoration:none;&quot;&gt;
        &lt;div style=&quot;width: 100%; height: 30px; line-height: 30px; background-color: white; border-bottom: 3px double red; text-align: center;&quot;&gt;
            返回项目介绍页&lt;/div&gt;
    &lt;/a&gt;
    &lt;div class=&quot;header&quot;&gt;
        &lt;!-- 用于占位 --&gt;
        &lt;div&gt;&lt;/div&gt;
        &lt;!-- 头部导航 --&gt;
        &lt;div class=&quot;h-nav-main&quot;&gt;
            &lt;!-- H5菜单Icon --&gt;
            &lt;div&gt;
                &lt;img src=&quot;images/汉堡图标_hamburger-button.svg&quot; alt=&quot;&quot;&gt;
            &lt;/div&gt;
            &lt;div class=&quot;h-nav&quot;&gt;
                &lt;div&gt;
                    &lt;a href=&quot;&quot;&gt;首页&lt;/a&gt;
                &lt;/div&gt;
                &lt;div class=&quot;h-nav-Menu h-nav-Menu1&quot;&gt;
                    &lt;a href=&quot;&quot; class=&quot;menu-btn&quot;&gt;项目对接&lt;img src=&quot;images/下_down.png&quot; alt=&quot;&quot;&gt;&lt;/a&gt;
                    &lt;ul class=&quot;topDown1 topDown&quot;&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;a1&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;a2&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;a3&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div class=&quot;h-nav-Menu h-nav-Menu2&quot;&gt;
                    &lt;a href=&quot;&quot; class=&quot;menu-btn&quot;&gt;企业服务&lt;img src=&quot;images/下_down.png&quot; alt=&quot;&quot;&gt;&lt;/a&gt;
                    &lt;ul class=&quot;topDown2 topDown&quot;&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;b1&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;b2&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;b3&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div class=&quot;h-nav-Menu h-nav-Menu3&quot;&gt;
                    &lt;a href=&quot;&quot; class=&quot;menu-btn&quot;&gt;技能培训&lt;img src=&quot;images/下_down.png&quot; alt=&quot;&quot;&gt;&lt;/a&gt;
                    &lt;ul class=&quot;topDown3 topDown&quot;&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;c1&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;c2&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;c3&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div class=&quot;h-nav-Menu h-nav-Menu4&quot;&gt;
                    &lt;a href=&quot;&quot; class=&quot;menu-btn&quot;&gt;资源中心&lt;img src=&quot;images/下_down.png&quot; alt=&quot;&quot;&gt;&lt;/a&gt;
                    &lt;ul class=&quot;topDown4 topDown&quot;&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;d1&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;d2&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;d3&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div class=&quot;h-nav-Menu h-nav-Menu5&quot;&gt;
                    &lt;a href=&quot;&quot; class=&quot;menu-btn&quot;&gt;求职招聘&lt;img src=&quot;images/下_down.png&quot; alt=&quot;&quot;&gt;&lt;/a&gt;
                    &lt;ul class=&quot;topDown5 topDown&quot;&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;e1&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;e2&lt;/a&gt;&lt;/li&gt;
                        &lt;li&gt;&lt;a href=&quot;&quot;&gt;e3&lt;/a&gt;&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;

            &lt;/div&gt;


            &lt;!-- 登录 --&gt;
            &lt;div class=&quot;login&quot;&gt;
                &lt;div&gt;
                    &lt;img src=&quot;&quot; alt=&quot;&quot;&gt;&lt;span&gt;人才登录&lt;/span&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img src=&quot;&quot; alt=&quot;&quot;&gt;&lt;span&gt;企业用户登录&lt;/span&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- 头部轮播图 --&gt;
    &lt;div id=&quot;slideShow&quot;&gt;
        &lt;template&gt;
            &lt;div class=&quot;block&quot;&gt;
                &lt;el-carousel :interval=&quot;5000&quot; arrow=&quot;hover&quot; :height=&quot;bannerHeight+&#39;px&#39;&quot;&gt;
                    &lt;el-carousel-item v-for=&quot;item in imgList&quot; :key=&quot;item.id&quot;&gt;
                        &lt;img ref=&quot;bannerHeight&quot; :src=&quot;item.idView&quot; alt=&quot;&quot; @load=&quot;imgLoad&quot; style=&quot;width: 100%;&quot;&gt;
                    &lt;/el-carousel-item&gt;
                &lt;/el-carousel&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/div&gt;


    &lt;!-- 中部内容 --&gt;
    &lt;div class=&quot;main&quot;&gt;
        &lt;!-- 中间内容 --&gt;
        &lt;div class=&quot;center&quot;&gt;
            &lt;!-- 搜索框 --&gt;
            &lt;div class=&quot;search&quot;&gt;
                &lt;input type=&quot;text&quot;&gt;
                &lt;div class=&quot;search-icon&quot;&gt;&lt;/div&gt;
            &lt;/div&gt;


            &lt;!-- 5个入口 --&gt;

            &lt;div class=&quot;entrances&quot;&gt;
                &lt;div class=&quot;entrancesChoose&quot;&gt;
                    &lt;div class=&quot;img1&quot;&gt;&lt;/div&gt;
                    &lt;div&gt;双百计划申报入口&lt;/div&gt;
                &lt;/div&gt;
                &lt;div class=&quot;entrancesChoose &quot;&gt;
                    &lt;div class=&quot;img2&quot;&gt;&lt;/div&gt;
                    &lt;div&gt;
                        &lt;p&gt;青年创新创业人才，&lt;/p&gt;
                        &lt;p&gt;计划申报入口&lt;/p&gt;
                    &lt;/div&gt;

                &lt;/div&gt;
                &lt;div class=&quot;entrancesChoose &quot;&gt;
                    &lt;div class=&quot;img3&quot;&gt;&lt;/div&gt;
                    &lt;div&gt;
                        &lt;p&gt;国家、省、市，&lt;/p&gt;
                        &lt;p&gt;人才政策索引&lt;/p&gt;
                    &lt;/div&gt;

                &lt;/div&gt;
                &lt;div class=&quot;entrancesChoose &quot;&gt;
                    &lt;div class=&quot;img4&quot;&gt;&lt;/div&gt;
                    &lt;div&gt;
                        &lt;p&gt;人才项目资本合作展，&lt;/p&gt;
                        &lt;p&gt;展品项目征集入口&lt;/p&gt;
                    &lt;/div&gt;

                &lt;/div&gt;
                &lt;div class=&quot;entrancesChoose &quot;&gt;
                    &lt;div class=&quot;img5&quot;&gt;&lt;/div&gt;
                    &lt;div&gt;
                        &lt;p&gt;南京市人才信息，&lt;/p&gt;
                        &lt;p&gt;综合管理系统&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;


            &lt;!-- 信息中心 --&gt;
            &lt;div class=&quot;information &quot;&gt;
                &lt;div class=&quot;information-small &quot;&gt;
                    &lt;div class=&quot;information-small-top &quot;&gt;
                        &lt;span&gt;项目对接&lt;/span&gt;
                        &lt;span&gt;···&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;ul&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;南方多省系统调优&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;

                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;谷歌chrome浏览器下的中控指纹仪接口web调用&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;高级前端angular2人力外包&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;支持4种主题和在线换肤：线性、填充、双色、四色。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;网站提供多种便捷操作：复制SVG code、复制React 组件、复制Vue组件、下载PNG、下载SVG。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;针对技术同学，支持图标组件NPM包导出，包括React Icons/ Vue Icons/ Vue3 Icons / SVG Icons。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;提供超1600高质量图标，免费使用，此处给我们勤劳的设计师们点赞~o(￣▽￣)ｄ&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;根据单一SVG源文件变换多主题，包括：线框、填充、双色、多色，无需使用4种风格的SVG文件&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div class=&quot;information-small &quot;&gt;
                    &lt;div class=&quot;information-small-top &quot;&gt;
                        &lt;span&gt;资讯中心&lt;/span&gt;
                        &lt;span&gt;···&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;ul&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;在使用 Vue 时，我们推荐在你的浏览器上安装 Vue Devtools。它允许你在一个更友好的界面中审查和调试 Vue 应用。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;直接下载并用 &amp;lt;script&amp;gt;标签引入，Vue 会被注册为一个全局变量。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;在开发环境下不要使用压缩版本，不然你就失去了所有常见错误相关的警告!&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;对于制作原型或学习，你可以这样使用最新版本。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;如果你使用原生 ES Modules，这里也有一个兼容 ES Module 的构建文件。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;请确认了解不同构建版本并在你发布的站点中使用生产环境版本，把 vue.js 换成 vue.min.js。这是一个更小的构建，可以带来比开发环境下更快的速度体验。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;在用 Vue 构建大型应用时推荐使用 NPM 安装[1]。NPM 能很好地和诸如 webpack 或 Browserify 模块打包器配合使用。同时 Vue 也提供配套工具来开发单文件组件。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                &lt;div class=&quot;information-small &quot;&gt;
                    &lt;div class=&quot;information-small-top &quot;&gt;
                        &lt;span&gt;工作动态&lt;/span&gt;
                        &lt;span&gt;···&lt;/span&gt;
                    &lt;/div&gt;
                    &lt;ul&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;简化流程：设计简洁直观的操作流程。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                        &lt;li&gt;
                            &lt;p&gt;
                                &lt;span&gt;用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策。&lt;/span&gt;
                                &lt;span&gt;2021-01-01&lt;/span&gt;
                            &lt;/p&gt;
                        &lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/div&gt;


            &lt;!-- 技能培训 --&gt;
            &lt;div class=&quot;skillsTrainingTitel &quot;&gt;
                技能培训
                &lt;div class=&quot;moduleTitleLine &quot;&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;skillsTraining &quot;&gt;
                &lt;div&gt;
                    &lt;div&gt;
                        &lt;img src=&quot;images/1.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                    &lt;div&gt;人脸识别完整项目实战（附源码）&lt;/div&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;div&gt;
                        &lt;img src=&quot;images/2.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                    &lt;div&gt;神经网络和深度学习&lt;/div&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;div&gt;
                        &lt;img src=&quot;images/3.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                    &lt;div&gt;序列模型&lt;/div&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;div&gt;
                        &lt;img src=&quot;images/4.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                    &lt;div&gt;金融建模专题课程权益类产品估值&lt;/div&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;div&gt;
                        &lt;img src=&quot;images/5.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                    &lt;div&gt;人工智能百度Al：语音合成&lt;/div&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;div&gt;
                        &lt;img src=&quot;images/6.jpg&quot; alt=&quot;&quot;&gt;
                    &lt;/div&gt;
                    &lt;div&gt;自然语言处理动手学Bert文本分类&lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;


            &lt;!-- 招聘专场 --&gt;
            &lt;div class=&quot;specialTitle&quot;&gt;
                招聘专场
                &lt;div class=&quot;moduleTitleLine &quot;&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class=&quot;special&quot;&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘12.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘2.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘3.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘4.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘5.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘6.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘7.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘8.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘9.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘10.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘11.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;img class=&quot;zooming&quot; src=&quot;images/招聘12.png&quot; alt=&quot;&quot;&gt;
                &lt;/div&gt;
            &lt;/div&gt;


            &lt;!-- 问答 --&gt;
            &lt;div class=&quot;QA &quot;&gt;
                &lt;div class=&quot;QAContent &quot;&gt;
                    &lt;p&gt;
                        &lt;span&gt;更多疑问 全面解答&lt;/span&gt;
                    &lt;/p&gt;
                    &lt;div&gt;&lt;/div&gt;
                    &lt;p&gt;行业内数十年项目总监在线为您解答所有疑惑&lt;/p&gt;
                    &lt;div class=&quot;freeQues &quot;&gt;
                        免费咨询
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;


        &lt;!-- PC-右部的侧导航栏+返回顶部按钮；H5-只显示返回顶部按钮 --&gt;
        &lt;div class=&quot;right &quot;&gt;
            &lt;div&gt;
                &lt;p&gt;海纳&lt;/p&gt;
                &lt;p&gt;百川&lt;/p&gt;
            &lt;/div&gt;
            &lt;div&gt;
                &lt;p&gt;双百&lt;/p&gt;
                &lt;p&gt;计划&lt;/p&gt;
            &lt;/div&gt;
            &lt;!-- 二维码 --&gt;
            &lt;div id=&quot;QRCode&quot;&gt;&lt;/div&gt;
            &lt;!-- 收藏 --&gt;
            &lt;div id=&quot;collect&quot;&gt;&lt;/div&gt;
            &lt;!-- 返回顶部 --&gt;
            &lt;div id=&quot;backTop&quot; onclick=&quot;top_function()&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;


        &lt;!-- 底部导航\联系 --&gt;
        &lt;footer class=&quot;footerTop&quot;&gt;
            &lt;div class=&quot;footerTopCenter&quot;&gt;
                &lt;div class=&quot;link&quot;&gt;
                    &lt;h4&gt;本期精选&lt;/h4&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;流行框架&lt;/span&gt;&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;精品微课&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;免费课程&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;课程实践&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;资料下载&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;link&quot;&gt;
                    &lt;h4&gt;友情链接&lt;/h4&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;行业资讯&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;就业指南&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;常见问题&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;最新资讯&lt;/p&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;视频在线&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;link&quot;&gt;
                    &lt;h4&gt;主办单位&lt;/h4&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;88公司&lt;/p&gt;
                    &lt;h4&gt;承办单位&lt;/h4&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;66公司&lt;/p&gt;
                    &lt;h4&gt;技术支持&lt;/h4&gt;
                    &lt;p&gt;&lt;span&gt;&lt;/span&gt;Simple&lt;/p&gt;
                &lt;/div&gt;
                &lt;div class=&quot;call&quot;&gt;
                    &lt;h4&gt;联系我们&lt;/h4&gt;
                    &lt;div&gt;&lt;/div&gt;
                    &lt;div&gt;
                        &lt;img src=&quot;images/电话_phone-one.png&quot; alt=&quot;&quot;&gt;025-12345678
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;img src=&quot;images/沟通_communication.png&quot; alt=&quot;&quot;&gt;88888888
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;img src=&quot;images/手机_phone.png&quot; alt=&quot;&quot;&gt;18888888888
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/footer&gt;


        &lt;!-- 最底部 --&gt;
        &lt;footer class=&quot;copy &quot;&gt;
            &lt;div class=&quot;copyText&quot;&gt;
                &lt;p&gt;Copyright &amp;copy;&amp;nbsp;2010-2019 xxxx.com All Rights Reversed.Simple&lt;/p&gt;
                &lt;p&gt;苏公网安备&amp;nbsp;xxxxxxxxxx号&lt;img src=&quot;images/record.png&quot; alt=&quot;&quot;&gt;&lt;/p&gt;
            &lt;/div&gt;
        &lt;/footer&gt;

    &lt;/div&gt;
&lt;/body&gt;
&lt;!-- 引入vue组件库 --&gt;
&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js&quot;&gt;&lt;/script&gt;
&lt;!-- 引入ElementUI组件库 --&gt;
&lt;script src=&quot;https://unpkg.com/element-ui/lib/index.js&quot;&gt;&lt;/script&gt;
&lt;!-- 引入JavaScript图片缩放库 --&gt;
&lt;script src=&quot;js/zooming.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/js.js&quot;&gt;&lt;/script&gt;

&lt;/html&gt;
</code></pre>
						<h3>index.css源代码</h3>
						<pre><code class="language-css" lang="css">/*兼容性自动生成*/


/*
++++++++++本页面统一使用++++++++++

border-radius: 3px;
box-shadow: 0px 0px 4px rgb(94, 94, 94)

*/


/* 为了置于导航栏下一层的轮播图可以操作 */

body {
    z-index: 0;
}


/* PC */

@media screen and (min-width: 701px) {
    /* 走马灯 */
    #slideShow {
        position: relative;
        top: -140px;
        z-index: 2;
    }
    .main {
        margin-top: -140px;
        width: 100%;
        background-color: rgb(236, 236, 236);
    }
}


/* H5 */

@media screen and (max-width: 700px) {
    /* #slideShow {

    } */
    body,
    .main {
        width: 100%;
        background-color: rgb(236, 236, 236);
    }
}


/* PC */

@media screen and (min-width: 591px) {
    .center {
        width: 80%;
        margin: 0 auto;
    }
}


/* H5 */

@media screen and (max-width: 590px) {
    .center {
        margin: 10px;
    }
}


/* 搜索框 */

.search {
    width: 100%;
    height: 40px;
    line-height: 40px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 40px;
    margin-bottom: 10px;
}

.search&gt;input,
.search&gt;div {
    margin-top: 10px;
}

.search&gt;input {
    border-radius: 3px 0px 0px 3px;
    -webkit-border-radius: 3px 0px 0px 3px;
    -moz-border-radius: 3px 0px 0px 3px;
    -ms-border-radius: 3px 0px 0px 3px;
    -o-border-radius: 3px 0px 0px 3px;
    padding-left: 10px;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.search&gt;input:focus {
    border-top: 2px solid rgb(0, 153, 255);
    border-left: 2px solid rgb(0, 153, 255);
    border-bottom: 2px solid rgb(0, 153, 255);
    padding-left: 10px;
    list-style: red;
    color: green;
}

.search&gt;div {
    text-align: center;
    background-color: rgb(0, 153, 255);
    border-radius: 0px 3px 3px 0px;
    -webkit-border-radius: 0px 3px 3px 0px;
    -moz-border-radius: 0px 3px 3px 0px;
    -ms-border-radius: 0px 3px 3px 0px;
    -o-border-radius: 0px 3px 3px 0px;
    cursor: pointer;
}

.search-icon {
    width: 40px;
    height: 40px;
    background: url(&#39;../images/搜索_search.png&#39;) no-repeat 6px;
    -o-background-size: 30px;
    background-size: 30px;
}


/* 5个入口 */

.entrances {
    padding-top: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 10px;
    clear: both;
}

.entrances&gt;div {
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
}

.entrances&gt;div:hover {
    box-shadow: 0px 0px 4px rgb(94, 94, 94)
}

.entrancesChoose:nth-of-type(1) {
    background-color: rgba(136, 1, 136, 0.616);
}

.entrancesChoose:nth-of-type(2) {
    background-color: rgba(0, 102, 255, 0.801);
}

.entrancesChoose:nth-of-type(3) {
    background-color: rgba(30, 128, 0, 0.658);
}

.entrancesChoose:nth-of-type(4) {
    background-color: rgba(255, 153, 0, 0.938);
}

.entrancesChoose:nth-of-type(5) {
    background-color: rgba(165, 126, 42, 0.842);
}


/*
PC
图片、文字同一行
*/

@media screen and (min-width: 701px) {
    .entrancesChoose {
        display: grid;
        grid-template-columns: 40px 1fr;
        padding: 10px;
        text-align: justify;
        color: white;
        font-weight: 800;
    }
}


/*
H5：700px以下
图片、文字各占一行
*/

@media screen and (max-width: 700px) {
    .entrancesChoose {
        display: grid;
        grid-template-columns: 1fr;
        text-align: center;
        color: white;
        font-weight: 800;
    }
    .entrancesChoose&gt;div:first-child {
        width: 40px;
        height: 40px;
        padding: 0px;
        position: relative;
        left: 10px;
        top: 10px;
    }
    .entrancesChoose&gt;div:last-of-type {
        padding: 10px;
        text-align: justify;
    }
}

.entrancesChoose&gt;div {
    padding: 0px 0px 0px 10px;
}

.entrancesChoose .img1 {
    background: url(&#39;../images/图层_layers.png&#39;) no-repeat;
    -o-background-size: 40px;
    background-size: 40px;
}

.entrancesChoose .img2 {
    background: url(&#39;../images/书籍-打开_book-open.png&#39;) no-repeat;
    -o-background-size: 40px;
    background-size: 40px;
}

.entrancesChoose .img3 {
    background: url(&#39;../images/表格_table.png&#39;) no-repeat;
    -o-background-size: 40px;
    background-size: 40px;
}

.entrancesChoose .img4 {
    background: url(&#39;../images/系统_system.png&#39;) no-repeat;
    -o-background-size: 40px;
    background-size: 40px;
}

.entrancesChoose .img5 {
    background: url(&#39;../images/编辑姓名_edit-name.png&#39;) no-repeat;
    -o-background-size: 40px;
    background-size: 40px;
}


/* 信息中心 */


/* PC */

@media screen and (min-width: 841px) {
    .information {
        margin-top: 14px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
    }
}


/* H5 */

@media screen and (max-width: 840px) {
    .information {
        margin-top: 14px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
    }
}

.information-small {
    background-color: white;
    border-radius: 3px;
    padding: 0px 12px 4px 12px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
}

.information-small-top {
    font-size: 20px;
    color: rgb(49, 177, 252);
    font-weight: bold;
    margin-bottom: 10px;
    border-bottom: 3px solid rgb(192, 192, 192);
}

.information-small-top&gt;span:nth-of-type(1) {
    border-bottom: 3px solid rgb(49, 188, 252);
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    bottom: -3px;
    display: inline-block;
    padding: 6px 0px;
}

.information-small-top&gt;span:nth-of-type(2) {
    float: right;
    color: rgb(192, 192, 192);
    cursor: pointer;
    position: relative;
    position: relative;
    bottom: -3px;
    display: inline-block;
    padding: 6px 0px;
}


/* 内容 */

.information-small&gt;ul&gt;li {
    width: 100%;
    display: grid;
    grid-template-columns: 20px 1fr;
    grid-template-rows: 20px;
    cursor: pointer;
}

.information-small&gt;ul&gt;li&gt;p {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 72px;
    gap: 6px;
}

.information-small&gt;ul&gt;li&gt;p:hover {
    color: red;
}


/* li小圆点颜色-- \2022 */

.information-small&gt;ul&gt;li::before {
    content: &quot;\2022&quot;;
    color: red;
    font-size: 20px;
    position: relative;
    /* top: -4px; */
    top: -28%;
}

.information-small&gt;ul&gt;li&gt;p {
    font-size: 0.8em;
}

.information-small&gt;ul&gt;li&gt;p&gt;span:nth-of-type(1) {
    float: left;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.information-small&gt;ul&gt;li&gt;p&gt;span:nth-of-type(2) {
    float: right;
}


/* 模块标题线 */

.moduleTitleLine {
    width: 60px;
    border-bottom: 3px solid rgb(0, 162, 255);
    margin: 20px auto 40px;
}


/* 技能培训 */


/* PC */

@media screen and (min-width: 1300px) {
    .skillsTraining {
        width: 100%;
        border-top: 6px solid rgb(185, 184, 184);
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 24px;
        padding: 0px 10px 0px 10px;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 1299px) and (min-width: 701px) {
    .skillsTraining {
        width: 100%;
        border-top: 6px solid rgb(185, 184, 184);
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px;
        padding: 0px 10px 0px 10px;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
}


/* H5 */

@media screen and (max-width: 700px) {
    .skillsTraining {
        width: 100%;
        border-top: 6px solid rgb(185, 184, 184);
        margin-top: 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
}

.skillsTraining&gt;div {
    background-color: white;
    border-radius: 0px 0px 3px 3px;
    -webkit-border-radius: 0px 0px 3px 3px;
    -moz-border-radius: 0px 0px 3px 3px;
    -ms-border-radius: 0px 0px 3px 3px;
    -o-border-radius: 0px 0px 3px 3px;
    text-align: center;
    font-size: 20px;
    cursor: pointer;
    padding: 10px 10px 0px 10px;
}

.skillsTraining&gt;div&gt;div&gt;img {
    display: block;
    width: 100%;
}

.skillsTraining&gt;div:hover {
    background-color: rgb(0, 183, 255);
    color: white;
    margin-top: -30px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
}

.skillsTraining&gt;div&gt;div:nth-of-type(2) {
    text-align: center;
    padding: 10px;
}

.skillsTrainingTitel {
    margin-top: 60px;
    text-align: center;
    font-size: 20px;
    font-family: &#39;宋体&#39;;
}


/* 招聘专场 */


/* PC */

@media screen and (min-width: 1300px) {
    .special {
        width: 100%;
        border-top: 6px solid rgb(185, 184, 184);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 10px;
        /* 最少显示一行 */
        grid-template-rows: repeat(1, 1fr);
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
}

@media screen and (max-width: 1299px) and (min-width: 701px) {
    .special {
        width: 100%;
        border-top: 6px solid rgb(185, 184, 184);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        /* 最少显示一行 */
        grid-template-rows: repeat(1, 1fr);
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
}


/* H5 */

@media screen and (max-width: 700px) {
    .special {
        width: 100%;
        border-top: 6px solid rgb(185, 184, 184);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        /* 最少显示一行 */
        grid-template-rows: repeat(1, 1fr);
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
}

.specialTitle {
    text-align: center;
    margin-top: 40px;
    font-size: 20px;
    font-family: &#39;宋体&#39;;
}

.special&gt;div :first-of-type {
    margin-top: -1px;
}

.special&gt;div {
    background-color: white;
    cursor: pointer;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.special&gt;div&gt;img {
    display: block;
    width: 100%;
}

.special&gt;div:hover {
    box-shadow: 0px 0px 4px rgb(94, 94, 94)
}


/* 问答 */

.QA {
    width: 100%;
    background-color: rgb(0, 153, 255);
    margin: 40px 0px;
}

.QAContent {
    width: 300px;
    margin: 0 auto;
    padding: 20px 0px;
    text-align: center;
    color: white;
    font-family: &#39;宋体&#39;;
}

.QAContent&gt;p&gt;span {
    font-size: 18px;
}

.QAContent p {
    display: block;
    clear: both;
}

.QAContent&gt;div:nth-of-type(1) {
    width: 100%;
    height: 0.1px;
    border: 0.1px solid white;
    margin: 10px 0px;
}

.QAContent&gt;p:nth-of-type(2) {
    margin: 10px auto 20px;
    font-size: 14px;
}

.QAContent .freeQues {
    width: 100px;
    height: 30px;
    border: 1px solid white;
    line-height: 30px;
    text-align: center;
    font-weight: 700;
    margin: 0 auto;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    cursor: pointer;
}

.QAContent .freeQues:hover {
    background-color: white;
    color: rgb(0, 153, 255);
}


/* PC-右部的侧导航栏+返回顶部按钮；H5-只显示返回顶部按钮 */

.right {
    position: fixed;
    bottom: 10px;
    right: 0px;
}

.right&gt;div {
    width: 40px;
    height: 40px;
    color: white;
    background-color: rgb(0, 132, 255);
    cursor: pointer;
    text-align: center;
    padding: 2px;
    border-radius: 3px 0px 0px 3px;
}


/*
H5
返回顶部
 */

@media screen and (max-width: 700px) {
    .right&gt;div:nth-last-child(n+2) {
        display: none;
    }
}

.right&gt;div&gt;p:last-child {
    margin-top: -4px;
}

.right&gt;div:nth-of-type(n+2) {
    margin-top: 6px;
}


/* 二维码 */

#QRCode:nth-of-type(3) {
    width: 40px;
    height: 40px;
    background: rgb(0, 132, 255) url(&#39;../images/二维码_two-dimensional-code-one.png&#39;) no-repeat 4px;
    -o-background-size: 36px;
    background-size: 36px;
}

#QRCode:hover::after {
    content: &#39;&#39;;
    background: url(&#39;../images/6_688_c7f8d9cc5efcd0f8057e24ee39204aae_bf58a5e9b1280c98269d12bbca2f2bcc.png&#39;) no-repeat;
    -o-background-size: 100%;
    background-size: 100%;
    width: 94px;
    height: 94px;
    position: relative;
    top: -52px;
    left: -103px;
    display: block;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -moz-animation: QRCode 5s;
    -o-animation: QRCode 5s;
    animation: QRCode 5s;
    -webkit-animation: QRCode 5s;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
}

@-webkit-keyframes QRCode {
    0% {
        top: -52px;
        left: 0px;
    }
    14% {
        top: -52px;
        left: -103px;
    }
}

@-moz-keyframes QRCode {
    0% {
        top: -52px;
        left: 0px;
    }
    14% {
        top: -52px;
        left: -103px;
    }
}

@-o-keyframes QRCode {
    0% {
        top: -52px;
        left: 0px;
    }
    14% {
        top: -52px;
        left: -103px;
    }
}

@keyframes QRCode {
    0% {
        top: -52px;
        left: 0px;
    }
    14% {
        top: -52px;
        left: -103px;
    }
}


/* 收藏 */

#collect {
    width: 40px;
    height: 40px;
    background: rgb(0, 132, 255) url(&#39;../images/星星_star.png&#39;) no-repeat 4px;
    -o-background-size: 36px;
    background-size: 36px;
}

#collect:hover::after {
    content: &#39;点击收藏&#39;;
    width: inherit;
    height: inherit;
    padding: 2px;
    display: block;
    background-color: rgb(0, 132, 255);
    position: relative;
    left: -47px;
    top: -2px;
    -moz-animation: collect 5s;
    -o-animation: collect 5s;
    animation: collect 5s;
    -webkit-animation: collect 5s;
    border-radius: 3px 0px 0px 3px;
}

@-webkit-keyframes collect {
    0% {
        left: 0px;
        top: -2px;
    }
    14% {
        left: -47px;
        top: -2px;
    }
}

@-moz-keyframes collect {
    0% {
        left: 0px;
        top: -2px;
    }
    14% {
        left: -47px;
        top: -2px;
    }
}

@-o-keyframes collect {
    0% {
        left: 0px;
        top: -2px;
    }
    14% {
        left: -47px;
        top: -2px;
    }
}

@keyframes collect {
    0% {
        left: 0px;
        top: -2px;
    }
    14% {
        left: -47px;
        top: -2px;
    }
}


/* 返回顶部 */

@media screen and (min-width: 701px) {
    #backTop {
        width: 40px;
        height: 40px;
        background: rgb(0, 132, 255) url(&#39;../images/去顶部1_to-top-one.png&#39;) no-repeat 2px;
        -o-background-size: 40px;
        background-size: 40px;
    }
    #backTop:hover::after {
        content: &#39;返回顶部&#39;;
        width: inherit;
        height: inherit;
        padding: 2px;
        display: block;
        background-color: rgb(0, 132, 255);
        position: relative;
        left: -47px;
        top: -2px;
        -moz-animation: backTop 5s;
        -o-animation: backTop 5s;
        animation: backTop 5s;
        -webkit-animation: backTop 5s;
        border-radius: 3px 0px 0px 3px;
    }
    @-webkit-keyframes backTop {
        0% {
            left: 0px;
            top: -2px;
        }
        14% {
            left: -47px;
            top: -2px;
        }
    }
    @-moz-keyframes backTop {
        0% {
            left: 0px;
            top: -2px;
        }
        14% {
            left: -47px;
            top: -2px;
        }
    }
    @-o-keyframes backTop {
        0% {
            left: 0px;
            top: -2px;
        }
        14% {
            left: -47px;
            top: -2px;
        }
    }
    @keyframes backTop {
        0% {
            left: 0px;
            top: -2px;
        }
        14% {
            left: -47px;
            top: -2px;
        }
    }
}

@media screen and (max-width: 700px) {
    #backTop {
        width: 30px;
        height: 30px;
        position: absolute;
        right: 10px;
        bottom: 60px;
        background: rgb(0, 132, 255) url(&#39;../images/去顶部1_to-top-one.png&#39;) no-repeat 2px;
        -o-background-size: 30px;
        background-size: 30px;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
    }
}


/* 底部导航\联系 */

.footerTop {
    width: 100%;
    /* height: 290px; */
    height: auto;
    background-image: -webkit-linear-gradient(top, rgb(16, 1, 85), rgb(235, 235, 235));
    background-image: -moz-linear-gradient(top, rgb(16, 1, 85), rgb(235, 235, 235));
    background-image: -o-linear-gradient(top, rgb(16, 1, 85), rgb(235, 235, 235));
    background-image: linear-gradient(to bottom, rgb(16, 1, 85), rgb(235, 235, 235));
}


/* PC */

@media screen and (min-width: 701px) {
    .footerTopCenter {
        width: 80%;
        margin: 0 auto;
        padding: 30px 0px;
        color: white;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 40px;
    }
}


/* H5 */

@media screen and (max-width: 700px) {
    .footerTopCenter {
        margin: 0 auto;
        padding: 30px 20px;
        color: white;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
}

.footerTopCenter&gt;div&gt;p {
    padding: 10px 0px;
    border-bottom: 1px solid white;
}


/* 小三角形 */

.footerTopCenter&gt;div&gt;p&gt;span:nth-of-type(1) {
    width: 0px;
    height: 0;
    border-width: 4px;
    padding-right: 4px;
    overflow: hidden;
    border-color: transparent transparent transparent white;
    border-style: solid;
    display: inline-block;
}

.footerTopCenter .link:nth-child(3)&gt;h4:nth-of-type(n+2) {
    margin-top: 10px;
}

.footerTopCenter .link:nth-child(3)&gt;p:nth-child(2n+4) {
    padding-top: 21px;
}

.footerTopCenter&gt;.link:nth-last-child(n+2)&gt;p {
    cursor: pointer;
}

.link&gt;p:hover {
    color: red;
}

.call&gt;div:nth-of-type(1) {
    width: 90px;
    height: 90px;
    background: url(&#39;../images/6_688_c7f8d9cc5efcd0f8057e24ee39204aae_bf58a5e9b1280c98269d12bbca2f2bcc.png&#39;) no-repeat;
    -o-background-size: 100%;
    background-size: 100%;
    margin-top: 20px;
    color: red;
}

.call&gt;div:nth-of-type(n+2)&gt;img {
    width: 17px;
    height: 17px;
    -o-background-size: 100%;
    background-size: 100%;
    margin-top: 10px;
    padding-right: 6px;
    position: relative;
    top: 2px;
}


/* 最底部 */

.copy {
    width: 100%;
    background-color: gray;
}


/* PC */

@media screen and (min-width: 701px) {
    .copyText {
        text-align: center;
        padding: 10px 0px;
        padding-top: 20px;
        color: white;
    }
    .copyText&gt;p:last-child {
        margin-top: 20px;
        cursor: pointer;
    }
}


/* H5 */

@media screen and (max-width: 700px) {
    .copyText {
        text-align: center;
        padding: 10px 0px;
        margin: 0px 20px;
        color: white;
    }
    .copyText&gt;p:last-child {
        margin-top: 10px;
        cursor: pointer;
    }
}

.copyText&gt;p:last-child&gt;img {
    position: relative;
    top: 2px;
    width: 16px;
    padding-left: 3px;
}
</code></pre>
						<h3>css.css源代码</h3>
						<pre><code class="language-css" lang="css">/*
兼容性自动生成
 */

* {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
}

input {
    outline: none;
    border: none;
}

a {
    color: black;
    position: relative;
}
</code></pre>
						<h3>header.css源代码</h3>
						<pre><code class="language-css" lang="css">/*
兼容性自动生成
 */


/* 头部 */


/* PC */

@media screen and (min-width: 701px) {
    .header {
        width: 100%;
        height: auto;
        margin-top: 20px;
    }
    .header&gt;div:first-of-type {
        height: 60px;
    }
    /* 头部导航模块 */
    .h-nav-main {
        width: 100%;
        height: 60px;
        background-image: -webkit-linear-gradient(top, rgb(180, 179, 179), gray, rgb(180, 179, 179));
        background-image: -moz-linear-gradient(top, rgb(180, 179, 179), gray, rgb(180, 179, 179));
        background-image: -o-linear-gradient(top, rgb(180, 179, 179), gray, rgb(180, 179, 179));
        background-image: linear-gradient(to bottom, rgb(180, 179, 179), gray, rgb(180, 179, 179));
        position: relative;
        top: -20px;
        z-index: 10;
    }
    .h-nav-main&gt;div&gt;svg {
        display: none;
    }
    .h-nav {
        height: 60px;
        margin-left: 10%;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -moz-box-orient: horizontal;
        -moz-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
    }
    .h-nav&gt;div&gt;a {
        color: white;
        text-align: center;
        padding: 20px 6px 20px 0px;
        position: relative;
        top: 6px;
    }
    .h-nav&gt;div:first-of-type {
        width: 60px;
        height: 30px;
        line-height: 30px;
        position: relative;
        top: 9px;
    }
    .h-nav&gt;div:nth-of-type(n+2) {
        width: 100px;
        height: 30px;
        line-height: 30px;
    }
    .h-nav&gt;div:nth-of-type(n+2) {
        margin-left: 10px;
    }
    .h-nav&gt;div&gt;a&gt;img {
        width: 30px;
        height: 30px;
        background: url(&#39;../images/下_down.png&#39;);
        position: relative;
        top: 10px
    }
    /* 子菜单 */
    .topDown {
        background-image: -webkit-linear-gradient(top, rgb(180, 179, 179), gray, rgb(180, 179, 179));
        background-image: -moz-linear-gradient(top, rgb(180, 179, 179), gray, rgb(180, 179, 179));
        background-image: -o-linear-gradient(top, rgb(180, 179, 179), gray, rgb(180, 179, 179));
        background-image: linear-gradient(to bottom, rgb(180, 179, 179), gray, rgb(180, 179, 179));
        display: none;
    }
    .topDown&gt;li {
        text-decoration: none !important;
        list-style: none !important;
        list-style-type: none !important;
        text-align: center;
    }
    .topDown&gt;li:first-of-type {
        margin-top: 21px;
    }
    .topDown&gt;li&gt;a {
        color: white;
    }
    .topDown&gt;li:hover {
        list-style-type: none !important;
        background-color: gray;
    }
    /* 登录模块 */
    .login {
        height: 40px;
        line-height: 40px;
        color: red;
        float: right;
        margin: 20px;
        z-index: 10;
        position: absolute;
        top: -68px;
        right: -8px;
    }
    .login&gt;div {
        padding: 0px 14px;
        background-color: white;
        border-radius: 3px;
        float: left;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -ms-border-radius: 3px;
        -o-border-radius: 3px;
        cursor: pointer;
        z-index: 10;
    }
    .login&gt;div:nth-of-type(1) {
        margin-right: 10px;
    }
    .login&gt;div&gt;span:hover {
        color: rgb(0, 153, 255);
    }
}


/* H5 */

@media screen and (max-width: 700px) {
    .header {
        width: 100%;
        height: auto;
    }
    .header&gt;div:first-of-type {
        display: none;
    }
    /* 头部导航模块 */
    .h-nav-main {
        width: 100%;
        height: 30px;
        background-color: black;
        z-index: 10;
    }
    /* 菜单Icon */
    .h-nav-main&gt;div:first-of-type {
        width: 30px;
        height: 30px;
        margin-left: 3px;
        float: left;
    }
    .h-nav-main&gt;div&gt;svg {
        width: 30px;
        height: 30px;
    }
    .h-nav {
        width: 100%;
        height: 30px;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -moz-box-orient: vertical;
        -moz-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        background: black url(&#39;../images/汉堡图标_hamburger-button.png&#39;) no-repeat 4px;
        background-size: 30px;
        z-index: 3;
    }
    .h-nav&gt;div:first-of-type {
        padding: 5px 10px;
    }
    .h-nav&gt;div {
        padding: 2px 10px;
        z-index: 10;
        width: 100%;
        box-sizing: border-box;
        background-color: gray;
    }
    .h-nav&gt;div:nth-of-type(n+2) {
        padding-bottom: 5px;
        border-top: 1px solid black;
    }
    .h-nav&gt;div&gt;a {
        width: 100%;
        color: white;
        text-align: center;
        font-size: 16px;
        z-index: 10;
    }
    .h-nav&gt;div&gt;a&gt;img {
        width: 20.8px;
        height: 20.8px;
        position: relative;
        top: 6px;
    }
    /* 子菜单 */
    .topDown {
        display: none;
    }
    .topDown&gt;li {
        text-decoration: none !important;
        list-style: none !important;
        list-style-type: none !important;
    }
    .topDown&gt;li:nth-of-type(n+2) {
        border-top: 1px solid rgb(192, 192, 192);
    }
    .topDown&gt;li&gt;a {
        color: white;
        padding-left: 20px;
    }
    .topDown&gt;li:hover {
        list-style-type: none !important;
        background-color: gray;
    }
    /* 登录模块 */
    .login {
        color: red;
        float: right;
        position: absolute;
        top: 37px;
        right: 10px;
    }
    .login&gt;div {
        padding: 0px 4px;
        background-color: white;
        border-radius: 3px;
        float: left;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -ms-border-radius: 3px;
        -o-border-radius: 3px;
        cursor: pointer;
        z-index: 10;
    }
    .login&gt;div:nth-of-type(1) {
        margin-right: 6px;
    }
}
</code></pre>
						<h3>js.js源代码</h3>
						<pre><code class="language-javascript" lang="javascript">// 头部导航栏
// 暂时重复的写法
// DOM载入方式：非简写形式（见下一函数）
$(document).ready(function() {
    $(&#39;.h-nav-Menu1&#39;).hover(
        function() {
            $(&#39;.topDown1&#39;).show();
        },
        function() {
            $(&#39;.topDown1&#39;).hide();
        }
    );
    $(&#39;.h-nav-Menu2&#39;).hover(
        function() {
            $(&#39;.topDown2&#39;).show();
        },
        function() {
            $(&#39;.topDown2&#39;).hide();
        }
    );
    $(&#39;.h-nav-Menu3&#39;).hover(
        function() {
            $(&#39;.topDown3&#39;).show();
        },
        function() {
            $(&#39;.topDown3&#39;).hide();
        }
    );
    $(&#39;.h-nav-Menu4&#39;).hover(
        function() {
            $(&#39;.topDown4&#39;).show();
        },
        function() {
            $(&#39;.topDown4&#39;).hide();
        }
    );
    $(&#39;.h-nav-Menu5&#39;).hover(
        function() {
            $(&#39;.topDown5&#39;).show();
        },
        function() {
            $(&#39;.topDown5&#39;).hide();
        }
    );

    // 获取当前窗口的宽度,用于H5页面下(700px↓),  .h-nav  的初始为隐藏状态
    var width = $(window).width();
    if (width &lt;= 700) {
        $(&quot;.h-nav&quot;).hide();
    }

    // toggle的方式显隐元素》》》》》》jQuery 3.x 版本中已经被移除了
    $(&quot;.h-nav-main&gt;div:first-of-type&quot;).click(function() {
        $(&quot;.h-nav&quot;).toggle();
    });

});


// 顶部走马灯
// 注册使用vue
// DOM载入方式：简写形式（见上一函数）
$(function($) {
    var Vue = window.Vue;
    new Vue({
        el: &#39;#slideShow&#39;,
        data() {
            return {
                imgList: [{
                    id: 0,
                    idView: &#39;images/background.png&#39;
                }, {
                    id: 1,
                    idView: &#39;images/topBackgound2.png&#39;
                }, {
                    id: 2,
                    idView: &#39;images/topBackgound3.png&#39;
                }, {
                    id: 3,
                    idView: &#39;images/topBackgound4.png&#39;
                }],
                // 动态设置走马灯容器的高度
                bannerHeight: &quot;&quot;,
            }
        },
        mounted() {
            this.imgLoad();
            window.addEventListener(&#39;resize&#39;, () =&gt; {
                this.bannerHeight = this.$refs.bannerHeight[0].height;
                this.imgLoad();
            }, false)
        },
        methods: {
            imgLoad() {
                this.$nextTick(() =&gt; {
                    this.bannerHeight = this.$refs.bannerHeight[0].height;
                    console.log(this.$refs.bannerHeight[0].height);
                })
            }
        }
    })
});


// 图片放缩-----------zooming图片放缩库
$(function($) {
    var width = $(window).width();

    if (width &gt; 700) { // PC(701px↑)，图片放大0.5倍
        var zooming = new Zooming({
            scaleBase: 0.5
        });
    } else { // H5(700px↓)，图片放大到屏幕的最大宽度
        var zooming = new Zooming();
    }
    // 定义class名字，加在img标签上即可调用
    zooming.listen(&#39;.zooming&#39;);
});




// 返回顶部
// 当网页向下滑动 400px 出现&quot;返回顶部&quot; 按钮
$(window).scroll(function() {
    if ($(window).scrollTop() &gt; 400) {
        $(&#39;#backTop&#39;).show();
    } else {
        $(&#39;#backTop&#39;).hide();
    }
});

function top_function() {
    window.scrollTo(0, 0);
};
</code></pre>

						<!-- ↑  博客输入  ↑ -->
					</div>

					<div class="skip-bottom">
						<div class="previouPage"><a href="401002"> <img class="img-l"
																			src="https://gitee.com/ZRX001/gallery/raw/master/gallery/arrow-left.png"
																			alt="左箭头"> <span
							class="span-txt">可编辑的通讯录</span></a></div>
						<div class="nextPage"><a href="401004"><span class="span-txt">Vue实现记事本</span> <img
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
	name: "401003",
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
