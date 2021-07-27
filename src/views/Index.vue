<template>
	<div id="Index">
		<div class="main">

<!--			滚动通知-->
			<div id="indexTop">
				<div class="indexTopText">
					<span>
						欢迎访问Simple的个人博客&nbsp，<span id="indexTopTextTime" v-on:click="time"></span>
					</span>
				</div>
			</div>

			<!--			轮播图-->
			<div class="block">
				<el-carousel :interval="5000" arrow="hover" :height="bannerHeight+'px'" direction="vertical">
					<el-carousel-item v-for="item in imgList" :key="item.index" style="border-radius: 0 0 10px 10px">
						<img ref="bannerHeight" :src="item.idView" alt="" @load="imgLoad" style="width: 100%">
					</el-carousel-item>
				</el-carousel>
			</div>


<!--			移动版--留言板  -->
			<div class="top">
				<div class="indexLeaveMessage">

					<el-form>

						<el-form-item label="用户名">
							<el-input v-model="leavemessage.lename" title="请输入用户名" required="required"></el-input>
						</el-form-item>
						<el-form-item label="">
							<el-input
								type="textarea"
								:autosize="{ minRows: 2}"
								placeholder="请输入内容"
								maxlength="360"
								v-model="leavemessage.lemessage">
							</el-input>
						</el-form-item>

						<div class="indexLeaveMessageButton">
							<el-button native-type="reset" size="mini" style="margin-top: 10px"
									   round>重置
							</el-button>
							<el-button native-type="submit" type="primary" size="mini" style="margin-top: 10px"
									   round @click="aa">提交
							</el-button>
						</div>

					</el-form>

				</div>
			</div>


			<el-container class="container">

				<el-container class="left">

					<el-main class="containerMain">
						<div v-on:information></div>

						<ul class="infinite-list" v-infinite-scroll="load"
							style="overflow:auto;"
							v-bind:style="{height:containerMainHeight + 'px'}">

							<!--							无限加载 需要可以循环增加的次数，不能固定-->
							<!--							<li v-for="(item,index) in hh" class="infinite-list-item">{{ index + 1 }}楼-->
							<!--								<div><p>测试</p></div>-->

							<!--							</li>-->


							<li v-for="(item,index) in leaveMessageDate" class="infinite-list-item">
								{{ leaveMessageDate.length - index }}楼
								<div class="indexLename">留言来自：{{ item.lename }}</div>
								<div class="indexLemessage">{{ item.lemessage }}</div>
								<div class="indexLetime">{{ item.letime }}</div>
							</li>

							<!--							<div v-bind:style="{height:leaveMessageLength}"></div>-->

							<!--														<li v-for="(item,index) in leaveMessageLength" class="infinite-list-item">{{ index + 1 }}楼-->
							<!--															<div v-for="leaveMessage in item.leaveMessageDate">-->
							<!--																<div><p>{{ leaveMessage }}</p></div>-->
							<!--																<div><p>留言区域</p></div>-->
							<!--															</div>-->
							<!--														</li>-->


							<!--							<li v-for="i in count" class="infinite-list-item">{{ i }}楼-->
							<!--								<div><p>name</p></div>-->
							<!--								<div><p>留言区域</p></div>-->
							<!--							</li>-->

						</ul>

					</el-main>

				</el-container>

				<el-aside width="303px" class="right">

<!--					主页——登录模块-->
					<div class="indexLogin">
						<el-form v-model="loginForm">
							<p>登录</p>
							<div>
								<label for="indexLoginUsername">账&emsp;户：</label>
								<input type="text" id="indexLoginUsername" v-model="username">
							</div>

							<div>
								<label for="indexLoginPassword">密&emsp;码：</label>
								<input type="text" id="indexLoginPassword" v-model="password">
							</div>

							<div class="indexLoginButton">
								<el-button native-type="submit" size="mini"
										   round disabled>注册
								</el-button>
								<el-button native-type="submit" type="primary" size="mini"
										   round @click="loginButton">登录
								</el-button>
							</div>
						</el-form>
					</div>

					<div class="indexLeaveMessage">

						<el-form>

							<el-form-item label="用户名">
								<el-input v-model="leavemessage.lename" title="请输入用户名" required="required"></el-input>
							</el-form-item>
							<el-form-item label="">
								<el-input
									type="textarea"
									:autosize="{ minRows: 2}"
									placeholder="请输入留言内容"
									maxlength="360"
									v-model="leavemessage.lemessage">
								</el-input>
							</el-form-item>

							<div class="indexLeaveMessageButton">
								<el-button native-type="reset" size="mini" style="margin-top: 10px"
										   round>重置
								</el-button>
								<el-button native-type="submit" type="primary" size="mini" style="margin-top: 10px"
										   round @click="aa">提交
								</el-button>
							</div>

						</el-form>

					</div>

				</el-aside>

			</el-container>


		</div>


	</div>

</template>

<style scoped src="../assets/css/index.css"></style>

