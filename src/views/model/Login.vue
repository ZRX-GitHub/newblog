<template>
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
</template>


<script>

export default {
	name: "Login",
	data() {
		return {
			loginBodyHeight: ''
		}
	},
	created() {
		this.loginBodyFun();
	},
	methods: {
		loginBodyFun() {
			// let loginBodyHeight
			// 127：nav 47和footer 80的高度和
			this.loginBodyHeight = (document.documentElement.clientHeight -127) + 'px';

			// alert(loginBodyHeight);
		}
	}

}
</script>

<style scoped src="../../assets/css/login.css"></style>
