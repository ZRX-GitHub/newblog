<template>
	<div id="appContainer">
		<div id="main">
			<!--		菜单-->
			<el-menu router :default-active="navActive"
					 style="height: 46px;
 					 box-shadow: 0px 4px 10px 0px rgba(0, 64, 128, .2);"
					 class="el-menu-demo"
					 mode="horizontal"
					 active-text-color="#FFBA14"
					 @select="handleSelect">

				<!--				logo-->
				<a href="/" style="margin-left: 20px;display: block">
					<el-image :src="logo" style="width: 120px;float: left;padding: 0;margin: 0;border: 0"
							  draggable="false"></el-image>
				</a>

				<el-menu-item style="height: 46px;line-height: 46px;font-weight: bold"
							  v-for="(item,index) in $router.options.routes"
							  v-show="item.show"
							  :index="item.path"
							  v-bind:style="{float:(item.name ==='登录'? 'right':'')}">{{ item.name }}
				</el-menu-item>

				<!--				点击 弹出 登录面板-->
				<el-button type="text" @click="centerDialogVisible = true">{{ username }}</el-button>

			</el-menu>

			<!--		路由页面-->
			<router-view></router-view>

			<my-back-top></my-back-top>

<!--			登录面板-->
			<el-dialog
				:visible.sync="centerDialogVisible"
				width="0%"
				center>

<!--				<el-input v-model="usernameInput" placeholder="请输入内容"></el-input>-->
<!--				<el-input placeholder="请输入密码" v-model="passwordInput" show-password></el-input>-->

				<div id="Login">
					<div id="loginBody" v-bind:style="{height:loginBodyHeight}">
						<div id="loginForm">

							<form action="./loginCheck" method="post">
								<p class="loginTitle">欢迎登录</p>
								<span><input type="text" name="username" placeholder="手机号/用户名/邮箱" class="login user"></span>
								<span><input type="password" name="password" placeholder="请输入密码" class="login password"></span>
								<!-- 预留验证码的位置，等待开发注册功能后使用 -->
								<button type="submit">登录</button>
							</form>

						</div>
					</div>
				</div>

			</el-dialog>

		</div>

	</div>
</template>


<style>

.el-dialog {
	display: flex;
	flex-direction: column;
	margin:0 !important;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);
	max-height:calc(100% - 200px);
	max-width:calc(100% - 30px);
}


</style>
<style src="../src/assets/css/travel.css"></style>
<style src="../src/assets/css/style.css"></style>


<script>

export default {
	data() {
		return {
			logo: require('@/assets/images/logo.svg'),
			// 保持当前nav的选中状态
			// navActive: this.$route.path
			navActive: '',
			username: '',
			usernameInput: '',
			passwordInput: '',
			centerDialogVisible: false
		}
	},
	created() {
		// 二级页面导航栏激活状态
		this.navActiveFun();
		// 当前是否已经登录
		this.loginActive();
	},
	methods: {
		navActiveFun() {
			let url = window.location.pathname;

			// 激活规则
			// travel
			let urlRegTravel = '/travel';
			// date
			let urlRegDate = '/date';
			// item
			let urlRegItem = '/item';

			if (url.match(urlRegTravel)) {
				this.navActive = '/travel';
			} else if (url.match(urlRegDate)) {
				this.navActive = '/date';
			} else if (url.match(urlRegItem)) {
				this.navActive = '/item';
			} else {
				this.navActive = this.$route.path;
			}

		},
		loginActive() {

			if (!this.username) {
				this.username = '登录';
			} else {
				this.username = '欢迎你'
			}
		},
		login() {

		},
		handleSelect(key, keyPath) {
			// console.log(key, keyPath);
			// alert(key)
		},
	}
}
</script>