<script>
export default {
	data() {
		return {
			imgList: [{
				index: 0,
				idView: require('@/assets/images/yintan1.jpg')
			}, {
				index: 1,
				idView: require('@/assets/images/yintan2.jpg')
			}, {
				index: 2,
				idView: require('@/assets/images/yintan3.jpg')
			}, {
				index: 3,
				idView: require('@/assets/images/yintan4.jpg')
			}],
			// 动态设置轮播图容器的高度
			bannerHeight: "",
			// 左侧--无限加载
			count: 0,
			leaveMessageDate: [
				// {lename: '小明', lemessage: '测试——小明'},
				// {lename: '小红', lemessage: '测试——小红'},
				// {lename: '小红', lemessage: '测试——小红'}
			],
			leavemessage: {
				lename: '',
				lemessage: '',
				letime: ''
			},
			leaveMessage: '',
			leaveMessageLength: '',
			// 右侧--登录
			// loginForm: {
			// 	username: '',
			// 	password: ''
			// },
			username: '',
			password: '',
			// 右侧--留言文本框
			textarea: '',
			containerMainHeight: '',
			hh: 0,
			// loginText: ''


		}
	},
	computed: {
		noMore() {
			return this.count >= 100
		},
		disabled() {
			return this.loading || this.noMore
		}
	},
	created() {
		this.leMessageDateText();
		this.time();
	},
	mounted() {
		this.imgLoad();
		window.addEventListener('resize', () => {
			this.bannerHeight = this.$refs.bannerHeight[0].height;
			this.imgLoad();
		}, false);

	},
	methods: {
		time() {
			let timer = null;
			let currentUrl = window.location.pathname;

			if (currentUrl === '/') {
				// 刷新时间
				timer = setInterval(function () {
					currentUrl =  window.location.pathname;
					if (currentUrl !== '/') {
						clearInterval(timer);
					}
					document.getElementById('indexTopTextTime').innerHTML=new Date().toLocaleString();
				},1000)
			} else {
				clearInterval(timer)
			}

		},
		imgLoad() {
			this.$nextTick(() => {
				this.bannerHeight = this.$refs.bannerHeight[0].height;
				// console.log(this.$refs.bannerHeight[0].height);

				// 主页--左侧--留言区域高度
				let clientHeight = document.body.clientHeight;
				this.containerMainHeight = clientHeight - (10 + 49);
			})
		},
		leMessageDateText() {
			let _this = this;
			// 从数据库获取留言内容

			// 云服务器环境
			axios.request('http://1.15.142.19/leavemessage/findAll').then(function (resp) {
				// console.log(resp.data);

				// alert(resp.data.length)
				_this.hh = resp.data.length;

				for (let i = 0; i < resp.data.length; i++) {
					// 留言板数据库的数据
					_this.leaveMessageDate.push({
						lename: resp.data[i].lename,
						lemessage: resp.data[i].lemessage,
						letime: resp.data[i].letime
					});
				}
				_this.leaveMessageDate.reverse();


			})


			// // 本地环境
			// axios.request('http://localhost:8181/leavemessage/findAll').then(function (resp) {
			// 	// console.log(resp.data);
			//
			// 	// alert(resp.data.length)
			// 	_this.hh = resp.data.length;
			//
			// 	for (let i = 0; i < resp.data.length; i++) {
			// 		// 留言板数据库的数据
			// 		_this.leaveMessageDate.push({
			// 			lename: resp.data[i].lename,
			// 			lemessage: resp.data[i].lemessage,
			// 			letime: resp.data[i].letime
			// 		});
			// 	}
			// 	_this.leaveMessageDate.reverse();
			//
			//
			// })

		},
		load() {
			// alert(this.leaveMessageLength)
			// alert(this.leaveMessageDate.length)
			// alert(this.hh)
			// let aa = 100;
			// if (this.hh === aa) {
			// 	this.hh = aa;
			// } else {
			// 	this.hh += 1;
			// }

			// if (this.leaveMessageDate.length === this.hh) {
			// 	this.leaveMessageDate.length = this.hh;
			// } else {
			// 	this.leaveMessageDate.length += 1;
			// }

			// let aa = 1000;
			// if (this.count === aa) {
			// 	this.count = aa;
			// } else {
			// 	this.count += 1;
			// }
		},

		// 主页——登录--按钮
		loginButton() {
			let _this = this;
			axios.post('http://localhost:8181/login',_this.username).then(function (resp) {
				if (resp === 'succeed') {
					alert("登录成功！")
				} else {
					alert("登陆失败！")
				}
			}).catch(function () {
				alert("登陆异常！")
			})
			// alert(this.username+'\n'+this.password)
		},

		// 主页——添加留言--按钮
		aa() {


			// alert(this.leavemessage.lename)
			// alert(111111)
			// console.log('执行成功')
			let _this = this;
			// _this.information();


			// let {lename,lemessage} = _this.leavemessage;
			// // 提交成功，重置
			// if (!lename || !lemessage) return;


			// 云服务器环境
			axios.post('http://1.15.142.19/leavemessage/addLeaveMessage', _this.leavemessage).then(function () {
				// window.history.back(-1);
				window.location.href = 'http://1.117.171.185/'
			})
			window.location.href = 'http://1.117.171.185/'

			// // 本地环境
			// axios.post('http://localhost:8181/leavemessage/addLeaveMessage', _this.leavemessage).then(function () {
			// 	// window.history.back(-1);
			// })
		},
		information() {
			this.$message({
				message: '恭喜你，这是一条成功消息',
				type: 'success'
			});
		}


	}
}
</script>

