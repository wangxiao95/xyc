<template>
	<div>
		<Header class="header"></Header>
		<section class="wb100 dis-ib conTop">
		    <div class="loginTop">
		        <p class="label">你好，欢迎加入</p>
		        <img src='/static/images/icon-16.png' class="loginImg">
		        <span @click="$router.push('/reg')" class="loginHref"><img src='/static/images/icon-17.png'><em>注册</em></span>
		    </div>
		    <div class="loginList">
		        <ul :model="formData">
		            <li>
		                <input type="text" v-model="formData.accountNo" placeholder="请输入手机号">
		            </li>
		            <li>
		                <input type="text" v-model="formData.password" placeholder="请输入密码">
		            </li>
		        </ul>
		    </div>
		    <div class="loginLabel">
				<span class="left" @click="checked = false" v-if="checked"><i style="color: #f00;" class="iconfont">&#xe9ed;</i><em>两周内自动登录</em></span>
				<span class="left" @click="checked = true" v-else><i class="iconfont">&#xe9e9;</i><em>两周内自动登录</em></span>
		        <span @click="$router.push('/password')" class="right">忘记密码？</span>
		    </div>
		    <div class="wb100 dis-ib tc mtb5">
		        <span @click="login" class="BtnSmall">登录</span>
		    </div>
		    <div class="loginFoot">
		        <a href="javascript:;"><img src="/static/images/icon-18.png"><i>微博登录</i></a>
		        <a href="javascript:;"><img src="/static/images/icon-19.png"><i>微信登录</i></a>
		        <a href="javascript:;"><img src="/static/images/icon-20.png"><i>QQ登录</i></a>
		    </div>
		</section>
	</div>
</template>

<script>
	import Header from "@/components/Header.vue";
	 export default {
		 components:{
			 Header,
		 },
		 data(){
			 return{
				 checked:false,
				 formData:{
					 accountNo :"",
					 password:""
				 }
			 }
		 },
		 methods:{
			 login(){
				this.$axios.get(`user/loginin`).then(res=>{
					console.log(res)
				})
			 }
		 }
	 }
</script>

<style scoped>
	/deep/ .header-title{
		background: #e70000!important;
		color: #fff;
	}
		/deep/ .van-checkbox__icon--checked .van-icon{
		background-color:#e70000;
		border-color: #e70000;
	}
</style>
