<template>
	<div>
		<Header></Header>
		<section class="wb100 dis-ib conTop">
			<div class="loginTop">
				<p class="label">你好，欢迎加入</p>
				<img src='/static/images/icon-16.png' class="loginImg">
				<span @click="$router.push('/login')" class="loginHref"><img src='/static/images/icon-17.png'><em>登录</em></span>
			</div>
			<div class="loginList" :model="formData">
				<ul>
					<li>
						<input type="text" v-model="formData.mobile" placeholder="请输入手机号">
					</li>
					<li class="verifica">
						<input type="text" v-model="formData.code" placeholder="请输入验证码">
						<span class="code">获取验证码</span>
					</li>
					<li>
						<input type="text" v-model="formData.password" placeholder="请输入密码">
					</li>
				</ul>
			</div>
			<div class="loginLabel">
				<span class="left" @click="checked = false" v-if="checked"><i  class="iconfont">&#xe9e9;</i><em>我已阅读并同意<span>《信用查服务协议》</span></em></span>
				<span class="left" @click="checked = true" v-else><i style="color: #f00;" class="iconfont">&#xe9ed;</i><em>我已阅读并同意<span>《信用查服务协议》</span></em></span>
			</div>

			<div class="wb100 dis-ib tc mtb5">
				<span @click="reg" class="BtnSmall">注册</span>
			</div>
		</section>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	import {
		Toast
	} from 'mint-ui'
	import {
		RadioGroup,
		Radio
	} from 'vant';
	export default {
		components: {
			Header
		},
		data() {
			return {
				formData: {
					mobile: "",
					code: "",
					password: ""
				},
				checked: false
			}
		},
		methods: {
			reg() {

			}
		}
	}
</script>

<style scoped>
	/deep/ .header-title {
		background: #e70000 !important;
		color: #fff;
	}

	/deep/ .van-checkbox__icon--checked .van-icon {
		background-color: #e70000;
		border-color: #e70000;
	}

	input[type="text"] {
		padding: .5rem;
	}
</style>
